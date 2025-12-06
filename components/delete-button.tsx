"use client";

import { Trash } from "lucide-react";
import { deleteComment } from "@/actions/comment";
import { useSession } from "@/lib/auth-client";
import { useTransition } from "react";

export default function DeleteButton({ commentId, userId }: { commentId: number; userId: string }) {
    const { data: session } = useSession();
    const [isPending, startTransition] = useTransition();

    const isAdmin = session?.user?.email === process.env.NEXT_PUBLIC_ADMIN;
    const isOwner = session?.user?.id === userId;
    const canDelete = isAdmin || isOwner;

    
    if (!canDelete) return null;

    const handleDelete = () => {
        startTransition(async () => {
            await deleteComment(commentId);
            window.location.reload();
        });
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isPending}
            className="ml-auto text-red-500 hover:text-red-400 transition-opacity opacity-70 hover:opacity-100 cursor-pointer"
            aria-label="Delete comment"
        >
            <Trash className="h-4 w-4" />
        </button>
    );
}