import Image from "next/image";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { getTechIcon } from "@/utils/get-icons";
import BlurFade from "@/components/ui/blur-fade";

export default function Projects() {
  return (
    <div className="space-y-6 mb-10">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Projects
        </h2>
      </div>

      {/* Grid Container - 4 Projects Layout (2x2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p: Project, idx) => (
          <BlurFade key={p.name} delay={0.05 * idx} duration={0.45}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full flex flex-col justify-between border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Project Image Frame */}
                <div className="relative w-full aspect-[1.6/1] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-sm transition-all duration-300">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Coming Soon Overlay */}
                  {/* {p.status === "coming-soon" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="text-center">
                        <p className="text-sm font-semibold text-zinc-400 tracking-widest mb-2">STAY TUNED</p>
                        <p className="text-4xl font-bold text-zinc-100 drop-shadow-lg">Coming Soon</p>
                      </div>
                    </div>
                  )} */}
                </div>

                {/* Details Section */}
                <div className="space-y-2">
                  {/* Name and Status Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-zinc-100 text-sm leading-tight flex-1">
                      {p.name}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                      p.status === "complete" 
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" 
                        : p.status === "building"
                        ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                        : "bg-blue-500/15 text-blue-300 border border-blue-500/30"
                    }`}>
                      {p.status === "complete" && "•"} {p.status === "complete" ? "Live" : p.status === "building" ? "Building" : "Coming Soon"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-zinc-400 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Bottom: Tech Icons and Link */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800/50 mt-3">
                {/* Technologies */}
                <div className="flex items-center gap-2">
                  {p.technologies.slice(0, 4).map((tech) => (
                    <div
                      key={tech}
                      title={tech}
                      className="text-zinc-400 opacity-70 hover:opacity-100 hover:text-zinc-200 transition-all duration-150"
                    >
                      {getTechIcon(tech)}
                    </div>
                  ))}
                </div>

                {/* Link */}
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors flex items-center gap-1">
                  View
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}