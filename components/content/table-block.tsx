interface TableBlockProps {
  headers: string[]
  rows: string[][]
}

export function TableBlock({ headers, rows }: TableBlockProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border-subtle">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-bg-secondary border-b border-border-subtle">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left text-sm font-semibold text-text-primary border-r border-border-subtle last:border-r-0"
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
              className={`border-b border-border-subtle last:border-b-0 transition-colors ${
                rowIdx % 2 === 0 ? "bg-white" : "bg-bg-secondary/50"
              } hover:bg-bg-tertiary`}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 text-sm text-text-secondary border-r border-border-subtle last:border-r-0"
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
