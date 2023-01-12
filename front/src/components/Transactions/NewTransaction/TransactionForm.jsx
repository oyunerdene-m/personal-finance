import { categories } from '../../../lib/transactionCategories';
import { useContext } from 'react';
import { AccountsContext } from '../../../context/accounts-context';

export default function TransactionForm({
	onDescriptionChange,
	onCategoryChange,
	transactionType,
	onChange,
	onSubmit,
	editedTransaction,
	formType,
}) {
	const { accounts, isAccountsLoading } = useContext(AccountsContext);
	if (isAccountsLoading) return 'loadiing...';
	let foundAccount;
	foundAccount = accounts.find((account) => account.id === editedTransaction.accountId);
	if (!foundAccount && formType === 'editing') return 'Loading...';

	let account;
	if (transactionType === 'income') {
		account = (
			<div className='mb-4'>
				<label className='block text-sm font-bold mb-2' htmlFor='to'>
					To
				</label>
				<select
					className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
					defaultValue={formType === 'editing' && foundAccount.id}
					onChange={onChange}
					name='to'
					id='to'
				>
					<option>Choose account</option>
					{accounts.map((account) => {
						return (
							<option key={account.id} value={account.id}>
								{account.name}
							</option>
						);
					})}
				</select>
			</div>
		);
	} else if (transactionType === 'expense') {
		account = (
			<div className='mb-4'>
				<label className='block text-sm font-bold mb-2' htmlFor='from'>
					From
				</label>
				<select
					className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
					defaultValue={formType === 'editing' && foundAccount.id}
					onChange={onChange}
					name='from'
					id='from'
				>
					<option>Choose account</option>
					{accounts.map((account) => {
						return (
							<option key={account.id} value={account.id}>
								{account.name}
							</option>
						);
					})}
				</select>
			</div>
		);
	} else {
		account = (
			<>
				{' '}
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='from'>
						From:
					</label>
					<select
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						defaultValue={formType === 'editing' && foundAccount.id}
						onChange={onChange}
						name='from'
						id='from'
					>
						<option>Choose account</option>
						{accounts.map((account) => {
							return (
								<option key={account.id} value={account.id}>
									{account.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='to'>
						To:
					</label>
					<select
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						defaultValue={formType === 'editing' && foundAccount.id}
						onChange={onChange}
						name='to'
						id='to'
					>
						<option>Choose account</option>
						{accounts.map((account) => {
							return (
								<option key={account.id} value={account.id}>
									{account.name}
								</option>
							);
						})}
					</select>
				</div>
			</>
		);
	}

	return (
		<div className='w-full text-left'>
			<form className='bg-white shadow-xl rounded px-8 pt-6 pb-6' onSubmit={onSubmit}>
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='amount'>
						Amount:
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={editedTransaction.amount}
						onChange={onChange}
						type='amount'
						id='amount'
						min={0}
						name='amount'
					/>
				</div>
				{account}
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='description'>
						Description:
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
						value={editedTransaction.description}
						onChange={formType === 'adding' ? onChange : onDescriptionChange}
						type='text'
						id='description'
						name='description'
					/>
				</div>
				{(transactionType === 'income' || transactionType === 'expense') && (
					<div>
						<label className='block text-sm font-bold mb-2' htmlFor='category'>
							Category:
						</label>
						<select
							className='shadow appearance-none border rounded w-full py-2 px-3 text-light-blue leading-tight focus:outline-none focus:shadow-outline'
							value={editedTransaction.category}
							onChange={formType === 'adding' ? onChange : onCategoryChange}
							name='category'
							id='category'
						>
							<option value=''>Choose category</option>
							{categories[transactionType].map((category) => {
								return (
									<option key={category} value={category}>
										{category}
									</option>
								);
							})}
						</select>
					</div>
				)}
				<button>Add</button>
			</form>
		</div>
	);
}
