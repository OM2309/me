"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubContribution() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-6 shadow-xl">

        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm text-zinc-400">
            GitHub Contributions
          </h2>

          <span className="text-xs text-zinc-500">
            @om2309
          </span>
        </div>

        {/* Calendar */}
        <div className="overflow-hidden">
          <GitHubCalendar
            username="om2309"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            colorScheme="dark"
            labels={{
              totalCount: "{{count}} contributions in the last 12 months",
            }}
            theme={{
              dark: [
                "#18181b",
                "#27272a",
                "#3f3f46",
                "#52525b",
                "#a1a1aa",
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
}
