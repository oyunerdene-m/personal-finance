export default function TransactionButtons({ transactionType, setTransactionType }) {
	const style = {
		background: 'red',
	};

	function clickHandler(event) {
		if (transactionType === 'income') {
		}
		setTransactionType(event.target.name);
	}
	return (
		<div>
			<button
				style={transactionType === 'income' ? style : {}}
				name='income'
				onClick={clickHandler}
			>
				Income
			</button>
			<button
				style={transactionType === 'expense' ? style : {}}
				name='expense'
				onClick={clickHandler}
			>
				Expense
			</button>
			<button
				style={transactionType === 'transfer' ? style : {}}
				name='transfer'
				onClick={clickHandler}
			>
				Transfer
			</button>
		</div>
	);
}
