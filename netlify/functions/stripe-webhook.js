const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Webhook } = require('svix');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  // Handle the event
  switch (stripeEvent.type) {
    case 'checkout.session.completed': {
      const session = stripeEvent.data.object;
      const userId = session.metadata.userId;

      // Update user to Pro plan in Clerk
      // You'll need to use Clerk Backend API here
      console.log('Subscription created for user:', userId);
      
      // TODO: Update Clerk user metadata
      // await clerkClient.users.updateUserMetadata(userId, {
      //   publicMetadata: { plan: 'pro' }
      // });
      
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = stripeEvent.data.object;
      const customerId = subscription.customer;

      // Downgrade user to free plan
      console.log('Subscription cancelled for customer:', customerId);
      
      // TODO: Update Clerk user metadata to free
      
      break;
    }

    default:
      console.log(`Unhandled event type ${stripeEvent.type}`);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};
