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
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 border-b border-[#D6D9E0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-[#0B0D12] mb-4 tracking-tight">
                Grow your YouTube channel faster with AI:<br />
                <span className="text-[#2A6AF7]">insights, optimization, and competitor gaps</span>
              </h1>
              <p className="text-lg text-[#5D6676] max-w-2xl mx-auto mb-8 leading-relaxed">
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
                  className="flex-1 px-6 py-4 rounded-lg bg-white border border-[#D6D9E0] focus:border-[#9EC2FF] focus:ring-2 focus:ring-[#9EC2FF] outline-none text-base text-[#0B0D12] placeholder-[#5D6676] transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#2A6AF7] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#245EE0] active:bg-[#1D4CB8] transition-colors whitespace-nowrap"
                >
                  Start Free Analysis
                </button>
              </div>
              <p className="text-sm text-[#5D6676] mt-2">No login • 60-second scan</p>
            </motion.form>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#2A6AF7] hover:text-[#245EE0] hover:underline font-medium inline-flex items-center space-x-1 transition-colors text-sm"
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
              <div className="bg-white rounded-lg shadow-[0_1px_3px_rgba(11,13,18,0.06)] p-6 border border-[#D6D9E0]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Health Score */}
                  <div className="p-4 bg-[#F7F8FA] rounded-lg border-l-4 border-[#2A6AF7]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#5D6676] uppercase tracking-wide">Channel Health</span>
                      <SafeIcon icon={FiActivity} className="h-5 w-5 text-[#5D6676]" />
                    </div>
                    <div className="text-3xl font-bold text-[#0B0D12] mb-2">82<span className="text-lg text-[#5D6676]">/100</span></div>
                    <div className="w-full bg-[#E6E9EF] rounded-full h-2">
                      <div className="bg-[#2A6AF7] h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>

                  {/* Top Opportunity */}
                  <div className="p-4 bg-[#FFF3E1] rounded-lg border-l-4 border-[#D98B12]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#5D6676] uppercase tracking-wide">Top Opportunity</span>
                      <SafeIcon icon={FiClock} className="h-5 w-5 text-[#D98B12]" />
                    </div>
                    <p className="text-base font-semibold text-[#0B0D12]">Post on Tue 3–5pm</p>
                    <p className="text-sm text-[#2A2F3A] mt-1">Expected <span className="text-[#14B657] font-semibold">+18%</span> CTR</p>
                  </div>

                  {/* Thumbnail CTR */}
                  <div className="p-4 bg-[#E8F7EF] rounded-lg border-l-4 border-[#14B657]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#5D6676] uppercase tracking-wide">Thumbnail CTR</span>
                      <SafeIcon icon={FiImage} className="h-5 w-5 text-[#14B657]" />
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-[#0B0D12]">7.2%</span>
                      <span className="text-sm text-[#5D6676]">vs 5.8% avg</span>
                    </div>
                    <div className="w-full bg-[#E6E9EF] rounded-full h-2 mt-2">
                      <div className="bg-[#14B657] h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>

                  {/* Title Quality */}
                  <div className="p-4 bg-[#E7F0FF] rounded-lg border-l-4 border-[#2A6AF7]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#5D6676] uppercase tracking-wide">Title Quality</span>
                      <SafeIcon icon={FiEdit3} className="h-5 w-5 text-[#2A6AF7]" />
                    </div>
                    <div className="text-3xl font-bold text-[#2A6AF7] mb-1">B+</div>
                    <p className="text-sm text-[#2A2F3A]">Add numbers for <span className="text-[#14B657] font-semibold">+12%</span> clicks</p>
                  </div>
                </div>
                <p className="text-center text-sm text-[#5D6676] mt-4">
                  Generated from your last 20 uploads in under a minute
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0B0D12]">10,000+</div>
              <div className="text-sm text-[#5D6676] mt-1">Channels analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0B0D12]">35%</div>
              <div className="text-sm text-[#5D6676] mt-1">Average growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0B0D12]">5+ hrs</div>
              <div className="text-sm text-[#5D6676] mt-1">Saved weekly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0B0D12]">98%</div>
              <div className="text-sm text-[#5D6676] mt-1">Satisfaction</div>
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
                className="bg-white p-6 rounded-lg shadow-[0_1px_3px_rgba(11,13,18,0.06)] border border-[#D6D9E0] hover:border-[#9EC2FF] transition-colors"
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
      <section className="py-16 bg-[#F7F8FA]">
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2A6AF7] rounded-lg mb-4">
                  <SafeIcon icon={block.icon} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0B0D12] mb-2">{block.title}</h3>
                <p className="text-[#5D6676] leading-relaxed mb-4">{block.description}</p>
                <button className="text-[#2A6AF7] hover:text-[#245EE0] hover:underline text-sm font-medium transition-colors">
                  See an example →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-16 bg-white border-t border-[#D6D9E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[#0B0D12] mb-4">See Chanlyze in Action</h2>
          <p className="text-[#5D6676] mb-8">Watch how to get insights in 60 seconds</p>
          <div className="bg-white rounded-lg shadow-[0_1px_3px_rgba(11,13,18,0.06)] p-2 border border-[#D6D9E0]">
            <div className="aspect-video bg-[#F2F4F7] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <SafeIcon icon={FiPlay} className="h-16 w-16 text-[#5D6676] mx-auto mb-4" />
                <p className="text-[#2A2F3A]">45-second demo video</p>
                <p className="text-sm text-[#5D6676]">Paste channel → Get score → See opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2A6AF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready to grow faster?
          </h2>
          <p className="text-white/80 mb-8">
            Join 10,000+ creators optimizing their content with AI
          </p>
          <button
            onClick={() => navigate('/analyze')}
            className="bg-white text-[#2A6AF7] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#F7F8FA] transition-colors inline-flex items-center space-x-2"
          >
            <span>Start Free Analysis</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </button>
          <p className="text-white/70 text-sm mt-3">No password or credit card required</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
