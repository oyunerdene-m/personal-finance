import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';
import { fetchData } from '../lib/fetchData';
import { addIconWithBorder } from '../assets/icons/icons';

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
			<div className='flex justify-between mb-4 pt-5'>
				<h3>Your transactions</h3>
				<Link to='/transactions/new'>
					<button className='bg-yellow-700'>{addIconWithBorder}</button>
				</Link>
			</div>

			<TransactionList transactions={transactions} isTransactionsLoading={isTransactionsLoading} />
		</>
	);
}
