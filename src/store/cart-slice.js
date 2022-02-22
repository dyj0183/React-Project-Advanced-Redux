import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuantity: 0,
	},
    // NEVER use any async codes or side effect inside the reducers
	reducers: {
		addItemToCart(state, action) {
            // get this from the new item when user click on "Add to Cart" button
			const newItem = action.payload;
            // first, make sure if the cart already has the item or not
			const existingItem = state.items.find((item) => item.id === newItem.id);
            // update the total quantity of the entire cart
            state.totalQuantity++;

            // if the item doesn't exist yet, we want to create a new one and push into the list
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			} else {
                // if it already exists, update the quantity and total price
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity++;

			if (existingItem.quantity === 1) {
				// filter returns a new array that matches the condition. we can use this way to remove the item from array
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
