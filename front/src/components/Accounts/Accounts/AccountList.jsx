import { useContext } from 'react';
import { AccountsContext } from '../../../context/accounts-context';
import Account from './Account';

export default function AccountList() {
	const { accounts, isAccountsLoading } = useContext(AccountsContext);
	if (isAccountsLoading) return 'Loading...';
	return (
		<div>
			<ul>
				{accounts.map((account) => (
					<Account key={account.id} account={account} />
				))}
			</ul>
		</div>
	);
}
