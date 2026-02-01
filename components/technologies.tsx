import React from "react";
import { Tooltip, TooltipContent } from "./ui/tooltip";
import { webdev, tools, database, devops } from "@/data/icons/tech-stack";

const allSkills = [...webdev, ...database, ...tools, ...devops];

export default function Technologies() {
  return (
    <div className="space-y-8 mb-10">
      <div>
        <p className="text-lg font-semibold text-black dark:text-white mb-8">
          Technologies & Tools
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {allSkills.map((skill) => (
          <Tooltip key={skill.name}>
            {/* <TooltipTrigger asChild> */}
              <div className="group flex flex-col items-center justify-center gap-3 p-5">
                <div className="transition-transform group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-black dark:text-zinc-300 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            {/* </TooltipTrigger> */}
            <TooltipContent>
              <p>{skill.name}</p>
            </TooltipContent>
          </Tooltip>
          
        ))}
      </div>
    </div>
  );
}