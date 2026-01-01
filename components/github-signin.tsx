"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "@/lib/auth-client";
import { Github } from "lucide-react";
import PostComposer from "./postcomposer";

export default function GithubSignIn() {
  const { data: session } = useSession();

  const handleGitHubSignIn = () => {
    signIn.social({ provider: "github", callbackURL: window.location.href });
  };

  return (
    <div className="max-w-2xl mx-auto">
      {session ? (
        <PostComposer />
      ) : (
        <div className="border border-dashed border-zinc-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Sign in to write</h3>
          <p className="text-sm text-zinc-400 mb-6">
            Authenticate with GitHub to leave a comment
          </p>
          <Button
            size="lg"
            onClick={handleGitHubSignIn}
            className="rounded-md px-8 shadow-lg cursor-pointer"
          >
            <Github className="mr-2 h-5 w-5" />
            Continue with GitHub
          </Button>
        </div>
      )}
    </div>
  );
}
