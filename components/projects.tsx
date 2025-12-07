import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { getTechIcon } from "@/utils/get-icons";
import { ExternalLink } from "lucide-react"; // Optional: for icon

export default function Projects() {
  return (
    <div className="space-y-6 mb-10">
      <h1 className="text-lg font-semibold text-black dark:text-white">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p: Project) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="rounded-md shadow-none overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-foreground/20 h-full flex flex-col">
            
              <div className="relative w-full h-48 overflow-hidden bg-muted -mt-10">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-black dark:text-white flex items-center justify-between">
                  <span className="mr-2">{p.name}</span>
                  <Badge
                    variant="secondary"
                    className="text-xs dark:text-white text-black"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-1.5 ${
                        p.status === "complete" ? "bg-green-500" : "bg-orange-500"
                      } ${p.status === "building" && "animate-pulse"}`}
                    />
                    {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                  {p.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-muted rounded-full"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}