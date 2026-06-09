"use client";

import Image from "next/image";
import { toast } from "sonner";
import { FaCalendarAlt, FaEnvelope, FaRegCopy } from "react-icons/fa";
import SpotifyStatus from "@/components/spotify-status";
import SocialLinks from "@/components/social-links";

export default function About() {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("23anuragsharma@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <section className="w-full space-y-4">
      {/* Row 1: Circular Avatar + Name/Subtitle */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Profile Avatar */}
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-amber-500 bg-zinc-100 dark:bg-zinc-900 shadow-sm">
          <Image
            src="/images/dp.jpg"
            width={80}
            height={80}
            alt="Anurag Sharma"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Name and Subtitle Info */}
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight">
            Anurag Sharma
          </h1>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono flex-wrap">
            <span>Engineer</span>
            <span>&middot;</span>
            <span>Consultant</span>
            <span>&middot;</span>
            <div className="flex items-center gap-1">
              <a
                href="mailto:23anuragsharma@gmail.com"
                className="hover:text-black dark:hover:text-white transition-colors hover:underline"
              >
                23anuragsharma@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="cursor-pointer text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors p-0.5"
              >
                <FaRegCopy className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Bio Text */}
      <p className="text-sm sm:text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-400 pt-1.5">
        I taught myself to code and now build full-stack and mobile apps that are{" "}
        <strong className="font-semibold text-black dark:text-white">
          fast, beautiful, and production-ready
        </strong>
        .
      </p>

      {/* Row 3: Spotify status */}
      <div className="pt-0.5">
        <SpotifyStatus />
      </div>

      {/* Row 4: Social links */}
      <div className="pt-0.5">
        <SocialLinks />
      </div>
    </section>
  );
}
