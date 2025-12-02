"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trash, Verified } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { deleteComment } from "@/actions/comment";
import { Comment } from "@/types";



type GuestCommentsProps = {
  comments?: Comment[];
  fetchComments: () => Promise<void>;
};

const GuestComments = ({ comments = [], fetchComments }: GuestCommentsProps) => {
  const handleDelete = async (id: number) => {
    await deleteComment(id);
    await fetchComments(); 
  };

  if (!comments.length) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center text-zinc-500">
        No messages yet. Be the first to sign the guestbook!
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-12 px-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 pb-8 border-b border-zinc-800 last:border-0"
        >
          <Avatar className="h-12 w-12 ring-2 ring-zinc-800 ring-offset-2 ring-offset-background">
            <AvatarImage src={comment.userImage ?? undefined} alt={comment.userName ?? "User"} />
            <AvatarFallback className="bg-zinc-900 text-zinc-400">
              {comment.userName
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-jetbrains-mono font-medium">
                {comment.userName || "Anonymous"}
              </span>

              {/* Admin badge + delete button */}
              {comment.userType === "admin" && (
                <>
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                  >
                    Author
                  </Badge>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-red-500 hover:text-red-400 transition-colors"
                    aria-label="Delete comment"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </>
              )}

              {/* Verified check for non-admin GitHub users */}
              {comment.userType !== "admin" && comment.userType && (
                <Verified className="h-4 w-4 text-blue-400" />
              )}

              <span className="text-sm text-zinc-500">
                · {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
              </span>
            </div>

            <p className="text-zinc-300 leading-relaxed">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestComments;