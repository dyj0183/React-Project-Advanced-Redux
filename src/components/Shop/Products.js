import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

// set up 3 dummy products to play with
const DUMMY_PRODUCTS = [
	{ id: "p1", price: 6, title: "First Book", description: "My first book!" },
	{ id: "p2", price: 8, title: "Second Book", description: "My second book!" },
	{ id: "p3", price: 10, title: "Third Book", description: "My third book!" },
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
