"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProfileViewCounter from "@/components/profile-view-counter";
import SocialLinks from "@/components/social-links";
import { TextAnimate } from "@/components/ui/text-animate";

interface AboutProps {
  initialViewCount?: number;
}

const SUBTITLES = [
  "Consultant",
  "Software Developer",
];

export default function About({ initialViewCount = 0 }: AboutProps) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full flex flex-col gap-6">
      {/* Avatar & Name */}
      <div className="flex items-center gap-4.5">
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] bg-zinc-900">
          <Image
            src="/images/dp.jpg"
            width={80}
            height={80}
            alt="Anurag Sharma"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="min-w-0 pt-0.5 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Anurag Sharma
          </h1>
          <TextAnimate
            key={subtitleIndex}
            animation="blurIn"
            as="p"
            by="character"
            className="mt-1 text-sm text-muted-foreground font-mono"
          >
            {SUBTITLES[subtitleIndex]}
          </TextAnimate>
        </div>
      </div>

      {/* Metadata Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4.5 font-mono">
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            Location
          </span>
          <span className="flex items-center gap-2 mt-2.5 text-xs text-zinc-500 dark:text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-450 dark:text-zinc-500 shrink-0">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Jaipur, India
          </span>
        </div>

        <div>
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            Email
          </span>
          <a
            href="mailto:23anuragsharma@gmail.com"
            className="flex items-center gap-2 mt-2.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-foreground transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-450 dark:text-zinc-500 group-hover:text-foreground transition-colors shrink-0">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            23anuragsharma@gmail.com
          </a>
        </div>


        <div>
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            Views
          </span>
          <span className="flex items-center mt-2.5">
            <ProfileViewCounter initialCount={initialViewCount} />
          </span>
        </div>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-muted-foreground">
        <p>
          I build full-stack web products end-to-end, obsessing over small details that make software feel right to use.
        </p>
        <p>
          Currently working with <strong className="text-[#fafafa] font-semibold">TypeScript</strong>,{" "}
          <strong className="text-[#fafafa] font-semibold">React</strong>,{" "}
          <strong className="text-[#fafafa] font-semibold">Next.js</strong>, and{" "}
          <strong className="text-[#fafafa] font-semibold">Tailwind CSS</strong>.
        </p>
      </div>

      {/* Socials */}
      <div className="pt-2">
        <SocialLinks />
      </div>
    </header>
  );
}
