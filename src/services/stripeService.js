import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const createCheckoutSession = async (priceId, userId, userEmail) => {
  try {
    const response = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        userId,
        userEmail,
      }),
    });

    const session = await response.json();
    
    if (session.error) {
      throw new Error(session.error);
    }

    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Stripe checkout error:', error);
    throw error;
  }
};

export const createPortalSession = async (userId) => {
  try {
    const response = await fetch('/.netlify/functions/create-portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    const session = await response.json();
    
    if (session.error) {
      throw new Error(session.error);
    }

    window.location.href = session.url;
  } catch (error) {
    console.error('Stripe portal error:', error);
    throw error;
  }
};
