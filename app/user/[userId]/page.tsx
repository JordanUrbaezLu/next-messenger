import { getUserById } from "@/queries/select/getUserById";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: number }>;
}) {
  const userId = (await params).userId;
  const user = (await getUserById(userId || 0))[0];
  return (
    <div>
      <div>Hello {user.name}</div>
      <div>You are {user.age} years old!</div>
    </div>
  );
}
