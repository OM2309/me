// components/PostComposer.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSession, signOut } from "@/lib/auth-client";


const postSchema = z.object({
  content: z.string().min(5).max(500),
});

type PostFormData = z.infer<typeof postSchema>;
const MAX_CHARS = 500;

export default function PostComposer() {
  const { data: session } = useSession();

  const username =
    session?.user?.name ||
    session?.user?.email?.split("@")[0] ||
    "Guest";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: { content: "" },
  });

  const content = watch("content") || "";
  const charCount = content.length;

  const onSubmit = async (data: PostFormData) => {
    console.log("New post:", data.content);
    reset();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="space-y-6">
      {/* Signed in status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-inter">
            Signed in as <span className="text-white font-medium">{username}</span>
          </span>
        </div>
        <button
          onClick={() => signOut()}
          className="text-sm text-zinc-500 hover:text-zinc-300 transition font-inter cursor-pointer"
        >
          Sign out
        </button>
      </div>

      {/* Composer */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative">
          <Textarea
            {...register("content")}
            placeholder="Type your message..."
            className="min-h-24 resize-none  rounded-md pr-16 text-base"
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <div className="absolute bottom-3 left-4 text-xs text-zinc-500">
            {charCount}/{MAX_CHARS}
          </div>
        </div>

        {errors.content && (
          <p className="text-sm text-red-400">Please enter minimum 5 character</p>
        )}

        <div className="flex justify-end items-center">
          <Button
            type="submit"
            // disabled={isSubmitting || !isValid || charCount === 0}
            className="font-inter rounded-md"
            size="lg"
          >
            {isSubmitting ? "Posting..." : "Post"}
       
          </Button>
        </div>
      </form>
    </div>
  );
}