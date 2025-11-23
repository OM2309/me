import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiExpress,
  SiHono,
  SiSupabase,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDrizzle,
  SiSass,
} from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const skills = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Express.js", icon: SiExpress },
  { name: "Hono", icon: SiHono },
  { name: "Supabase", icon: SiSupabase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Drizzle", icon: SiDrizzle },
  { name: "Sass", icon: SiSass },
];

export default function Technologies() {
  return (
    <div className="space-y-8 mb-10">
      <div>
        <p className="font-inter text-lg font-semibold text-black dark:text-white mb-8">
          Technologies & Tools
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-3 rounded-lg colors border border-dashed border-black dark:border-gray-700"
            >
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center cursor-pointer">
                    <Icon className="w-5 h-5 text-gray-300 mr-2" />
                    <span className=" text-black dark:text-zinc-400 ">
                      {skill.name}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
