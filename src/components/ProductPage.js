import React from "react";
import Slideshow from "./Slideshow";
import useCount from "../hooks/useCount";

const ProductPage = (props) => {
	const { testProduct, addToCart, slideshowImages } = props;

	const [count, changeCount, resetCount] = useCount(0);

	const handleAddToCart = (product, quantity) => {
		addToCart(product, quantity);
		resetCount();
	};

	return (
		<>
			<main>
				<Slideshow slideshowImages={slideshowImages} />
				<div className="product-content">
					<h2 className="orange-logo">Sneaker Company</h2>
					<h3 className="product-name">{testProduct.productName}</h3>
					<p className="product-description">
						{testProduct.productDescription}
					</p>
					<div className="price-group">
						<div className="price">${testProduct.productPrice}.00</div>
						<div className="discount">
							{testProduct.productDiscount * 100}% off
						</div>
						<div className="original-price">
							${testProduct.productOgPrice}.00
						</div>
					</div>
					<div className="quantity-cart-button-group">
						<div className="quantity-picker">
							<button onClick={() => changeCount(-1)} className="minus">
								<img
									className="minus"
									src="images/icon-minus.svg"
									alt="minus icon"
								/>
							</button>
							<div className="quantity">{count}</div>
							<button onClick={() => changeCount(1)} className="plus">
								<img
									className="plus"
									src="images/icon-plus.svg"
									alt="plus icon"
								/>
							</button>
						</div>
						<button
							onClick={() => handleAddToCart(testProduct, count)}
							className="add-to-cart btn"
						>
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
