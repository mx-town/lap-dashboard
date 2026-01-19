import type { ContentBlock } from "@/data"
import { FormulaBlock } from "./formula-block"
import { TableBlock } from "./table-block"

interface ContentRendererProps {
  blocks: ContentBlock[]
}

export function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="space-y-5">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "definition":
            return (
              <div
                key={idx}
                className="border-l-2 border-accent-primary pl-4 py-1"
              >
                <p className="text-xs font-medium text-accent-primary uppercase tracking-wide mb-1">
                  Definition
                </p>
                <p className="text-text-secondary leading-relaxed text-sm">{block.text}</p>
              </div>
            )

          case "paragraph":
            return (
              <p key={idx} className="text-text-secondary leading-relaxed text-sm">
                {block.text}
              </p>
            )

          case "list":
            return (
              <div key={idx}>
                {block.title && (
                  <h4 className="text-text-primary font-medium mb-3 text-sm">
                    {block.title}
                  </h4>
                )}
                <ul className="space-y-2 text-text-secondary text-sm">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-text-muted mt-1.5">•</span>
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
                className="border-l-2 border-accent-secondary pl-4 py-1 my-4"
              >
                <p className="text-xs font-medium text-accent-secondary uppercase tracking-wide mb-1">
                  {block.title || "Beispiel"}
                </p>
                <p className="text-text-secondary leading-relaxed text-sm">{block.text}</p>
              </div>
            )

          case "warning":
            return (
              <div
                key={idx}
                className="border-l-2 border-accent-warning pl-4 py-1 my-4"
              >
                <p className="text-xs font-medium text-accent-warning uppercase tracking-wide mb-1">
                  Warnung
                </p>
                <p className="text-text-secondary leading-relaxed text-sm">{block.text}</p>
              </div>
            )

          case "note":
            return (
              <div
                key={idx}
                className="border-l-2 border-text-muted pl-4 py-1 my-4"
              >
                <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-1">
                  Hinweis
                </p>
                <p className="text-text-secondary leading-relaxed text-sm">{block.text}</p>
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
