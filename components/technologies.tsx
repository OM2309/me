"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TechTag from "@/components/tech-tag";
import SectionHeading from "@/components/ui/section-heading";
import {
  FaJs,
  FaAnchor,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiDrizzle,
  SiExpress,
  SiNestjs,
  SiDocker,
  SiSolidity,
  SiPython,
  SiRust,
  SiKubernetes,
  SiGithubactions,
} from "react-icons/si";
import { GiAnvil } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Solidity", icon: <SiSolidity className="text-slate-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
      { name: "Rust", icon: <SiRust className="text-orange-500" /> },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Anchor", icon: <FaAnchor className="text-blue-400" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-400" /> },
      { name: "Foundry", icon: <GiAnvil className="text-amber-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "CI/CD", icon: <SiGithubactions className="text-gray-400" /> },
    ],
  },
];

export default function Technologies() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-sm">
      <SectionHeading className="mb-4">Tools I use? See below</SectionHeading>

      <div>
        <p className="leading-[2] text-muted-foreground mb-2">
          My main tech stack is{" "}
          <TechTag icon={<SiNextdotjs />} name="Next.js" />
          framework with{" "}
          <TechTag icon={<SiTailwindcss className="text-cyan-400" />} name="Tailwind CSS" />
          as a styling library. For the database I use{" "}
          <TechTag icon={<SiPostgresql className="text-blue-400" />} name="Postgres" />
          with{" "}
          <TechTag icon={<SiDrizzle className="text-yellow-500" />} name="Drizzle" />
          or{" "}
          <TechTag icon={<SiPrisma className="text-blue-500" />} name="Prisma" />
          as an ORM. I use{" "}
          <TechTag icon={<VscVscode className="text-blue-400" />} name="Cursor IDE" />
          for creating awesome projects.
          {expanded && (
            <span className="block mt-4 space-y-4">
              {categories.map((category) => (
                <span key={category.label} className="block">
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    {category.label}
                  </span>
                  <span className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <TechTag
                        key={item.name}
                        icon={item.icon}
                        name={item.name}
                      />
                    ))}
                  </span>
                </span>
              ))}
            </span>
          )}
          <span className="block mt-1">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex cursor-pointer items-center bg-[var(--color-button-bg)] border border-[var(--color-border-subtle)] rounded-sm gap-1 px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-[var(--color-tag-bg)] align-middle mt-1"
            >
              <span>{expanded ? "Show Less" : "Show All"}</span>
              {expanded ? (
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              ) : (
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}
