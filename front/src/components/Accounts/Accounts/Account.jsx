export default function Account({ account }) {
	const { name, description, amount, currency } = account;
	return (
		<li>
			<h3>
				{name} -{' '}
				<span>
					{amount}
					{currency}
				</span>
			</h3>
			<p>{description}</p>
		</li>
	);
}
