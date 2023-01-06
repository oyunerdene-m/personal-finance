import { Link } from 'react-router-dom';

export default function Dashboard() {
	return (
		<>
			<h1>Dashboard page!!</h1>
			<button>
				<Link to='/accounts'>Add account</Link>
			</button>
		</>
	);
}
