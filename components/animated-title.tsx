"use client";

import { TypingAnimation } from "@/components/ui/typing-animation";

export function AnimatedTitle() {
  return (
    <TypingAnimation 
      className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-black to-zinc-600 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent leading-tight"
      duration={100}
    >
      Anurag Sharma
    </TypingAnimation>
  );
}