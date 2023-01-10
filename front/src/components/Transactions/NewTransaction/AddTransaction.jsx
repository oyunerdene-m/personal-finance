import { useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionButtons from './TransactionButtons';
import TransactionForm from './TransactionForm';

export default function AddTransaction() {
	const [transactionType, setTransactionType] = useState('income');
	const [transactionData, setTransactionData] = useState({
		date: '',
		amount: 0,
		to: '',
		from: '',
		description: '',
		category: '',
	});

	function changeHandler(event) {
		const { name, value } = event.target;

		setTransactionData((prevData) => {
			return {
				...prevData,
				[name]: name === 'amount' ? Number(value) : value,
			};
		});
	}

	function submitHandler(event) {
		event.preventDefault();
		console.log(transactionData);
	}

	return (
		<>
			<Link to='/transactions'>Go to transactions page</Link>

			<TransactionButtons
				transactionType={transactionType}
				setTransactionType={setTransactionType}
			/>
			<TransactionForm
				onChange={changeHandler}
				onSubmit={submitHandler}
				transactionType={transactionType}
			/>
		</>
	);
}
