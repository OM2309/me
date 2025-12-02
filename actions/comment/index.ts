// actions/comment.ts
"use server";

import { db } from "@/db";
import { comment } from "@/db/schema/comment-schema";
import { user } from "@/db/schema/auth-schema"; // ← YEH IMPORT GALAT THA PEHLE
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createComment(
  content: string,
  userId: string | undefined
) {
  if (!userId) return { error: "You must be logged in" };
  if (!content || content.trim().length < 5)
    return { error: "Comment too short" };

  try {
    const [newComment] = await db
      .insert(comment)
      .values({
        content: content.trim(),
        userId,
      })
      .returning();

    revalidatePath("/");
    return { success: true, comment: newComment };
  } catch (error) {
    console.error("Create comment error:", error);
    return { error: "Failed to post comment" };
  }
}

export async function fetchComments() {
  try {
    const comments = await db
      .select({
        id: comment.id,
        content: comment.content,
        createdAt: comment.createdAt,
        userName: user.name,
        userImage: user.image,
        userType: user.userType,
        userId: user.id,
      })
      .from(comment)
      .leftJoin(user, eq(comment.userId, user.id))
      .orderBy(desc(comment.createdAt))
      .limit(5);

    return { success: true, comments };
  } catch (error) {
    console.error("Fetch comments error:", error);
    return { error: "Failed to load comments" };
  }
}

export async function deleteComment(id: number) {
  try {
    const deletedComment = await db.delete(comment).where(eq(comment.id, id));
    revalidatePath("/");
    return { success: true, comment: deletedComment };
  } catch (error) {
    console.error("Delete comment error:", error);
    return { error: "Failed to delete comment" };
  }
}
