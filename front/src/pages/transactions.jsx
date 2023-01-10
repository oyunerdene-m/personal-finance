import { Link } from 'react-router-dom';

export default function Transactions() {
	return (
		<>
			<Link to='/transactions/new'>
				<button>Add Transaction</button>
			</Link>
			<h1>Transactions page!</h1>
		</>
	);
}
