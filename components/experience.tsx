"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Role {
  title: string;
  duration: string;
  location: string;
  type: string;
  responsibilities?: string[];
  technologies?: string[];
  expandable?: boolean;
}

interface Company {
  name: string;
  logo: string;
  url?: string;
  current?: boolean;
  roles: Role[];
}

const companies: Company[] = [
  {
    name: "Memorres",
    logo:
      "https://media.licdn.com/dms/image/v2/D560BAQFvlZNd4LPNoQ/company-logo_200_200/company-logo_200_200/0/1722860798119/memorres_logo?e=1782345600&v=beta&t=76QE2aYmw4SD8WwaYRbhBRV8L-3Pz9-s9HEOFXZvhNE",
    current: true,
    roles: [
      {
        title: "Consultant",
        duration: "Apr 2026 - Present",
        location: "Jaipur, Rajasthan, India",
        type: "Full-Time",
        expandable: true,
        responsibilities: [
          "Architect and engineer high-performance web applications using React, Next.js, and TypeScript.",
          "Collaborate with product and design teams to deliver seamless user experiences.",
          "Perform code reviews, optimize database structures, and establish engineering best practices.",
        ],
        technologies: [
          "TypeScript",
          "Next.js",
          "React",
          "Node.js",
          "PostgreSQL",
          "Drizzle ORM",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    name: "Octal IT Solution",
    logo: "/images/octal.jpg",
    roles: [
      {
        title: "Software Developer",
        duration: "Feb 2025 - Apr 2026",
        location: "Jaipur, Rajasthan, India",
        type: "Full-Time",
        expandable: true,
        responsibilities: [
          "Built smart and interactive web apps using React, Next.js, React Native, and the MERN stack.",
          "Implemented responsive designs and optimized performance across multiple platforms.",
          "Contributed to team growth through knowledge sharing and mentoring junior developers.",
        ],
        technologies: [
          "TypeScript",
          "Next.js",
          "React",
          "React Native",
          "MongoDB",
          "Express",
          "Node.js",
          "Tailwind CSS",
        ],
      },
    ],
  },
];

function RoleEntry({
  role,
  isLast,
  showConnector,
}: {
  role: Role;
  isLast: boolean;
  showConnector: boolean;
}) {
  const [open, setOpen] = useState(false);
  const canExpand =
    role.expandable &&
    ((role.responsibilities?.length ?? 0) > 0 ||
      (role.technologies?.length ?? 0) > 0);

  return (
    <div className={`relative ${isLast ? "" : "pb-6"} pl-6`}>
      <div className="absolute border-b-2 border-l-2 border-[var(--color-border-subtle)] w-[18px] h-[18px] rounded-bl-md left-0 -top-2 pointer-events-none" />
      {showConnector && !isLast && (
        <div className="absolute left-0 top-0 w-0.5 bg-[var(--color-border-subtle)] h-full" />
      )}

      <div className="flex-1 min-w-0 ml-0.5">
        <div
          className={`group transition-colors ${canExpand ? "cursor-pointer" : ""}`}
          onClick={() => canExpand && setOpen(!open)}
          onKeyDown={(e) => {
            if (canExpand && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              setOpen(!open);
            }
          }}
          role={canExpand ? "button" : undefined}
          tabIndex={canExpand ? 0 : undefined}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 flex items-center gap-2">
              <h4 className="font-medium text-sm">{role.title}</h4>
            </div>
            {canExpand && (
              <div
                className="text-muted-foreground group-hover:text-foreground transition-colors rounded-full p-1.5 -mt-1"
                aria-label={open ? "Collapse" : "Expand"}
              >
                {open ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {role.duration}
            <span className="hidden sm:inline"> · {role.location}</span> ·{" "}
            {role.type}
          </p>
        </div>

        <AnimatePresence initial={false}>
          {open && canExpand && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3">
                {role.responsibilities && role.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-muted-foreground/50 shrink-0">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {role.technologies && role.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium border border-[var(--color-border-subtle)] rounded-sm bg-[var(--color-tag-bg)] text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CompanyBlock({ company }: { company: Company }) {
  return (
    <div className="flex gap-0 relative">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center w-8 relative">
            <div className="w-8 h-8 border border-[var(--color-border-subtle)] bg-[var(--color-tag-bg)] rounded-sm flex items-center justify-center overflow-hidden relative z-10 shrink-0">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {company.url ? (
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline transition-all"
            >
              {company.name}
            </a>
          ) : (
            <h3 className="text-sm font-medium">{company.name}</h3>
          )}

          {company.current && (
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-muted-foreground opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-muted-foreground" />
              <span className="sr-only">Current employer</span>
            </span>
          )}
        </div>

        <div className="relative ml-3.5 pt-2">
          {company.roles.map((role, index) => (
            <RoleEntry
              key={`${role.title}-${role.duration}`}
              role={role}
              isLast={index === company.roles.length - 1}
              showConnector={company.roles.length > 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="space-y-1">
      {companies.map((company) => (
        <CompanyBlock key={company.name} company={company} />
      ))}
    </div>
  );
}
