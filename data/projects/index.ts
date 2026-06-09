import { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, Tailwind, and shadcn/ui showcasing skills, experience, and GitHub contributions.",
    image: "/images/portfolio-image.jpg",
    technologies: ["Next.js", "shadcn/ui", "drizzle", "betterauth"],
    status: "building",
    link: "https://anurag-uat.vercel.app/",
  },
  {
    name: "Sunlake Card",
    description:
      "A production-grade digital card platform built with Next.js and Node.js, featuring a React-based admin panel, BullMQ-powered background job processing, Redis-backed email queuing, secure authentication, and scalable REST APIs.",
    image: "/images/sunlake.png",
    technologies: ["Next.js", "React", "Node.js", "Redis", "BullMQ"],
    status: "complete",
    link: "http://sunlakecards.com/",
  },
  {
    name: "AI Agent Orchestrator",
    description:
      "An intelligent multi-agent system that automates complex workflows using LLMs, real-time processing, and intelligent task distribution for enterprise applications.",
    image: "/images/coming-soon.webp",
    technologies: ["TypeScript", "LangChain", "Node.js", "React", "PostgreSQL"],
    status: "coming-soon",
    link: "#",
  },
  {
    name: "Web3 DApp Platform",
    description:
      "A decentralized application platform built with Solidity, ethers.js, and Web3.js enabling seamless blockchain interactions and smart contract integrations.",
    image: "/images/coming-soon.webp",
    technologies: ["Solidity", "ethers.js", "Next.js", "Hardhat", "Web3.js"],
    status: "coming-soon",
    link: "#",
  },
];
