The Living Seeds web backend has been built using Node.js, with the Machine Learning part hosted over the Flask backend.

The following features have been implemented:
- **Authentication** - Provision for new users signing up and existing ones signing in.
- **Separate accounts** - Separate buyer and seller accounts.
- **Tracking bids** - Keeping count of number of bids on a product.
- **Payment** - Stripe based Payment for bids.
- API based Mongo.DB text search.

## Some codebase links

- Authentication - https://github.com/Palak-Agg/RA27_GRAVITY_WIMDR/blob/master/server/auth/passport.js
- Saving bids - https://github.com/Palak-Agg/RA27_GRAVITY_WIMDR/blob/master/server/api/bidding/bidding.js
- Payment - https://github.com/Palak-Agg/RA27_GRAVITY_WIMDR/blob/master/server/api/payment/stripe.js
- Mongo.DB text search - https://github.com/Palak-Agg/RA27_GRAVITY_WIMDR/blob/master/server/api/search/search.js

For detailed API documentation, visit [this page](https://github.com/Palak-Agg/RA27_GRAVITY_WIMDR).
