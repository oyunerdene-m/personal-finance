import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../lib/fetchData';
import TransactionForm from './NewTransaction/TransactionForm';

export default function EditTransaction() {
	const { id } = useParams();
	const [editedTransaction, setEditedTransaction] = useState({
		type: '',
		amount: 0,
		from: null,
		to: null,
		description: '',
		category: '',
	});

	useEffect(() => {
		async function getTransaction() {
			try {
				const res = await fetchData(`/api/v1/transactions/detail/${id}`, 'GET', undefined);
				setEditedTransaction(res.transaction);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		getTransaction();
	}, [id]);

	function changeHandler(event) {}

	function submitHandler(event) {}

	return (
		<TransactionForm
			editedTransaction={editedTransaction}
			transactionType={editedTransaction.type}
			onChange={changeHandler}
			onSubmit={submitHandler}
			formType='editing'
		/>
	);
}
