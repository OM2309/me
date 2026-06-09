import { Link } from "next-view-transitions";
import Image from "next/image";
import getPosts from "@/lib/get-posts";
import BlurFade from "@/components/ui/blur-fade";

export default async function BlogPosts() {
  const posts = await getPosts();
  return (
    <div className="w-full py-12 space-y-10">
      {/* Blog Heading with Animated Oneko Cat */}
      <div className="flex items-center gap-3 border-b border-dashed border-zinc-200 dark:border-zinc-800/80 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white flex items-center gap-2">
          Blog
          <span className="relative w-6 h-6 select-none shrink-0 inline-block align-middle">
            <Image
              src="/oneko/oneko.gif"
              alt="Running Cat GIF"
              fill
              className="object-contain"
              unoptimized
            />
          </span>
        </h1>
      </div>

      {/* Posts list */}
      <div className="space-y-12">
        {posts.map((post, idx) => (
          <BlurFade key={post.slug} delay={0.05 * idx} duration={0.45}>
            <Link href={`/blog/${post.slug}`} className="group block space-y-2.5">
              <h3 className="text-[17px] sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-500 transition-colors">
                {post.frontmatter.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 text-[13.5px] sm:text-sm text-zinc-550 dark:text-zinc-400">
                <p className="leading-relaxed max-w-xl">
                  {post.frontmatter.description}
                </p>
                <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors shrink-0 font-medium inline-flex items-center gap-1">
                  Read more
                  <span className="text-[10px] transition-transform group-hover:translate-x-0.5 font-sans">&rarr;</span>
                </span>
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400 dark:text-zinc-500 font-mono tracking-tight">
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}