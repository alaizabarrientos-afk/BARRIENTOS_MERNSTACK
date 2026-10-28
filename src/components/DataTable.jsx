export default function DataTable({ data, columns }) {
  return (
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-800 text-slate-300">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-3">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr
            key={item._id || index}
            className="border-t border-slate-800 hover:bg-slate-800/50"
          >
            {columns.map((column) => (
              <td key={column.key} className="px-4 py-3">
                {item[column.key] || "-"}
              </td>
            ))}
          </tr>
        ))}

        {data.length === 0 && (
          <tr>
            <td
              colSpan={columns.length}
              className="px-4 py-6 text-center text-slate-400"
            >
              No records found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}