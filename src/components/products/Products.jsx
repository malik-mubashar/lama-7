import React, { useContext, useEffect, useState } from 'react';
import { RootContext } from '../../context/index'
import ProductItem from "./ProductItem";

const Products = () => {
	//RootContext
	const {
		products, setProducts
	} = useContext(RootContext);

	// const [productsReceived, setproductsReceived] = useState();


	useEffect(() => {
		// debugger;
		console.log(products)
	}, [products]);

	return (
		<div>
			<div className="hero is-primary">
				<div className="hero-body container">
					<h4 className="title">Our Products</h4>
				</div>
			</div>
			<br />
			<div className="container">
				<div className="column columns is-multiline">
					{products && products.products.length ? (
						products.products.map((product, index) => (
							<ProductItem
								product={product}
								key={index}
							// addToCart={props.context.addToCart}
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
