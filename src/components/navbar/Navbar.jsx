import React, { useContext } from 'react';
import { RootContext } from '../../context/index'
import { Link } from 'react-router-dom';

const Navbar = () => {
	const {
		productsCopy, setProductsCopy, products, cart, setCart, cartTotal, setCartTotal, currentUser, setCurrentUser
	} = useContext(RootContext);
	const handlelogout = () => {
		setCurrentUser(null);
		// setCart([]);
		// setCartTotal(null);
		localStorage.setItem("currentUser", null);
			// localStorage.setItem("cartTotal", null);
			// localStorage.setItem("cart", JSON.stringify([]));

	}
	return (

		<nav
			className="navbar container"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<b className="navbar-item is-size-4 ">ecommerce</b>
				<label
					role="button"
					class="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"


				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</label>
			</div>
			<div className="navbar-menu is-active" >
				<Link to="/products" className="navbar-item">
					Products
				</Link>
				{/* {this.state.user && this.state.user.accessLevel < 1 && (
						<Link to="/add-product" className="navbar-item">
							Add Product
						</Link>
					)} */}
				<Link to="/cart" className="navbar-item">
					Cart
					<span
						className="tag is-primary"
						style={{ marginLeft: "5px" }}
					>
						{cartTotal}
					</span>
				</Link>
				{!currentUser ? (
					<Link to="/login" className="navbar-item">
						Login
					</Link>
				) : (
					<Link to="/"
							onClick={handlelogout}
						className="navbar-item">
						Logout
					</Link>
				)}
			</div>
		</nav>

	)
}


export default Navbar;
