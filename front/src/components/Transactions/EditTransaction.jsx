import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData } from '../../lib/fetchData';
import TransactionForm from './NewTransaction/TransactionForm';
import TransactionButtons from './NewTransaction/TransactionButtons';

export default function EditTransaction() {
	const navigate = useNavigate();
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

	function changeDescriptionHandler(event) {
		setEditedTransaction((prevTransaction) => {
			return {
				...prevTransaction,
				description: event.target.value,
			};
		});
	}

	function changeCategoryHandler(event) {
		setEditedTransaction((prevTransaction) => {
			return {
				...prevTransaction,
				category: event.target.value,
			};
		});
	}

	async function submitHandler(event) {
		event.preventDefault();
		try {
			await fetchData(`/api/v1/transactions/edit/${id}`, 'POST', editedTransaction);
		} catch (error) {
			console.error(error);
			alert(error);
		}
		navigate('/transactions');
	}

	return (
		<>
			<TransactionButtons transactionType={editedTransaction.type} setTransactionType={() => {}} />
			<TransactionForm
				editedTransaction={editedTransaction}
				transactionType={editedTransaction.type}
				onDescriptionChange={changeDescriptionHandler}
				onCategoryChange={changeCategoryHandler}
				onChange={() => {}}
				onSubmit={submitHandler}
				formType='editing'
			/>
		</>
	);
}
