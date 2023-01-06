import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { fetchData } from '../../lib/fetchData';
import Form from './Form';

export default function Login() {
	const [formData, setFormData] = useState({ email: '', password: '' });

	function changeHandler(event) {
		const { name, value } = event.target;
		setFormData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}

	async function submitHandler(event) {
		event.preventDefault();
		try {
			await fetchData('/api/v1/users/login', 'POST', formData);
			console.log('Successfully logged in!');
			window.location.reload();
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	return <Form formType='Login' onSubmit={submitHandler} onChange={changeHandler} />;
}
