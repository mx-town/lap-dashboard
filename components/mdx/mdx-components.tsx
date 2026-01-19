import type { MDXComponents } from 'mdx/types'
import { Definition } from './definition'
import { Warning } from './warning'
import { Note } from './note'
import { Example } from './example'

export const mdxComponents: MDXComponents = {
  // Custom components
  Definition,
  Warning,
  Note,
  Example,
  
  // Override native elements for consistent styling
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl font-bold text-text-primary mt-8 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4 pb-2 border-b border-border-subtle" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-lg font-medium text-text-primary mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-base font-medium text-text-primary mt-4 mb-2" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="text-text-secondary leading-relaxed my-3" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside space-y-1 my-3 text-text-secondary" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside space-y-1 my-3 text-text-secondary" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-text-primary" {...props}>
      {children}
    </strong>
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full border-collapse border border-border-subtle" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-bg-secondary" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th className="border border-border-subtle px-4 py-2 text-left text-sm font-semibold text-text-primary" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-border-subtle px-4 py-2 text-sm text-text-secondary" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }) => (
    <tr className="even:bg-bg-secondary/50" {...props}>
      {children}
    </tr>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-accent-primary pl-4 my-4 italic text-text-secondary" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }) => (
    <code className="bg-bg-secondary px-1.5 py-0.5 rounded text-sm font-mono text-accent-primary" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre className="bg-bg-secondary p-4 rounded-lg overflow-x-auto my-4 text-sm" {...props}>
      {children}
    </pre>
  ),
  hr: (props) => (
    <hr className="my-8 border-border-subtle" {...props} />
  ),
  a: ({ children, href, ...props }) => (
    <a 
      href={href} 
      className="text-accent-primary hover:text-accent-secondary underline" 
      {...props}
    >
      {children}
    </a>
  ),
}
