"use server";

import { sql } from "drizzle-orm";
import { cookies } from "next/headers";
import { db } from "@/db";
import { profileViews } from "@/db/schema";

const VIEW_COOKIE = "profile_viewed";
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours

export async function getTotalProfileViews(): Promise<number> {
  try {
    const result = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(profileViews);
    return result[0]?.count ?? 0;
  } catch {
    return 0;
  }
}

export async function recordProfileView(): Promise<number> {
  try {
    const cookieStore = await cookies();
    const alreadyViewed = cookieStore.get(VIEW_COOKIE);

    if (!alreadyViewed) {
      await db.insert(profileViews).values({});
      cookieStore.set(VIEW_COOKIE, "1", {
        maxAge: COOKIE_MAX_AGE,
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });
    }

    return getTotalProfileViews();
  } catch {
    return getTotalProfileViews();
  }
}
