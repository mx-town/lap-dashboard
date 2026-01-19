interface TableBlockProps {
  headers: string[]
  rows: string[][]
}

export function TableBlock({ headers, rows }: TableBlockProps) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-subtle">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-3 py-2 text-left text-xs font-medium text-text-muted uppercase tracking-wide"
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
              className="border-b border-border-subtle/60 last:border-b-0"
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-3 py-2 text-text-secondary"
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
