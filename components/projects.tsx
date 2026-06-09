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

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p: Project, idx) => (
          <BlurFade key={p.name} delay={0.05 * idx} duration={0.45}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Project Image Frame (rounded and bordered, representing preview window) */}
                <div className="relative w-full aspect-[1.6/1] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900 shadow-sm transition-all duration-300">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />
                </div>

                {/* Details Section */}
                <div className="space-y-1.5 px-0.5">
                  {/* Name and Status */}
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-[15px] transition-colors group-hover:text-amber-500">
                      {p.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          p.status === "complete" ? "bg-emerald-500" : "bg-amber-500"
                        } ${p.status === "building" && "animate-pulse"}`}
                      />
                      <span className="text-[10px] font-mono tracking-tight capitalize">
                        {p.status}
                      </span>
                    </span>
                  </div>

                  {/* Description paragraph */}
                  <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Row: Tech Icons and View Project Link */}
              <div className="flex items-center justify-between pt-3 px-0.5 border-t border-transparent flex-wrap gap-2 mt-3">
                {/* Technologies List */}
                <div className="flex items-center gap-2">
                  {p.technologies.slice(0, 5).map((tech) => (
                    <div
                      key={tech}
                      title={tech}
                      className="opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-150"
                    >
                      {getTechIcon(tech)}
                    </div>
                  ))}
                </div>

                {/* Arrow Link */}
                <span className="inline-flex items-center gap-1 text-[11px] font-bold font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-150">
                  View Project
                  <span className="text-[10px] leading-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 font-sans">&rarr;</span>
                </span>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}