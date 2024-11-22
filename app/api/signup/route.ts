// todo: secure signup with some security like JWT
import { NextResponse } from "next/server";
import { createUser } from "@/queries/insert/createUser";
import { getRandomInt } from "@/utils/getRandomID";
import { createAccountEmail } from "@/email/createAccount";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, age } = body;
  const id = getRandomInt(10000);
  await createUser({ name, email, age, id });
  await createAccountEmail({ name, email });
  return NextResponse.json({});
}
