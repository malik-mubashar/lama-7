import React, { useContext } from 'react';
import { RootContext } from '../../context/index'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
	const cart = {
		"shoes": {
			"id": "shoes",
			"product": {
				"id": "hdmdu0t80yjkfqselfc",
				"name": "shoes",
				"stock": 5,
				"price": 399.99,
				"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
				"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
			},
			"amount": 3
		},
		"bags": {
			"id": "bags",
			"product": {
				"id": "3dc7fiyzlfmkfqseqam",
				"name": "bags",
				"stock": 19,
				"price": 299.99,
				"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
				"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
			},
			"amount": 1
		},
		"shirts": {
			"id": "shirts",
			"product": {
				"id": "aoe8wvdxvrkfqsew67",
				"name": "shirts",
				"stock": 13,
				"price": 149.99,
				"shortDesc": "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
				"description": "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
			},
			"amount": 1
		}
	};
	const cartKeys = Object.keys(cart || {});
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
				{cartKeys.length ? (
					<div className="column columns is-multiline">
						{cartKeys.map(key => (
							<CartItem
								cartKey={key}
								key={key}
								cartItem={cart[key]}
							// removeFromCart={props.context.removeFromCart}
							/>
						))}
						<div className="column is-12 is-clearfix">
							<br />
							<div className="is-pulled-right">
								<button
									// onClick={props.context.clearCart}
									className="button is-warning "
								>
									Clear cart
								</button>{" "}
								<button
									className="button is-success"
								// onClick={props.context.checkout}
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