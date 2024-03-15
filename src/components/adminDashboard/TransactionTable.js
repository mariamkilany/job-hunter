import React from "react";

const TransactionTable = ({ data }) => {
	return (
		<table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3 rounded-s-lg">
						User Name
					</th>
					<th scope="col" className="px-6 py-3">
						Payment Date
					</th>
					<th scope="col" className="px-6 py-3 rounded-e-lg">
						Price
					</th>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map(transaction => (
						<tr className="bg-white dark:bg-gray-800" key={transaction._id}>
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								{transaction.userName}
							</th>
							<td className="px-6 py-4">{new Date(transaction.paymentDate).toLocaleDateString()}</td>
							<td className="px-6 py-4">{transaction.amount} $</td>
						</tr>
					))}
			</tbody>
			<tfoot>
				<tr className="font-semibold text-gray-900 dark:text-white">
					<th scope="row" className="px-6 py-3 text-base" colSpan={2}>
						Total
					</th>
					<td className="px-6 py-3">{data.reduce((acc, curr) => acc + curr.amount, 0)} $</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default TransactionTable;
