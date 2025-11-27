import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ChannelUrlInput from '../components/analyze/ChannelUrlInput';
import LoadingAnimation from '../components/analyze/LoadingAnimation';
import ApiKeySetup from '../components/analyze/ApiKeySetup';
import { analyzeChannel } from '../services/youtubeService';
import { hasValidApiKey } from '../config/youtube';
import { GradientBackground } from '../styles/theme.jsx';
import { canUserAnalyze, getRemainingAnalyses, incrementUsage, getUserPlan } from '../utils/usageTracker';

const AnalyzePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();
  const { FiSearch, FiPlay, FiCheckCircle, FiAlertCircle } = FiIcons;
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const [userPlan, setUserPlan] = useState('free');
  const [autoStarted, setAutoStarted] = useState(false);

  useEffect(() => {
    // Check if API key is available from any source
    setHasApiKey(hasValidApiKey());
    
    // Update usage stats
    if (user) {
      setRemaining(getRemainingAnalyses(user));
      setUserPlan(getUserPlan(user));
    }
  }, [user]);

  // Auto-start analysis if URL passed from homepage
  useEffect(() => {
    const initialUrl = location.state?.initialUrl;
    if (initialUrl && hasApiKey && user && !autoStarted && !isAnalyzing) {
      setAutoStarted(true);
      handleAnalyze(initialUrl);
    }
  }, [location.state, hasApiKey, user, autoStarted, isAnalyzing]);

  const analysisSteps = [
    'Fetching channel data from YouTube...',
    'Analyzing video performance...',
    'Processing subscriber metrics...',
    'Calculating engagement rates...',
    'Generating AI insights...',
    'Preparing recommendations...'
  ];

  const handleAnalyze = async (channelUrl) => {
    if (!channelUrl.trim()) {
      toast.error('Please enter a valid YouTube channel URL');
      return;
    }

    if (!hasValidApiKey()) {
      toast.error('YouTube API key is required');
      return;
    }

    // Check usage limits
    if (!canUserAnalyze(user)) {
      toast.error(
        <div>
          Daily limit reached! 
          <Link to="/subscription" className="underline ml-1">Upgrade to Pro</Link>
        </div>,
        { duration: 5000 }
      );
      return;
    }

    // Increment usage count BEFORE analysis
    const incremented = await incrementUsage(user);
    if (!incremented) {
      toast.error('Failed to update usage count. Please try again.');
      return;
    }
    
    // Update remaining count immediately
    setRemaining(getRemainingAnalyses(user));

    setIsAnalyzing(true);
    setAnalysisStep(0);

    try {
      // Simulate analysis steps with real API calls
      for (let i = 0; i < analysisSteps.length; i++) {
        setAnalysisStep(i);
        await new Promise(resolve => setTimeout(resolve, i === 0 ? 2000 : 1000));
      }

      // Perform real API analysis
      const channelData = await analyzeChannel(channelUrl);
      
      toast.success('Analysis completed successfully! Real data fetched from YouTube.');
      
      // Navigate to results page with channel data
      navigate(`/results/${channelData.id}`, { state: { channelData } });
      
    } catch (error) {
      toast.error(error.message || 'Failed to analyze channel. Please check the URL and try again.');
      console.error('Analysis error:', error);
    } finally {
      setIsAnalyzing(false);
      setAnalysisStep(0);
      // Refresh remaining count
      if (user) {
        setRemaining(getRemainingAnalyses(user));
      }
    }
  };

  const handleApiKeySet = (apiKey) => {
    setHasApiKey(true);
    toast.success('API key configured successfully! You can now analyze real YouTube channels.');
  };

  const exampleChannels = [
    'https://youtube.com/@mkbhd',
    'https://youtube.com/@veritasium',
    'https://youtube.com/@kurzgesagt',
    'https://youtube.com/@mrwhosetheboss',
    'https://youtube.com/@unboxtherapy'
  ];

  if (isAnalyzing) {
    return <LoadingAnimation step={analysisStep} steps={analysisSteps} />;
  }

  return (
    <div className="min-h-screen bg-[#0B0D17] relative overflow-hidden py-12">
      <GradientBackground />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Analyze Your <span className="gradient-text">YouTube Channel</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get comprehensive insights, growth recommendations, and competitor analysis 
            for your YouTube channel using real-time data from YouTube API v3.
          </p>
        </motion.div>

        {/* API Key Setup */}
        {!hasApiKey && (
          <ApiKeySetup onApiKeySet={handleApiKeySet} />
        )}

        {/* Usage Limit Banner */}
        {hasApiKey && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-2xl rounded-xl p-6 border border-purple-500/30"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <SafeIcon icon={FiAlertCircle} className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="text-white font-medium">
                    {remaining} analyses remaining today
                  </p>
                  <p className="text-gray-400 text-sm">
                    {userPlan === 'free' ? 'Free Plan: 3/day' : 'Pro Plan: 20/day'}
                  </p>
                </div>
              </div>
              {userPlan === 'free' && (
                <Link
                  to="/subscription"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                >
                  Upgrade to Pro
                </Link>
              )}
            </div>
          </motion.div>
        )}

        {/* Analysis Form */}
        {hasApiKey && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-2xl p-8 mb-12 border border-purple-500/30"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-purple-900/50 p-3 rounded-full">
                <SafeIcon icon={FiSearch} className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-white text-center mb-6">
              Enter YouTube Channel URL
            </h2>
            
            <ChannelUrlInput onAnalyze={handleAnalyze} />

            <div className="mt-8 pt-8 border-t border-purple-500/30">
              <h3 className="text-lg font-medium text-white mb-4 text-center">
                Try with popular channels:
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {exampleChannels.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnalyze(url)}
                    className="text-sm text-purple-300 hover:text-purple-200 bg-purple-900/50 hover:bg-purple-800/50 px-3 py-2 rounded-lg transition-colors"
                  >
                    {url.split('@')[1] || url.split('/').pop()}
                  </button>
                ))}
              </div>
            </div>

            {/* API Features Info */}
            <div className="mt-8 pt-8 border-t border-purple-500/30">
              <h3 className="text-lg font-medium text-white mb-4 text-center">
                Real-Time Data Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-green-900/50 p-3 rounded-lg border border-green-500/30">
                  <div className="font-medium text-green-300 mb-1">✓ Live Statistics</div>
                  <div className="text-green-400">Real subscriber count, views, and video data</div>
                </div>
                <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-500/30">
                  <div className="font-medium text-blue-300 mb-1">✓ Recent Videos</div>
                  <div className="text-blue-400">Analysis of latest 50 videos for trends</div>
                </div>
                <div className="bg-purple-900/50 p-3 rounded-lg border border-purple-500/30">
                  <div className="font-medium text-purple-300 mb-1">✓ Engagement Metrics</div>
                  <div className="text-purple-400">Likes, comments, and interaction rates</div>
                </div>
                <div className="bg-orange-900/50 p-3 rounded-lg border border-orange-500/30">
                  <div className="font-medium text-orange-300 mb-1">✓ Growth Analysis</div>
                  <div className="text-orange-400">Upload frequency and performance trends</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* What You'll Get Section */}
        {hasApiKey && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: FiPlay,
                title: 'Real Channel Data',
                description: 'Live statistics from YouTube API including subscriber count, total views, and video metrics'
              },
              {
                icon: FiCheckCircle,
                title: 'Video Performance',
                description: 'Analysis of recent videos with engagement rates, view patterns, and content optimization tips'
              },
              {
                icon: FiSearch,
                title: 'Growth Insights',
                description: 'AI-powered recommendations based on real performance data and industry best practices'
              }
            ].map((feature, index) => (
              <div key={feature.title} className="bg-[#1A1D2E]/60 p-6 rounded-xl text-center border border-purple-500/30">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-lg inline-flex mb-4">
                  <SafeIcon icon={feature.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnalyzePage;