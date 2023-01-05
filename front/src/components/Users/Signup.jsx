import Form from './Form';
import { useState } from 'react';

export default function Signup() {
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
			await fetch('/api/v1/users/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Success:', data);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}
	return <Form formType='Signup' onSubmit={submitHandler} onChange={changeHandler} />;
}
