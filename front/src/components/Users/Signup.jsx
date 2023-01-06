import Form from './Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../lib/fetchData';

export default function Signup() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

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
			const response = await fetchData('/api/v1/users/register', 'POST', formData);
			console.log('successfully registered!', response.user);
		} catch (error) {
			console.error(error);
			alert(error);
		}
		navigate('/login');
	}
	return <Form formType='Signup' onSubmit={submitHandler} onChange={changeHandler} />;
}
