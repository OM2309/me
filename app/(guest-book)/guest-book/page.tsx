"use client";

import { fetchComments } from "@/actions/comment";
import GithubSignIn from "@/components/github-signin";
import GuestComments from "@/components/guest-comment";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const GuestBook = () => {
  const [newComments, setNewComments] = useState();

  const fetchData = async () => {
    const comments = await fetchComments();
    setNewComments(comments?.comments);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-10">
        <div className="flex flex-col w-full mb-10">
          <p className=" text-2xl font-semibold text-black dark:text-white ">
            Guestbook
          </p>
          <p className="text-md font-normal text-black dark:text-zinc-400">
            Leave a permanent mark. Share thoughts, feedback, or just verify
            your visit.
          </p>
        </div>
        {/* <Separator className="my-14 w-8" /> */}
      </div>

      <GithubSignIn fetchComments={fetchData}/>
      <GuestComments comments={newComments} fetchComments={fetchData} />
    </>
  );
};

export default GuestBook;
