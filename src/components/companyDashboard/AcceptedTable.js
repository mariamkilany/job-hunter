import React from "react";

const AcceptedTabel = ({ data, onSelect }) => {
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
							Salary
						</th>
						<th scope="col" className="px-6 py-3">
							Created At
						</th>
						<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
							No of Matchers
						</th>
						<th scope="col" className="px-6 py-3"></th>
					</tr>
				</thead>
				<tbody>
					{data.map(item => (
						<tr
							key={item._id}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-200">{item.title}</td>
							<td className="px-6 py-4 dark:bg-gray-800">
								<div className="flex items-center">
									<div>
										<div className="text-sm font-medium text-gray-900 dark:text-gray-200">{item.category}</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">{item.place}</div>
									</div>
								</div>
							</td>
							<td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-200">{item.salary}</td>
							<td className="px-6 py-4 dark:bg-gray-800">
								<div className="flex items-center">
									<div>
										<div className="text-sm font-medium text-gray-900 dark:text-gray-200">
											{new Date(item.createdAt).toDateString()}
										</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">{new Date(item.createdAt).toLocaleTimeString()}</div>
									</div>
								</div>
							</td>
							<td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-200">{item.mathcings.length || 0}</td>
							<td className="px-6 py-4 dark:bg-gray-800">
								<button className="text-indigo-600 dark:text-indigo-400" onClick={() => onSelect(item)}>
									Choose Matchers
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AcceptedTabel;
