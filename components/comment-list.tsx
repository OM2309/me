import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Verified, Pin } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Comment } from "@/types";
import DeleteButton from "@/components/delete-button";

type Props = {
  comments: Comment[];
};

function sortComments(comments: Comment[]) {
  const adminComments = comments.filter((comment) => comment.userType === "admin");
  const otherComments = comments.filter((comment) => comment.userType !== "admin");

  return [...adminComments, ...otherComments];
}

export default function CommentsList({ comments }: Props) {
  if (comments.length === 0) {
    return (
      <div className="text-center py-20 text-zinc-500">
        <p className="text-lg">No comments yet.</p>
        <p className="text-sm mt-2">Be the first to leave a message!</p>
      </div>
    );
  }

  console.log(comments)

  return (
    <div className="space-y-8 py-8">
      {sortComments(comments).map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 pb-8 border-b border-zinc-800 last:border-0 last:pb-0"
        >
          <Avatar className="h-12 w-12 ring-2 ring-zinc-800 ring-offset-2 ring-offset-background">
            <AvatarImage src={comment.userImage ?? undefined} />
            <AvatarFallback className="bg-zinc-900 text-zinc-400">
              {(comment.userName || "U")
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-medium font-mono">{comment.userName || "Anonymous"}</span>

              {comment.userType === "admin" && (
                <Badge className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  <Pin className="mr-1 h-4 w-4 text-emerald-400" />
                  Author
                </Badge>
              )}

              {comment.userType && (
                <Verified className="h-4 w-4 text-blue-400" />
              )}

              <span className="text-zinc-500">
                · {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
              </span>

              <DeleteButton commentId={comment.id} userId={comment.userId ?? ""} />
            </div>

            <p className="dark:text-zinc-300 text-zinc-500 leading-relaxed whitespace-pre-wrap">
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}