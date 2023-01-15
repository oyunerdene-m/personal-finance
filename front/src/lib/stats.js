export function getBalance(accounts) {
	function getAmount(currency) {
		return accounts.reduce((acc, curr) => {
			if (curr.currency === currency) {
				return acc + curr.amount;
			} else {
				return acc + 0;
			}
		}, 0);
	}

	return {
		eur: getAmount('EUR'),
		usd: getAmount('USD'),
		tug: getAmount('MNT'),
	};
}

export function getStatement(transactions) {
	function getAmount(type) {
		return transactions.reduce((acc, curr) => {
			if (curr.type === type) {
				return acc + curr.amount;
			} else {
				return acc + 0;
			}
		}, 0);
	}
	return {
		income: getAmount('income'),
		expense: getAmount('expense'),
	};
}

export function sortedTransactions(transactions) {
	return transactions.sort((a, b) => a.createdAt - b.createdAt);
}

export function getLast3Transactions(transactions) {
	return transactions.slice(-3);
}
