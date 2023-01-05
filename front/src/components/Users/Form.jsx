export default function Form({ formType, onChange, onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<h2>{formType}</h2>
			{formType === 'Signup' && (
				<div>
					<label htmlFor='name'>User name:</label>
					<input onChange={onChange} type='text' id='name' name='name' placeholder='User name' />
				</div>
			)}
			<div>
				<label htmlFor='email'>Email:</label>
				<input onChange={onChange} type='text' id='email' name='email' placeholder='Email' />
			</div>

			<div>
				<label htmlFor='password'>Password:</label>
				<input
					onChange={onChange}
					type='password'
					id='password'
					name='password'
					placeholder='Password'
				/>
			</div>
			<button>{formType}</button>
		</form>
	);
}
