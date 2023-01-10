import { useState, useEffect, createContext } from 'react';
import { fetchData } from '../lib/fetchData';

export const AccountsContext = createContext({ accounts: [] });

export const AccountsProvider = ({ children }) => {
	const [accounts, setAccounts] = useState([]);
	const [isAccountsLoading, setIsAccountsLoading] = useState(true);

	useEffect(() => {
		async function getAccounts() {
			try {
				setIsAccountsLoading(true);
				const res = await fetchData('/api/v1/users/current-user', 'GET', undefined);
				const currentUser = res.user;
				if (!currentUser) {
					return;
				}
				const response = await fetchData('/api/v1/accounts', 'GET', undefined);
				setAccounts(response.accounts);
			} catch (error) {
				console.error(error);
				alert(error);
			} finally {
				setIsAccountsLoading(false);
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
