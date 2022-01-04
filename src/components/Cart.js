import React from "react";

const Cart = () => {
	return (
		<div className="cart">
			<header className="cart-header">
				<h1>Cart</h1>
				<button className="close-cart">
					<img
						className="close-cart"
						src="images/icon-close.svg"
						alt="close cart button"
					/>
				</button>
			</header>
			<div className="cart-body">
				<div className="cart-item-count"></div>
				<div className="cart-items"></div>
			</div>
		</div>
	);
};

export default Cart;
