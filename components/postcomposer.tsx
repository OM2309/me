// app/guestbook/PostComposer.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSession, signOut } from "@/lib/auth-client";
import { createComment } from "@/actions/comment";
import { useTransition } from "react";


const postSchema = z.object({
  content: z.string().min(5, "Minimum 5 characters").max(500, "Maximum 500 characters"),
});

type PostFormData = z.infer<typeof postSchema>;
const MAX_CHARS = 500;

export default function PostComposer() {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();

  const username = session?.user?.name || session?.user?.email?.split("@")[0] || "Guest";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: { content: "" },
  });

  const content = watch("content") || "";
  const charCount = content.length;

  const onSubmit = (data: PostFormData) => {
    startTransition(async () => {
      const result = await createComment(data.content, session?.user?.id);
      if (result?.success) {
        reset();
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="space-y-6 border border-zinc-800 rounded-xl p-6 bg-card">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>
            Signed in as <span className="font-medium text-foreground">{username}</span>
          </span>
        </div>
        <button
          onClick={() => signOut()}
          className="text-zinc-500 hover:text-zinc-300 transition"
        >
          Sign out
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative">
          <Textarea
            {...register("content")}
            placeholder="Share your thoughts..."
            className="min-h-32 resize-none pr-16 text-base"
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <div className="absolute bottom-3 right-4 text-xs text-zinc-500">
            {charCount}/{MAX_CHARS}
          </div>
        </div>

        {errors.content && (
          <p className="text-sm text-red-400">{errors.content.message}</p>
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            size="lg"
            className="min-w-32 cursor-pointer"
          >
            {isPending ? "Posting..." : "Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}