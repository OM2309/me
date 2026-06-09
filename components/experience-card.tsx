"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ExperienceCardProps } from "@/types";

const ExperienceCard = ({
  name,
  role,
  duration,
  current,
  address,
  logo,
  responsibilities,
  technologies,
  metrics,
}: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dashed border-zinc-200 dark:border-zinc-800/80 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
      {/* Clickable Card Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-4 cursor-pointer group select-none"
      >
        {/* Left: Logo and Titles */}
        <div className="flex items-center gap-3.5 min-w-0">
          {/* Company Logo Box */}
          <div className="w-11 h-11 rounded-xl border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-center overflow-hidden shrink-0 bg-white dark:bg-zinc-950/40">
            <Image
              src={logo}
              alt={name}
              width={44}
              height={44}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Titles */}
          <div className="space-y-0.5 min-w-0">
            <h3 className="font-semibold text-black dark:text-white text-[15px] sm:text-base group-hover:text-amber-500 transition-colors truncate">
              {name}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-[13px] font-medium">
              {role}
            </p>
          </div>
        </div>

        {/* Right: Duration, Location & Chevron */}
        <div className="flex items-center gap-3 text-right shrink-0">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 justify-end">
              <span className="text-xs sm:text-[13px] font-semibold text-zinc-800 dark:text-zinc-200">
                {duration}
              </span>
              <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                {isOpen ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 dark:text-zinc-500 font-mono tracking-tight">
              {address.includes("Remote") ? "Remote" : "On-site"}
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Accordion Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-5 pl-1 sm:pl-[58px] space-y-4">
              {/* Metrics Grid */}
              {metrics && metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-dashed border-zinc-200 dark:border-zinc-800/80">
                  {metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <p className="text-sm sm:text-base font-bold text-black dark:text-white leading-none">
                        {metric.value}
                      </p>
                      <p className="text-[9px] sm:text-[10px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase font-semibold">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Responsibilities List */}
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-xs sm:text-[13px] leading-relaxed pl-1">
                {responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="text-zinc-400 dark:text-zinc-600 select-none mt-1.5 text-[8px]">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-950/20 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceCard;
