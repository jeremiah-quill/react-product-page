import React, {useState} from "react";
import Cart from "./Cart";

const Header = () => {
	const [isSidebar, setIsSidebar] = useState(false)

	const toggleSidebar = () => {
		setIsSidebar(!isSidebar)
	}

	return (
		<>
			<Cart />
			<header className="main-header">
				<nav className="header-nav">
					<img
						onClick={toggleSidebar}
						className="hamburger"
						src="images/icon-menu.svg"
						alt="hamburger menu"
					/>
					<h1 className="black-logo">sneakers</h1>
				</nav>
				<div className={isSidebar ? 'visible sidebar' : 'sidebar'}>
					<button className="close-menu">
						<img
							onClick={toggleSidebar}
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
							className="cart-icon"
							src="images/icon-cart.svg"
							alt="cart icon"
						/>
						<div className="cart-notification"></div>
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
