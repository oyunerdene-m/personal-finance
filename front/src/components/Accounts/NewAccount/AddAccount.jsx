import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AccountForm from './AccountForm';
import { AccountsContext } from '../../../context/accounts-context';
import { fetchData } from '../../../lib/fetchData';

export default function AddAccount() {
	const { setAccounts } = useContext(AccountsContext);

	const [accountData, setAccountData] = useState({
		name: '',
		amount: 0,
		type: '',
		description: '',
		currency: '',
	});

	function changeHandler(event) {
		const { name, value } = event.target;
		setAccountData((prevData) => {
			return {
				...prevData,
				[name]: name === 'amount' ? parseInt(value) : value,
			};
		});
	}

	async function submitHandler(event) {
		event.preventDefault();
		try {
			const data = await fetchData('api/v1/accounts/add', 'POST', accountData);
			setAccounts((prevAccounts) => [...prevAccounts, data.account]);
			window.location.reload();
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	return <AccountForm onSubmit={submitHandler} onChange={changeHandler} />;
}
