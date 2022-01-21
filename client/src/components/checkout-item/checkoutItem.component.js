import "./checkoutItem.styles.scss";
import { useDispatch } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.actions";
const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>

      <span className="price">${price}</span>

      {/* Note how I made a new component for each item so I pass the whole item as props and delete or add it to the array easily  */}
      <div
        className="remove-button"
        onClick={() => dispatch(clearItem(cartItem))}
      >
        <span>&#x2718;</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
