import React from 'react';
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
// import { Cart } from './components/Cart/Cart';


const Home = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Products />} />
				{/* <Route path="/cart" element={<Cart />} /> */}
				<Route path="/p" element={<Products />} />
			</Routes>
		</div>
	)
}


export default Home;