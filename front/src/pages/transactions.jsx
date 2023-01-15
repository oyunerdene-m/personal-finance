import { Link, useLocation } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';
import { addIconWithBorder } from '../assets/icons/icons';
import { getLast3Transactions, sortedTransactions } from '../lib/stats';
import { useState, useEffect } from 'react';
import { fetchData } from '../lib/fetchData';

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);
	const [transactionsLoading, setTransactionsLoading] = useState(true);
	const location = useLocation();
	const path = location.pathname;
	useEffect(() => {
		async function getTransactions() {
			try {
				setTransactionsLoading(true);
				const data = await fetchData('/api/v1/transactions', 'GET', undefined);
				setTransactions(data.transactions);
			} catch (error) {
				console.error(error);
				alert(error);
			} finally {
				setTransactionsLoading(false);
			}
		}
		getTransactions();
	}, []);

	const sorted = sortedTransactions([...transactions]);
	const last3Transactions = getLast3Transactions([...sorted]);

	if (transactionsLoading) return 'Loading...';
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

			{path === '/dashboard' ? (
				<TransactionList transactions={last3Transactions} />
			) : (
				<TransactionList transactions={sorted} />
			)}
		</>
	);
}
