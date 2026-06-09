import { fetchComments } from "@/actions/comment";
import GithubSignIn from "@/components/github-signin";
import CommentsList from "@/components/comment-list";
import PageHeader from "@/components/page-header";

export default async function GuestbookPage() {
  const data = await fetchComments();
  const comments = data?.comments ?? [];

  return (
    <div className="space-y-10">
      <PageHeader
        title="Guestbook"
        description="Leave a note, share feedback, or just say hi."
      />
      <GithubSignIn />
      <CommentsList comments={comments} />
    </div>
  );
}
