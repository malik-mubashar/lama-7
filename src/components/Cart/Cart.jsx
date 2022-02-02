import React, { useContext } from 'react';
import { RootContext } from '../../context/index'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useNavigate } from "react-router-dom";

const Cart = () => {
	let navigate = useNavigate();

	const {
		productsCopy, setProductsCopy, products, setProducts, cart, setCart, cartTotal, setCartTotal, currentUser, setCurrentUser
	} = useContext(RootContext);
	const handleCheckout = () => {
		if (currentUser == null) {
			navigate(`/login`)
		} else {
			setProducts(productsCopy);
			setCart([]);
			setCartTotal(null);
			localStorage.setItem("cartTotal", null);
			localStorage.setItem("cart", JSON.stringify([]));
		}
	}

	const handleClearCart = () => {
		setProductsCopy(products);
		setCart([]);
		setCartTotal(null);
		localStorage.setItem("cartTotal", null);
		localStorage.setItem("cart", JSON.stringify([]));
	}
	debugger;
	return (

		<div>
			<div className="hero is-primary">
				<div className="hero-body container">
					<h4 className="title">My Cart</h4>
				</div>
			</div>
			<br />
			<div className="container">
				{cart.length ? (
					<div className="column columns is-multiline">
						{cart.map((item, i) => (
							<CartItem
								item={item}
								key={i}
								// cartItem={cart[key]}
							// removeFromCart={props.context.removeFromCart}
							/>
						))}
						<div className="column is-12 is-clearfix">
							<br />
							<div className="is-pulled-right">
								<button
									onClick={handleClearCart}
									className="button is-warning "
								>
									Clear cart
								</button>{" "}
								<button
									className="button is-success"
									onClick={handleCheckout}
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className="column">
						<div className="title has-text-grey-light">No item in cart!</div>
					</div>
				)}
			</div>
		</div>

	)
}


export default Cart;