import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;
  const templateId = process.env.RESEND_FREIGHT_QUOTE_REQUEST_TEMPLATE_ID;

  if (!apiKey || !toEmail || !fromEmail || !templateId) {
    console.error("Resend email env vars are not fully configured");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const pickup = typeof body.pickup === "string" ? body.pickup.trim() : "";
  const delivery = typeof body.delivery === "string" ? body.delivery.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Full name and a valid email are required." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: "New Freight Quote Request",
      template: {
        id: templateId,
        variables: {
          NAME: name,
          COMPANY: company || "-",
          EMAIL: email,
          PHONE: phone || "-",
          PICKUP: pickup || "-",
          DELIVERY: delivery || "-",
          MESSAGE: message || "-",
        },
      },
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        { error: "Unable to send your request. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send quote request email", err);
    return NextResponse.json(
      { error: "Unable to send your request. Please try again later." },
      { status: 500 },
    );
  }
}
