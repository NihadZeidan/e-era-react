import cartReducer from "../cart.reducer";
import cartActionTypes from "../cart.types";

const initState = {
  hidden: true,
  cartItems: [],
};

it("Should return empty state (default)", () => {
  expect(cartReducer(undefined, {})).toEqual(initState);
});

it("Should Toggle Cart Hidden", () => {
  expect(
    cartReducer(initState, { type: cartActionTypes.TOGGLE_CART_HIDDEN }).hidden
  ).toEqual(false);
});

it("Should add item to the cart", () => {
  expect(
    cartReducer(initState, {
      type: cartActionTypes.ADD_ITEM,
      payload: { id: 1, name: "test" },
    }).cartItems
  ).toEqual([{ id: 1, name: "test", quantity: 1 }]);
});

it("Should remove item from the cart", () => {
  const initStateWithItem = {
    hidden: true,
    cartItems: [{ id: 1, name: "test", quantity: 5 }],
  };

  expect(
    cartReducer(initStateWithItem, {
      type: cartActionTypes.REMOVE_ITEM,
      payload: { id: 1, name: "test", quantity: 5 },
    }).cartItems
  ).toEqual([{ id: 1, name: "test", quantity: 4 }]);
});

it("Should clear item from the cart", () => {
  const initStateWithItem = {
    hidden: true,
    cartItems: [{ id: 1, name: "test", quantity: 5 }],
  };

  expect(
    cartReducer(initStateWithItem, {
      type: cartActionTypes.CLEAR_ITEM,
      payload: { id: 1, name: "test", quantity: 1 },
    }).cartItems
  ).toEqual([]);
});

it("Should clear cart", () => {
  const initStateWithItem = {
    hidden: true,
    cartItems: [
      { id: 1, name: "test", quantity: 5 },
      { id: 2, name: "test2", quantity: 5 },
    ],
  };

  expect(
    cartReducer(initStateWithItem, {
      type: cartActionTypes.CLEAR_CART,
    }).cartItems
  ).toEqual([]);
});
