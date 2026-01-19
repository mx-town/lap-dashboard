interface WarningProps {
  children: React.ReactNode
}

export function Warning({ children }: WarningProps) {
  return (
    <div className="my-4 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
      <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
        <span>⚠️</span>
        <span>Wichtig</span>
      </div>
      <div className="text-amber-900">{children}</div>
    </div>
  )
}
