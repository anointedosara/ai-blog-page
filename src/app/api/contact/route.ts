import { NextResponse } from "next/server";

const RECIPIENT = "anointedosara@gmail.com";

/**
 * Receives a contact submission and delivers it by email.
 *
 * Uses FormSubmit (https://formsubmit.co) so no SMTP credentials are required.
 * The first message to a new address triggers a one-time activation email that
 * the recipient must confirm; after that, messages are delivered automatically.
 *
 * To switch to a provider like Resend or Nodemailer later, replace the fetch
 * below with the provider's send call — the client contract stays the same.
 */
export async function POST(request: Request) {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = (data.firstName ?? "").trim();
  const lastName = (data.lastName ?? "").trim();
  const email = (data.email ?? "").trim();
  const phone = `${data.code ?? ""} ${data.phone ?? ""}`.trim();
  const message = (data.message ?? "").trim();

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email, and a message." },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New FutureTech contact from ${firstName} ${lastName}`.trim(),
        _template: "table",
        name: `${firstName} ${lastName}`.trim(),
        email,
        phone,
        message,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "The mail service rejected the request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the mail service. Please try again later." },
      { status: 500 },
    );
  }
}
