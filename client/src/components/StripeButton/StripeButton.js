import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price, productId, userId }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WSbckftiSk2JAiLcBNW6uff100VCH3oyvR';

  const onToken = token => {
    console.log(token);
    if (token) {
      axios.post(`${process.env.REACT_APP_API_URL}/api/bid/addbidder/${productId}`, { bidPrice: price, id: userId })
        .then(res => {
          console.log("ADDED BIDDER", res.data)
          alert('Payment Succesful!');
          this.props.history.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  };

  return (
    <StripeCheckout
      label='Place Your Bid'
      name='Living Seeds'
      billingAddress
      shippingAddress
      currency="INR"
      image={require('./Logo_SIH.png')}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;