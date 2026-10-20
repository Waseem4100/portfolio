
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    if (
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error("Missing RESEND_API_KEY or FROM_EMAIL");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      replyTo: email.trim(),
      subject: subject.trim(),
      text: `From: ${email.trim()}\n\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: error.message || "Email sending failed." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
