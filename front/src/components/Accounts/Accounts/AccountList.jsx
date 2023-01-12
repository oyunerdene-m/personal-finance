import Account from './Account';

export default function AccountList({ accounts, onDelete }) {
	return (
		<div>
			<h2>Accounts:</h2>
			<ul className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3'>
				{accounts.map((account) => (
					<Account key={account.id} account={account} onDelete={onDelete} />
				))}
			</ul>
		</div>
	);
}
