export default function Account({ account }) {
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
					<button>edit</button>
					<button>delete</button>
				</div>
			</h3>
			<p>{description}</p>
		</li>
	);
}
