import { Link } from 'react-router-dom';
import AccountList from '../components/Accounts/Accounts/AccountList';

export default function Dashboard() {
	return (
		<>
			<h1>Dashboard page!!</h1>
			<AccountList />
			<button>
				<Link to='/accounts'>Add account</Link>
			</button>
		</>
	);
}
