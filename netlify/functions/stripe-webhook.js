const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sig = event.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  switch (stripeEvent.type) {
    case 'checkout.session.completed':
      const session = stripeEvent.data.object;
      console.log('Subscription created for user:', session.metadata.userId);
      // TODO: Update Clerk user metadata to 'pro'
      break;

    case 'customer.subscription.deleted':
      const subscription = stripeEvent.data.object;
      console.log('Subscription cancelled:', subscription.customer);
      // TODO: Update Clerk user metadata to 'free'
      break;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};
