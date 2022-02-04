import React, { useContext } from 'react';
import { RootContext } from '../../context/index'
import { Link } from 'react-router-dom';

const Navbar = () => {
	const {
		productsCopy, setProductsCopy, products, cart, setCart, cartTotal, setCartTotal, currentUser, setCurrentUser, isSuperUser, setIsSuperUser
	} = useContext(RootContext);
	const handlelogout = () => {
		setCurrentUser(null);
		setIsSuperUser(false);
		// setCart([]);
		// setCartTotal(null);
		localStorage.setItem("setIsSuperUser", JSON.stringify(false));
		localStorage.setItem("currentUser", null);
			// localStorage.setItem("cartTotal", null);
			// localStorage.setItem("cart", JSON.stringify([]));


	}
	console.log("isSuperUser", isSuperUser);
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
					className="navbar-burger burger"
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
				{isSuperUser &&
					<Link to="/products" className="navbar-item">
						Add New Product
					</Link>
				}
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
					<div style={{ display: "flex" }}>
						<Link to="/login" className="navbar-item">
							Login
						</Link>
						<Link to="/signup" className="navbar-item">
							Sign Up
						</Link>
					</div>
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
