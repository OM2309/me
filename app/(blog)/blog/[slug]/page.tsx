import { notFound } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { ArrowLeft } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  let Content
  let frontmatter

  try {
    const postModule = await import(`@/data/posts/${slug}.mdx`)
    Content = postModule.default
    frontmatter = postModule.frontmatter
  } catch (err) {
    console.log('Post not found:', err)
    notFound()
  }

  return (
    <article className="prose dark:prose-invert prose-headings:font-serif prose-headings:font-normal prose-a:text-foreground w-full max-w-none py-4">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors mb-8 no-underline not-prose"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to writing
      </Link>
      <h1 className="font-serif text-2xl sm:text-3xl !font-normal tracking-tight !mb-3 !mt-0">
        {frontmatter?.title}
      </h1>
      <p className="text-xs font-mono text-muted-foreground !mb-10 !mt-0 not-prose">
        {new Date(frontmatter?.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <Content />
    </article>
  )
}

export async function generateStaticParams() {
  const { readdir } = await import('fs/promises')
  const path = await import('path')
  const dir = path.join(process.cwd(), 'data/posts')
  const files = await readdir(dir)

  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({
      slug: f.replace('.mdx', '').trim(), 
    }))
}