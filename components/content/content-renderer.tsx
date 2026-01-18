import type { ContentBlock } from "@/data"
import { FormulaBlock } from "./formula-block"
import { TableBlock } from "./table-block"

interface ContentRendererProps {
  blocks: ContentBlock[]
}

export function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "definition":
            return (
              <div
                key={idx}
                className="bg-accent-primary/5 border-l-4 border-accent-primary p-5 rounded-r-lg"
              >
                <p className="text-sm font-semibold text-accent-primary uppercase tracking-wide mb-2">
                  Definition
                </p>
                <p className="text-text-secondary leading-relaxed">{block.text}</p>
              </div>
            )

          case "paragraph":
            return (
              <p key={idx} className="text-text-secondary leading-relaxed text-base">
                {block.text}
              </p>
            )

          case "list":
            return (
              <div key={idx} className="my-6">
                {block.title && (
                  <h4 className="text-text-primary font-semibold mb-3 text-lg">
                    {block.title}
                  </h4>
                )}
                <ul className="space-y-2 text-text-secondary">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="text-accent-primary mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
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
              <div
                key={idx}
                className="bg-accent-secondary/5 border-l-4 border-accent-secondary p-5 rounded-r-lg my-6"
              >
                {block.title && (
                  <p className="text-sm font-semibold text-accent-secondary uppercase tracking-wide mb-2">
                    {block.title}
                  </p>
                )}
                <p className="text-text-secondary leading-relaxed">{block.text}</p>
              </div>
            )

          case "warning":
            return (
              <div
                key={idx}
                className="bg-accent-warning/5 border-l-4 border-accent-warning p-5 rounded-r-lg my-6"
              >
                <p className="text-sm font-semibold text-accent-warning uppercase tracking-wide mb-2">
                  ⚠️ Warnung
                </p>
                <p className="text-text-secondary leading-relaxed">{block.text}</p>
              </div>
            )

          case "note":
            return (
              <div
                key={idx}
                className="bg-accent-secondary/5 border-l-4 border-accent-secondary p-5 rounded-r-lg my-6"
              >
                <p className="text-sm font-semibold text-accent-secondary uppercase tracking-wide mb-2">
                  ℹ️ Hinweis
                </p>
                <p className="text-text-secondary leading-relaxed">{block.text}</p>
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
