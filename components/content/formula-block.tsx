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
  
  return (
    <div className="my-4">
      <div className="katex-display">
        <FormulaComponent math={latex} />
      </div>
      {description && (
        <p className="text-text-secondary text-sm mt-2">{description}</p>
      )}
    </div>
  )
}
