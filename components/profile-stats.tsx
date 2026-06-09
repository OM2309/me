"use client";

import { useState, useEffect } from "react";
import { Eye, Github } from "lucide-react";

export default function ProfileStats() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/om2309/me/traffic/views",
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          const totalViews = data.views?.reduce(
            (sum: number, v: any) => sum + v.count,
            0
          );
          setViews(totalViews || 0);
        }
      } catch (error) {
        console.error("Failed to fetch views:", error);
      }
    };

    fetchViews();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Profile Views */}
      <div className="border border-zinc-800/80 rounded-xl p-4 dark:bg-zinc-950/30 backdrop-blur-xs">
        <div className="flex items-center gap-2 mb-2">
          <Eye className="h-4 w-4 text-zinc-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Profile Views
          </span>
        </div>
        <p className="text-2xl font-bold text-white">
          {views !== null ? views.toLocaleString() : "—"}
        </p>
      </div>

      {/* GitHub Stats */}
      <div className="border border-zinc-800/80 rounded-xl p-4 dark:bg-zinc-950/30 backdrop-blur-xs">
        <div className="flex items-center gap-2 mb-2">
          <Github className="h-4 w-4 text-zinc-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            GitHub Profile
          </span>
        </div>
        <a
          href="https://github.com/om2309"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
        >
          @om2309 →
        </a>
      </div>
    </div>
  );
}
