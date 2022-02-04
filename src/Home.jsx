import React, { useContext, useEffect } from 'react';
import { RootContext } from './context';
import {
	Switch,
	Route,
	HashRouter,
	BrowserRouter,
	Redirect,
	Routes,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';


const Home = () => {
	const {
		productsCopy, setProductsCopy, products, setProducts, cart, setCart, cartTotal, setCartTotal, currentUser, setCurrentUser
	} = useContext(RootContext);
	// if (productsCopy == null) {
	// 	setProductsCopy(products);
	// }
	useEffect(() => {
		console.log(products)
		debugger;
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "*",
				mode: "no-cors",
			},
		};
		fetch('http://localhost:4000/products/')
			.then(response => response.json())
			.then(data => {
				debugger;
				if (data && data.length > 0) {
					setProducts({ products: data });
					setProductsCopy({ products: data });
					setCart([]);
					setCartTotal(null);
					localStorage.setItem("cartTotal", null);
					localStorage.setItem("cart", JSON.stringify([]));
					localStorage.setItem("products", JSON.stringify({ products: data }));
					localStorage.setItem("productsCopy", JSON.stringify({ products: data }));
				}

			});
	}, []);




	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Products productsCopy={productsCopy} setProductsCopy={setProductsCopy} />} />
				<Route exact path="/cart" element={<Cart />} />
				<Route exact path="/products" element={<Products />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Login signUp={true} />} />
			</Routes>
		</div>
	)
}


export default Home;