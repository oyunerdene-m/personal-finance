import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountsContext } from '../../../context/accounts-context';

export default function Transaction({ transaction }) {
	const { id, type, amount, category, createdAt, description, accountId } = transaction;
	const { accounts, isAccountsLoading } = useContext(AccountsContext);
	const foundAccount = accounts.find((account) => account.id === accountId);

	if (isAccountsLoading) return 'Loading...';
	return (
		<li className='flex mb-2 p-2 rounded odd:bg-double-light-blue shadow-xl items-center'>
			<div className='text-left  w-3/12 '>
				<p>{createdAt}</p>
				<p>{category}</p>
				<p className='text-sm font-medium'>
					<i>{type}</i>
				</p>
			</div>
			<div className='text-left  w-6/12 '>
				<span>{foundAccount.name}</span>
				<p>
					<i className='text-sm'>description: </i>
					{description}
				</p>
			</div>
			<div className='w-3/12 text-right'>
				<div>
					<i className='text-sm mb-2 inline-block'>amount: </i> €{amount}
				</div>

				<div>
					<Link to={`/transactions/edit/${id}`}>
						<button className='text-xs bg-transparent hover:bg-light-purple text-blue-700 font-semibold hover:text-white py-0.5 px-1.5 border hover:border-transparent rounded'>
							edit
						</button>
					</Link>
				</div>
			</div>
		</li>
	);
}
