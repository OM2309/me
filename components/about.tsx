import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiSupabase,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiCoffee } from "react-icons/bi";

const About = () => {
  return (
    <section className="p-4 max-w-3xl">
      {/* Name — big and proud */}
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-black to-zinc-600 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent leading-tight">
        Anurag Sharma
      </h1>

 
      <p className="mt-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        I taught myself to code and now build full-stack and mobile apps that are{" "}
        <strong className="font-semibold text-black dark:text-white">
          fast, beautiful, and production-ready
        </strong>
        .
      </p>

      <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        Currently shipping with{" "}
        <strong className="inline-flex flex-wrap items-center gap-3 font-medium text-black dark:text-white">
          <SiNextdotjs className="w-5 h-5" /> Next.js
          <span className="text-zinc-500">•</span>
          <SiReact className="text-[#61DAFB] w-5 h-5" /> React
          <span className="text-zinc-500">•</span>
          <SiTypescript className="text-[#3178C6] w-5 h-5" /> TypeScript
          <span className="text-zinc-500">•</span>
          <FaNodeJs className="text-[#339933] w-5 h-5" /> Node.js
          <span className="text-zinc-500">•</span>
          <SiSupabase className="text-[#3ECF8E] w-5 h-5" /> Supabase
        </strong>
      </p>

     
      <p className="mt-6 text-base italic text-zinc-500 dark:text-zinc-400">
        — powered by chai and late-night focus sessions <BiCoffee className="inline ml-1 text-orange-500 transform rotate-12" />
      </p>
    </section>
  );
};

export default About;