# Stripe Setup Guide

## 1. Create Product in Stripe

1. Go to https://dashboard.stripe.com/products
2. Click **Add Product**
3. Fill in:
   - Name: `Chanlyze Pro`
   - Price: `$1.99/month` (recurring)
4. Copy the **Price ID** (starts with `price_`)

## 2. Get API Keys

1. Go to https://dashboard.stripe.com/apikeys
2. Copy:
   - **Publishable key** (`pk_test_` or `pk_live_`)
   - **Secret key** (`sk_test_` or `sk_live_`)

## 3. Add to Netlify Environment Variables

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
VITE_STRIPE_PRICE_ID_PRO=price_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

## 4. Setup Webhook

1. Go to https://dashboard.stripe.com/webhooks
2. Add endpoint: `https://chanlyze.reliatrack.org/.netlify/functions/stripe-webhook`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.deleted`
4. Copy **Signing Secret** → Add to Netlify as `STRIPE_WEBHOOK_SECRET`

## 5. Enable Customer Portal

1. Go to https://dashboard.stripe.com/settings/billing/portal
2. Enable portal
3. Allow subscription cancellation

## Test Card

Use `4242 4242 4242 4242` with any future date and CVC.
