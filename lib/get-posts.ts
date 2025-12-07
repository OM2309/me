import { Post } from '@/types'
import { readdir } from 'fs/promises'
import path from 'path'


type Frontmatter = {
  title: string
  description: string
  date: string
  image?: string
  tags?: string[]
  isPublished?: boolean
}

export default async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), 'data/posts')
  const files = await readdir(postsDir)

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace('.mdx', '')
        const postModule = await import(`@/data/posts/${file}`)
        const frontmatter = postModule.frontmatter as Frontmatter

        return {
          slug,
          frontmatter: {
            title: frontmatter.title || 'Untitled',
            description: frontmatter.description || 'No description',
            date: frontmatter.date || '2025-01-01',
            image: frontmatter.image,
            tags: frontmatter.tags || [],
            isPublished: frontmatter.isPublished !== false,
          },
        }
      })
  )

  return posts
    .filter((post) => post.frontmatter.isPublished)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}
