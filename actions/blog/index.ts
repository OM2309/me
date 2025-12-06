"use server";

import { db } from "@/db";
import { blog } from "@/db/schema/blog-schema";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";


// Helper: generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// === CREATE BLOG ===
export async function createBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || title.trim().length < 3) {
    return { error: "Title must be at least 3 characters" };
  }
  if (!content || content.trim().length < 50) {
    return { error: "Content must be at least 50 characters" };
  }

  try {
    const slug = generateSlug(title);

    // Optional: check for duplicate slug
    const existing = await db
      .select()
      .from(blog)
      .where(eq(blog.slug, slug))
      .limit(1);

    const finalSlug = existing.length > 0 ? `${slug}-${Date.now()}` : slug;

    const [newBlog] = await db
      .insert(blog)
      .values({
        title: title.trim(),
        slug: finalSlug,
        content: content.trim(),
      })
      .returning();

    revalidatePath("/blog");
    revalidatePath("/admin/blogs");

    return { success: true, blog: newBlog };
  } catch (error) {
    console.error("Create blog error:", error);
    return { error: "Failed to create blog post" };
  }
}

// === UPDATE BLOG ===
export async function updateBlog(id: number, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || title.trim().length < 3) {
    return { error: "Title must be at least 3 characters" };
  }
  if (!content || content.trim().length < 50) {
    return { error: "Content must be at least 50 characters" };
  }

  try {
    const slug = generateSlug(title);

    const [updatedBlog] = await db
      .update(blog)
      .set({
        title: title.trim(),
        slug,
        content: content.trim(),
        updatedAt: new Date(),
      })
      .where(eq(blog.id, id))
      .returning();

    revalidatePath("/blog");
    revalidatePath(`/blog/${updatedBlog.slug}`);
    revalidatePath("/admin/blogs");

    return { success: true, blog: updatedBlog };
  } catch (error) {
    console.error("Update blog error:", error);
    return { error: "Failed to update blog post" };
  }
}

// === DELETE BLOG ===
export async function deleteBlog(id: number) {
  try {
    const deleted = await db
      .delete(blog)
      .where(eq(blog.id, id))
      .returning({ id: blog.id, slug: blog.slug });

    if (deleted.length === 0) {
      return { error: "Blog not found" };
    }

    revalidatePath("/blog");
    revalidatePath("/admin/blogs");

    return { success: true, deletedId: id };
  } catch (error) {
    console.error("Delete blog error:", error);
    return { error: "Failed to delete blog post" };
  }
}

// === FETCH ALL BLOGS (for listing) ===
export async function fetchBlogs() {
  try {
    const blogs = await db
      .select({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
        excerpt: blog.content, // you can truncate later in component
      })
      .from(blog)
      .orderBy(desc(blog.createdAt));

    return { success: true, blogs };
  } catch (error) {
    console.error("Fetch blogs error:", error);
    return { error: "Failed to load blog posts" };
  }
}

// === FETCH SINGLE BLOG BY SLUG (for reading page) ===
export async function fetchBlogBySlug(slug: string) {
  try {
    const [post] = await db
      .select()
      .from(blog)
      .where(eq(blog.slug, slug))
      .limit(1);

    if (!post) {
      return { error: "Blog post not found" };
    }

    return { success: true, blog: post };
  } catch (error) {
    console.error("Fetch blog by slug error:", error);
    return { error: "Failed to load blog post" };
  }
}