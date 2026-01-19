interface NoteProps {
  children: React.ReactNode
}

export function Note({ children }: NoteProps) {
  return (
    <div className="my-4 p-4 bg-slate-50 border-l-4 border-slate-400 rounded-r-lg">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
        <span>ℹ️</span>
        <span>Hinweis</span>
      </div>
      <div className="text-slate-700">{children}</div>
    </div>
  )
}
