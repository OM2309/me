
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Verified } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { deleteComment } from "@/actions/comment";

import { Trash } from "lucide-react";



const GuestComments = ({ comments, fetchComments }) => {

  const handleDelete = async (id: number) => {
    await deleteComment(id);
    await fetchComments()
  };


  return (
    <div className="max-w-2xl mx-auto space-y-8 py-12 px-4">
      {comments?.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 pb-8 border-b border-zinc-800 last:border-0"
        >
          <Avatar className="h-12 w-12 ring-2 ring-zinc-800 ring-offset-2 ring-offset-black">
            <AvatarImage src={comment?.userImage ?? "/images/download.png"} alt={comment?.userName ?? "Image"} />
            <AvatarFallback className="bg-zinc-900 text-zinc-400">
              {comment?.userName?.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-jetbrains-mono">{comment.userName}</span>

              {comment.userType === "admin" && (
                <>
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                  >
                    Author
                  </Badge>
                  <Trash
                    className="h-4 w-4 cursor-pointer text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(comment.id)}
                  />
                </>
              )}

              {!comment?.userType === "admin" && (
                <Verified className="h-4 w-4 text-blue-400" />
              )}

              <span className="text-sm text-zinc-500">
                ·
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>

            <p className="text-md leading-relaxed text-zinc-600 dark:text-zinc-300">
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GuestComments
