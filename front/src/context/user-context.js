import { useState, useEffect, createContext } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = (props) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		async function getCurrentUser() {
			try {
				const response = await fetch('/api/v1/users/current-user');
				console.log(response);
				setCurrentUser(response);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		getCurrentUser();
	}, []);

	return (
		<CurrentUserContext.Provider value={{ currentUser }}>
			{props.children}
		</CurrentUserContext.Provider>
	);
};
