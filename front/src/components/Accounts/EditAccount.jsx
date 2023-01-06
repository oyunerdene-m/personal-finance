import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../lib/fetchData';
import AccountForm from './NewAccount/AccountForm';

export default function EditAccount() {
	const { id } = useParams();
	const [isAccountLoading, setIsAccountLoading] = useState(true);
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

	if (isAccountLoading) return 'Loading...';
	return <AccountForm formType='edit' editedAccount={editedAccount} />;
}
