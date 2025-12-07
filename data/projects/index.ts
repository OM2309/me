import { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, Tailwind, and shadcn/ui showcasing skills, experience, and GitHub contributions.",
    image: "/images/portfolio-image.jpg",
    technologies: ["Next.js", "shadcn/ui", "drizzle", "betterauth"],
    status: "building",
    link:"https://anurag-uat.vercel.app/"
  },
  {
    name: "Personal CRM",
    description:
      "A smart personal CRM that pulls LinkedIn profiles instantly, auto-extracts contact info, tracks follow-ups, sends personalized messages.",
    image: "/images/image.png",
    technologies: ["React", "Node.js", "Express", "LinkedIn API"],
    status: "complete",
      link:"https://anurag-uat.vercel.app/"
  },
];
