import { notFound } from 'next/navigation'

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
    <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
      <p className="text-muted-foreground mb-8">
        {new Date(frontmatter.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
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