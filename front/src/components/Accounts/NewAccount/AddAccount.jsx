import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountForm from './AccountForm';
import { AccountsContext } from '../../../context/accounts-context';
import { fetchData } from '../../../lib/fetchData';

export default function AddAccount() {
	const navigate = useNavigate();
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
				[name]: name === 'amount' ? Number(value) : value,
			};
		});
	}

	async function submitHandler(event) {
		event.preventDefault();
		try {
			const data = await fetchData('/api/v1/accounts/add', 'POST', accountData);
			setAccounts((prevAccounts) => [...prevAccounts, data.account]);
			navigate('/dashboard');
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	return (
		<AccountForm
			editedAccount={accountData}
			formType='add'
			onSubmit={submitHandler}
			onChange={changeHandler}
		/>
	);
}
