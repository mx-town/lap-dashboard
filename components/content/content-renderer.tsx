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
                className="bg-gradient-to-r from-accent-primary/8 to-accent-primary/3 border-l-4 border-accent-primary p-5 rounded-r-xl shadow-sm"
              >
                <p className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
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
                  <h4 className="text-text-primary font-semibold mb-4 text-base flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent-primary/60 rounded-full"></span>
                    {block.title}
                  </h4>
                )}
                <ul className="space-y-3 text-text-secondary">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50 mt-2.5 flex-shrink-0 group-hover:bg-accent-primary transition-colors"></span>
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
                className="bg-gradient-to-r from-accent-secondary/8 to-accent-secondary/3 border-l-4 border-accent-secondary p-5 rounded-r-xl shadow-sm my-6"
              >
                <p className="text-xs font-bold text-accent-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary"></span>
                  {block.title || "Beispiel"}
                </p>
                <p className="text-text-secondary leading-relaxed">{block.text}</p>
              </div>
            )

          case "warning":
            return (
              <div
                key={idx}
                className="bg-gradient-to-r from-accent-warning/10 to-accent-warning/5 border-l-4 border-accent-warning p-5 rounded-r-xl shadow-sm my-6"
              >
                <p className="text-xs font-bold text-accent-warning uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="text-sm">⚠️</span>
                  Warnung
                </p>
                <p className="text-text-secondary leading-relaxed">{block.text}</p>
              </div>
            )

          case "note":
            return (
              <div
                key={idx}
                className="bg-gradient-to-r from-accent-secondary/8 to-accent-secondary/3 border-l-4 border-accent-secondary p-5 rounded-r-xl shadow-sm my-6"
              >
                <p className="text-xs font-bold text-accent-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="text-sm">ℹ️</span>
                  Hinweis
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
