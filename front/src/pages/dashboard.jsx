import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Accounts from './accounts';
import Transactions from './transactions';
import { AccountsContext } from '../context/accounts-context';
import { getBalance, getStatement } from '../lib/stats';
import { fetchData } from '../lib/fetchData';

export default function Dashboard() {
	const [transactions, setTransactions] = useState([]);
	const location = useLocation();
	const path = location.pathname;
	const { accounts } = useContext(AccountsContext);
	const totalBalance = getBalance(accounts);

	useEffect(() => {
		async function getTransactions() {
			try {
				const data = await fetchData('/api/v1/transactions', 'GET', undefined);
				setTransactions(data.transactions);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		getTransactions();
	}, []);

	const totalStatement = getStatement(transactions);

	return (
		<>
			<div
				className='md:basis-3/6 flex flex-col p-10 text-left'
				style={{ border: '1px solid green' }}
			>
				<div className='mb-2'>
					<p>Total Balance</p>
					<div className='text-xl'>
						<span className='mr-3'>€{totalBalance.eur}</span>
						<span className='mr-3'>${totalBalance.usd}</span>
						<span>₮{totalBalance.tug}</span>
					</div>
				</div>
				<div className='flex justify-between pb-6 border-b-[1px] border-light-gray'>
					<div>
						<p className='text-more-gray'>Income</p>
						<span>€{totalStatement.income}</span>
					</div>
					<div>
						<p className='text-more-gray'>Expense</p>
						<span>€{totalStatement.expense}</span>
					</div>
					<div>
						<p className='text-more-gray'>Credit Limit</p>
						<span>$2002</span>
					</div>
				</div>
				<div className='pt-7 pb-6 border-b-[1px] border-light-gray max-h-56 overflow-y-scroll'>
					<Accounts path={path} />
				</div>
				<div className='pt-2'>
					<Transactions />
				</div>
			</div>
			<div className='md:basis-2/6' style={{ border: '1px solid blue' }}>
				<h1>Chart should goes here!!!</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates distinctio et,
					culpa velit doloribus mollitia quaerat facilis a animi ratione earum aspernatur laborum
					optio debitis dignissimos omnis repudiandae cum!
				</p>
			</div>
		</>
	);
}
