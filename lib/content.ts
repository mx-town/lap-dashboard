import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import GithubSlugger from 'github-slugger'
import { mdxComponents } from '@/components/mdx/mdx-components'

export interface HeadingNode {
  id: string
  text: string
  level: 2 | 3
}

export interface CategoryContent {
  id: string
  number: number
  title: string
  subtitle: string
  headings: HeadingNode[]
  content: React.ReactElement
  rawMarkdown: string
}

export interface SearchEntry {
  id: string
  title: string
  categoryId: string
  categoryTitle: string
  categoryNumber: number
  sectionNumber: string
  content: string // Plain text content for full-text search
}

function extractHeadings(markdown: string): HeadingNode[] {
  const headings: HeadingNode[] = []
  const slugger = new GithubSlugger()
  const lines = markdown.split('\n')

  for (const line of lines) {
    // Process h1 to keep slugger state in sync with rehype-slug, but don't include in output
    const h1Match = line.match(/^# (.+)$/)
    const h2Match = line.match(/^## (.+)$/)
    const h3Match = line.match(/^### (.+)$/)

    if (h1Match) {
      slugger.slug(h1Match[1]) // Process but don't output
    } else if (h2Match) {
      headings.push({
        id: slugger.slug(h2Match[1]),
        text: h2Match[1],
        level: 2,
      })
    } else if (h3Match) {
      headings.push({
        id: slugger.slug(h3Match[1]),
        text: h3Match[1],
        level: 3,
      })
    }
  }

  return headings
}

export async function getAllContent(): Promise<CategoryContent[]> {
  const knowledgeDir = path.join(process.cwd(), 'knowledge')
  const files = fs.readdirSync(knowledgeDir)
    .filter(f => f.match(/^\d{2}-.*\.md$/))
    .sort()
  
  const content = await Promise.all(files.map(async (filename) => {
    const filePath = path.join(knowledgeDir, filename)
    const source = fs.readFileSync(filePath, 'utf8')
    const { data: frontmatter, content: markdown } = matter(source)
    
    const { content: compiled } = await compileMDX({
      source: markdown,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeKatex, rehypeSlug],
        },
      },
      components: mdxComponents,
    })
    
    const headings = extractHeadings(markdown)
    
    return {
      id: frontmatter.id as string,
      number: frontmatter.number as number,
      title: frontmatter.title as string,
      subtitle: frontmatter.subtitle as string,
      headings,
      content: compiled,
      rawMarkdown: markdown,
    }
  }))
  
  return content
}

// Strip markdown syntax to get plain text for search
function stripMarkdown(text: string): string {
  return text
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    .replace(/`[^`]+`/g, '')
    // Remove images
    .replace(/!\[.*?\]\(.*?\)/g, '')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove bold/italic
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Remove headings markers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Remove list markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Remove blockquotes
    .replace(/^>\s+/gm, '')
    // Remove table syntax
    .replace(/\|/g, ' ')
    .replace(/^[-:]+$/gm, '')
    // Remove HTML tags
    .replace(/<[^>]+>/g, '')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim()
}

// Extract sections split by h2 headings with their content
function extractSections(markdown: string, categoryId: string, categoryTitle: string, categoryNumber: number): SearchEntry[] {
  const sections: SearchEntry[] = []
  const slugger = new GithubSlugger()

  // Split by h2 headings, keeping the heading
  const parts = markdown.split(/^(?=## )/m)

  for (const part of parts) {
    // Process any h1 first to keep slugger in sync
    const h1Match = part.match(/^# (.+)$/m)
    if (h1Match) {
      slugger.slug(h1Match[1])
    }

    // Check if this part starts with an h2
    const h2Match = part.match(/^## (.+)$/m)
    if (h2Match) {
      const title = h2Match[1]
      const id = slugger.slug(title)
      const sectionNumber = title.match(/^[\d.]+/)?.[0] || ''

      // Get content after the h2 heading
      const contentStart = part.indexOf('\n') + 1
      const rawContent = part.slice(contentStart)
      const content = stripMarkdown(rawContent)

      sections.push({
        id,
        title,
        categoryId,
        categoryTitle,
        categoryNumber,
        sectionNumber,
        content,
      })
    }
  }

  return sections
}

export function buildSearchIndex(categories: CategoryContent[]): SearchEntry[] {
  return categories.flatMap(cat =>
    extractSections(cat.rawMarkdown, cat.id, cat.title, cat.number)
  )
}
