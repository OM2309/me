import { FaReact } from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiLinkedin,
  SiMongodb,
  SiPostgresql,
  // SiShadcnUi,
  SiDrizzle,
  // SiBetterauth,
} from "react-icons/si";

const techIconMap: Record<string, React.ReactNode> = {
  "React": <FaReact className="text-sky-400 w-3.5 h-3.5" />,
  "Next.js": <SiNextdotjs className="w-3.5 h-3.5" />,
  // "shadcn/ui": <SiShadcnUi className="w-3.5 h-3.5 text-purple-500" />,
  "drizzle": <SiDrizzle className="w-3.5 h-3.5 text-yellow-500" />,
  // "betterauth": <SiBetterauth className="w-3.5 h-3.5 text-red-500" />,
  "Node.js": <SiNodedotjs className="w-3.5 h-3.5 text-green-500" />,
  "Express": <SiExpress className="w-3.5 h-3.5 text-gray-400" />,
  "TypeScript": <SiTypescript className="w-3.5 h-3.5 text-blue-600" />,
  "Tailwind": <SiTailwindcss className="w-3.5 h-3.5 text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="w-3.5 h-3.5 text-cyan-400" />,
  "LinkedIn API": <SiLinkedin className="w-3.5 h-3.5 text-blue-700" />,
  "MongoDB": <SiMongodb className="w-3.5 h-3.5 text-green-600" />,
  "PostgreSQL": <SiPostgresql className="w-3.5 h-3.5 text-blue-600" />,
};

export function getTechIcon(tech: string) {
  return techIconMap[tech] || <div className="w-3.5 h-3.5 rounded-full bg-gray-500" />;
}