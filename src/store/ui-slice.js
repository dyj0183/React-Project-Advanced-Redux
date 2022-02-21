import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: { cartIsVisible: false },
	reducers: {
		toggle(state) {
			// we NEVER want to mutate the old state! Even though it seems like we are mutating here,
			// we are actually not because the redux toolkit is doing something for us behind the scene
			state.cartIsVisible = !state.cartIsVisible;
		},
	},
});

// also want to export the actions
export const uiActions = uiSlice.actions;

export default uiSlice;
