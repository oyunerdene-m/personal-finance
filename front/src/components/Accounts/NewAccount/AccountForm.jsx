export default function AccountForm({ onChange, onSubmit, editedAccount, formType }) {
	const accountTypes = ['savings', 'cash', 'loan', 'credit', 'daily'];
	const currencies = ['EUR', 'USD', 'MNT'];

	return (
		<div className='w-full max-w-xs'>
			<h3>{formType === 'edit' ? 'Edit' : 'Add'} account</h3>
			<form
				onSubmit={onSubmit}
				className='relative bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4'
			>
				<span className='absolute right-2 top-2 cursor-pointer'>close</span>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
						Account name:
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={editedAccount.name}
						onChange={onChange}
						type='text'
						id='name'
						name='name'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='amount'>
						Amount:
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={editedAccount.amount}
						onChange={onChange}
						type='number'
						id='amount'
						name='amount'
						min={0}
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='type'>
						Type:
					</label>
					<select value={editedAccount.type} onChange={onChange} name='type' id='type'>
						<option value=''>--Choose type--</option>
						{accountTypes.map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
						Description:
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={editedAccount.description}
						onChange={onChange}
						type='text'
						id='description'
						name='description'
					/>
				</div>
				<div>
					<label className='text-gray-700 text-sm font-bold mb-2 mr-3' htmlFor='currency'>
						Currency:
					</label>
					<select value={editedAccount.currency} onChange={onChange} name='currency' id='currency'>
						<option value=''>--Choose currency--</option>
						{currencies.map((cur) => (
							<option key={cur} value={cur}>
								{cur}
							</option>
						))}
					</select>
				</div>
				<button>{formType === 'edit' ? 'Save' : 'Add'}</button>
			</form>
		</div>
	);
}
