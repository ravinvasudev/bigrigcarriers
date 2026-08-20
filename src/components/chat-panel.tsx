"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { FaArrowUp } from "react-icons/fa6";
import { company } from "@/components/data/company";

const guidedQuoteLabel = "Start guided quote";
const quoteFlowStorageKey = "bigrigassist-guided-quote";

const suggestions = [
  guidedQuoteLabel,
  "What services do you offer?",
  "What areas do you service?",
  "How do I get a quote?",
  "How can I contact you?"
];

const defaultFollowUps = [
  "Can you explain that in simple terms?",
  "What is the next step?",
  "Can I speak with your team?",
];

const followUpRules: Array<{ keywords: string[]; prompts: string[] }> = [
  {
    keywords: ["quote", "pricing", "rate", "cost"],
    prompts: [
      "What details do you need for a quote?",
      "How fast can I get a quote response?",
      "Can I request a quote online?",
    ],
  },
  {
    keywords: ["service", "flatbed", "dry van", "refrigerated", "intermodal"],
    prompts: [
      "Which service is best for my freight?",
      "Do you handle recurring shipments?",
      "Can you handle time-sensitive loads?",
    ],
  },
  {
    keywords: ["area", "region", "lane", "route", "coverage"],
    prompts: [
      "Do you serve my city or state?",
      "Can you support cross-border loads?",
      "What are your main shipping lanes?",
    ],
  },
  {
    keywords: ["contact", "phone", "call", "email"],
    prompts: [
      "What is the best way to contact your team?",
      "Are you available after business hours?",
      "Can someone call me back?",
    ],
  },
  {
    keywords: ["safety", "compliance", "insurance"],
    prompts: [
      "Can you share your safety standards?",
      "What insurance coverage do you carry?",
      "Do you provide compliance documentation?",
    ],
  },
  {
    keywords: ["career", "job", "driver", "hiring"],
    prompts: [
      "Where can I apply for driver roles?",
      "What qualifications are required?",
      "Do you offer local driving positions?",
    ],
  },
];

function normalizeMessageText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .trim();
}

interface ChatPanelProps {
  onClose: () => void;
}

type QuoteFieldKey =
  | "name"
  | "email"
  | "company"
  | "phone"
  | "pickup"
  | "delivery"
  | "message";

interface QuoteDraft {
  name: string;
  email: string;
  company: string;
  phone: string;
  pickup: string;
  delivery: string;
  message: string;
}

interface QuoteStep {
  key: QuoteFieldKey;
  prompt: string;
  placeholder: string;
  optional?: boolean;
  options?: string[];
}

interface PersistedQuoteFlowState {
  isQuoteFlowActive: boolean;
  quoteStepIndex: number;
  quoteDraft: QuoteDraft;
  input: string;
}

const initialQuoteDraft: QuoteDraft = {
  name: "",
  email: "",
  company: "",
  phone: "",
  pickup: "",
  delivery: "",
  message: "",
};

const quoteSteps: QuoteStep[] = [
  {
    key: "name",
    prompt: "What is your full name?",
    placeholder: "Full name",
  },
  {
    key: "email",
    prompt: "What is your work email?",
    placeholder: "name@company.com",
  },
  {
    key: "company",
    prompt: "What is your company name?",
    placeholder: "Company name (optional)",
    optional: true,
  },
  {
    key: "phone",
    prompt: "What phone number should we call you on?",
    placeholder: "Phone number (optional)",
    optional: true,
  },
  {
    key: "pickup",
    prompt: "Where is the pickup location?",
    placeholder: "City, state or full address",
  },
  {
    key: "delivery",
    prompt: "Where is the delivery location?",
    placeholder: "City, state or full address",
  },
  {
    key: "message",
    prompt: "Share shipment details (freight type, weight, timeline, special requirements).",
    placeholder: "Shipment details",
    options: [
      "Dry van load, approx. 20,000 lbs, pickup this week",
      "Flatbed load with oversized equipment",
      "Refrigerated load with temperature control",
    ],
  },
];

