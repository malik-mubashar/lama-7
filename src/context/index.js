import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {
	/*****getting values from local storage if any***************************/
	const prevUser = JSON.parse(window.localStorage.getItem('currentUser')) || null;
	const prevCart = JSON.parse(window.localStorage.getItem('cart')) || [];
	const prevCartTotal = JSON.parse(window.localStorage.getItem('cartTotal')) || null;

	/**********************************************************************/


	/*****setting values from local storage to constants*******************/
	const [currentUser, setCurrentUser] = useState(prevUser);
	const [cart, setCart] = useState(prevCart);
	const [cartTotal, setCartTotal] = useState(prevCartTotal);
	const [productsCopy, setProductsCopy] = useState(null);
	const [users, setUsers] = useState({});
	const [products, setProducts] = useState(
		{

			"products": [
				{
					"id": "hdmdu0t80yjkfqselfc",
					"category": "shoes",
					"name": "Jordan Air",
					"pUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfHw%3D&w=1000&q=80",
					"stock": 6,
					"price": 399.99,
					"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
					"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
				},
				{
					"id": "3dc7fiyzlfmkfqseqam",
					"category": "bags",
					"name": "T&G Hand Bag",
					"pUrl": "https://i.pinimg.com/originals/6e/8f/92/6e8f9246d74276ce7d2efd419de60d74.jpg",
					"stock": 19,
					"price": 299.99,
					"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
					"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
				},
				{
					"id": "aoe8wvdxvrkfqsew67",
					"category": "shirts",
					"name": "Cotton shirt slim fit",
					"pUrl": "https://i.pinimg.com/736x/ec/38/bb/ec38bbcb80b92200b140c3e589fe4e29.jpg",
					"stock": 14,
					"price": 149.99,
					"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
					"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
				},
				{
					"id": "bmfrurdkswtkfqsf15j",
					"category": "shorts",
					"name": "Ralph Lauren mini",
					"pUrl": "https://image.s5a.com/is/image/TheBay/195934497795_main?wid=233&hei=310&qlt=90&resMode=sharp2&op_usm=1.2,1,6,0",
					"stock": 4,
					"price": 109.99,
					"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
					"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
				},
				{
					"id": "wf0segvkvulkyyeowrv",
					"name": "new product",
					"pUrl": "https://i.insider.com/5ed95c393f7370198527eea3?width=700",
					"price": "123",
					"stock": "10",
					"shortDesc": "lom",
					"description": "l oasdl asdll l oasdl asdlll oasdl asdll l oasdl asdll l oasdl asdll l oasdl asdll v vl oasdl asdll "
				}
			]
		}
	);

	/*****************************************************************/

	// /*****setting values to local storage*****************************/
	// useEffect(() => {
	// 	if (!currentUser) {
	// 		localStorage.clear();
	// 	} else {
	// 		localStorage.removeItem('user');
	// 		localStorage.setItem('user', JSON.stringify(currentUser));
	// 	}

	// 	if (!cart) {
	// 		localStorage.clear();
	// 	} else {
	// 		localStorage.removeItem('user');
	// 		localStorage.setItem('user', JSON.stringify(currentUser));
	// 	}

	// }, [
	// 	currentUser,
	// 	cart,
	// 	cartTotal
	// ]);
	/*******************************************************************/

	/*****all root context variables and function ********************/
	const defaultContext = {
		currentUser,
		setCurrentUser,
		products,
		setProducts,
		users,
		setUsers, cart, setCart,
		productsCopy, setProductsCopy, cartTotal, setCartTotal

	};
	/*******************************************************************/

	return (
		<RootContext.Provider value={defaultContext}>
			{children}
		</RootContext.Provider>
	);
};