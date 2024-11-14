import { getUserById } from "@/queries/select/getUserById";
import Content from "./content";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: number }>;
}) {
  const userId = (await params).userId;
  const user = (await getUserById(userId || 0))[0];
  return <Content name={user.name} age={user.age} />;
}
