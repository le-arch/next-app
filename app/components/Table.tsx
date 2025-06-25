'use client';

import React from 'react';

interface TableProps<T> {
  data: T[];
  columns: {
    header: string;
    accessorKey: keyof T;
    cell?: (row: T) => React.ReactNode;
  }[];
}

function Table<T extends { id?: string | number }>({ data, columns }: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((row) => (
            <tr
              key={row.id ?? JSON.stringify(row)}
              tabIndex={0}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition"
            >
              {columns.map((column) => (
                <td
                  key={`${String(row[column.accessorKey])}-${column.header}`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300"
                >
                  {column.cell ? column.cell(row) : String(row[column.accessorKey])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

