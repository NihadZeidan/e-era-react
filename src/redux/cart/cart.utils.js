export function addItemToCart(cartItems, newItemToAdd) {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === newItemToAdd.id
  );

  if (existingItem) {
    // We used map to create a new array of items
    return cartItems.map((cartItem) =>
      cartItem.id === newItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // We keep returning a new array of items for redux to update
  return [...cartItems, { ...newItemToAdd, quantity: 1 }];
}
