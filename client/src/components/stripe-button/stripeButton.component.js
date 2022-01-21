import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  // We need to convert the price to cents accourdnig to Stripe API
  const priceForStripe = price * 100;

  //   This key to be used for the Stripe API to connect my app with my Stripe Account.
  const publishableKey =
    "pk_test_51JzLTSHwqUbMWz7msO9wZmg23dbcFpstWu3gMSKVGIBBUCS6a1KOu1KAMeSJkqfnlrLh7AQbS9A2BrBr6HDY4lfR00yNVyjKY3";

  const onToken = (token) => {
    axios
      .post("/payment", { amount: priceForStripe, token })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      billingAddress
      shippingAddress
      amount={priceForStripe}
      label="Pay Now"
      name="Electronic Era Ltd."
      currency="usd"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
