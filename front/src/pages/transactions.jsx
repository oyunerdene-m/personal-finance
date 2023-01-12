import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';
import { fetchData } from '../lib/fetchData';

export default function Transactions({ path }) {
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
			{path !== '/dashboard' && (
				<Link to='/dashboard'>
					<p>go to Dashboard</p>
				</Link>
			)}

			<Link to='/transactions/new'>
				<button className='bg-yellow-700'>Add Transaction</button>
			</Link>
			<h1>Transactions:</h1>
			<TransactionList transactions={transactions} isTransactionsLoading={isTransactionsLoading} />
		</>
	);
}
