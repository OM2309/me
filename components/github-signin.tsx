"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const GithubSignIn = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="border border-dashed border-zinc-800 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-medium font-inter text-md text-black dark:text-white">
            Sign in to write
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Authenticate via GitHub to prevent spam
          </p>
        </div>

        <Button
          size="lg"
          variant="outline"
          className="cursor-pointer w-full sm:w-auto bg-white text-black dark:text-white border border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
        >
          <Github className="mr-2 h-5 w-5" />
          <span className="font-medium font-inter">GitHub</span>
        </Button>
      </div>
    </div>
  );
};

export default GithubSignIn;
