"use client";

import { useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiPostman,
  SiNginx,
  SiBun,
  SiWebpack,
  SiRedux,
  SiGraphql,
  SiDrizzle,
  SiFastify,
} from "react-icons/si";
import { FaJava, FaReact, FaGithub } from "react-icons/fa";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export default function Technologies() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const row1: TechItem[] = [
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] bg-black rounded-sm w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Java", icon: <FaJava className="text-[#E76F00] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-foreground w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Express.js", icon: <SiExpress className="text-foreground w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "GitHub", icon: <FaGithub className="text-foreground w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
  ];

  const row2: TechItem[] = [
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Nginx", icon: <SiNginx className="text-[#009639] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Bun", icon: <SiBun className="text-[#F9F1E7] bg-zinc-950 dark:bg-transparent rounded-full w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Webpack", icon: <SiWebpack className="text-[#8DD6F9] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-[#E10098] w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Drizzle ORM", icon: <SiDrizzle className="text-[#C5F74F] bg-black rounded-sm w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
    { name: "Fastify", icon: <SiFastify className="text-foreground w-6 h-6 sm:w-[26px] sm:h-[26px]" /> },
  ];

  return (
    <div className="text-sm">
      <h2 className="text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-6">
        Tech Stack
      </h2>

      <div className="flex flex-col gap-5 sm:gap-6">
        {/* Row 1 */}
        <div className="flex flex-nowrap gap-3.5 sm:gap-4.5 items-center overflow-x-auto hide-scrollbar py-1">
          {row1.map((tech) => (
            <div
              key={tech.name}
              className="relative group transition-transform duration-200 hover:scale-115 hover:rotate-2 cursor-pointer shrink-0"
              onMouseEnter={() => setActiveTooltip(tech.name)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {tech.icon}
              {activeTooltip === tech.name && (
                <div className="absolute z-30 bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium font-mono text-zinc-100 bg-zinc-900 border border-zinc-800 rounded shadow-md pointer-events-none whitespace-nowrap">
                  {tech.name}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-nowrap gap-3.5 sm:gap-4.5 items-center overflow-x-auto hide-scrollbar py-1">
          {row2.map((tech) => (
            <div
              key={tech.name}
              className="relative group transition-transform duration-200 hover:scale-115 hover:rotate-2 cursor-pointer shrink-0"
              onMouseEnter={() => setActiveTooltip(tech.name)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {tech.icon}
              {activeTooltip === tech.name && (
                <div className="absolute z-30 bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium font-mono text-zinc-100 bg-zinc-900 border border-zinc-800 rounded shadow-md pointer-events-none whitespace-nowrap">
                  {tech.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