export default function ChatPanel({ onClose }: ChatPanelProps) {
  const [input, setInput] = useState("");
  const { messages, sendMessage, setMessages, status, error } = useChat();
  const [isQuoteFlowActive, setIsQuoteFlowActive] = useState(false);
  const [quoteStepIndex, setQuoteStepIndex] = useState(0);
  const [quoteDraft, setQuoteDraft] = useState<QuoteDraft>(initialQuoteDraft);
  const [pendingQuoteRestore, setPendingQuoteRestore] =
    useState<PersistedQuoteFlowState | null>(null);
  const [showQuoteRestorePrompt, setShowQuoteRestorePrompt] = useState(false);
  const [quoteFlowError, setQuoteFlowError] = useState("");
  const [quoteFlowNotice, setQuoteFlowNotice] = useState("");
  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false);
  const [hasRestoredQuoteFlow, setHasRestoredQuoteFlow] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, status]);

  const isBusy = status === "submitted" || status === "streaming";
  const currentQuoteStep = quoteSteps[quoteStepIndex];

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(quoteFlowStorageKey);
      if (!raw) {
        setHasRestoredQuoteFlow(true);
        return;
      }

      const parsed = JSON.parse(raw) as Partial<PersistedQuoteFlowState>;

      if (!parsed.isQuoteFlowActive) {
        sessionStorage.removeItem(quoteFlowStorageKey);
        setHasRestoredQuoteFlow(true);
        return;
      }

      const stepIndex = Number.isInteger(parsed.quoteStepIndex)
        ? Math.min(
            Math.max(parsed.quoteStepIndex as number, 0),
            quoteSteps.length - 1,
          )
        : 0;

      const savedDraft = parsed.quoteDraft as Partial<QuoteDraft> | undefined;
      const restoredDraft: QuoteDraft = {
        name: typeof savedDraft?.name === "string" ? savedDraft.name : "",
        email: typeof savedDraft?.email === "string" ? savedDraft.email : "",
        company: typeof savedDraft?.company === "string" ? savedDraft.company : "",
        phone: typeof savedDraft?.phone === "string" ? savedDraft.phone : "",
        pickup: typeof savedDraft?.pickup === "string" ? savedDraft.pickup : "",
        delivery: typeof savedDraft?.delivery === "string" ? savedDraft.delivery : "",
        message: typeof savedDraft?.message === "string" ? savedDraft.message : "",
      };

      setPendingQuoteRestore({
        isQuoteFlowActive: true,
        quoteStepIndex: stepIndex,
        quoteDraft: restoredDraft,
        input: typeof parsed.input === "string" ? parsed.input : "",
      });
      setShowQuoteRestorePrompt(true);
    } catch {
      sessionStorage.removeItem(quoteFlowStorageKey);
    } finally {
      setHasRestoredQuoteFlow(true);
    }
  }, []);

  useEffect(() => {
    if (!hasRestoredQuoteFlow) return;

    if (
      !isQuoteFlowActive &&
      showQuoteRestorePrompt &&
      pendingQuoteRestore?.isQuoteFlowActive
    ) {
      return;
    }

    if (!isQuoteFlowActive) {
      sessionStorage.removeItem(quoteFlowStorageKey);
      return;
    }

    const payload: PersistedQuoteFlowState = {
      isQuoteFlowActive,
      quoteStepIndex,
      quoteDraft,
      input,
    };

    sessionStorage.setItem(quoteFlowStorageKey, JSON.stringify(payload));
  }, [hasRestoredQuoteFlow, isQuoteFlowActive, quoteStepIndex, quoteDraft, input]);

  function resumeSavedQuoteFlow() {
    if (!pendingQuoteRestore || isBusy || isQuoteSubmitting) return;

    setIsQuoteFlowActive(true);
    setQuoteStepIndex(pendingQuoteRestore.quoteStepIndex);
    setQuoteDraft(pendingQuoteRestore.quoteDraft);
    setInput(pendingQuoteRestore.input);
    setQuoteFlowError("");
    setQuoteFlowNotice("");
    setPendingQuoteRestore(null);
    setShowQuoteRestorePrompt(false);
  }

  function discardSavedQuoteFlow() {
    setPendingQuoteRestore(null);
    setShowQuoteRestorePrompt(false);
    sessionStorage.removeItem(quoteFlowStorageKey);
  }

  function resetQuoteFlow() {
    setIsQuoteFlowActive(false);
    setQuoteStepIndex(0);
    setQuoteDraft(initialQuoteDraft);
    setQuoteFlowError("");
  }

  function startQuoteFlow() {
    if (isBusy || isQuoteSubmitting) return;
    setPendingQuoteRestore(null);
    setShowQuoteRestorePrompt(false);
    setIsQuoteFlowActive(true);
    setQuoteStepIndex(0);
    setQuoteDraft(initialQuoteDraft);
    setQuoteFlowError("");
    setQuoteFlowNotice("");
    setInput("");
  }

  function validateQuoteStep(step: QuoteStep, value: string): string {
    if (!step.optional && !value) {
      return "This field is required.";
    }

    if (step.key === "email" && value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return "Please enter a valid email address.";
      }
    }

    return "";
  }

  async function submitQuote(draft: QuoteDraft) {
    setIsQuoteSubmitting(true);
    setQuoteFlowError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(draft),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setQuoteFlowError(
          payload?.error || "Unable to submit your quote request. Please try again.",
        );
        return;
      }

      setQuoteFlowNotice(
        "Quote request submitted. Our team will review your details and contact you soon.",
      );
      resetQuoteFlow();
      setMessages([]);
      setInput("");
    } catch {
      setQuoteFlowError("Unable to submit your quote request. Please try again.");
    } finally {
      setIsQuoteSubmitting(false);
    }
  }

  function handleQuoteStepAnswer(text: string) {
    if (!currentQuoteStep || isQuoteSubmitting) return;

    const trimmed = text.trim();
    const isSkip =
      currentQuoteStep.optional &&
      ["skip", "na", "n/a", "none"].includes(trimmed.toLowerCase());
    const value = isSkip ? "" : trimmed;

    const validationError = validateQuoteStep(currentQuoteStep, value);
    if (validationError) {
      setQuoteFlowError(validationError);
      return;
    }

    const nextDraft = {
      ...quoteDraft,
      [currentQuoteStep.key]: value,
    };

    setQuoteDraft(nextDraft);
    setQuoteFlowError("");
    setInput("");

    if (quoteStepIndex === quoteSteps.length - 1) {
      void submitQuote(nextDraft);
      return;
    }

    setQuoteStepIndex((step) => step + 1);
  }

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (isQuoteFlowActive) {
      handleQuoteStepAnswer(trimmed);
      return;
    }

    if (trimmed.toLowerCase() === guidedQuoteLabel.toLowerCase()) {
      startQuoteFlow();
      return;
    }

    if (isBusy) return;

    sendMessage({ text: trimmed });
    setInput("");
  }

  function handleComposerKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      send(input);
    }
  }

  function getMessageText(parts: Array<{ type: string; text?: string }>): string {
    return parts
      .map((part) => (part.type === "text" ? part.text ?? "" : ""))
      .join(" ")
      .trim();
  }

  function getFollowUpQuestions(answerText: string): string[] {
    const lower = answerText.toLowerCase();
    const matched = followUpRules
      .filter((rule) => rule.keywords.some((keyword) => lower.includes(keyword)))
      .flatMap((rule) => rule.prompts);

    const combined = [...matched, ...defaultFollowUps];
    return Array.from(new Set(combined)).slice(0, 3);
  }

  const latestAssistantMessage = [...messages]
    .reverse()
    .find((message) => message.role === "assistant");

  const latestAssistantId = latestAssistantMessage?.id;
  const latestFollowUps = latestAssistantMessage
    ? getFollowUpQuestions(getMessageText(latestAssistantMessage.parts))
    : [];

  const quoteProgressLabel = `Step ${Math.min(
    quoteStepIndex + 1,
    quoteSteps.length,
  )} of ${quoteSteps.length}`;

  return (
    <div className="chat-panel" role="dialog" aria-label="Customer FAQ chat">
      <div className="chat-panel-header">
        <span>Big Rig Assist</span>
        <div className="chat-header-actions">
          <button
            type="button"
            className="chat-close"
            aria-label="Close chat"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>

      <div className="chat-messages" ref={listRef}>
        {showQuoteRestorePrompt && pendingQuoteRestore && (
          <div className="chat-restore-banner" role="status" aria-live="polite">
            <p className="chat-restore-banner-text">
              You have an unfinished quote draft. Resume where you left off?
            </p>
            <div className="chat-restore-banner-actions">
              <button
                type="button"
                className="chat-restore-button"
                onClick={resumeSavedQuoteFlow}
                disabled={isBusy || isQuoteSubmitting}
              >
                Resume draft
              </button>
              <button
                type="button"
                className="chat-restore-button chat-restore-button-secondary"
                onClick={discardSavedQuoteFlow}
                disabled={isBusy || isQuoteSubmitting}
              >
                Start fresh
              </button>
            </div>
          </div>
        )}

        {messages.length === 0 && (
          <div className="chat-empty">
            <p>
              You are chatting with BigRig Assist, our AI-powered helper.
            </p>
            <div className="chat-suggestions">
              {suggestions.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  className="chat-suggestion"
                  onClick={() => {
                    if (suggestion === guidedQuoteLabel) {
                      startQuoteFlow();
                      return;
                    }

                    send(suggestion);
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {isQuoteFlowActive && currentQuoteStep && (
          <div className="chat-quote-flow" role="status" aria-live="polite">
            <p className="chat-quote-flow-label">Guided Quote Intake</p>
            <p className="chat-quote-flow-progress">{quoteProgressLabel}</p>
            <p className="chat-quote-flow-prompt">{currentQuoteStep.prompt}</p>

            {currentQuoteStep.options && (
              <div className="chat-quote-options">
                {currentQuoteStep.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="chat-quote-option"
                    onClick={() => handleQuoteStepAnswer(option)}
                    disabled={isQuoteSubmitting}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            <div className="chat-quote-flow-actions">
              {currentQuoteStep.optional && (
                <button
                  type="button"
                  className="chat-quote-link"
                  onClick={() => handleQuoteStepAnswer("skip")}
                  disabled={isQuoteSubmitting}
                >
                  Skip this step
                </button>
              )}
              <button
                type="button"
                className="chat-quote-link"
                onClick={resetQuoteFlow}
                disabled={isQuoteSubmitting}
              >
                Cancel quote flow
              </button>
            </div>

            {quoteFlowError && (
              <p className="chat-quote-flow-error">{quoteFlowError}</p>
            )}
          </div>
        )}

        {quoteFlowNotice && (
          <div className="chat-quote-flow chat-quote-flow-success" role="status">
            <p className="chat-quote-flow-prompt">{quoteFlowNotice}</p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message chat-message-${message.role}`}
          >
            {message.parts.map((part, index) =>
              part.type === "text" ? (
                <span key={index}>{normalizeMessageText(part.text)}</span>
              ) : null,
            )}

            {message.role === "assistant" &&
              message.id === latestAssistantId &&
              latestFollowUps.length > 0 && (
                <div className="chat-followups">
                  {latestFollowUps.map((followUp) => (
                    <button
                      type="button"
                      key={followUp}
                      className="chat-followup"
                      onClick={() => send(followUp)}
                      disabled={isBusy}
                    >
                      {followUp}
                    </button>
                  ))}
                </div>
              )}
          </div>
        ))}

        {isBusy && (
          <div className="chat-message chat-message-assistant chat-typing">
            Typing…
          </div>
        )}

        {error && (
          <div className="chat-message chat-message-error">
            Something went wrong. Please call {company.phone} or try again.
          </div>
        )}
      </div>

      <form
        className="chat-input-row"
        onSubmit={(event) => {
          event.preventDefault();
          send(input);
        }}
      >
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleComposerKeyDown}
          placeholder={
            isQuoteFlowActive && currentQuoteStep
              ? currentQuoteStep.placeholder
              : "Type your question…"
          }
          aria-label="Type your question"
          rows={4}
          disabled={isBusy || isQuoteSubmitting}
        />
        <button
          type="submit"
          className="chat-send-arrow"
          aria-label="Send message"
          disabled={isBusy || isQuoteSubmitting || !input.trim()}
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      </form>

      <p className="chat-disclaimer">
        BigRig Assist is AI-powered and can make mistakes. Please verify important details with our team.
      </p>
    </div>
  );
}
