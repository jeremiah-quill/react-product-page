// import React, {useState} from "react";
import useToggle from "../hooks/useToggle.js";
import Cart from "./Cart";

const Header = (props) => {
	const { cart, addToCart, removeFromCart, toggleIsOverlay } = props;

	let cartCount = cart.reduce((prev, curr) => prev + curr.quantity, 0);

	const [isSidebar, toggleIsSidebar] = useToggle(false);
	const [isCart, toggleIsCart] = useToggle(false);

	const handleSidebar = () => {
		toggleIsSidebar();
		toggleIsOverlay();
	};

	const handleCart = () => {
		toggleIsCart();
		toggleIsOverlay();
	};

	return (
		<>
			<Cart
				isCart={isCart}
				toggleIsCart={toggleIsCart}
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				toggleIsOverlay={toggleIsOverlay}
			/>

			<header className="main-header">
				<nav className="header-nav">
					<img
						onClick={handleSidebar}
						className="hamburger"
						src="images/icon-menu.svg"
						alt="hamburger menu"
					/>
					<h1 className="black-logo">sneakers</h1>
				</nav>
				<div className={isSidebar ? "visible sidebar" : "sidebar"}>
					<button className="close-menu">
						<img
							onClick={handleSidebar}
							className="close-menu"
							src="images/icon-close.svg"
							alt="close menu button"
						/>
					</button>
					<ul>
						<li>Collections</li>
						<li>Men</li>
						<li>Women</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="nav-icons">
					<div className="cart-icon-group">
						<img
							onClick={handleCart}
							className="cart-icon"
							src="images/icon-cart.svg"
							alt="cart icon"
						/>
						{cartCount > 0 && (
							<div className="cart-notification">{cartCount}</div>
						)}
					</div>
					<img
						className="user-icon"
						src="images/image-avatar.png"
						alt="avatar"
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
