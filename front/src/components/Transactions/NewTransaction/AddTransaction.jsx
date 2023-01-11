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

	const copy = { ...transactionData };
	let id;
	if (transactionType === 'income') {
		id = copy.to;
	} else if (transactionType === 'expense') {
		id = copy.from;
	}
	const data = {
		type: transactionType,
		amount: copy.amount,
		accountId: id,
		description: copy.description,
		category: copy.category,
	};

	const transferToData = {
		type: 'income',
		amount: copy.amount,
		accountId: copy.to,
		description: copy.description,
		category: '',
	};

	const transferFromData = {
		type: 'expense',
		amount: copy.amount,
		accountId: copy.from,
		description: copy.description,
		category: '',
	};

	async function submitHandler(event) {
		event.preventDefault();

		try {
			if (transactionType !== 'transfer') {
				await fetchData('/api/v1/transactions/add', 'POST', data);
			} else {
				await fetchData('/api/v1/transactions/add', 'POST', transferToData);
				await fetchData('/api/v1/transactions/add', 'POST', transferFromData);
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
