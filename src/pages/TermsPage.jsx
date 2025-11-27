import React from 'react';
import { motion } from 'framer-motion';
import { GradientBackground } from '../styles/theme.jsx';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0D17] relative overflow-hidden py-12">
      <GradientBackground />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Chanlyze ("the Service"), you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="leading-relaxed mb-4">
                Chanlyze provides YouTube channel analytics, insights, and recommendations using data from the YouTube Data API v3 
                and AI-powered analysis tools. The Service is provided for informational and educational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. No Warranty and Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                <strong className="text-white">IMPORTANT:</strong> The information, analytics, insights, and recommendations provided by Chanlyze are:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Generated using third-party APIs (YouTube Data API v3) and AI algorithms</li>
                <li>Provided "AS IS" without any warranties of accuracy, completeness, or reliability</li>
                <li>Subject to limitations and potential errors from data sources and AI processing</li>
                <li>Not guaranteed to be current, accurate, or error-free</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong className="text-white">You acknowledge and agree that:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Chanlyze is NOT responsible for the accuracy, reliability, or completeness of any data or recommendations</li>
                <li>You should independently verify all information before making any decisions</li>
                <li>Any actions taken based on information from Chanlyze are at your own risk</li>
                <li>Chanlyze shall not be liable for any damages, losses, or consequences arising from use of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sources and Third-Party Services</h2>
              <p className="leading-relaxed mb-4">
                Chanlyze relies on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">YouTube Data API v3:</strong> Subject to YouTube's Terms of Service and API limitations</li>
                <li><strong className="text-white">AI Analysis:</strong> Generated recommendations may contain inaccuracies or biases</li>
                <li><strong className="text-white">Public Data Only:</strong> All analyzed data is publicly available on YouTube</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We are not affiliated with, endorsed by, or sponsored by YouTube or Google.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. User Responsibilities</h2>
              <p className="leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to reverse engineer, hack, or abuse the Service</li>
                <li>Not use the Service to violate any third-party rights</li>
                <li>Verify all information independently before making decisions</li>
                <li>Comply with YouTube's Terms of Service when using analyzed data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Subscription and Payments</h2>
              <p className="leading-relaxed mb-4">
                Chanlyze offers free and paid subscription tiers:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Free Tier:</strong> 3 analyses per day</li>
                <li><strong className="text-white">Pro Tier:</strong> $1.99/month for 20 analyses per day</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Payments are processed securely through Stripe. Subscriptions renew automatically unless cancelled. 
                No refunds are provided for partial months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, features, and functionality of Chanlyze are owned by the Service provider and protected by 
                international copyright, trademark, and other intellectual property laws. The analyzed data and reports 
                generated are for your personal use only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
              <p className="leading-relaxed">
                We reserve the right to terminate or suspend access to the Service immediately, without prior notice, 
                for any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Continued use of the Service after changes 
                constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Disclaimer of Educational Purpose</h2>
              <p className="leading-relaxed">
                This Service is provided for educational and informational purposes. It is not intended as professional 
                advice for business, marketing, or financial decisions. Consult qualified professionals for specific advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact</h2>
              <p className="leading-relaxed">
                For questions about these Terms, contact us at:{' '}
                <a href="mailto:info@relatech.org" className="text-purple-400 hover:text-purple-300">
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

export default TermsPage;
