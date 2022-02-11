import cartActionTypes from "../cart.types";
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItem,
  clearCart,
  updateCartInFirebase,
  userCartFromFirebase,
} from "../cart.actions";

let mockItem;
beforeEach(() => {
  mockItem = {
    id: 1,
    title: "test",
    price: 1,
  };
});

it("test toggleCartHidden Action", () => {
  expect(toggleCartHidden()).toEqual({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  });
});
it("test addItem Action", () => {
  expect(addItem(mockItem)).toEqual({
    type: cartActionTypes.ADD_ITEM,
    payload: mockItem,
  });
});

it("test removeItem Action", () => {
  expect(removeItem(mockItem)).toEqual({
    type: cartActionTypes.REMOVE_ITEM,
    payload: mockItem,
  });
});
it("test clearItem Action", () => {
  expect(clearItem(mockItem)).toEqual({
    type: cartActionTypes.CLEAR_ITEM,
    payload: mockItem,
  });
});

it("test clearCart Action", () => {
  expect(clearCart()).toEqual({
    type: cartActionTypes.CLEAR_CART,
  });
});

it("test updateCartInFirebase Action", () => {
  expect(updateCartInFirebase()).toEqual({
    type: cartActionTypes.UPDATE_CART_IN_FIREBASE,
  });
});

it("test userCartFromFirebase Action", () => {
  const cart = [{ id: 1, title: "test", price: 1 }];
  expect(userCartFromFirebase(cart)).toEqual({
    type: cartActionTypes.USER_CART_FROM_FIREBASE,
    payload: cart,
  });
});
