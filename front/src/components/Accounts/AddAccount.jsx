import { useState } from 'react';
import AccountForm from './AccountForm';

export default function AddAccount() {
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
				[name]: value,
			};
		});
	}

	function submitHandler(event) {
		event.preventDefault();
		console.log(accountData);
	}

	return <AccountForm onSubmit={submitHandler} onChange={changeHandler} />;
}
