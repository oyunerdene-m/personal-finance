import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountsContext } from '../../../context/accounts-context';

export default function Transaction({ transaction }) {
	const { id, type, amount, category, createdAt, description, accountId } = transaction;
	const { accounts, isAccountsLoading } = useContext(AccountsContext);
	const foundAccount = accounts.find((account) => account.id === accountId);

	if (isAccountsLoading) return 'Loading...';
	return (
		<li>
			<p>
				type: {type}, category: {category} - {amount}
			</p>
			<p>
				description: {description}, accountName: {foundAccount.name} {createdAt}
			</p>
			<Link to={`/transactions/edit/${id}`}>
				<button>edit</button>
			</Link>
		</li>
	);
}
