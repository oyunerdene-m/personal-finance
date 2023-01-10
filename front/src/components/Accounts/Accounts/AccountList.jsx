import Account from './Account';

export default function AccountList({ accounts, onDelete }) {
	return (
		<div>
			<h2>Accounts:</h2>
			<ul>
				{accounts.map((account) => (
					<Account key={account.id} account={account} onDelete={onDelete} />
				))}
			</ul>
		</div>
	);
}
