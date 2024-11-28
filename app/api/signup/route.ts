// todo: secure signup with some security like JWT
import { NextResponse } from "next/server";
import { createUser } from "@/queries/insert/createUser";
import { getRandomInt } from "@/utils/getRandomID";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, age } = body;
  const id = getRandomInt(10000);
  try {
    await createUser({ name, email, age, id });
  } catch {
    console.log("######## FAILED TO CREATE ACCOUNT ########");
    return NextResponse.json(
      {},
      { status: 500, statusText: "Failed to create account" },
    );
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/email/accountCreation`,
    {
      method: "POST",
      body: JSON.stringify({ name, email }),
    },
  );
  if (response.status === 200) {
    return NextResponse.json({});
  } else {
    console.log("######## EMAIL FAILED ########");
    return NextResponse.json(
      {},
      {
        status: 500,
        statusText:
          "Account successfully created but failed to send confirmation email",
      },
    );
  }
}
