import './App.css';
import { Link, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from './context/user-context';
import { fetchData } from './lib/fetchData';
import { AccountsProvider } from './context/accounts-context';
import Home from './pages/home';
import Signup from './components/Users/Signup';
import Login from './components/Users/Login';
import Dashboard from './pages/dashboard';
import Accounts from './pages/accounts';
import AddAccount from './components/Accounts/NewAccount/AddAccount';
import EditAccount from './components/Accounts/EditAccount';
import Transactions from './pages/transactions';
import AddTransaction from './components/Transactions/NewTransaction/AddTransaction';
import EditTransaction from './components/Transactions/EditTransaction';
import { logoIcon, userIcon, homeIcon, transactionsIcon, accountsIcon } from './assets/icons/icons';

function App() {
	const location = useLocation();
	const { currentUser, isUserLoading } = useContext(CurrentUserContext);

	async function logoutHandler() {
		try {
			await fetchData('/api/v1/users/logout', 'GET', undefined);
			window.location.reload();
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	if (isUserLoading) return 'Loading...';

	const path = location.pathname;

	if (!currentUser && path !== '/login' && path !== '/signup') {
		return <Navigate to='/login' />;
	}
	if (currentUser && path === '/login') {
		return <Navigate to='/dashboard' />;
	}

	const loddedInState = (
		<div className='container-fluid'>
			<div style={{ border: '1px solid red' }}>
				<nav style={{ border: '1px solid purple' }}>
					<ul>
						<li>
							<span>{logoIcon}</span>
							<p>MY FINANCE</p>
						</li>
						<li>
							<span>{homeIcon}</span>
							<Link to='/dashboard'>Dashboard</Link>
						</li>
						<li>
							<span>{userIcon}</span>
							<p>
								Hello, {currentUser.name}
								<Link onClick={logoutHandler} to='/login'>
									Logout
								</Link>
							</p>
						</li>
						<li>
							<span>{accountsIcon}</span>
							<Link to='/accounts'>Accounts</Link>
						</li>
						<li>
							<span>{transactionsIcon}</span>
							<Link to='/transactions'>Transactions</Link>
						</li>
					</ul>
				</nav>
				<AccountsProvider>
					<Routes>
						<Route exact path='/dashboard' element={<Dashboard />} />
						<Route path='/accounts' element={<Accounts />} />
						<Route path='/accounts/new' element={<AddAccount />} />
						<Route path='/accounts/edit/:id' element={<EditAccount />} />
						<Route path='/transactions' element={<Transactions />}></Route>
						<Route path='/transactions/new' element={<AddTransaction />}></Route>
						<Route path='/transactions/edit/:id' element={<EditTransaction />}></Route>
					</Routes>
				</AccountsProvider>
			</div>
		</div>
	);

	const notLoggedInState = (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/signup'>Sign up</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route exact path='/signup' element={<Signup />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/' element={<Home />} />
			</Routes>
		</>
	);

	return currentUser ? loddedInState : notLoggedInState;
}

export default App;
