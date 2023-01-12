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
		<div className='w-full sm:px-0 min-w-md'>
			<div className='flex space-x-1 rounded-xl bg-light-purple p-1'>
				<button
					className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white'
					style={{
						background: transactionType === 'income' && '#fff',
						color: transactionType === 'income' && '#06084c',
					}}
					name='income'
					onClick={clickHandler}
				>
					Income
				</button>
				<button
					className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white'
					style={{
						background: transactionType === 'expense' && '#fff',
						color: transactionType === 'expense' && '#06084c',
					}}
					name='expense'
					onClick={clickHandler}
				>
					Expense
				</button>
				<button
					className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white'
					style={{
						background: transactionType === 'transfer' && '#fff',
						color: transactionType === 'transfer' && '#06084c',
					}}
					name='transfer'
					onClick={clickHandler}
				>
					Transfer
				</button>
			</div>
		</div>
	);
}
