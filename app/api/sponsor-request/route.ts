import { NextResponse } from "next/server";
import content from "@/content/site.json";

export async function POST(req: Request) {
  try {
    const { name, organisation, message } = await req.json();

    if (!name || !organisation || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const toEmail =
      (content as any)?.contact?.email ||
      process.env.FALLBACK_TO_EMAIL ||
      "";

    if (!toEmail) {
      return NextResponse.json({ error: "No destination email configured." }, { status: 500 });
    }

    // If SMTP not configured, indicate 501 so the client can show a mailto fallback.
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.FROM_EMAIL) {
      return NextResponse.json(
        { error: "Email service not configured on server." },
        { status: 501 }
      );
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `Sponsor request — ${name} (${organisation})`;
    const text = `New sponsor request:

Name: ${name}
Organisation: ${organisation}

Message:
${message}
`;
    const html = `
      <h2>New Sponsor Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Organisation:</strong> ${escapeHtml(organisation)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
    `;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: toEmail,
      subject,
      text,
      html,
    });

    return NextResponse.json({ message: "Your request has been sent. Thank you!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send your request." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
