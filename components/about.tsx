"use client";

import Image from "next/image";
import { toast } from "sonner";
import { FaRegCopy } from "react-icons/fa";
import ProfileViewCounter from "@/components/profile-view-counter";
import NamePenflow from "@/components/name-penflow";
import LocationMap from "@/components/location-map";

interface AboutProps {
  initialViewCount?: number;
}

export default function About({ initialViewCount = 0 }: AboutProps) {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("23anuragsharma@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <header className="w-full">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[var(--color-border-subtle)] bg-zinc-900">
          <Image
            src="/images/dp.jpg"
            width={64}
            height={64}
            alt="Anurag Sharma"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="min-w-0 pt-0.5 flex-1">
          <h1 className="font-serif text-3xl sm:text-[2.35rem] leading-[1.1] tracking-tight text-foreground">
            Anurag Sharma
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground font-mono tracking-tight">
            Engineer · Consultant · Full stack developer
          </p>
        </div>
      </div>

      <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-muted-foreground max-w-2xl">
        I taught myself to code and now build full-stack and mobile apps that are{" "}
        <span className="text-foreground font-medium">
          fast, beautiful, and production-ready
        </span>
        .
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground font-mono">
        <ProfileViewCounter initialCount={initialViewCount} />
        <span className="text-[var(--color-border-subtle)]" aria-hidden="true">
          /
        </span>
        <div className="flex items-center gap-1">
          <a
            href="mailto:23anuragsharma@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            23anuragsharma@gmail.com
          </a>
          <button
            onClick={handleCopyEmail}
            title="Copy email"
            className="cursor-pointer text-muted-foreground/70 hover:text-foreground transition-colors p-0.5"
          >
            <FaRegCopy className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* <div className="mt-6">
        <LocationMap />
      </div> */}
    </header>
  );
}
