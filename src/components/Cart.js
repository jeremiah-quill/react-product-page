import React from "react";
import Product from "./Product";

const Cart = (props) => {
	const {
		cart,
		isCart,
		toggleIsCart,
		toggleIsOverlay,
		addToCart,
		removeFromCart,
	} = props;

	const handleCart = () => {
		toggleIsCart();
		toggleIsOverlay();
	};

	return (
		<div className={isCart ? "cart active-cart" : "cart"}>
			<header className="cart-header">
				<h1>Cart</h1>
				<button onClick={handleCart} className="close-cart">
					<img
						className="close-cart"
						src="images/icon-close.svg"
						alt="close cart button"
					/>
				</button>
			</header>
			<div className="cart-body">
				<div className="cart-item-count"></div>
				<div className="cart-items">
					{cart.length > 0 ? (
						cart.map((product, index) => (
							<Product
								product={product}
								key={index}
								addToCart={addToCart}
								removeFromCart={removeFromCart}
							/>
						))
					) : (
						<div>No Items in cart</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Cart;
