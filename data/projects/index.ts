import { Project } from "@/types";


export const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js, Tailwind, and shadcn/ui showcasing skills, experience, and GitHub contributions.",
    image: "https://source.unsplash.com/random",
    technologies: ["React", "Node.js", "Express"],
    status: "building"
  },
  {
    name: "Personal CRM",
    description: "A smart personal CRM that pulls LinkedIn profiles instantly, auto-extracts contact info, tracks follow-ups, sends personalized messages, and helps you never miss a connection again.",
    image: "https://source.unsplash.com/random",
    technologies: ["React", "Node.js", "Express", "LinkedIn API"],
    status: "complete"
  },
];