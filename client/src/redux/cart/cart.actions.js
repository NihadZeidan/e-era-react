import cartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item,
});

export const clearCart = () => {
  return {
    type: cartActionTypes.CLEAR_CART,
  };
};

export const updateCartInFirebase = () => ({
  type: cartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const userCartFromFirebase = (cart) => {
  return {
    type: cartActionTypes.USER_CART_FROM_FIREBASE,
    payload: cart,
  };
};
