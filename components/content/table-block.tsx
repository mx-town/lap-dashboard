interface TableBlockProps {
  headers: string[]
  rows: string[][]
}

export function TableBlock({ headers, rows }: TableBlockProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border-subtle shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-bg-secondary to-bg-tertiary/50 border-b border-border-subtle">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-3.5 text-left text-xs font-bold text-text-primary uppercase tracking-wider border-r border-border-subtle/50 last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-b border-border-subtle/50 last:border-b-0 transition-all ${
                rowIdx % 2 === 0 ? "bg-white" : "bg-bg-secondary/30"
              } hover:bg-accent-primary/5`}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 text-sm text-text-secondary border-r border-border-subtle/50 last:border-r-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
