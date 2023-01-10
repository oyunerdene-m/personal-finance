import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<Link to='/dashboard'>
				<p>go to Dashboard</p>
			</Link>
			<h1>this is home page</h1>
		</>
	);
}
