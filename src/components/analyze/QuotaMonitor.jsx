import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { getApiQuotaUsage } from '../../services/youtubeService';

const QuotaMonitor = () => {
  const { FiBarChart2, FiAlertTriangle, FiRefreshCw, FiClock } = FiIcons;
  const quotaInfo = getApiQuotaUsage();

  const getQuotaColor = (percentage) => {
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getQuotaBg = (percentage) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusMessage = (percentage) => {
    if (percentage >= 100) return 'Quota exhausted - using mock data';
    if (percentage >= 90) return 'Quota nearly exhausted';
    if (percentage >= 70) return 'High quota usage';
    return 'Quota usage normal';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1D2E]/60 backdrop-blur-2xl rounded-xl shadow-sm p-4 border border-purple-500/30"
    >
      <div className="flex items-center space-x-3">
        <SafeIcon icon={FiBarChart2} className="h-5 w-5 text-gray-300" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-white">YouTube API Quota</span>
            <span className={`text-sm font-semibold ${getQuotaColor(quotaInfo.percentage)}`}>
              {quotaInfo.used.toLocaleString()} / {quotaInfo.limit.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${getQuotaBg(quotaInfo.percentage)}`}
              style={{ width: `${Math.min(quotaInfo.percentage, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className={`text-xs ${getQuotaColor(quotaInfo.percentage)}`}>
              {getStatusMessage(quotaInfo.percentage)}
            </span>
            {quotaInfo.timeUntilReset && (
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <SafeIcon icon={FiClock} className="h-3 w-3" />
                <span>Reset in {quotaInfo.timeUntilReset}</span>
              </div>
            )}
          </div>
        </div>
        {quotaInfo.percentage >= 90 && (
          <SafeIcon icon={FiAlertTriangle} className="h-5 w-5 text-red-400" />
        )}
      </div>

      {quotaInfo.percentage >= 100 && (
        <div className="mt-4 pt-4 border-t border-purple-500/30">
          <div className="bg-red-900/50 border border-red-500/30 p-3 rounded-lg">
            <div className="flex items-start space-x-2">
              <SafeIcon icon={FiAlertTriangle} className="h-4 w-4 text-red-400 mt-0.5" />
              <div className="text-xs text-red-300">
                <p className="font-medium mb-1">Quota Exceeded - Using Mock Data</p>
                <p className="text-red-400">
                  The YouTube API quota has been exhausted. The app is now using realistic mock data
                  to demonstrate functionality. Quota resets in {quotaInfo.timeUntilReset}.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {quotaInfo.percentage >= 90 && quotaInfo.percentage < 100 && (
        <div className="mt-4 pt-4 border-t border-purple-500/30">
          <div className="bg-yellow-900/50 border border-yellow-500/30 p-3 rounded-lg">
            <div className="flex items-start space-x-2">
              <SafeIcon icon={FiAlertTriangle} className="h-4 w-4 text-yellow-400 mt-0.5" />
              <div className="text-xs text-yellow-300">
                <p className="font-medium mb-1">Warning: Low Quota Remaining</p>
                <p className="text-yellow-400">
                  Consider upgrading your YouTube API quota limit or wait for reset in {quotaInfo.timeUntilReset}.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default QuotaMonitor;