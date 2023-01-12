import { Link, useLocation } from 'react-router-dom';
import Accounts from './accounts';
import Transactions from './transactions';

export default function Dashboard() {
	const location = useLocation();
	const path = location.pathname;
	return (
		<>
			<h1>Dashboard page!!</h1>

			<Link to='/accounts'>
				<p>Accounts page</p>
			</Link>
			<Link to='/transactions'>
				<p>Transactions page</p>
			</Link>
			<Accounts path={path} />
			<Transactions path={path} />
		</>
	);
}
