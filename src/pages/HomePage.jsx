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
    {
      icon: FiBarChart3,
      title: 'Analyze',
      description: 'Scan your last 20 videos for titles, thumbnails, and retention patterns'
    },
    {
      icon: FiTarget,
      title: 'Compare',
      description: 'Benchmark against similar channels to find content gaps and opportunities'
    },
    {
      icon: FiTrendingUp,
      title: 'Optimize',
      description: 'Get weekly recommendations and track impact over time with AI insights'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-12 pb-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Grow your YouTube channel faster with AI:<br />
                <span className="text-cyan-400">insights, optimization, and competitor gaps</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                Pinpoint what to publish next, improve titles/thumbnails, and track growth weekly.
                Perfect for 1K–100K creators.
              </p>
            </motion.div>

            {/* Inline URL Input + CTA */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleAnalyze}
              className="max-w-2xl mx-auto mb-3"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={channelUrl}
                  onChange={(e) => setChannelUrl(e.target.value)}
                  placeholder="Paste your channel link to start"
                  className="flex-1 px-6 py-4 rounded-xl bg-slate-800 border-2 border-slate-700 focus:border-cyan-500 outline-none text-lg text-white placeholder-gray-500 transition-all"
                />
                <button
                  type="submit"
                  className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/50 whitespace-nowrap"
                >
                  Start Free Analysis
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">No login • 60-second scan</p>
            </motion.form>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center space-x-1 transition-colors"
            >
              <SafeIcon icon={FiPlay} className="h-4 w-4" />
              <span>Watch Demo</span>
            </motion.button>

            {/* Mini Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto mt-12"
            >
              <div className="bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Health Score */}
                  <div className="text-center p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                    <div className="flex items-center justify-center mb-2">
                      <SafeIcon icon={FiActivity} className="h-6 w-6 text-cyan-400" />
                      <span className="ml-2 text-sm font-medium text-gray-300">Channel Health</span>
                    </div>
                    <div className="text-4xl font-bold text-cyan-400 mb-1">82/100</div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>

                  {/* Top Opportunity */}
                  <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                    <div className="flex items-center mb-2">
                      <SafeIcon icon={FiClock} className="h-5 w-5 text-cyan-400" />
                      <span className="ml-2 text-sm font-semibold text-gray-300">Top Opportunity</span>
                    </div>
                    <p className="text-sm text-white font-medium">Post on Tue 3–5pm</p>
                    <p className="text-xs text-gray-400 mt-1">Expected +18% CTR</p>
                  </div>

                  {/* Thumbnail CTR */}
                  <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <SafeIcon icon={FiImage} className="h-5 w-5 text-cyan-400" />
                        <span className="ml-2 text-sm font-semibold text-gray-300">Thumbnail CTR</span>
                      </div>
                      <span className="text-lg font-bold text-cyan-400">7.2%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-slate-600 rounded-full h-2">
                        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                      <span className="text-xs text-gray-400">vs 5.8% niche avg</span>
                    </div>
                  </div>

                  {/* Title Quality */}
                  <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <SafeIcon icon={FiEdit3} className="h-5 w-5 text-cyan-400" />
                        <span className="ml-2 text-sm font-semibold text-gray-300">Title Quality</span>
                      </div>
                      <span className="text-lg font-bold text-cyan-400">B+</span>
                    </div>
                    <p className="text-xs text-gray-400">Add numbers for +12% clicks</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">
                  Generated from your last 20 uploads in under a minute
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400">10,000+</div>
              <div className="text-sm text-gray-400">Channels analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">35%</div>
              <div className="text-sm text-gray-400">Average growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">5+ hrs</div>
              <div className="text-sm text-gray-400">Saved weekly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">98%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-cyan-500 transition-all"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-2">{t.metric}</div>
                <div className="text-sm text-white font-medium">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}, {t.subs}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-xl mb-4 shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <SafeIcon icon={block.icon} className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{block.title}</h3>
                <p className="text-gray-400 mb-4">{block.description}</p>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  See an example →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See Chanlyze in Action</h2>
          <p className="text-gray-400 mb-8">Watch how to get insights in 60 seconds</p>
          <div className="bg-slate-800 rounded-2xl shadow-2xl p-2 border border-slate-700">
            <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <SafeIcon icon={FiPlay} className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-300">45-second demo video</p>
                <p className="text-sm text-gray-500">Paste channel → Get score → See opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800 border-t border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to grow faster?
          </h2>
          <p className="text-gray-400 mb-8">
            Join 10,000+ creators optimizing their content with AI
          </p>
          <button
            onClick={() => navigate('/analyze')}
            className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/50 inline-flex items-center space-x-2"
          >
            <span>Start Free Analysis</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </button>
          <p className="text-gray-500 text-sm mt-3">No password or credit card required</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
