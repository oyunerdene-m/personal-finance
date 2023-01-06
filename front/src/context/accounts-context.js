import { useState, useEffect, createContext } from 'react';
import { fetchData } from '../lib/fetchData';

export const AccountsContext = createContext({ accounts: [] });

export const AccountsProvider = ({ children }) => {
	const [accounts, setAccounts] = useState([]);
	const [isAccountsLoading, setIsAccountsLoading] = useState(false);

	useEffect(() => {
		function getAccounts() {
			try {
				setIsAccountsLoading(true);
				const response = fetchData('api/v1/accounts', 'GET', undefined);
				console.log(response);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		getAccounts();
	}, []);

	return (
		<AccountsContext.Provider value={{ accounts, setAccounts, isAccountsLoading }}>
			{children}
		</AccountsContext.Provider>
	);
};
