import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {
	/*****getting values from local storage if any***************************/
	const prevUser = JSON.parse(window.localStorage.getItem('currentUser')) || null;
	const prevCart = JSON.parse(window.localStorage.getItem('cart')) || [];
	const prevCartTotal = JSON.parse(window.localStorage.getItem('cartTotal')) || null;
	const prevProducts = JSON.parse(window.localStorage.getItem('products')) || null;
	const prevProductsCopy = JSON.parse(window.localStorage.getItem('productsCopy')) || null;
	debugger;
	const prevIsSuperUser = JSON.parse(window.localStorage.getItem('isSuperUser')) || false;

	/**********************************************************************/


	/*****setting values from local storage to constants*******************/
	const [currentUser, setCurrentUser] = useState(prevUser);
	const [cart, setCart] = useState(prevCart);
	const [cartTotal, setCartTotal] = useState(prevCartTotal);
	const [productsCopy, setProductsCopy] = useState(prevProductsCopy);
	const [isSuperUser, setIsSuperUser] = useState(prevIsSuperUser);
	const [products, setProducts] = useState(prevProducts);

	/*****************************************************************/

	/*****all root context variables and function ********************/
	const defaultContext = {
		currentUser,
		setCurrentUser,
		products,
		setProducts,
		cart, setCart,
		productsCopy, setProductsCopy, cartTotal,
		setCartTotal, isSuperUser, setIsSuperUser

	};
	/*******************************************************************/

	return (
		<RootContext.Provider value={defaultContext}>
			{children}
		</RootContext.Provider>
	);
};