import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Signup from './components/Users/Signup';
import Login from './components/Users/Login';

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/signup'>Sign up</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						Hello, <Link to='/login'>Logout</Link>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />

				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
