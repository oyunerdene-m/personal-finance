import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {}, []);

	return (
		<>
			<Link to='/transactions/new'>
				<button>Add Transaction</button>
			</Link>
			<h1>Transactions page!</h1>
			<TransactionList />
		</>
	);
}
