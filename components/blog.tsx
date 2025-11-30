import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export default function Blog() {
  const blogs = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js, Tailwind, and shadcn/ui showcasing skills, experience, and GitHub contributions.",
      image: "/images/download.jpg",
    },
    {
      title: "Real-time Chat App",
      description:
        "A real-time chat application using Next.js, Socket.io, and MongoDB with live typing indicators and online status.",
      image: "/images/download.jpg",
    },
  ];

  return (
    <div className="space-y-6 mb-10">
      <h1 className="  text-lg font-semibold text-black dark:text-white">
        Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <Card key={index}>
            <div className="relative w-full h-36 -top-8">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            <CardHeader>
              <CardTitle className="  text-lg font-semibold text-black dark:text-white">
                {blog.title}
              </CardTitle>
              <CardDescription className="  text-base leading-[1.6] text-zinc-600 dark:text-zinc-400">
                {blog.description}
              </CardDescription>
            </CardHeader>

            <CardFooter>Technologies</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
