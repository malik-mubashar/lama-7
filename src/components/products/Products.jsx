import React, { useContext, useEffect, useState } from 'react';
import { RootContext } from '../../context/index'
import ProductItem from "./ProductItem";

const Products = (props) => {
	const {
		productsCopy, setProductsCopy, products, cart, setCart, cartTotal, setCartTotal
	} = useContext(RootContext);

	const handleStock = (obj) => {
		debugger;
		console.log(props.productsCopy);
		let tempObj = JSON.parse(JSON.stringify(productsCopy));
		tempObj.products.map(x => {
			if (x._id === obj._id) {
				x.stock = x.stock - 1;
			}
		});
		setProductsCopy(tempObj);

		addToCart(obj);
	}
	const addToCart = (obj) => {
		let idFound = false;
		let tempCart = [...cart];
		if (cart && cart.length == 0) {
			obj['quantity'] = 1;
			tempCart.push(obj);
		} else {
			tempCart.map(x => {
				if (x._id == obj._id) {
					x.quantity = x.quantity + 1;
					idFound = true;
				}
			})
			if (!idFound) {
				obj['quantity'] = 1;
				tempCart.push(obj);
			}
		}
		debugger;

		setCart(tempCart);
		localStorage.setItem("cart", JSON.stringify(tempCart));
		calculateCartTotalProducts(tempCart);
	}

	const calculateCartTotalProducts = (currentCart) => {
		let total = 0;
		currentCart.map(x => {
			total = total + x.quantity;
		})
		setCartTotal(total);
		localStorage.setItem("cartTotal", JSON.stringify(total));
	}

	debugger;
	return (
		<div>
			<div className="hero is-primary">
				<div className="hero-body container">
					<h4 className="title"
						onClick={props.asad}
					>Our Products</h4>
				</div>
			</div>
			<br />
			<div className="container">
				<div className="column columns is-multiline">
					{productsCopy && productsCopy.products.length ? (
						productsCopy.products.map((product, index) => (
							<ProductItem
								product={product}
								key={index}
								// addToCart={props.addToCart}
								handleStock={handleStock}
							/>
						))
					) : (
						<div className="column">
							<span className="title has-text-grey-light">
								No products found!
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}


export default Products;
