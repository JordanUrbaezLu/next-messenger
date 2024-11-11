import { eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { SelectUser, usersTable } from "@/db/schema";
export async function getUserById(id: SelectUser["id"]): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}
