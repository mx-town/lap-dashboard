interface ExampleProps {
  title?: string
  children: React.ReactNode
}

export function Example({ title = "Beispiel", children }: ExampleProps) {
  return (
    <div className="my-4 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
      <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
        {title}
      </div>
      <div className="text-emerald-900">{children}</div>
    </div>
  )
}
