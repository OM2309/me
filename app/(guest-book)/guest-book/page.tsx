// app/guestbook/page.tsx
import { fetchComments } from "@/actions/comment";
import GithubSignIn from "@/components/github-signin";
import CommentsList from "@/components/comment-list";

export const revalidate = 30; 

export default async function GuestbookPage() {
  const data = await fetchComments();
  const comments = data?.comments ?? [];

  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-10 px-4">
        <div className="flex flex-col w-full mb-10 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight">Guestbook</h1>
          <p className="text-muted-foreground mt-2">
            Leave a permanent mark. Share thoughts, feedback, or just say hi.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 space-y-12">
        <GithubSignIn />
        <CommentsList comments={comments} />
      </div>
    </main>
  );
}