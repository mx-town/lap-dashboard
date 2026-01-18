interface TableBlockProps {
  headers: string[]
  rows: string[][]
}

export function TableBlock({ headers, rows }: TableBlockProps) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-bg-tertiary border-b border-border-panel">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-2 text-left text-sm font-medium text-text-primary border-r border-border-subtle last:border-r-0"
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
              className={rowIdx % 2 === 0 ? "bg-bg-secondary" : "bg-bg-tertiary"}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-2 text-sm text-text-secondary border-r border-border-subtle last:border-r-0"
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
