import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

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

  const testimonials = [
    { metric: '+40% views in 2 months', name: 'Sarah Chen', role: 'Tech Reviewer', subs: '45K' },
    { metric: 'Found 6 content gaps', name: 'Marcus Rodriguez', role: 'Gaming', subs: '78K' },
    { metric: '+23% CTR improvement', name: 'Emma Wilson', role: 'Lifestyle', subs: '32K' }
  ];

  const valueBlocks = [
    { icon: FiBarChart3, title: 'Analyze', description: 'Scan your last 20 videos for titles, thumbnails, and retention patterns' },
    { icon: FiTarget, title: 'Compare', description: 'Benchmark against similar channels to find content gaps and opportunities' },
    { icon: FiTrendingUp, title: 'Optimize', description: 'Get weekly recommendations and track impact over time with AI insights' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Gradient Background Curves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-900/30 via-purple-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-800/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                The only AI assistant<br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  you'll ever need!
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Boost your productivity now! Ask anything, generate, enhance, review and refine content anywhere on your Desktop or Mobile!
              </p>
            </motion.div>

            {/* Input Card */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleAnalyze}
              className="max-w-2xl mx-auto mb-6"
            >
              <div className="bg-[#1a1a24]/80 backdrop-blur-xl rounded-2xl p-2 border border-purple-500/20">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={channelUrl}
                    onChange={(e) => setChannelUrl(e.target.value)}
                    placeholder="Paste your channel link to start"
                    className="flex-1 px-6 py-4 rounded-xl bg-[#0f0f17] border border-purple-500/10 outline-none text-base text-white placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:from-purple-700 hover:to-pink-700 transition-all whitespace-nowrap"
                  >
                    Get Started for Free
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">No login • 60-second scan</p>
            </motion.form>

            {/* Mini Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto mt-16"
            >
              <div className="bg-[#1a1a24]/60 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/30">
                    <SafeIcon icon={FiActivity} className="h-6 w-6 text-purple-400 mb-3" />
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Health</div>
                    <div className="text-4xl font-bold text-white">82</div>
                    <div className="text-sm text-purple-400 font-semibold mt-1">+5.2%</div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/20 backdrop-blur-xl p-6 rounded-2xl border border-pink-500/30">
                    <SafeIcon icon={FiClock} className="h-6 w-6 text-pink-400 mb-3" />
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Best Time</div>
                    <div className="text-lg font-bold text-white">Tue 3–5pm</div>
                    <div className="text-sm text-purple-400 font-semibold mt-1">+18% CTR</div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 backdrop-blur-xl p-6 rounded-2xl border border-indigo-500/30">
                    <SafeIcon icon={FiImage} className="h-6 w-6 text-indigo-400 mb-3" />
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">CTR</div>
                    <div className="text-4xl font-bold text-white">7.2%</div>
                    <div className="text-sm text-gray-400 mt-1">vs 5.8% avg</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/30">
                    <SafeIcon icon={FiEdit3} className="h-6 w-6 text-purple-400 mb-3" />
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Title</div>
                    <div className="text-4xl font-bold text-purple-400">B+</div>
                    <div className="text-sm text-purple-400 font-semibold mt-1">+12% potential</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10,000+</div>
              <div className="text-sm text-gray-400 mt-2">Channels</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">35%</div>
              <div className="text-sm text-gray-400 mt-2">Avg Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5+ hrs</div>
              <div className="text-sm text-gray-400 mt-2">Saved Weekly</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-gray-400 mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a24]/60 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              >
                <div className="text-2xl font-bold text-purple-400 mb-2">{t.metric}</div>
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}, {t.subs}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4">
                  <SafeIcon icon={block.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{block.title}</h3>
                <p className="text-gray-400 leading-relaxed">{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to grow faster?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join 10,000+ creators optimizing their content with AI
            </p>
            <button
              onClick={() => navigate('/analyze')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all inline-flex items-center space-x-2"
            >
              <span>Start Free Analysis</span>
              <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
            </button>
            <p className="text-gray-400 text-sm mt-4">No password or credit card required</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
