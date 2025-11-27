import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser, SignInButton } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { GradientBackground } from '../styles/theme.jsx';
import { createCheckoutSession } from '../services/stripeService';

const SubscriptionPage = () => {
  const { user } = useUser();
  const { FiCheck, FiZap, FiStar } = FiIcons;
  const [loading, setLoading] = useState(false);
  
  const currentPlan = user?.publicMetadata?.plan || 'free';
  const usageToday = user?.publicMetadata?.usageToday || 0;

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      limit: '3 analyses/day',
      features: [
        'Real-time YouTube data',
        'AI-powered insights',
        'Performance metrics',
        'Growth recommendations',
        'Competitor analysis',
        'Resets daily at midnight'
      ],
      cta: 'Current Plan',
      current: currentPlan === 'free',
      icon: FiCheck
    },
    {
      name: 'Pro',
      price: '$1.99',
      period: 'per month',
      limit: '20 analyses/day',
      features: [
        'Everything in Free',
        '20 analyses per day',
        'Priority processing',
        'Advanced AI insights',
        'Export reports (coming soon)',
        'Priority support'
      ],
      cta: 'Upgrade to Pro',
      popular: true,
      current: currentPlan === 'pro',
      icon: FiZap
    }
  ];

  const handleSubscribe = async (planName) => {
    if (planName === 'free' || !user) return;
    
    setLoading(true);
    try {
      const priceId = import.meta.env.VITE_STRIPE_PRICE_ID_PRO;
      await createCheckoutSession(
        priceId,
        user.id,
        user.primaryEmailAddress.emailAddress
      );
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Failed to start checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D17] relative overflow-hidden py-12">
      <GradientBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start free, upgrade when you need more. No credit card required.
          </p>
        </motion.div>

        {/* Usage Stats */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-md mx-auto mb-12 bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-xl p-6 border border-purple-500/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Today's Usage</p>
                <p className="text-2xl font-bold text-white">
                  {usageToday} / {currentPlan === 'pro' ? '20' : '3'}
                </p>
              </div>
              <div className="bg-purple-900/50 p-3 rounded-full">
                <SafeIcon icon={FiStar} className="h-6 w-6 text-purple-400" />
              </div>
            </div>
            <div className="mt-4 bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-600 to-indigo-600 h-full transition-all duration-300"
                style={{ width: `${(usageToday / (currentPlan === 'pro' ? 20 : 3)) * 100}%` }}
              />
            </div>
          </motion.div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-2xl p-8 border ${
                plan.popular
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'border-purple-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.current && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Current Plan
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex bg-purple-900/50 p-4 rounded-full mb-4">
                  <SafeIcon icon={plan.icon} className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/ {plan.period}</span>
                </div>
                <p className="text-purple-400 font-medium">{plan.limit}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {!user && plan.name === 'Pro' ? (
                <SignInButton mode="modal">
                  <button className="w-full py-3 rounded-lg font-medium transition-all bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/50">
                    Sign In to Upgrade
                  </button>
                </SignInButton>
              ) : (
                <button
                  onClick={() => handleSubscribe(plan.name.toLowerCase())}
                  disabled={plan.current || loading}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.current || loading
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                      : 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/50'
                  }`}
                >
                  {loading ? 'Loading...' : plan.current ? 'Current Plan' : plan.cta}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How does the daily limit work?',
                a: 'Your analysis count resets every day at midnight UTC. Unused analyses do not roll over.'
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! Cancel your Pro subscription anytime. You\'ll keep Pro access until the end of your billing period.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and digital wallets through our secure payment processor.'
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. We only analyze public YouTube data and never store your channel credentials. All data is encrypted.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
