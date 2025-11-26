import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import DashboardHeader from '../components/results/DashboardHeader';
import KPICard from '../components/results/KPICard';
import ActionsStrip from '../components/results/ActionsStrip';
import PerformanceTrends from '../components/results/PerformanceTrends';
import UploadTimingHeatmap from '../components/results/UploadTimingHeatmap';
import ContentInsights from '../components/results/ContentInsights';
import AIRecommendations from '../components/results/AIRecommendations';
import { generateMockChannelData } from '../utils/mockData';

const ResultsPage = () => {
  const { FiUsers, FiEye, FiPlay, FiTrendingUp, FiActivity } = FiIcons;
  const { channelId } = useParams();
  const location = useLocation();
  
  const channelData = location.state?.channelData || generateMockChannelData(channelId);

  const kpiData = [
    {
      title: 'Health Score',
      value: `${channelData.analytics.healthScore}/100`,
      delta: 5.2,
      icon: FiActivity,
      tooltip: 'Overall channel performance score based on engagement, growth, and consistency',
      sparklineData: [65, 68, 72, 75, 78, channelData.analytics.healthScore]
    },
    {
      title: 'Subscribers',
      value: channelData.subscriberCount.toLocaleString(),
      delta: channelData.analytics.subscriberGrowth,
      icon: FiUsers,
      tooltip: 'Total subscriber count with growth vs previous period',
      sparklineData: [15000, 18000, 22000, 28000, 35000, channelData.subscriberCount]
    },
    {
      title: 'Total Views',
      value: `${(channelData.totalViews / 1000000).toFixed(1)}M`,
      delta: channelData.analytics.viewGrowth,
      icon: FiEye,
      tooltip: 'Cumulative views across all videos',
      sparklineData: [1.2, 1.5, 1.8, 2.2, 2.8, channelData.totalViews / 1000000]
    },
    {
      title: 'Avg Views',
      value: channelData.analytics.avgViewsPerVideo.toLocaleString(),
      delta: 8.3,
      icon: FiPlay,
      tooltip: 'Average views per video',
      sparklineData: [8000, 9500, 11000, 12500, 13800, channelData.analytics.avgViewsPerVideo]
    },
    {
      title: 'Engagement Rate',
      value: `${channelData.analytics.engagementRate}%`,
      delta: 2.1,
      icon: FiTrendingUp,
      tooltip: 'Likes + comments divided by views',
      sparklineData: [3.2, 3.5, 3.8, 4.0, 4.1, channelData.analytics.engagementRate]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardHeader data={channelData} />
        
        <ActionsStrip />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-6">
          {kpiData.map((kpi, index) => (
            <KPICard key={index} {...kpi} delay={index * 0.1} />
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <PerformanceTrends />
            <UploadTimingHeatmap />
            <ContentInsights />
          </div>

          {/* Right Column - Insights */}
          <div className="lg:col-span-1 space-y-6">
            <AIRecommendations />
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Videos</span>
                  <span className="font-semibold text-gray-900">{channelData.videoCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Uploads/Month</span>
                  <span className="font-semibold text-gray-900">{channelData.analytics.uploadsPerMonth}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Consistency</span>
                  <span className="font-semibold text-gray-900">{channelData.analytics.uploadConsistency}%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;