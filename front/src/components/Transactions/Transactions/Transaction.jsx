export default function Transaction({ transaction }) {
	const { type, amount, category, createdAt, description, accountId } = transaction;
	return (
		<li>
			<p>
				type: {type}, category: {category} - {amount}
			</p>
			<p>
				description: {description}, accountId: {accountId} {createdAt}
			</p>
			<button>edit</button>
			<button>delete</button>
		</li>
	);
}
