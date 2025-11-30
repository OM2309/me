// components/GithubSignIn.tsx
"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "@/lib/auth-client";
import { Github } from "lucide-react";
import PostComposer from "./postcomposer";

export default function GithubSignIn() {
  const { data: session } = useSession();

  const handleGitHubSignIn = async () => {
    await signIn.social({ provider: "github" });
  };



  return (
    <div className="max-w-2xl mx-auto">
      {session ? (

        <PostComposer />
      ) : (

        <div className="border border-dashed border-zinc-800 rounded-xl p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left ">
              <h3 className="text-lg font-inter dark:text-white text-black ">
                Sign in to write
              </h3>
              <p className="text-sm text-zinc-400 font-inter">
                Authenticate via GitHub to prevent spam
              </p>
            </div>

            <Button
              size="lg"
              onClick={handleGitHubSignIn}
              className="w-full sm:w-auto font-inter rounded-md px-6 shadow-lg transition"
            >
              <Github className="mr-2 h-5 w-5" />
               GitHub
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}