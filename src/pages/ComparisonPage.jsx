import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ComparisonInput from '../components/comparison/ComparisonInput';
import ComparisonResults from '../components/comparison/ComparisonResults';
import ApiKeySetup from '../components/analyze/ApiKeySetup';
import QuotaMonitor from '../components/analyze/QuotaMonitor';
import { compareChannels } from '../services/youtubeService';
import { hasValidApiKey } from '../config/youtube';
import { GradientBackground } from '../styles/theme.jsx';

const ComparisonPage = () => {
  const { FiVs } = FiIcons;
  const [comparisonData, setComparisonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    // Check if API key is available from any source
    setHasApiKey(hasValidApiKey());
  }, []);

  const handleCompare = async (channel1Url, channel2Url) => {
    if (!hasValidApiKey()) {
      toast.error('YouTube API key is required');
      return;
    }

    setIsLoading(true);
    try {
      // Real API comparison
      const comparisonResult = await compareChannels(channel1Url, channel2Url);
      setComparisonData(comparisonResult);
      toast.success('Channel comparison completed with real YouTube data!');
    } catch (error) {
      toast.error(error.message || 'Failed to compare channels. Please check the URLs and try again.');
      console.error('Comparison error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiKeySet = (apiKey) => {
    setHasApiKey(true);
    toast.success('API key configured successfully! You can now compare real YouTube channels.');
  };

  return (
    <div className="min-h-screen bg-[#0B0D17] relative overflow-hidden py-12">
      <GradientBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compare <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">YouTube Channels</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Benchmark your channel against competitors using real-time YouTube data. 
            Discover opportunities for growth with side-by-side analytics comparison.
          </p>
        </motion.div>

        {/* API Key Setup */}
        {!hasApiKey && (
          <div className="max-w-4xl mx-auto">
            <ApiKeySetup onApiKeySet={handleApiKeySet} />
          </div>
        )}

        {/* Quota Monitor */}
        {hasApiKey && !comparisonData && (
          <div className="max-w-4xl mx-auto mb-6">
            <QuotaMonitor />
          </div>
        )}

        {/* Comparison Interface */}
        {hasApiKey && !comparisonData ? (
          <ComparisonInput onCompare={handleCompare} isLoading={isLoading} />
        ) : hasApiKey ? (
          <>
            <div className="mb-6">
              <QuotaMonitor />
            </div>
            <ComparisonResults 
              data={comparisonData} 
              onNewComparison={() => setComparisonData(null)} 
            />
          </>
        ) : null}

        {/* Features for API users */}
        {hasApiKey && !comparisonData && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Real-Time Comparison Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-900/50 border border-green-500/30 p-2 rounded-lg">
                      <SafeIcon icon={FiVs} className="h-4 w-4 text-green-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Live Statistics</h4>
                      <p className="text-sm text-gray-300">Real subscriber counts, views, and video metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-900/50 border border-blue-500/30 p-2 rounded-lg">
                      <SafeIcon icon={FiVs} className="h-4 w-4 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Performance Analysis</h4>
                      <p className="text-sm text-gray-300">Detailed comparison of recent video performance</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-900/50 border border-purple-500/30 p-2 rounded-lg">
                      <SafeIcon icon={FiVs} className="h-4 w-4 text-purple-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Engagement Metrics</h4>
                      <p className="text-sm text-gray-300">Like rates, comment engagement, and interaction analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-900/50 border border-orange-500/30 p-2 rounded-lg">
                      <SafeIcon icon={FiVs} className="h-4 w-4 text-orange-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Growth Insights</h4>
                      <p className="text-sm text-gray-300">Upload frequency and content strategy analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ComparisonPage;