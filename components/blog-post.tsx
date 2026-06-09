import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import getPosts from "@/lib/get-posts";
import BlurFade from "@/components/ui/blur-fade";

export default async function BlogPosts() {
  const posts = await getPosts();
  return (
    <div className="max-w-5xl mx-auto py-12 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <BlurFade key={post.slug} delay={0.05 * idx} duration={0.45}>
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col w-full">
                {/* Image */}
                <div className="relative h-56 bg-muted">
                  <Image
                    src={post.frontmatter?.image || "/placeholder.png"}
                    alt={post.frontmatter?.title || "Blog Post"}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <CardHeader className="pt-6">
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {post?.frontmatter?.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">
                      {post?.frontmatter?.description}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="pt-6 text-sm text-muted-foreground justify-between">
                    <time>
                      {new Date(post?.frontmatter?.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <div className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Read more
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}