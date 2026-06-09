"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TechTag from "@/components/tech-tag";
import SectionHeading from "@/components/ui/section-heading";
import { webdev, tools, database, devops } from "@/data/icons/tech-stack";
import {
  FaJs,
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiDrizzle,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiOpenai,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Postgres", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ...webdev
        .filter((s) => s.name === "React Native")
        .map((s) => ({ name: s.name, icon: s.icon })),
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Drizzle", icon: <SiDrizzle className="text-yellow-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-blue-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "OpenAI", icon: <SiOpenai /> },
      ...tools
        .filter((s) => ["Jest", "Cypress"].includes(s.name))
        .map((s) => ({ name: s.name, icon: s.icon })),
    ],
  },
  {
    label: "Platforms",
    items: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Vercel", icon: <SiVercel /> },
      ...devops
        .filter((s) => s.name === "AWS")
        .map((s) => ({ name: s.name, icon: s.icon })),
    ],
  },
  {
    label: "Softwares",
    items: [
      { name: "Cursor", icon: <VscVscode className="text-blue-400" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ...database
        .filter((s) => ["MySQL", "Redis"].includes(s.name))
        .map((s) => ({ name: s.name, icon: s.icon })),
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
