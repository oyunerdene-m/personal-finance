import { useLocation } from 'react-router-dom';
import Accounts from './accounts';
import Transactions from './transactions';

export default function Dashboard() {
	const location = useLocation();
	const path = location.pathname;

	return (
		<>
			<div
				className='md:basis-2/5 flex flex-col p-10 text-left'
				style={{ border: '1px solid green' }}
			>
				<div className='mb-2'>
					<p>Total Balance</p>
					<div className='text-xl'>
						<span>$32000.00</span>
					</div>
				</div>
				<div className='flex justify-between pb-6 border-b-[1px] border-light-gray'>
					<div>
						<p className='text-more-gray'>Income</p>
						<span>$8272</span>
					</div>
					<div>
						<p className='text-more-gray'>Expense</p>
						<span>$2002</span>
					</div>
				</div>
				<div className='pt-7 pb-6 border-b-[1px] border-light-gray'>
					<Accounts path={path} />
				</div>
				<div className='pt-2'>
					<Transactions path={path} />
				</div>
			</div>
			<div className='md:basis-2/5' style={{ border: '1px solid blue' }}>
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
