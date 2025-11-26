import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/50"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: November 26, 2025</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>Chanlyze analyzes publicly available YouTube channel data using the YouTube Data API v3. We do not collect or store personal information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Data</h2>
              <p>All analysis is performed client-side in your browser. Channel statistics, video metrics, and performance data are fetched directly from YouTube's public API and displayed to you in real-time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Data Storage</h2>
              <p>We do not store any channel data, analytics, or personal information on our servers. Your API key (if provided) is stored locally in your browser and never transmitted to our servers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
              <p>Chanlyze uses the YouTube Data API v3 to fetch public channel information. Please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">Google's Privacy Policy</a> for information about how YouTube handles data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Cookies</h2>
              <p>We use minimal cookies for essential functionality only. No tracking or advertising cookies are used.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
              <p>Since we don't collect or store personal data, there is no data to access, modify, or delete. All analysis happens in real-time and is not retained.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Contact</h2>
              <p>For questions about this privacy policy, contact us at: <a href="mailto:info@chanlyze@relatech.org" className="text-red-600 hover:text-red-700">info@chanlyze@relatech.org</a></p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
