import React, { useEffect, useState } from 'react';

const LOCAL_STORAGE_USER_KEY = 'user';

export const AppContext = React.createContext();

const keyData = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

export const DataContext = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		keyData ? JSON.parse(keyData) : null
	);
	const [currentDish, setCurrentDish] = useState('All');
	const [showLoader, setShowLoader] = useState(false);
	const [showBasket, setShowBasket] = useState(false);
	const [basketItems, setBasketItems] = useState([]);

	useEffect(() => {
		if (currentUser === null) {
			localStorage.setItem(LOCAL_STORAGE_USER_KEY, null);
		} else {
			localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
		}
	}, [currentUser]);

	const contextValue = {
		currentUser,
		setCurrentUser,
		currentDish,
		setCurrentDish,
		showLoader,
		setShowLoader,
		showBasket,
		setShowBasket,
		basketItems,
		setBasketItems,
	};

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
};
