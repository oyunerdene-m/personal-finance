import { Link } from 'react-router-dom';

export default function Account({ account, onDelete }) {
	const { name, description, amount, currency, id } = account;
	return (
		<li>
			<h3>
				{name} -{' '}
				<span>
					{amount}
					{currency}
				</span>
				<div>
					<button>
						<Link to={`/accounts/edit/${id}`}>edit</Link>
					</button>
					<button
						onClick={() => {
							onDelete(id);
						}}
					>
						delete
					</button>
				</div>
			</h3>
			<p>{description}</p>
		</li>
	);
}
