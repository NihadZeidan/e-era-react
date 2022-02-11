import "./cartDropdown.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cartItem.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ history }) => {
  // select a spicifice piece of state from the store like this will cost the component to rerender each time the reducer been called because it will return new state (even the values are the same),
  // so we use reselect library to select and cache our needs from the store.
  // const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItems = useSelector((state) => selectCartItems(state));

  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* This will cause CartItem to rerender each time we add new item to the cart (new array will be instantiated), that's why we memoized CartItem component so it will not rerender unless new data come from this array */}
        {cartItems?.length ? (
          cartItems?.map((cartItem) => (
            <CartItem key={cartItem?.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your Cart is Empty !</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
