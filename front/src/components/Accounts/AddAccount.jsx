import { useState, useContext } from 'react';
import AccountForm from './AccountForm';
import { AccountsContext } from '../../context/accounts-context';
import { fetchData } from '../../lib/fetchData';

export default function AddAccount() {
	const { accounts, setAccounts } = useContext(AccountsContext);
	console.log('accounts', accounts);

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
			const res = await fetchData('api/v1/accounts/add', 'POST', accountData);
			setAccounts((prevAccounts) => [...prevAccounts, res.account]);
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	return <AccountForm onSubmit={submitHandler} onChange={changeHandler} />;
}
