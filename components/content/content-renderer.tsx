import type { ContentBlock } from "@/data"
import { FormulaBlock } from "./formula-block"
import { TableBlock } from "./table-block"

interface ContentRendererProps {
  blocks: ContentBlock[]
}

export function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="space-y-4">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "definition":
            return (
              <div key={idx} className="bg-bg-tertiary border-l-4 border-accent-primary p-4 rounded-r-lg">
                <p className="text-text-primary font-medium mb-1">Definition</p>
                <p className="text-text-secondary">{block.text}</p>
              </div>
            )
          
          case "paragraph":
            return (
              <p key={idx} className="text-text-secondary leading-relaxed">
                {block.text}
              </p>
            )
          
          case "list":
            return (
              <div key={idx} className="my-4">
                {block.title && (
                  <h4 className="text-text-primary font-medium mb-2">{block.title}</h4>
                )}
                <ul className="list-disc list-inside space-y-1 text-text-secondary ml-4">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          
          case "formula":
            return (
              <FormulaBlock
                key={idx}
                latex={block.latex}
                description={block.description}
              />
            )
          
          case "table":
            return (
              <TableBlock
                key={idx}
                headers={block.headers}
                rows={block.rows}
              />
            )
          
          case "example":
            return (
              <div key={idx} className="bg-bg-tertiary border-l-4 border-accent-secondary p-4 rounded-r-lg my-4">
                {block.title && (
                  <p className="text-text-primary font-medium mb-1">{block.title}</p>
                )}
                <p className="text-text-secondary">{block.text}</p>
              </div>
            )
          
          case "warning":
            return (
              <div key={idx} className="bg-bg-tertiary border-l-4 border-accent-warning p-4 rounded-r-lg my-4">
                <p className="text-text-primary font-medium mb-1">⚠️ Warnung</p>
                <p className="text-text-secondary">{block.text}</p>
              </div>
            )
          
          case "note":
            return (
              <div key={idx} className="bg-bg-tertiary border-l-4 border-accent-secondary p-4 rounded-r-lg my-4">
                <p className="text-text-primary font-medium mb-1">ℹ️ Hinweis</p>
                <p className="text-text-secondary">{block.text}</p>
              </div>
            )
          
          default:
            return null
        }
      })}
    </div>
  )
}
