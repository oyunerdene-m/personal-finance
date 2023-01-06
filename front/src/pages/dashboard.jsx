import { Link } from 'react-router-dom';
import Accounts from './accounts';

export default function Dashboard() {
	return (
		<>
			<h1>Dashboard page!!</h1>
			<button>
				<Link to='/accounts/new'>Add account</Link>
			</button>
			<Accounts />
		</>
	);
}
