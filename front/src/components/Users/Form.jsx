export default function Form() {
	return (
		<form>
			<h2></h2>
			{/* {formType === 'signup' && (
				<div>
					<label htmlFor='name'>User name:</label>
					<input type='text' id='name' name='name' placeholder='User name' />
				</div>
			)} */}
			<div>
				<label htmlFor='email'>Email:</label>
				<input type='text' id='email' name='email' placeholder='Email' />
			</div>

			<div>
				<label htmlFor='password'>Password:</label>
				<input type='password' id='password' name='password' placeholder='Password' />
			</div>
			<button>submit</button>
		</form>
	);
}
