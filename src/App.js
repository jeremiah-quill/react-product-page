import ProductPage from "./components/ProductPage";
import Header from "./components/Header"
import testProduct1 from './data/testProduct1'

function App() {
	return (
		<div className="App">
			<Header />
			<ProductPage productName={testProduct1.productName} productDescription={testProduct1.productDescription} productPrice={testProduct1.productPrice} productDiscount={testProduct1.productDiscount} productOgPrice={testProduct1.productOgPrice} />
		</div>
	);
}

export default App;
