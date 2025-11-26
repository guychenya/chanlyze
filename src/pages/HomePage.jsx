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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#0B0D12] mb-6 tracking-tight">
                Grow your YouTube channel<br />
                <span className="bg-gradient-to-r from-[#2A6AF7] via-[#5A44F2] to-[#2A6AF7] bg-clip-text text-transparent">
                  faster with AI
                </span>
              </h1>
              <p className="text-xl text-[#2A2F3A] max-w-2xl mx-auto mb-10 leading-relaxed">
                Pinpoint what to publish next, improve titles/thumbnails, and track growth weekly.
              </p>
            </motion.div>

            {/* Glassmorphism Input Card */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleAnalyze}
              className="max-w-2xl mx-auto mb-6"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-white/50">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={channelUrl}
                    onChange={(e) => setChannelUrl(e.target.value)}
                    placeholder="Paste your channel link to start"
                    className="flex-1 px-6 py-4 rounded-xl bg-white/90 border-0 outline-none text-base text-[#0B0D12] placeholder-[#5D6676]"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#2A6AF7] to-[#5A44F2] text-white px-8 py-4 rounded-xl text-base font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all whitespace-nowrap"
                  >
                    Start Free Analysis
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#5D6676] mt-3">No login • 60-second scan</p>
            </motion.form>

            {/* Mini Dashboard with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto mt-16"
            >
              <div className="bg-white/60 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Health Score */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl p-6 rounded-2xl border border-white/50">
                    <SafeIcon icon={FiActivity} className="h-6 w-6 text-[#2A6AF7] mb-3" />
                    <div className="text-xs font-semibold text-[#5D6676] uppercase tracking-wide mb-2">Health</div>
                    <div className="text-4xl font-bold text-[#0B0D12]">82</div>
                    <div className="text-sm text-[#14B657] font-semibold mt-1">+5.2%</div>
                  </div>

                  {/* Top Opportunity */}
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-xl p-6 rounded-2xl border border-white/50">
                    <SafeIcon icon={FiClock} className="h-6 w-6 text-[#D98B12] mb-3" />
                    <div className="text-xs font-semibold text-[#5D6676] uppercase tracking-wide mb-2">Best Time</div>
                    <div className="text-lg font-bold text-[#0B0D12]">Tue 3–5pm</div>
                    <div className="text-sm text-[#14B657] font-semibold mt-1">+18% CTR</div>
                  </div>

                  {/* Thumbnail CTR */}
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-6 rounded-2xl border border-white/50">
                    <SafeIcon icon={FiImage} className="h-6 w-6 text-[#14B657] mb-3" />
                    <div className="text-xs font-semibold text-[#5D6676] uppercase tracking-wide mb-2">CTR</div>
                    <div className="text-4xl font-bold text-[#0B0D12]">7.2%</div>
                    <div className="text-sm text-[#5D6676] mt-1">vs 5.8% avg</div>
                  </div>

                  {/* Title Quality */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl p-6 rounded-2xl border border-white/50">
                    <SafeIcon icon={FiEdit3} className="h-6 w-6 text-[#5A44F2] mb-3" />
                    <div className="text-xs font-semibold text-[#5D6676] uppercase tracking-wide mb-2">Title</div>
                    <div className="text-4xl font-bold text-[#2A6AF7]">B+</div>
                    <div className="text-sm text-[#14B657] font-semibold mt-1">+12% potential</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#2A6AF7] to-[#5A44F2] bg-clip-text text-transparent">10,000+</div>
              <div className="text-sm text-[#5D6676] mt-2">Channels</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#2A6AF7] to-[#5A44F2] bg-clip-text text-transparent">35%</div>
              <div className="text-sm text-[#5D6676] mt-2">Avg Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#2A6AF7] to-[#5A44F2] bg-clip-text text-transparent">5+ hrs</div>
              <div className="text-sm text-[#5D6676] mt-2">Saved Weekly</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#2A6AF7] to-[#5A44F2] bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-[#5D6676] mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/50 hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl font-bold text-[#14B657] mb-2">{t.metric}</div>
                <div className="text-sm font-semibold text-[#0B0D12]">{t.name}</div>
                <div className="text-xs text-[#5D6676]">{t.role}, {t.subs}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="py-16 bg-white/50 backdrop-blur-xl">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2A6AF7] to-[#5A44F2] rounded-2xl mb-4 shadow-lg">
                  <SafeIcon icon={block.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B0D12] mb-2">{block.title}</h3>
                <p className="text-[#5D6676] leading-relaxed">{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#2A6AF7] to-[#5A44F2] rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to grow faster?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join 10,000+ creators optimizing their content with AI
            </p>
            <button
              onClick={() => navigate('/analyze')}
              className="bg-white text-[#2A6AF7] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all shadow-xl inline-flex items-center space-x-2"
            >
              <span>Start Free Analysis</span>
              <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
            </button>
            <p className="text-white/70 text-sm mt-4">No password or credit card required</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
