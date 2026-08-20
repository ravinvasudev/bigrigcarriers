import { NextResponse } from "next/server";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { groq } from "@ai-sdk/groq";
import { company } from "@/components/data/company";
import { buildChatbotContext } from "@/lib/chatbot-context";

const MAX_MESSAGES = 12;
const MAX_MESSAGE_CHARS = 2000;
const CHATBOT_CONTEXT = buildChatbotContext();

const CHAT_SYSTEM_PROMPT = `You are BigRig Assist, the AI-powered customer support assistant for ${company.name}, a trucking and freight transportation company. Answer only questions about ${company.name}'s services, equipment, industries, safety practices, careers, and contact details, using the information below. Keep answers brief and factual. Never invent pricing, quotes, ETAs, or claims not present in this information. Use plain text only and do not use markdown formatting (no **bold**, headings, bullet markers, code ticks, or markdown links). If a question is unrelated to ${company.name} or you don't have the information to answer it, politely say so and direct the customer to call ${company.phone} or use the quote form for more help.

${CHATBOT_CONTEXT}`;

// Best-effort per-IP rate limit; resets on cold start and isn't shared across instances.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function isUIMessage(value: unknown): value is UIMessage {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.role === "string" &&
    Array.isArray(candidate.parts) &&
    candidate.parts.every((part) => {
      if (!part || typeof part !== "object") return false;
      const p = part as Record<string, unknown>;
      return typeof p.type !== "string" || p.type !== "text" || typeof p.text === "string";
    })
  );
}

function messageTextLength(message: UIMessage): number {
  return message.parts.reduce((total, part) => {
    return part.type === "text" ? total + part.text.length : total;
  }, 0);
}

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("GROQ_API_KEY is not configured");
    return NextResponse.json(
      { error: "Chat assistant is not configured." },
      { status: 500 },
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const rawMessages = Array.isArray(body.messages) ? body.messages : null;
  if (!rawMessages || !rawMessages.every(isUIMessage)) {
    return NextResponse.json({ error: "Invalid message history." }, { status: 400 });
  }

  const messages = (rawMessages as UIMessage[]).slice(-MAX_MESSAGES);
  const tooLong = messages.some((message) => messageTextLength(message) > MAX_MESSAGE_CHARS);
  if (tooLong) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  try {
    const result = streamText({
      model: groq("openai/gpt-oss-120b"),
      system: CHAT_SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("Chat completion failed", err);
    return NextResponse.json(
      { error: "Unable to reach the chat assistant. Please try again later." },
      { status: 502 },
    );
  }
}
