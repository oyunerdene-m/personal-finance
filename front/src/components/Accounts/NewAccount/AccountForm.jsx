export default function AccountForm({ onChange, onSubmit, editedAccount, formType }) {
	const accountTypes = ['savings', 'cash', 'loan', 'credit', 'daily'];
	const currencies = ['EUR', 'USD', 'MNT'];

	return (
		<>
			<h3>{formType === 'edit' ? 'Edit' : 'Add'} account</h3>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor='name'>Account name:</label>
					<input value={editedAccount.name} onChange={onChange} type='text' id='name' name='name' />
				</div>
				<div>
					<label htmlFor='amount'>Amount:</label>
					<input
						value={editedAccount.amount}
						onChange={onChange}
						type='number'
						id='amount'
						name='amount'
					/>
				</div>
				<div>
					<label htmlFor='type'>Type:</label>
					<select value={editedAccount.type} onChange={onChange} name='type' id='type'>
						<option value=''>--Choose type--</option>
						{accountTypes.map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor='description'>Description:</label>
					<input
						value={editedAccount.description}
						onChange={onChange}
						type='text'
						id='description'
						name='description'
					/>
				</div>
				<div>
					<label htmlFor='currency'>Currency:</label>
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
		</>
	);
}
