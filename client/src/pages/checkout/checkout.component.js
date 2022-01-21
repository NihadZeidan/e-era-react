import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkoutItem.component";
import StripeCheckoutButton from "../../components/stripe-button/stripeButton.component";

const CheckoutPage = () => {
  const total = useSelector((state) => selectCartTotal(state));
  const cartItems = useSelector((state) => selectCartItems(state));
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem id={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>Total: ${total}</span>
      </div>

      <div className="payment-section">
        <div className="test-warning">
          *Please use the following test credit card for payments*
          <br />
          5555 5555 5555 4444 - Exp: Any Future Date - CVV: 023
        </div>
        <div>
          <StripeCheckoutButton price={total} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
