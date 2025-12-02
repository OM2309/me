"use client";

import { fetchComments } from "@/actions/comment";
import GithubSignIn from "@/components/github-signin";
import GuestComments from "@/components/guest-comment";
import { Comment } from "@/types"; // Correct path to your type
import { useEffect, useState } from "react";

export default function GuestBook() {
  const [comments, setComments] = useState<Comment[]>([]); // Explicitly type as Comment[]

  const loadComments = async () => {
    const data = await fetchComments();
    setComments(data?.comments ?? []);
  };

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-10">
        <div className="flex flex-col w-full mb-10">
          <p className="text-2xl font-semibold">Guestbook</p>
          <p className="text-muted-foreground">
            Leave a permanent mark. Share thoughts, feedback, or just say hi.
          </p>
        </div>
      </div>

      <GithubSignIn fetchComments={loadComments} />
      <GuestComments comments={comments} fetchComments={loadComments} />
    </>
  );
}