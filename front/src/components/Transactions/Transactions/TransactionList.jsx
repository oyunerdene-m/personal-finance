import Transaction from './Transaction';

export default function TransactionList({ transactions }) {
	return (
		<ul>
			{transactions.map((transaction) => (
				<Transaction />
			))}
		</ul>
	);
}
