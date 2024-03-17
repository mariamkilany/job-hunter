import React from "react";

const MatchersTable = ({ data, onInvite }) => {
	const sortedData = data?.sort((a, b) => b.score - a.score);

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className="flex flex-wrap items-center justify-between pb-4 space-y-4 bg-white flex-column md:flex-row md:space-y-0 dark:bg-gray-900">
				<table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Graduation Year
							</th>
							<th scope="col" className="px-6 py-3">
								Matching Score
							</th>
							<th scope="col" className="px-6 py-3">
								Matching Skills
							</th>
							<th scope="col" className="px-6 py-3">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{sortedData?.map(item => (
							<tr
								key={item.id}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
							>
								<th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
									<img className="w-10 h-10 rounded-full" src={item.image} alt="Jese image" />
									<div className="ps-3">
										<div className="text-base font-semibold">{item.name}</div>
										<div className="font-normal text-gray-500">{item.email}</div>
									</div>
								</th>
								<td className="px-6 py-3">{item.graduationYear}</td>
								<td className="px-6 py-3">
									<span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
										{Math.round(item.score * 100) / 100}%
									</span>
								</td>
								<td className="px-6 py-3">{item.matchingSkills.join(", ")}</td>
								<td className="px-6 py-3">
									<button
										className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
										onClick={() => onInvite(item.id)}
									>
										Invite to Process
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MatchersTable;
