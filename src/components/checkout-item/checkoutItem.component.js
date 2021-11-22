import "./checkoutItem.styles.scss";
const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">
        <span>&#x2718;</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
