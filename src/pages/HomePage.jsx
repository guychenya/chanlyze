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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 border-b border-gray-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                Grow your YouTube channel faster with AI:<br />
                <span className="text-teal-600">insights, optimization, and competitor gaps</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
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
                  className="flex-1 px-6 py-4 rounded-lg bg-white border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-base text-gray-900 placeholder-gray-500 transition-all"
                />
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-700 transition-colors shadow-sm whitespace-nowrap"
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
              className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center space-x-1 transition-colors text-sm"
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
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Health Score */}
                  <div className="p-4 bg-white rounded-lg border-l-4 border-teal-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Channel Health</span>
                      <SafeIcon icon={FiActivity} className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">82<span className="text-lg text-gray-500">/100</span></div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>

                  {/* Top Opportunity */}
                  <div className="p-4 bg-white rounded-lg border-l-4 border-teal-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Top Opportunity</span>
                      <SafeIcon icon={FiClock} className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-base font-semibold text-gray-900">Post on Tue 3–5pm</p>
                    <p className="text-sm text-gray-600 mt-1">Expected <span className="text-green-600 font-semibold">+18%</span> CTR</p>
                  </div>

                  {/* Thumbnail CTR */}
                  <div className="p-4 bg-white rounded-lg border-l-4 border-teal-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Thumbnail CTR</span>
                      <SafeIcon icon={FiImage} className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-gray-900">7.2%</span>
                      <span className="text-sm text-gray-500">vs 5.8% avg</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-teal-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>

                  {/* Title Quality */}
                  <div className="p-4 bg-white rounded-lg border-l-4 border-teal-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Title Quality</span>
                      <SafeIcon icon={FiEdit3} className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">B+</div>
                    <p className="text-sm text-gray-600">Add numbers for <span className="text-green-600 font-semibold">+12%</span> clicks</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Generated from your last 20 uploads in under a minute
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">10,000+</div>
              <div className="text-sm text-gray-600 mt-1">Channels analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">35%</div>
              <div className="text-sm text-gray-600 mt-1">Average growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">5+ hrs</div>
              <div className="text-sm text-gray-600 mt-1">Saved weekly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl font-bold text-teal-600 mb-2">{t.metric}</div>
                <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-600">{t.role}, {t.subs}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="py-16 bg-gray-50">
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-600 rounded-lg mb-4">
                  <SafeIcon icon={block.icon} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{block.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{block.description}</p>
                <button className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors">
                  See an example →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">See Chanlyze in Action</h2>
          <p className="text-gray-600 mb-8">Watch how to get insights in 60 seconds</p>
          <div className="bg-white rounded-lg shadow-md p-2 border border-gray-200">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <SafeIcon icon={FiPlay} className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">45-second demo video</p>
                <p className="text-sm text-gray-500">Paste channel → Get score → See opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready to grow faster?
          </h2>
          <p className="text-teal-100 mb-8">
            Join 10,000+ creators optimizing their content with AI
          </p>
          <button
            onClick={() => navigate('/analyze')}
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-50 transition-colors shadow-sm inline-flex items-center space-x-2"
          >
            <span>Start Free Analysis</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </button>
          <p className="text-teal-100 text-sm mt-3">No password or credit card required</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
