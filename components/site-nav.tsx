"use client";

import { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/guest-book", label: "Guestbook" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("banner-video-muted");
    if (stored !== null) {
      setIsMuted(stored === "true");
    }
  }, []);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem("banner-video-muted", String(nextMuted));
    window.dispatchEvent(
      new CustomEvent("toggle-banner-audio", { detail: { isMuted: nextMuted } })
    );
  };

  return (
    <header className="w-full max-w-3xl mx-auto px-6">
      <nav className="flex items-center justify-between py-4 text-[15px] font-mono">
        <div className="flex items-center gap-5">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleMute}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-muted-foreground hover:text-foreground border border-zinc-800/80 cursor-pointer transition-all active:scale-95"
                aria-label={isMuted ? "Play Audio" : "Mute Audio"}
              >
                {isMuted ? (
                  <VolumeX className="h-4.5 w-4.5" />
                ) : (
                  <Volume2 className="h-4.5 w-4.5" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8}>
              <p className="font-mono text-[10px] font-medium">
                {isMuted ? "Play Audio" : "Mute Audio"}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </nav>
    </header>
  );
}
