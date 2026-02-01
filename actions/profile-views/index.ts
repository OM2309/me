
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { profileViews } from "@/db/schema";

export const saveProfileView = async () => {
  await db.insert(profileViews).values({});
};




export const getTotalProfileViews = async () => {
  const [{ count }] = await db
    .select({ count: sql<number>`count(*)` })
    .from(profileViews);

  return count;
};