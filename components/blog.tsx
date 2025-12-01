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
      title: "Building a Design System with shadcn/ui and Tailwind CSS",
      description:
        "A deep dive into creating reusable, accessible, and beautiful components using shadcn/ui, Radix primitives, and Tailwind CSS in a Next.js 14 application.",
      image: "/blogs/nextnew.png", // you can replace with actual images later
    },
    {
      title: "From Zero to Deploy: My Experience with Vercel & GitHub Actions",
      description:
        "A step-by-step walkthrough of setting up preview deployments, environment variables, and automated workflows for a full-stack Next.js application.",
      image: "/blogs/download.png",
    },
  ];

  return (
    <div className="space-y-6 mb-10">
      <h1 className="text-lg font-semibold text-black dark:text-white">
        Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <Card key={index} className="rounded-md shadow-none overflow-hidden">
            <div className="w-full h-36 relative -top-8 cursor-pointer">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg" 
              />
            </div>

            <CardHeader className="">
              <CardTitle className="text-lg font-semibold text-black dark:text-white line-clamp-2">
                {blog.title}
              </CardTitle>
              <CardDescription className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {blog.description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="text-sm text-muted-foreground">
              Read more →
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}