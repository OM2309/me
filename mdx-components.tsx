// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
  
    img: (props) => (
      <div className="my-8 -mx-5 sm:mx-0">
        <Image
          src={props.src as string}
          alt={props.alt as string}
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl border border-border shadow-lg object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={95}
        />
        {props.alt && (
          <p className="text-center text-sm text-muted-foreground mt-3 italic">
            {props.alt}
          </p>
        )}
      </div>
    ),

  
    h1: ({ children }) => (
      <h1 className="text-4xl sm:text-5xl font-bold mt-16 mb-6 tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-12 mb-4 flex items-center gap-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-10 mb-3">{children}</h3>
    ),

    
    p: ({ children }) => (
      <p className="text-lg leading-8 text-foreground/90 my-6">{children}</p>
    ),


    ul: ({ children }) => (
      <ul className="my-6 space-y-3 list-none pl-1">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="flex gap-3 text-foreground/90">
        <span className="text-primary mt-1.5">→</span>
        <span className="flex-1">{children}</span>
      </li>
    ),

    blockquote: ({ children }) => (
      <div className="my-10 border-l-4 border-primary/50 pl-6 py-2 italic text-foreground/80">
        {children}
      </div>
    ),

    // Code blocks – keep default (you probably have rehype-pretty-code or similar)
    // Inline code
    code: ({ children }) => (
      <code className="px-2 py-1 rounded-md bg-muted text-sm font-mono">
        {children}
      </code>
    ),

    // Horizontal rule
    hr: () => <Separator className="my-12" />,

    // Bonus: make <Alert> work in MDX
    Alert: ({ children }) => <Alert className="my-8">{children}</Alert>,
    AlertTitle: AlertTitle,
    AlertDescription: AlertDescription,

    // Bonus: Button & Badge
    Button,
    Badge,

    ...components,
  }
}