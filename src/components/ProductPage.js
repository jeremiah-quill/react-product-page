import React from "react";
import Slideshow from "./Slideshow";
import Counter from "./Counter";

const ProductPage = (props) => {
	const {
		productName,
		productDescription,
		productPrice,
		productDiscount,
		productOgPrice,
	} = props;
	return (
		<>
			<div className="backdrop"></div>
			<main>
				<Slideshow />
				<div className="product-content">
					<h2 className="orange-logo">Sneaker Company</h2>
					<h3 className="product-name">{productName}</h3>
					<p className="product-description">{productDescription}</p>
					<div className="price-group">
						<div className="price">{productPrice}</div>
						<div className="discount">{productDiscount}</div>
						<div className="original-price">{productOgPrice}</div>
					</div>
					<div className="quantity-cart-button-group">
					<Counter />
					<button className="add-to-cart btn">
            <img src="images/icon-cart.svg" alt="cart icon" />
            Add to cart
        </button>
					</div>
				</div>
			</main>

			{/* <div className="attribution">
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by
				<a target="_blank" href="https://jeremiahquill.com/">
					Jeremiah Quill
				</a>
				.
			</div> */}
		</>
	);
};

export default ProductPage;
