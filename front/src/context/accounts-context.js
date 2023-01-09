import { useState, useEffect, createContext, useContext } from 'react';
import { fetchData } from '../lib/fetchData';
import { CurrentUserContext } from './user-context';

export const AccountsContext = createContext({ accounts: [] });

export const AccountsProvider = ({ children }) => {
	const { currentUser } = useContext(CurrentUserContext);
	const [accounts, setAccounts] = useState([]);
	const [isAccountsLoading, setIsAccountsLoading] = useState(true);

	useEffect(() => {
		async function getAccounts() {
			try {
				setIsAccountsLoading(true);
				const response = await fetchData('/api/v1/accounts', 'GET', undefined);
				setAccounts(response.accounts);
			} catch (error) {
				console.error(error);
				alert(error);
			} finally {
				setIsAccountsLoading(false);
			}
		}
		if (currentUser) {
			getAccounts();
		}
	}, [currentUser]);

	return (
		<AccountsContext.Provider value={{ accounts, setAccounts, isAccountsLoading }}>
			{children}
		</AccountsContext.Provider>
	);
};
