"use client";
import TransactionTable from "@/components/adminDashboard/TransactionTable";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const fetchTransactions = async () => {
			const { data } = await axios.get("https://job-hunter-server-1.onrender.com/api/payment");
			setTransactions(data.data);
		};
		fetchTransactions();
	}, [transactions]);

	return (
		<div>
			<div className="relative p-5 px-10 overflow-x-auto">
				<h1 className="mb-5 text-2xl font-semibold text-gray-900 dark:text-white">Transactions</h1>
				<TransactionTable data={transactions} />
			</div>
		</div>
	);
};

export default Page;
