import { Link } from "next-view-transitions";
import Image from "next/image";
import getPosts from "@/lib/get-posts";
import BlurFade from "@/components/ui/blur-fade";
import SectionHeading from "@/components/ui/section-heading";
import { ArrowUpRight } from "lucide-react";

interface BlogPostsProps {
  limit?: number;
  showViewAll?: boolean;
  hideHeading?: boolean;
}

export default async function BlogPosts({
  limit,
  showViewAll = false,
  hideHeading = false,
}: BlogPostsProps) {
  const allPosts = await getPosts();
  const posts = limit ? allPosts.slice(0, limit) : allPosts;

  return (
    <div className="w-full space-y-6">
      {!hideHeading ? (
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <SectionHeading as="h2">Writing</SectionHeading>
            <span className="relative inline-block w-5 h-5 select-none shrink-0">
              <Image
                src="/oneko/oneko.gif"
                alt=""
                width={20}
                height={20}
                className="object-contain opacity-70"
                unoptimized
              />
            </span>
          </div>
          {showViewAll && allPosts.length > (limit ?? 0) ? (
            <Link
              href="/blog"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              View all →
            </Link>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-4">
        {posts.map((post, idx) => (
          <BlurFade
            key={post.slug}
            delay={0.05 * idx}
            duration={0.55}
            yOffset={10}
            blur="4px"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-tag-bg)]/40 p-5 transition-colors hover:bg-[var(--color-tag-bg)]/70 hover:border-foreground/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 space-y-2.5">
                  <time
                    dateTime={post.frontmatter.date}
                    className="block text-[11px] font-mono text-muted-foreground/70 uppercase tracking-wide"
                  >
                    {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="font-serif text-lg sm:text-xl text-foreground leading-snug group-hover:text-foreground/80 transition-colors">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.frontmatter.description}
                  </p>
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.frontmatter.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-muted-foreground border border-[var(--color-border-subtle)] rounded-sm bg-[var(--color-button-bg)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/50 group-hover:text-foreground transition-colors mt-1" />
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
