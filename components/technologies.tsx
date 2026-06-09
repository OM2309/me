import React from "react";
import { webdev, tools, database, devops } from "@/data/icons/tech-stack";

const allSkills = [...webdev, ...database, ...tools, ...devops];

export default function Technologies() {
  return (
    <div className="space-y-6 mb-10">
      <div>
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Skills & Technologies
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 w-full">
        {allSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2.5 px-3.5 py-2 w-full rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-default select-none [&_svg]:!w-[18px] [&_svg]:!h-[18px] [&_svg]:!size-[18px]"
          >
            {/* Icon Wrapper */}
            <div className="shrink-0 flex items-center justify-center">
              {skill.icon}
            </div>

            {/* Name */}
            <span className="text-[13px] font-sans font-medium text-zinc-800 dark:text-zinc-200 truncate">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}