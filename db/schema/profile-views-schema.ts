import { pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const profileViews = pgTable(
  "profile_views",
  {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at").defaultNow(),
  }
);