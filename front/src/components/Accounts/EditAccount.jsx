import { useState, useEffect, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { fetchData } from '../../lib/fetchData';
import { AccountsContext } from '../../context/accounts-context';
import AccountForm from './NewAccount/AccountForm';

export default function EditAccount() {
	const { setAccounts } = useContext(AccountsContext);
	const { id } = useParams();
	const [isAccountLoading, setIsAccountLoading] = useState(true);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const [editedAccount, setEditedAccount] = useState({
		name: '',
		amount: 0,
		type: '',
		description: '',
		currency: '',
	});

	useEffect(() => {
		async function getAccountById() {
			try {
				setIsAccountLoading(true);
				const data = await fetchData(`/api/v1/accounts/detail/${id}`, 'GET', undefined);
				setEditedAccount(data.account);
			} catch (error) {
				console.error(error);
				alert(error);
			} finally {
				setIsAccountLoading(false);
			}
		}
		getAccountById();
	}, [id]);

	function changeHandler(event) {
		const { name, value } = event.target;
		setEditedAccount((prevAccount) => {
			return {
				...prevAccount,
				[name]: name === 'amount' ? parseInt(value) : value,
			};
		});
	}

	async function submitHandler(event) {
		event.preventDefault();
		try {
			const data = await fetchData(`/api/v1/accounts/edit/${id}`, 'POST', editedAccount);
			setAccounts((prevAccounts) =>
				prevAccounts.map((account) => (account.id === parseInt(id) ? data.account : account)),
			);
			setIsSubmitted(true);
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	if (isAccountLoading) return 'Loading...';
	if (isSubmitted) return <Navigate to='/dashboard' />;
	return (
		<AccountForm
			formType='edit'
			editedAccount={editedAccount}
			onChange={changeHandler}
			onSubmit={submitHandler}
		/>
	);
}
