import React, { useContext } from 'react';
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


const Home = () => {
	const {
		cart, setCart, products, setProducts, productsCopy, setProductsCopy
	} = useContext(RootContext);
	if (productsCopy == null) {
		setProductsCopy(products);
	}



	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Products productsCopy={productsCopy} setProductsCopy={setProductsCopy} />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</div>
	)
}


export default Home;