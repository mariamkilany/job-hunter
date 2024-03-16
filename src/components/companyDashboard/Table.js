import React from "react";

const Table = ({ data }) => {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
							Title
						</th>
						<th scope="col" className="px-6 py-3">
							Category
						</th>
						<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
							Place
						</th>
						<th scope="col" className="px-6 py-3">
							Salary
						</th>
						<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
							Experience
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(item => (
						<tr key={item._id}>
							<td className="px-6 py-3">{item.title}</td>
							<td className="px-6 py-3">{item.category}</td>
							<td className="px-6 py-3">{item.place}</td>
							<td className="px-6 py-3">{item.salary}</td>
							<td className="px-6 py-3">{item.experience}</td>
							<td className="px-6 py-3">{item.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
