import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const CompetitorAnalysis = ({ data }) => {
  const { FiTarget, FiTrendingUp, FiUsers, FiPlay, FiEye, FiHeart } = FiIcons;
  const [selectedMetric, setSelectedMetric] = useState('subscribers');

  // Mock competitor data
  const competitors = [
    {
      name: 'Channel A',
      subscribers: 85000,
      views: 2500000,
      videos: 120,
      engagement: 4.2,
      growthRate: 15,
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Your Channel',
      subscribers: data.subscriberCount,
      views: data.totalViews,
      videos: data.videoCount,
      engagement: data.analytics.engagementRate,
      growthRate: data.analytics.subscriberGrowth,
      thumbnail: data.thumbnail,
      isUser: true
    },
    {
      name: 'Channel B',
      subscribers: 120000,
      views: 3200000,
      videos: 95,
      engagement: 3.8,
      growthRate: 22,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Channel C',
      subscribers: 65000,
      views: 1800000,
      videos: 140,
      engagement: 5.1,
      growthRate: 8,
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Channel D',
      subscribers: 95000,
      views: 2100000,
      videos: 88,
      engagement: 3.5,
      growthRate: 18,
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    }
  ];

  const competitorMetrics = [
    { metric: 'Subscribers', user: 75, competitors: 85, fullMark: 100 },
    { metric: 'Views', user: 72, competitors: 88, fullMark: 100 },
    { metric: 'Engagement', user: 68, competitors: 75, fullMark: 100 },
    { metric: 'Upload Rate', user: 82, competitors: 70, fullMark: 100 },
    { metric: 'Growth Rate', user: 65, competitors: 78, fullMark: 100 },
    { metric: 'Video Quality', user: 78, competitors: 80, fullMark: 100 }
  ];

  const benchmarkData = [
    { category: 'Tech Reviews', avgSubs: 95000, avgViews: 2800000, avgEngagement: 4.1 },
    { category: 'Tutorials', avgSubs: 75000, avgViews: 2200000, avgEngagement: 4.8 },
    { category: 'Gaming', avgSubs: 120000, avgViews: 3500000, avgEngagement: 3.2 },
    { category: 'Lifestyle', avgSubs: 65000, avgViews: 1900000, avgEngagement: 5.5 },
    { category: 'Educational', avgSubs: 85000, avgViews: 2400000, avgEngagement: 4.3 }
  ];

  const getMetricValue = (competitor, metric) => {
    switch (metric) {
      case 'subscribers': return competitor.subscribers;
      case 'views': return competitor.views;
      case 'engagement': return competitor.engagement;
      case 'growthRate': return competitor.growthRate;
      default: return competitor.subscribers;
    }
  };

  const formatMetricValue = (value, metric) => {
    switch (metric) {
      case 'subscribers':
        return value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : `${(value / 1000).toFixed(0)}K`;
      case 'views':
        return value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : `${(value / 1000).toFixed(0)}K`;
      case 'engagement':
        return `${value.toFixed(1)}%`;
      case 'growthRate':
        return `${value >= 0 ? '+' : ''}${value}%`;
      default:
        return value.toLocaleString();
    }
  };

  const getRankPosition = (userValue, competitors, metric) => {
    const sortedValues = competitors
      .map(c => getMetricValue(c, metric))
      .sort((a, b) => b - a);
    return sortedValues.indexOf(userValue) + 1;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Competitor Benchmarking</h3>
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="subscribers">Subscribers</option>
          <option value="views">Total Views</option>
          <option value="engagement">Engagement Rate</option>
          <option value="growthRate">Growth Rate</option>
        </select>
      </div>

      {/* Competitor Comparison Chart */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Channel Comparison</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={competitors}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis stroke="#6b7280" />
            <Tooltip
              formatter={(value) => [formatMetricValue(value, selectedMetric), selectedMetric]}
              labelStyle={{ color: '#374151' }}
            />
            <Bar 
              dataKey={selectedMetric} 
              fill={(entry) => entry.isUser ? '#ef4444' : '#3b82f6'}
              radius={[4, 4, 0, 0]}
            >
              {competitors.map((entry, index) => (
                <Bar key={`cell-${index}`} fill={entry.isUser ? '#ef4444' : '#3b82f6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">Performance Radar</h4>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={competitorMetrics}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
              <Radar
                name="Your Channel"
                dataKey="user"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Radar
                name="Competitor Average"
                dataKey="competitors"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">Ranking Overview</h4>
          <div className="space-y-4">
            {[
              { metric: 'Subscribers', icon: FiUsers, color: 'blue' },
              { metric: 'Total Views', icon: FiEye, color: 'purple' },
              { metric: 'Engagement Rate', icon: FiHeart, color: 'green' },
              { metric: 'Growth Rate', icon: FiTrendingUp, color: 'orange' }
            ].map((item) => {
              const metricKey = item.metric.toLowerCase().replace(' ', '');
              const userValue = getMetricValue(competitors.find(c => c.isUser), metricKey === 'totalviews' ? 'views' : metricKey === 'engagementrate' ? 'engagement' : metricKey === 'growthrate' ? 'growthRate' : 'subscribers');
              const rank = getRankPosition(userValue, competitors, metricKey === 'totalviews' ? 'views' : metricKey === 'engagementrate' ? 'engagement' : metricKey === 'growthrate' ? 'growthRate' : 'subscribers');
              
              return (
                <div key={item.metric} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                      <SafeIcon icon={item.icon} className={`h-5 w-5 text-${item.color}-600`} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{item.metric}</div>
                      <div className="text-sm text-gray-600">
                        {formatMetricValue(userValue, metricKey === 'totalviews' ? 'views' : metricKey === 'engagementrate' ? 'engagement' : metricKey === 'growthrate' ? 'growthRate' : 'subscribers')}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">#{rank}</div>
                    <div className="text-sm text-gray-500">of {competitors.length}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Competitor Profiles */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Similar Channels</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitors.filter(c => !c.isUser).map((competitor, index) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={competitor.thumbnail}
                  alt={competitor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-900">{competitor.name}</div>
                  <div className="text-sm text-gray-500">
                    {(competitor.subscribers / 1000).toFixed(0)}K subscribers
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className="font-medium text-gray-900">
                    {(competitor.views / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-gray-600">Views</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className="font-medium text-gray-900">
                    {competitor.engagement.toFixed(1)}%
                  </div>
                  <div className="text-gray-600">Engagement</div>
                </div>
              </div>
              
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <SafeIcon 
                    icon={competitor.growthRate >= 0 ? FiTrendingUp : FiTrendingUp} 
                    className={`h-4 w-4 ${competitor.growthRate >= 15 ? 'text-green-500' : competitor.growthRate >= 10 ? 'text-yellow-500' : 'text-red-500'}`} 
                  />
                  <span className={`text-sm font-medium ${competitor.growthRate >= 15 ? 'text-green-600' : competitor.growthRate >= 10 ? 'text-yellow-600' : 'text-red-600'}`}>
                    +{competitor.growthRate}%
                  </span>
                </div>
                <div className="text-xs text-gray-500">{competitor.videos} videos</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Benchmarks */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-4">Industry Benchmarks</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Subscribers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Engagement
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Your Position
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {benchmarkData.map((benchmark, index) => {
                const userVsBenchmark = {
                  subscribers: data.subscriberCount > benchmark.avgSubs,
                  views: data.totalViews > benchmark.avgViews,
                  engagement: data.analytics.engagementRate > benchmark.avgEngagement
                };
                
                return (
                  <tr key={benchmark.category} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {benchmark.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {(benchmark.avgSubs / 1000).toFixed(0)}K
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {(benchmark.avgViews / 1000000).toFixed(1)}M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {benchmark.avgEngagement.toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${
                          Object.values(userVsBenchmark).filter(Boolean).length >= 2 ? 'bg-green-500' : 
                          Object.values(userVsBenchmark).filter(Boolean).length === 1 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="text-sm text-gray-600">
                          {Object.values(userVsBenchmark).filter(Boolean).length >= 2 ? 'Above Average' : 
                           Object.values(userVsBenchmark).filter(Boolean).length === 1 ? 'Average' : 'Below Average'}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default CompetitorAnalysis;