import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { GradientBackground } from '../styles/theme';

const HomePage = () => {
  const { FiPlay, FiArrowRight, FiBarChart3, FiTrendingUp, FiTarget, FiClock, FiImage, FiEdit3, FiActivity } = FiIcons;
  const navigate = useNavigate();
  const [channelUrl, setChannelUrl] = useState('');

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (channelUrl.trim()) {
      navigate('/analyze', { state: { initialUrl: channelUrl } });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D17] relative overflow-hidden">
      <GradientBackground />

      {/* Hero */}
      <section className="relative pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                The only AI assistant<br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                  you'll ever need!
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                Boost your productivity now! Ask anything, generate, enhance, review and refine content anywhere.
              </p>
            </motion.div>

            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} onSubmit={handleAnalyze} className="max-w-3xl mx-auto mb-8">
              <div className="bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-2xl p-3 border border-purple-500/30">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" value={channelUrl} onChange={(e) => setChannelUrl(e.target.value)} placeholder="Paste your channel link to start" className="flex-1 px-6 py-4 rounded-xl bg-[#0B0D17] border border-purple-500/20 outline-none text-white placeholder-gray-500 focus:border-purple-500/50 transition-colors" />
                  <button type="submit" className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/25">
                    Get Started for Free
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">No login • 60-second scan</p>
            </motion.form>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-6xl mx-auto mt-20">
              <div className="bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: FiActivity, label: 'Health', value: '82', change: '+5.2%', color: 'purple' },
                    { icon: FiClock, label: 'Best Time', value: 'Tue 3–5pm', change: '+18% CTR', color: 'pink' },
                    { icon: FiImage, label: 'CTR', value: '7.2%', change: 'vs 5.8% avg', color: 'indigo' },
                    { icon: FiEdit3, label: 'Title', value: 'B+', change: '+12% potential', color: 'purple' }
                  ].map((item, i) => (
                    <div key={i} className={`bg-gradient-to-br from-${item.color}-600/20 to-${item.color}-900/10 backdrop-blur-xl p-6 rounded-2xl border border-${item.color}-500/40`}>
                      <SafeIcon icon={item.icon} className={`h-7 w-7 text-${item.color}-400 mb-4`} />
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{item.label}</div>
                      <div className="text-5xl font-bold text-white mb-1">{item.value}</div>
                      <div className={`text-sm text-${item.color}-400 font-semibold`}>{item.change}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '10,000+', label: 'Channels' },
              { value: '35%', label: 'Avg Growth' },
              { value: '5+ hrs', label: 'Saved Weekly' },
              { value: '98%', label: 'Satisfaction' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: '+40% views in 2 months', name: 'Sarah Chen', role: 'Tech Reviewer', subs: '45K' },
              { metric: 'Found 6 content gaps', name: 'Marcus Rodriguez', role: 'Gaming', subs: '78K' },
              { metric: '+23% CTR improvement', name: 'Emma Wilson', role: 'Lifestyle', subs: '32K' }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#1A1D2E]/60 backdrop-blur-2xl p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all">
                <div className="text-3xl font-bold text-purple-400 mb-3">{t.metric}</div>
                <div className="text-base font-semibold text-white mb-1">{t.name}</div>
                <div className="text-sm text-gray-400">{t.role}, {t.subs}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: FiBarChart3, title: 'Analyze', description: 'Scan your last 20 videos for titles, thumbnails, and retention patterns' },
              { icon: FiTarget, title: 'Compare', description: 'Benchmark against similar channels to find content gaps and opportunities' },
              { icon: FiTrendingUp, title: 'Optimize', description: 'Get weekly recommendations and track impact over time with AI insights' }
            ].map((block, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
                  <SafeIcon icon={block.icon} className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{block.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-900/60 via-purple-800/60 to-pink-900/60 backdrop-blur-2xl rounded-3xl p-16 border border-purple-500/40">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to grow faster?</h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">Join 10,000+ creators optimizing their content with AI</p>
            <button onClick={() => navigate('/analyze')} className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white px-12 py-5 rounded-xl text-lg font-semibold hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/25 inline-flex items-center space-x-3">
              <span>Start Free Analysis</span>
              <SafeIcon icon={FiArrowRight} className="h-6 w-6" />
            </button>
            <p className="text-gray-400 text-sm mt-5">No password or credit card required</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
