import EmailTemplate from "@/components/email/template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Next Messenger!",
      react: EmailTemplate({ firstName: name }),
    });

    if (error) {
      console.log("####### RESEND ERROR: ", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log("####### RESEND TRY CATCH ERROR: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
