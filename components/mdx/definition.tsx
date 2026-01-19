interface DefinitionProps {
  children: React.ReactNode
}

export function Definition({ children }: DefinitionProps) {
  return (
    <div className="my-4 p-4 bg-accent-primary/5 border-l-4 border-accent-primary rounded-r-lg">
      <div className="text-xs font-semibold text-accent-primary uppercase tracking-wider mb-2">
        Definition
      </div>
      <div className="text-text-secondary">{children}</div>
    </div>
  )
}
