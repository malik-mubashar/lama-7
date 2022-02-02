import React from "react";

const CartItem = props => {

	return (
		<div className=" column is-half">
			<div className="box">
				<div className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img
								src={`${props.item.pUrl}`}
								alt={props.item.shortDesc}
							/>
						</figure>
					</div>
					<div className="media-content">
						<b style={{ textTransform: "capitalize" }}>
							{props.item.name}{" "}
							<span className="tag is-primary">${props.item.price}</span>
						</b>
						<div>{props.item.shortDesc}</div>
						<small>{`${props.item.quantity} in cart`}</small>
					</div>
					<div
						className="media-right"
					// onClick={() => props.removeFromCart(cartKey)}
					>
						<span className="delete is-large"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
