import type React from "react";

const Table = {
	Container: ({ children }: { children: React.ReactNode }) => (
		<table className="text-gray-700 text-sm text-left">{children}</table>
	),

	Header: ({ children }: { children: React.ReactNode }) => (
		<thead className="bg-gray-100 text-gray-500 text-xs uppercase">
			<tr>{children}</tr>
		</thead>
	),

	Body: ({ children }: { children: React.ReactNode }) => (
		<tbody className="divide-y divide-gray-100">{children}</tbody>
	),

	Row: ({ children }: { children: React.ReactNode }) => (
		<tr className="even:bg-gray-50 odd:bg-white">{children}</tr>
	),

	Cell: ({ children }: { children: React.ReactNode; className?: string }) => (
		<td className={"px-4 py-3 whitespace-nowrap"}>{children}</td>
	),

	Actions: ({ children }: { children: React.ReactNode }) => (
		<td className="flex items-center gap-2 px-4 py-3">{children}</td>
	),
};

export default Table;
