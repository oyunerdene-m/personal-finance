import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchData } from '../../../lib/fetchData';
import TransactionButtons from './TransactionButtons';
import TransactionForm from './TransactionForm';

export default function AddTransaction() {
	const navigate = useNavigate();
	const [transactionType, setTransactionType] = useState('income');
	const [transactionData, setTransactionData] = useState({
		type: transactionType,
		amount: 0,
		from: null,
		to: null,
		description: '',
		category: '',
	});

	function changeHandler(event) {
		const { name, value } = event.target;
		setTransactionData((prevData) => {
			return {
				...prevData,
				[name]: name === 'amount' || name === 'from' || name === 'to' ? Number(value) : value,
			};
		});
	}

	async function submitHandler(event) {
		event.preventDefault();
		let id;
		if (transactionType === 'income') {
			id = transactionData.to;
		} else if (transactionType === 'expense') {
			id = transactionData.from;
		}
		const data = {
			type: transactionType,
			amount: transactionData.amount,
			accountId: id,
			description: transactionData.description,
			category: '',
		};

		const transferToData = {
			type: 'income',
			amount: transactionData.amount,
			accountId: transactionData.to,
			description: transactionData.description,
			category: '',
		};

		const transferFromData = {
			type: 'expense',
			amount: transactionData.amount,
			accountId: transactionData.from,
			description: transactionData.description,
			category: transactionData.category,
		};

		try {
			if (transactionType !== 'transfer') {
				const trans = await fetchData('/api/v1/transactions/add', 'POST', data);
			} else {
				const transTo = await fetchData('/api/v1/transactions/add', 'POST', transferToData);
				const transFrom = await fetchData('/api/v1/transactions/add', 'POST', transferFromData);
			}
			navigate('/transactions');
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	return (
		<>
			<Link to='/transactions'>Go to transactions page</Link>

			<TransactionButtons
				transactionType={transactionType}
				setTransactionType={setTransactionType}
			/>
			<TransactionForm
				key={transactionType}
				onChange={changeHandler}
				onSubmit={submitHandler}
				transactionType={transactionType}
			/>
		</>
	);
}
