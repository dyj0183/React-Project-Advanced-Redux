import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  // since we have multiple reducers in the store, we need to do .ui to get the one we want 
	const showCart = useSelector((state) => state.ui.cartIsVisible);

	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
