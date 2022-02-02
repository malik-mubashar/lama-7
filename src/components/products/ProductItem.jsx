import React, { useContext, useEffect, useState } from 'react';

const ProductItem = (props) => {

	return (
		<div className=" column is-half">
			<div className="box">
				<div className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img
								src={props.product.pUrl}
								alt={props.product.shortDesc}
							/>
						</figure>
					</div>
					<div className="media-content">
						<b style={{ textTransform: "capitalize" }}>
							{props.product.name}{" "}
							<span className="tag is-primary">${props.product.price}</span>
						</b>
						<div>{props.product.shortDesc}</div>
						{props.product.stock > 0 ? (
							<small>{props.product.stock + " Available"}</small>
						) : (
							<small className="has-text-danger">Out Of Stock</small>
						)}
						<div className="is-clearfix">
							{props.product.stock > 0 ? (
							<button
									className="button is-small is-outlined is-primary   is-pulled-right"
									onClick={() => {
										props.handleStock(props.product);
										// props.addToCart({
										// 	id: tempProduct.name,
										// 	tempProduct,
										// 	amount: 1
										// })
									}
									}
								>
									Add to Cart
								</button>
							) : (
								<button
									className="button is-small is-outlined is-danger   is-pulled-right"
									disabled
								>
									outOfStock
								</button>
							)}

						</div>
					</div>
				</div>
			</div>
		</div>
	)

}
export default ProductItem