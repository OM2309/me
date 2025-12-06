// lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { account, session, user, verification } from "@/db/schema/auth-schema";

// Load type extensions (from previous fix)
import "./auth-types";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { user, account, session, verification },
  }),

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },

  // Include custom fields like userType in session
  session: {
    include: {
      user: {
        columns: {
          id: true,
          name: true,
          email: true,
          image: true,
          userType: true, // Pulls your custom column
        },
      },
    },
  },
});