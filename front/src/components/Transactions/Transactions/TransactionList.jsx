import Transaction from './Transaction';

export default function TransactionList({ transactions, isTransactionsLoading }) {
	if (isTransactionsLoading) return 'Loading...';
	return (
		<div className='rounded shadow-2xl'>
			<ul>
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</div>
	);
}
