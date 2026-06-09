
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { profileViews } from "@/db/schema";

export const saveProfileView = async () => {
  try {
    await db.insert(profileViews).values({});
  } catch (error) {
    console.warn("Failed to save profile view (this is expected during static build):", error instanceof Error ? error.message : error);
  }
};

export const getTotalProfileViews = async () => {
  try {
    const result = await db
      .select({ count: sql<number>`count(*)` })
      .from(profileViews);
    return result[0]?.count ?? 0;
  } catch (error) {
    console.warn("Failed to get total profile views (this is expected during static build):", error instanceof Error ? error.message : error);
    return 0;
  }
};