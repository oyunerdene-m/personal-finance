import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
// import { useContext } from 'react';
// import { CurrentUserContext } from './context/user-context';
import Home from './pages/home';
import Signup from './components/Users/Signup';
import Login from './components/Users/Login';

function App() {
	const currentUser = null;
	// const { currentUser } = useContext(CurrentUserContext);
	// console.log('currentUser', currentUser);
	return (
		<>
			<nav>
				<ul>
					{currentUser !== null ? (
						<li>
							Hello, <Link to='/login'>Logout</Link>
						</li>
					) : (
						<li>
							<Link to='/signup'>Sign up</Link>
						</li>
					)}
				</ul>
			</nav>
			<Routes>
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Home currentUser={currentUser} />} />
			</Routes>
		</>
	);
}

export default App;
