"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "@/lib/auth-client";
import { Github, Loader2 } from "lucide-react";
import PostComposer from "./postcomposer";
import { useState } from "react";

export default function GithubSignIn() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleGitHubSignIn = () => {
    setIsLoading(true);
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
            disabled={isLoading}
            className="rounded-md px-8 shadow-lg cursor-pointer transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Github className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            )}
            {isLoading ? "Redirecting..." : "Continue with GitHub"}
          </Button>
        </div>
      )}
    </div>
  );
}
