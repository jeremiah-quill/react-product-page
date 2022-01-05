// import React from "react";

const Product = (props) => {
	const { product, addToCart, removeFromCart } = props;

	return (
		<div className="cart-item">
			<img
				className="cart-item-thumbnail"
				src="images/image-product-1-thumbnail.jpg"
				alt="thumbnail of selected product"
			/>
			<div className="cart-item-details truncate">
				<div className="cart-item-name truncate">{product.productName}</div>
				<div className="cart-item-pricing">
					<div className="cart-item-price">
						${product.productPrice}.00&nbsp;
					</div>
					<div className="cart-item-quantity-container">
						x
						<span className="cart-item-quantity">{product.quantity}&nbsp;</span>
					</div>
					<div className="cart-item-subtotal">
						${product.productPrice * product.quantity}.00
					</div>
				</div>
			</div>
			<div className="cart-quantity-buttons">
				<button onClick={() => removeFromCart(product)} className="remove-item">
					<img src="images/icon-minus.svg" alt="minus icon" />
				</button>
				<button onClick={() => addToCart(product, 1)} className="add-item">
					<img src="images/icon-plus.svg" alt="plus icon" />
				</button>
			</div>
		</div>
	);
};

export default Product;
