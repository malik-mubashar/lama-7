import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

export default ({ children }) => {
	/*****getting values from local storage if any***************************/
	const prevUser = JSON.parse(window.localStorage.getItem('user')) || null;

	/**********************************************************************/


	/*****setting values from local storage to constants*******************/
	const [currentUser, setCurrentUser] = useState(prevUser);
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [productsCopy, setProductsCopy] = useState(null);
	const [users, setUsers] = useState({
		"users": [
			{
				"email": "regular@example.com",
				"password": "$2a$10$2myKMolZJoH.q.cyXClQXufY1Mc7ETKdSaQQCC6Fgtbe0DCXRBELG",
				"id": 1
			},
			{
				"email": "admin@example.com",
				"password": "$2a$10$w8qB40MdYkMs3dgGGf0Pu.xxVOOzWdZ5/Nrkleo3Gqc88PF/OQhOG",
				"id": 2
			}
		],
	})
	const [products, setProducts] = useState(
		{

			"products": [
				{
					"id": "hdmdu0t80yjkfqselfc",
					"name": "shoes",
					"stock": 6,
					"price": 399.99,
					"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
					"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
				},
				{
					"id": "3dc7fiyzlfmkfqseqam",
					"name": "bags",
					"stock": 19,
					"price": 299.99,
					"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
					"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
				},
				{
					"id": "aoe8wvdxvrkfqsew67",
					"name": "shirts",
					"stock": 14,
					"price": 149.99,
					"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
					"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
				},
				{
					"id": "bmfrurdkswtkfqsf15j",
					"name": "shorts",
					"stock": 4,
					"price": 109.99,
					"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
					"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
				},
				{
					"id": "wf0segvkvulkyyeowrv",
					"name": "new product",
					"price": "123",
					"stock": "10",
					"shortDesc": "lom",
					"description": "l oasdl asdll l oasdl asdlll oasdl asdll l oasdl asdll l oasdl asdll l oasdl asdll v vl oasdl asdll "
				}
			]
		}
	);

	/*****************************************************************/

	/*****setting values to local storage*****************************/
	useEffect(() => {
		if (!currentUser) {
			localStorage.clear();
		} else {
			localStorage.removeItem('user');
			localStorage.setItem('user', JSON.stringify(currentUser));
		}

	}, [
		currentUser,

	]);
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