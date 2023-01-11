import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';
import { fetchData } from '../lib/fetchData';

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);
	const [isTransactionsLoading, setIsTransactionsLoading] = useState(true);

	useEffect(() => {
		async function getTransactions() {
			try {
				setIsTransactionsLoading(true);
				const data = await fetchData('/api/v1/transactions', 'GET', undefined);
				setTransactions(data.transactions);
			} catch (error) {
				console.error(error);
				alert(error);
			} finally {
				setIsTransactionsLoading(false);
			}
		}
		getTransactions();
	}, []);

	return (
		<>
			<Link to='/transactions/new'>
				<button>Add Transaction</button>
			</Link>
			<h1>Transactions page!</h1>
			<TransactionList transactions={transactions} isTransactionsLoading={isTransactionsLoading} />
		</>
	);
}
