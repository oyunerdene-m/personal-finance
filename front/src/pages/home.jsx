import Login from '../components/Users/Login';

export default function Home({ currentUser }) {
	return currentUser !== null ? <h1>This is home page!</h1> : <Login />;
}
