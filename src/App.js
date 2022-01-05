import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import testProduct from "./data/testProduct";
import { useState } from "react";
import useToggle from "./hooks/useToggle";

function App() {
	const [cart, setCart] = useState([]);

	const [isOverlay, toggleIsOverlay] = useToggle(false);

	const addToCart = (newProduct, newQuantity) => {
		const cartHasProduct = cart.find((product) => product.id === newProduct.id);
		if (cartHasProduct) {
			setCart(
				cart.map((product) =>
					product.id === newProduct.id
						? { ...product, quantity: (product.quantity += newQuantity) }
						: product
				)
			);
		} else {
			setCart([...cart, { ...newProduct, quantity: newQuantity }]);
		}
	};

	const removeFromCart = (selectedProduct) => {
		if (selectedProduct.quantity === 1) {
			setCart(
				cart.filter(
					(product) => product.productId !== selectedProduct.productId
				)
			);
		} else {
			setCart(
				cart.map((product) =>
					product.productId === selectedProduct.productId
						? { ...product, quantity: product.quantity - 1 }
						: product
				)
			);
		}
	};

	return (
		<div className="App">
			<Overlay isOverlay={isOverlay} />
			<Header
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				toggleIsOverlay={toggleIsOverlay}
			/>
			<ProductPage
				toggleIsOverlay={toggleIsOverlay}
				testProduct={testProduct}
				addToCart={addToCart}
				slideshowImages={testProduct.slideshowImages}
			/>
		</div>
	);
}

export default App;
