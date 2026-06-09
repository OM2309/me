"use client";

import { GitHubCalendar } from "react-github-calendar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const selectLastThreeMonths = (contributions: any[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 3;
  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthDifference =
      (currentYear - date.getFullYear()) * 12 + (currentMonth - date.getMonth());
    return monthDifference < shownMonths;
  });
};

export default function GithubContribution() {
  return (
    <section className="space-y-6">
      {/* Title */}
      <h2 className="text-lg font-semibold text-black dark:text-white flex items-center gap-2">
        <FaGithub className="h-5 w-5" />
        GitHub
      </h2>

      {/* Grid Container */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 p-6 shadow-xs backdrop-blur-xs">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2 text-xs font-mono">
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">Contributions</span>
          </div>
          <a
            href="https://github.com/om2309"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>@om2309</span>
            <FaExternalLinkAlt className="h-2.5 w-2.5" />
          </a>
        </div>

        {/* Scrollable calendar view for mobile responsiveness */}
        <div className="overflow-x-auto overflow-y-hidden pb-1 hide-scrollbar">
          <div className="flex justify-center">
            <GitHubCalendar
              username="om2309"
              blockSize={10}
              blockMargin={4}
              fontSize={11}
              transformData={selectLastThreeMonths}
              labels={{
                totalCount: "{{count}} contributions in the last 3 months",
              }}
              theme={{
                light: [
                  "#f4f4f5",
                  "#e4e4e7",
                  "#d4d4d8",
                  "#a1a1aa",
                  "#71717a",
                ],
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
      </div>
    </section>
  );
}
