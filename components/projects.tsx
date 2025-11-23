import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

export default function Projects() {
  return (
    <div className="space-y-6 mb-10">
      <h1 className="font-inter text-lg font-semibold text-black dark:text-white">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Project 1 */}
        <Card className="rounded-xl shadow-none overflow-hidden">
          <div className="w-full h-36 relative -top-8">
            <Image
              src="/images/download.jpg"
              alt="Project 1"
              fill
              className="object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white flex items-center">
              <div className="mr-2">
                Portfolio Website
              </div>
              <Badge variant="secondary" className="dark:text-white text-black">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-spin-slow animate-glow-slow animate-blink"></div>
                Building
              </Badge>
            </CardTitle>
            <CardDescription className="font-inter text-base leading-[1.6] text-zinc-600 dark:text-zinc-400">
              A personal portfolio built with Next.js, Tailwind, and shadcn/ui
              showcasing skills, experience, and GitHub contributions.
            </CardDescription>
          </CardHeader>

          <CardFooter>Technologies</CardFooter>
        </Card>

        {/* Project 2 */}
        <Card className=" rounded-xl shadow-none overflow-hidden">
          <div className="w-full h-36 relative -top-8">
            <Image
              src="/images/download.jpg"
              alt="Project 2"
              fill
              className="object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white">
              Real-time Chat App
            </CardTitle>
            <CardDescription className="font-inter text-base leading-[1.6] text-zinc-600 dark:text-zinc-400">
              A real-time chat application using Next.js, Socket.io, and MongoDB
              with live typing indicators and online status.
            </CardDescription>
          </CardHeader>

          <CardFooter>Technologies</CardFooter>
        </Card>
        {/* Project 2 */}
        <Card className=" rounded-xl shadow-none overflow-hidden">
          <div className="w-full h-36 relative -top-8">
            <Image
              src="/images/download.jpg"
              alt="Project 2"
              fill
              className="object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white">
              Real-time Chat App
            </CardTitle>
            <CardDescription className="font-inter text-base leading-[1.6] text-zinc-600 dark:text-zinc-400">
              A real-time chat application using Next.js, Socket.io, and MongoDB
              with live typing indicators and online status.
            </CardDescription>
          </CardHeader>

          <CardFooter>Technologies</CardFooter>
        </Card>
        {/* Project 2 */}
        <Card className=" rounded-xl shadow-none overflow-hidden">
          <div className="w-full h-36 relative -top-8">
            <Image
              src="/images/download.jpg"
              alt="Project 2"
              fill
              className="object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="font-inter text-lg font-semibold text-black dark:text-white">
              Real-time Chat App
            </CardTitle>
            <CardDescription className="font-inter text-base leading-[1.6] text-zinc-600 dark:text-zinc-400">
              A real-time chat application using Next.js, Socket.io, and MongoDB
              with live typing indicators and online status.
            </CardDescription>
          </CardHeader>

          <CardFooter>Technologies</CardFooter>
        </Card>
      </div>
    </div>
  );
}
