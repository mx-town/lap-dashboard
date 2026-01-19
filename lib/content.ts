import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
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
  sectionNumber: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[äÄ]/g, 'ae')
    .replace(/[öÖ]/g, 'oe')
    .replace(/[üÜ]/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function extractHeadings(markdown: string): HeadingNode[] {
  const headings: HeadingNode[] = []
  const lines = markdown.split('\n')
  
  for (const line of lines) {
    const h2Match = line.match(/^## (.+)$/)
    const h3Match = line.match(/^### (.+)$/)
    
    if (h2Match) {
      headings.push({
        id: slugify(h2Match[1]),
        text: h2Match[1],
        level: 2,
      })
    } else if (h3Match) {
      headings.push({
        id: slugify(h3Match[1]),
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

export function buildSearchIndex(categories: CategoryContent[]): SearchEntry[] {
  return categories.flatMap(cat => 
    cat.headings
      .filter(h => h.level === 2)
      .map(heading => ({
        id: heading.id,
        title: heading.text,
        categoryId: cat.id,
        categoryTitle: cat.title,
        sectionNumber: heading.text.match(/^[\d.]+/)?.[0] || '',
      }))
  )
}
