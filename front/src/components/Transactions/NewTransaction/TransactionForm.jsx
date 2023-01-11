import { categories } from '../../../lib/transactionCategories';
import { useContext } from 'react';
import { AccountsContext } from '../../../context/accounts-context';

export default function TransactionForm({ transactionType, onChange, onSubmit }) {
	const { accounts } = useContext(AccountsContext);

	let account;
	if (transactionType === 'income') {
		account = (
			<div>
				<label htmlFor='to'>To</label>
				<select onChange={onChange} name='to' id='to'>
					<option value=''>Choose account</option>
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
			<div>
				<label htmlFor='from'>From</label>
				<select onChange={onChange} name='from' id='from'>
					<option value=''>Choose account</option>
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
				<div>
					<label htmlFor='from'>From:</label>
					<select onChange={onChange} name='from' id='from'>
						<option value=''>Choose account</option>
						{accounts.map((account) => {
							return (
								<option key={account.id} value={account.id}>
									{account.name}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<label htmlFor='to'>To:</label>
					<select onChange={onChange} name='to' id='to'>
						<option value=''>Choose account</option>
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
		<>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor='amount'>Amount:</label>
					<input onChange={onChange} type='amount' id='amount' min={0} name='amount' />
				</div>
				{account}
				<div>
					<label htmlFor='description'>Description:</label>
					<input onChange={onChange} type='text' id='description' name='description' />
				</div>
				{(transactionType === 'income' || transactionType === 'expense') && (
					<div>
						<label htmlFor='category'>Category:</label>
						<select onChange={onChange} name='category' id='category'>
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
		</>
	);
}
