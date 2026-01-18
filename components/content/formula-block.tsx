"use client"

import { InlineMath, BlockMath } from "react-katex"
import "katex/dist/katex.min.css"

interface FormulaBlockProps {
  latex: string
  description?: string
  inline?: boolean
}

export function FormulaBlock({ latex, description, inline = false }: FormulaBlockProps) {
  const FormulaComponent = inline ? InlineMath : BlockMath

  if (inline) {
    return (
      <span className="inline-block">
        <FormulaComponent math={latex} />
      </span>
    )
  }

  return (
    <div className="my-6">
      <div className="bg-bg-secondary border border-border-subtle rounded-lg p-5 overflow-x-auto">
        <FormulaComponent math={latex} />
      </div>
      {description && (
        <p className="text-text-muted text-sm mt-3 italic">{description}</p>
      )}
    </div>
  )
}
