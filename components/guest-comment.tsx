import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Verified } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const comments = [
  {
    id: 1,
    name: "Anurag Sharma",
    username: "anurag",
    avatar: "https://github.com/mps.png",
    content: "Guys Make sure to drop a nice review",
    timestamp: new Date(Date.now() - 4.5 * 24 * 60 * 60 * 1000), // ~4-5 days ago
    isAuthor: true,
    isVerified: true,
  },
  {
    id: 2,
    name: "Sakshi Sharma",
    username: "sakshisharma",
    avatar: "https://github.com/riya.png",
    content: "The attention to detail is insane. Loving the micro-interactions!",
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000), // ~18 hours ago
    isAuthor: false,
    isVerified: true,
  },
  {
    id: 3,
    name: "Arjun",
    username: "arjunpatel",
    avatar: "https://github.com/arjun.png",
    content: "Finally a portfolio that doesn't look like a template. Respect man",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    isAuthor: false,
    isVerified: true,
  },
  {
    id: 4,
    name: "Priya",
    username: "priya",
    avatar: "https://github.com/priya.png",
    content: "This is giving me major inspiration for my own site now",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    isAuthor: false,
    isVerified: false,
  },
];

export default function GuestComments() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 py-12 px-4  ">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4 pb-8 border-b border-zinc-800 last:border-0">
          <Avatar className="h-12 w-12 ring-2 ring-zinc-800 ring-offset-2 ring-offset-black">
            <AvatarImage src={comment.avatar} alt={comment.name} />
            <AvatarFallback className="bg-zinc-900 text-zinc-400">
              {comment.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-white">{comment.name}</span>

              {comment.isAuthor && (
                <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  Author
                </Badge>
              )}

              {comment.isVerified && !comment.isAuthor && (
                <Verified className="h-4 w-4 text-blue-400" />
              )}
              
              <span className="text-sm text-zinc-500">
                · {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
              </span>
            </div>

            <p className="text-zinc-300 leading-relaxed">
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}