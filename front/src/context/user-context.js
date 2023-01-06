import { useState, useEffect, createContext } from 'react';
import { fetchData } from '../lib/fetchData';

export const CurrentUserContext = createContext({ currentUser: null });

export const CurrentUserProvider = (props) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isUserLoading, setIsUserLoading] = useState(true);
	useEffect(() => {
		async function getCurrentUser() {
			try {
				setIsUserLoading(true);
				const response = await fetchData('/api/v1/users/current-user', 'GET', undefined);
				setCurrentUser(response.user);
			} catch (error) {
				console.error(error);
				alert(error);
			} finally {
				setIsUserLoading(false);
			}
		}
		getCurrentUser();
	}, []);

	return (
		<CurrentUserContext.Provider value={{ currentUser, setCurrentUser, isUserLoading }}>
			{props.children}
		</CurrentUserContext.Provider>
	);
};
