import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

// import useDispatch
import { useDispatch } from "react-redux";
// import cart actions
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  // use destructors to get all the props out
	const { id, title, price, description } = props;

	const dispatch = useDispatch();

  // this function will be called when users click on "Add to Cart" button
	const addToCartHandler = () => {
		// need to pass the new item data into this function
		dispatch(
			cartActions.addItemToCart({
				id: id,
				title: title,
				price: price,
				description: description,
			})
		);

    console.log("Dispatch an action to add new item into cart!");
	};

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
