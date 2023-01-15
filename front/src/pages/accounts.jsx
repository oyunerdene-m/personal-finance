import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountsContext } from '../context/accounts-context';
import AccountList from '../components/Accounts/Accounts/AccountList';
import { fetchData } from '../lib/fetchData';
import { addIconWithBorder } from '../assets/icons/icons';

export default function Accounts({ path }) {
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
		<div className='md:basis-4/6 overflow-y-scroll' style={{ border: '1px solid pink' }}>
			{path !== '/dashboard' && (
				<Link to='/dashboard'>
					<p>go to Dashboard</p>
				</Link>
			)}

			<div className='flex justify-between mb-4'>
				<h3>Your accounts</h3>
				<Link to='/accounts/new'>
					<button className='bg-yellow-700'>{addIconWithBorder}</button>
				</Link>
			</div>
			<AccountList accounts={accounts} onDelete={deleteAccountHandler} />
		</div>
	);
}
