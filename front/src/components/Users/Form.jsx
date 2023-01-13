import Button from '../UI/Button';

export default function Form({ formType, onChange, onSubmit }) {
	return (
		<div className='w-full max-w-xs m-auto mt-6'>
			<h4 className='text-xl mb-2'>{formType}</h4>
			<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={onSubmit}>
				{formType === 'Signup' && (
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
							User name:
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							onChange={onChange}
							type='text'
							id='name'
							name='name'
							placeholder='User name'
						/>
					</div>
				)}
				<div className='mb-6'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
						Email:
					</label>
					<input
						className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						onChange={onChange}
						type='text'
						id='email'
						name='email'
						placeholder='Email'
					/>
				</div>
				<div>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
						Password:
					</label>
					<input
						className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						onChange={onChange}
						type='password'
						id='password'
						name='password'
						placeholder='Password'
					/>
				</div>
				<div className='flex items-center justify-center'>
					<Button type='submit' name={formType === 'Signup' ? 'Signup' : 'Login'}>
						{formType}
					</Button>
				</div>
			</form>
		</div>
	);
}
