// Using this reselect library to select and cache our needs from the store.(Memoized selector)

import { createSelector } from "reselect";

// Input selector
const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// Output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// Output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

// Output selector

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
