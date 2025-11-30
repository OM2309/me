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
import React from "react";

export default function Projects() {
  return (
    <div className="space-y-6 mb-10">
      <h1 className="  text-lg font-semibold text-black dark:text-white">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p: Project) => (
          <React.Fragment key={p.name}>
            <Card className="rounded-md shadow-none overflow-hidden">
              <div className="w-full h-36 relative -top-8 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-75 hover:blur-sm">
                <Image
                  src="/images/portfolio-image.jpg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className=" text-lg font-semibold text-black dark:text-white flex items-center">
                  <div className="mr-2">{p.name}</div>
                  <Badge variant="secondary" className="dark:text-white text-black">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        p.status === "complete" ? "bg-green-500" : "bg-red-500"
                      } animate-spin-slow animate-glow-slow animate-blink`}
                    ></div>
                    {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                  </Badge>
                </CardTitle>
                <CardDescription className="  text-base leading-[1.6] text-zinc-600 dark:text-zinc-400">
                  {p.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
