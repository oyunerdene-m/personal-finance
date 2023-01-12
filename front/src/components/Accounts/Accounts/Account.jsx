import { Link } from 'react-router-dom';

export default function Account({ account, onDelete }) {
	const { name, description, amount, currency, id, type } = account;
	return (
		<li className='border bg-card-blue text-white rounded-md p-4'>
			<div className='flex items-center border-b-[1px] border-light-gray'>
				<h4>{name} -&nbsp;</h4>
				<span className='text-xs text-light-gray inline-block'> {type}</span>
			</div>

			<div className='pb-0.5 border-b-[1px] border-light-gray'></div>
			<div className='flex items-center mt-1'>
				<p className='text-xs pt-3 text-light-gray mr-2'>balance:</p>
				<span className='text-md pt-3 text-light-gray inline-block'>
					{currency}
					{amount}
				</span>
			</div>

			<div className='flex items-center mb-2'>
				<p className='text-xs text-light-gray mr-2'>description: </p>
				<span className='text-md text-light-gray inline-block'>{description}</span>
			</div>

			<button className='mr-2 text-xs bg-transparent hover:bg-light-gray text-blue-700 font-semibold hover:text-dark-blue py-1 px-2 border hover:border-transparent rounded'>
				<Link to={`/accounts/edit/${id}`}>edit</Link>
			</button>
			<button
				className='mr-2 text-xs bg-transparent hover:bg-light-gray text-blue-700 font-semibold hover:text-dark-blue py-1 px-2 border hover:border-transparent rounded'
				onClick={() => onDelete(id)}
			>
				delete
			</button>
		</li>
	);
}
