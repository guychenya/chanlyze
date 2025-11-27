import React from 'react';
import { motion } from 'framer-motion';
import { GradientBackground } from '../styles/theme.jsx';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0D17] relative overflow-hidden py-12">
      <GradientBackground />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-2xl p-8 border border-purple-500/30"
        >
          <h1 className="text-4xl font-semibold text-white mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Overview</h2>
              <p className="mb-4">
                Chanlyze is committed to protecting your privacy. This policy explains how we handle data when you use our YouTube channel analytics service.
              </p>
              <p className="font-semibold text-white">
                Key Point: We do NOT store any YouTube channel data, analytics results, or video information in our databases. All analysis is generated in real-time and displayed directly to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">2.1 Authentication Information</h3>
              <p className="mb-4">
                When you create an account, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address (for account creation and authentication)</li>
                <li>Name (optional, for personalization)</li>
                <li>Authentication credentials (managed securely by Clerk)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">2.2 Usage Information</h3>
              <p className="mb-4">
                We track minimal usage data for service functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Daily analysis count (to enforce subscription limits)</li>
                <li>Subscription tier (Free or Pro)</li>
                <li>Last reset date (for daily limit tracking)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">2.3 YouTube Data</h3>
              <p className="mb-4">
                We fetch publicly available YouTube data via YouTube Data API v3:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Channel statistics (subscribers, views, video count)</li>
                <li>Video metadata (titles, descriptions, thumbnails)</li>
                <li>Engagement metrics (likes, comments, views)</li>
              </ul>
              <p className="mt-2 font-semibold text-white">
                IMPORTANT: This data is fetched in real-time, displayed to you, and NOT stored in our databases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Authentication:</strong> To verify your identity and provide secure access</li>
                <li><strong className="text-white">Service Delivery:</strong> To fetch and display YouTube analytics in real-time</li>
                <li><strong className="text-white">Usage Limits:</strong> To track daily analysis counts per subscription tier</li>
                <li><strong className="text-white">Payment Processing:</strong> To process subscription payments via Stripe</li>
                <li><strong className="text-white">Communication:</strong> To send account-related notifications (optional)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Data Storage and Retention</h2>
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">4.1 What We Store</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>User account information (email, name, authentication data)</li>
                <li>Subscription status and payment information (via Stripe)</li>
                <li>Daily usage counters (reset every 24 hours)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">4.2 What We Do NOT Store</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>YouTube channel data or analytics results</li>
                <li>Video information or performance metrics</li>
                <li>Search history or analyzed channel URLs</li>
                <li>Generated reports or recommendations</li>
                <li>Any YouTube API responses</li>
              </ul>
              <p className="mt-4">
                All YouTube data is fetched on-demand, displayed in your browser, and discarded after your session ends.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Third-Party Services</h2>
              <p className="mb-4">We use the following third-party services:</p>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.1 Clerk (Authentication)</h3>
              <p className="mb-2">
                Manages user authentication and account security. See{' '}
                <a href="https://clerk.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  Clerk's Privacy Policy
                </a>
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.2 Stripe (Payments)</h3>
              <p className="mb-2">
                Processes subscription payments securely. We do not store credit card information. See{' '}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  Stripe's Privacy Policy
                </a>
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.3 YouTube Data API v3</h3>
              <p className="mb-2">
                Fetches public channel data. See{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  Google's Privacy Policy
                </a>
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.4 Netlify (Hosting)</h3>
              <p className="mb-2">
                Hosts our application. See{' '}
                <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  Netlify's Privacy Policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">6. Cookies and Local Storage</h2>
              <p className="mb-4">We use:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Essential Cookies:</strong> For authentication and session management (Clerk)</li>
                <li><strong className="text-white">Local Storage:</strong> To temporarily cache your API key (if provided) in your browser only</li>
              </ul>
              <p className="mt-4">
                We do NOT use tracking cookies, advertising cookies, or analytics cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">7. Data Security</h2>
              <p className="mb-4">We implement security measures including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure authentication via Clerk</li>
                <li>No storage of sensitive YouTube data</li>
                <li>Regular security updates and monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">8. Your Rights (GDPR Compliance)</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-white">Rectification:</strong> Correct inaccurate personal data</li>
                <li><strong className="text-white">Erasure:</strong> Request deletion of your account and data</li>
                <li><strong className="text-white">Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong className="text-white">Withdraw Consent:</strong> Opt-out of communications at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:info@relatech.org" className="text-purple-400 hover:text-purple-300 underline">
                  info@relatech.org
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">9. Children's Privacy</h2>
              <p>
                Chanlyze is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">10. International Data Transfers</h2>
              <p>
                Your data may be processed in countries outside your residence. We ensure appropriate safeguards are in place for international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">12. Contact Us</h2>
              <p>
                For questions about this Privacy Policy or to exercise your rights, contact us at:{' '}
                <a href="mailto:info@relatech.org" className="text-purple-400 hover:text-purple-300 underline font-medium">
                  info@relatech.org
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
