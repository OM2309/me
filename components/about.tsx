"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProfileViewCounter from "@/components/profile-view-counter";
import SocialLinks from "@/components/social-links";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { motion } from "motion/react";
import { XIcon } from "lucide-react";

interface AboutProps {
  initialViewCount?: number;
}

const SUBTITLES = [
  "Consultant",
  "Software Developer",
  "Web 3"
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
      {/* Avatar */}
      <div className="relative z-10 -mt-16 sm:-mt-20 pl-1">
        <Dialog>
          <DialogTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-900 bg-black cursor-pointer shadow-lg outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="View profile photo"
            >
              <Image
                src="/images/dp.jpg"
                width={96}
                height={96}
                alt="OM"
                className="object-cover w-full h-full"
                priority
              />
            </motion.button>
          </DialogTrigger>
          <DialogContent
            className="max-w-[calc(100vw-3rem)] xs:max-w-[360px] sm:max-w-[400px] p-0 overflow-hidden border-none bg-transparent shadow-none"
            showCloseButton={false}
          >
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 bg-white shadow-2xl">
              <Image
                src="/images/dp.jpg"
                alt="OM"
                fill
                className="object-cover w-full h-full"
                priority
              />
              <DialogClose asChild>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-xs hover:bg-black/60 cursor-pointer border border-white/10 outline-hidden"
                  aria-label="Close dialog"
                >
                  <XIcon className="h-5 w-5" />
                </motion.button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Name & Title */}
      {/* <div className="min-w-0">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          OM
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
      </div> */}

      {/* Metadata Columns */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4.5 font-mono">
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
      </div> */}

      {/* Bio Paragraphs */}
      <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-muted-foreground">
        <p>
          I'm <strong className="font-semibold text-foreground">Anurag Sharma</strong>, a software developer passionate about building modern, scalable web applications with clean architecture, high performance, and great user experiences. I enjoy exploring new technologies and continuously improving my skills to build better software.
        </p>
      </div>

      {/* Socials */}
      <div className="pt-2">
        <SocialLinks />
      </div>
    </header>
  );
}
