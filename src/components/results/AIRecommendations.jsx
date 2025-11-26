import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const AIRecommendations = () => {
  const { FiClock, FiEdit, FiTrendingUp, FiUsers, FiTarget, FiZap, FiBarChart2 } = FiIcons;

  const recommendations = [
    {
      icon: FiClock,
      title: 'Post Tuesdays 2 PM',
      description: 'Upload during peak audience activity for maximum initial engagement',
      impact: 15,
      confidence: 'high',
      evidence: 'timing-heatmap'
    },
    {
      icon: FiEdit,
      title: 'Improve Thumbnail Design',
      description: 'Add bright colors and facial expressions to increase click-through rate',
      impact: 25,
      confidence: 'high',
      evidence: 'content-insights'
    },
    {
      icon: FiTrendingUp,
      title: 'Use Trending Keywords',
      description: 'Include "2024 guide" and "tutorial" in titles for better discovery',
      impact: 18,
      confidence: 'medium',
      evidence: 'performance-trends'
    },
    {
      icon: FiUsers,
      title: 'Increase Community Posts',
      description: 'Share behind-the-scenes content 2x per week to boost retention',
      impact: 12,
      confidence: 'medium',
      evidence: 'engagement-data'
    },
  ];

  const getConfidenceBadge = (confidence) => {
    const styles = {
      high: 'bg-green-500/10 text-green-300 border-green-500/30',
      medium: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
      low: 'bg-gray-500/10 text-gray-300 border-gray-500/30'
    };
    return styles[confidence] || styles.medium;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1D2E]/60 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 shadow-sm"
    >
      <div className="flex items-center space-x-2 mb-6">
        <SafeIcon icon={FiZap} className="h-6 w-6 text-yellow-400" />
        <h3 className="text-lg font-semibold text-white">AI-Powered Recommendations</h3>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-purple-500/20 bg-[#1A1D2E]/40 rounded-lg p-4 hover:border-purple-500/40 transition-all"
          >
            <div className="flex items-start space-x-3 mb-3">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <SafeIcon icon={rec.icon} className="h-5 w-5 text-blue-400" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-white">{rec.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getConfidenceBadge(rec.confidence)}`}>
                    {rec.confidence} confidence
                  </span>
                </div>
                
                <p className="text-sm text-gray-300 mb-3">{rec.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Expected Impact</span>
                    <span className="font-semibold text-green-400">+{rec.impact}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700/30 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${rec.impact * 3}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                    />
                  </div>
                </div>

                <button className="mt-3 text-xs text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                  <SafeIcon icon={FiBarChart2} className="h-3 w-3" />
                  <span>View supporting data</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
        <div className="flex items-start space-x-3">
          <SafeIcon icon={FiTarget} className="h-5 w-5 text-blue-400 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-300 mb-1">Methodology</h4>
            <p className="text-xs text-blue-200">
              Recommendations are computed using machine learning analysis of your channel's historical performance, 
              audience behavior patterns, and industry benchmarks from similar channels.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIRecommendations;
