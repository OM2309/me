"use client";

import { fetchComments } from "@/actions/comment";
import GithubSignIn from "@/components/github-signin";
import GuestComments from "@/components/guest-comment";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  content: string;
  createdAt: Date;
  userName: string | null;
  userImage: string | null;
  userType: string | null;
};

export default function GuestBook() {
  const [comments, setComments] = useState<Comment[] | undefined>(undefined);

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
          <p className="text-2xl font-semibold text-black dark:text-white">
            Guestbook
          </p>
          <p className="text-md font-normal text-black dark:text-zinc-400">
            Leave a permanent mark. Share thoughts, feedback, or just verify your visit.
          </p>
        </div>
      </div>

      <GithubSignIn fetchComments={loadComments} />
      <GuestComments comments={comments} fetchComments={loadComments} />
    </>
  );
}