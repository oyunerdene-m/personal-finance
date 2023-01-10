import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountsContext } from '../context/accounts-context';
import AccountList from '../components/Accounts/Accounts/AccountList';
import { fetchData } from '../lib/fetchData';

export default function Accounts() {
	const { accounts, setAccounts, isAccountsLoading } = useContext(AccountsContext);

	if (accounts.length === 0) return <h4>There is no accounts yet.</h4>;
	if (isAccountsLoading) return 'Loading...';

	function deleteAccountHandler(id) {
		try {
			fetchData(`/api/v1/accounts/close/${id}`, 'POST', undefined);
			setAccounts((prevAccounts) => prevAccounts.filter((account) => account.id !== id));
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	return (
		<>
			<Link to='/dashboard'>
				<p>go to Dashboard</p>
			</Link>
			<AccountList accounts={accounts} onDelete={deleteAccountHandler} />
		</>
	);
}
