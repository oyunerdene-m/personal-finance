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
import {
	logoIcon,
	userIcon,
	dashboardIcon,
	transactionsIcon,
	accountsIcon,
} from './assets/icons/icons';

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
			<div
				style={{ border: '1px solid red' }}
				className='container mx-auto p-7 lg:flex w-full md:columns-2 bg-background-color'
			>
				<div
					style={{ border: '1px solid purple' }}
					className='md:basis-1/6 flex flex-col p-10 w-full md:border-r-[1px] md:border-light-gray'
				>
					<nav>
						<ul>
							<li className='font-semibold uppercase text-xl	mb-20 flex'>
								<span>{logoIcon}</span>
								<Link to='/dashboard'>My Finance</Link>
							</li>
							<li className='flex mb-7'>
								<span>{dashboardIcon}</span>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
							<li className='flex mb-7'>
								<span>{userIcon}</span>
								<p>
									<span className='mr-2'>Hello, {currentUser.name}</span>
									<Link className='font-medium italic' onClick={logoutHandler} to='/login'>
										Logout
									</Link>
								</p>
							</li>
							<li className='flex mb-7'>
								<span>{accountsIcon}</span>
								<Link to='/accounts'>Accounts</Link>
							</li>
							<li className='flex'>
								<span>{transactionsIcon}</span>
								<Link to='/transactions'>Transactions</Link>
							</li>
						</ul>
					</nav>
				</div>
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
