import { useContext } from 'react';
import { AccountsContext } from '../context/accounts-context';
import AccountList from '../components/Accounts/Accounts/AccountList';

export default function Accounts() {
	const { accounts, isAccountsLoading } = useContext(AccountsContext);

	if (accounts.length === 0) return <h4>There is no accounts yet.</h4>;
	if (isAccountsLoading) return 'Loading...';

	return <AccountList accounts={accounts} />;
}
