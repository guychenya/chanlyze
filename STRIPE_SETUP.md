# Stripe Integration Setup Guide

## 1. Create Stripe Product & Price

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Products** → **Add Product**
3. Create product:
   - Name: `Chanlyze Pro`
   - Description: `20 analyses per day with priority support`
   - Pricing: `$1.99/month` (recurring)
4. Copy the **Price ID** (starts with `price_`)

## 2. Get Stripe API Keys

1. Go to **Developers** → **API Keys**
2. Copy:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

## 3. Add Environment Variables to Netlify

Go to Netlify → Site Settings → Environment Variables and add:

### Frontend Variables (VITE_*)
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
VITE_STRIPE_PRICE_ID_PRO=price_xxxxx
```

### Backend Variables (for Netlify Functions)
```
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx (see step 4)
```

## 4. Setup Stripe Webhook

1. Go to **Developers** → **Webhooks** → **Add Endpoint**
2. Endpoint URL: `https://chanlyze.reliatrack.org/.netlify/functions/stripe-webhook`
3. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.deleted`
   - `customer.subscription.updated`
4. Copy the **Signing Secret** (starts with `whsec_`)
5. Add to Netlify as `STRIPE_WEBHOOK_SECRET`

## 5. Test Mode vs Live Mode

### Test Mode (Development)
- Use test keys: `pk_test_*` and `sk_test_*`
- Use test cards: `4242 4242 4242 4242`
- No real charges

### Live Mode (Production)
- Use live keys: `pk_live_*` and `sk_live_*`
- Real credit cards
- Real charges

## 6. Enable Stripe Customer Portal

1. Go to **Settings** → **Billing** → **Customer Portal**
2. Enable portal
3. Configure:
   - Allow customers to cancel subscriptions
   - Allow customers to update payment methods
   - Set branding (logo, colors)

## 7. Verify Setup

1. Push code to GitHub
2. Netlify auto-deploys
3. Go to `/subscription` page
4. Click "Upgrade to Pro"
5. Use test card: `4242 4242 4242 4242`
6. Check Stripe Dashboard for payment

## Test Cards

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

Use any future expiry date and any 3-digit CVC.

## Troubleshooting

### Webhook not receiving events
- Check webhook URL is correct
- Verify `STRIPE_WEBHOOK_SECRET` in Netlify
- Check Netlify function logs

### Checkout not working
- Verify `VITE_STRIPE_PUBLISHABLE_KEY` is set
- Check browser console for errors
- Ensure Price ID is correct

### User plan not updating
- Webhook must be configured
- Check Netlify function logs
- Verify Clerk user metadata updates

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Clerk Metadata](https://clerk.com/docs/users/metadata)
