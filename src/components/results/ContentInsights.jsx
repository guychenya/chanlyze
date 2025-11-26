import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const ContentInsights = () => {
  const { FiEye, FiThumbsUp, FiClock, FiChevronDown, FiFilter } = FiIcons;
  const [sortBy, setSortBy] = useState('views');
  const [showFilters, setShowFilters] = useState(false);

  const videos = [
    {
      id: 1,
      title: "How to Optimize YouTube Thumbnails",
      views: 125000,
      engagement: 6.8,
      ctr: 8.2,
      duration: "12:34",
      day: "Tuesday",
      trend: [3, 5, 7, 9, 10, 8]
    },
    {
      id: 2,
      title: "YouTube Algorithm Secrets Revealed",
      views: 98000,
      engagement: 7.3,
      ctr: 9.1,
      duration: "15:22",
      day: "Tuesday",
      trend: [2, 4, 6, 8, 9, 7]
    },
    {
      id: 3,
      title: "Content Strategy That Works",
      views: 87000,
      engagement: 7.8,
      ctr: 7.5,
      duration: "18:45",
      day: "Wednesday",
      trend: [1, 3, 5, 7, 8, 6]
    },
  ];

  const sortedVideos = [...videos].sort((a, b) => {
    if (sortBy === 'views') return b.views - a.views;
    if (sortBy === 'engagement') return b.engagement - a.engagement;
    if (sortBy === 'ctr') return b.ctr - a.ctr;
    return 0;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1D2E]/60 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Content Insights</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-700/30 hover:bg-gray-700/50 border border-gray-700/30 rounded-lg text-sm text-gray-300 transition-colors"
          >
            <SafeIcon icon={FiFilter} className="h-4 w-4" />
            <span>Filters</span>
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 bg-gray-700/30 border border-gray-700/30 text-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500"
          >
            <option value="views">Sort by Views</option>
            <option value="engagement">Sort by Engagement</option>
            <option value="ctr">Sort by CTR</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 p-4 bg-[#1A1D2E]/40 border border-purple-500/20 rounded-lg"
        >
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Duration</label>
              <select className="w-full px-2 py-1 text-sm bg-gray-700/30 border border-gray-700/30 text-gray-300 rounded">
                <option>All</option>
                <option>0-10 min</option>
                <option>10-20 min</option>
                <option>20+ min</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Day</label>
              <select className="w-full px-2 py-1 text-sm bg-gray-700/30 border border-gray-700/30 text-gray-300 rounded">
                <option>All days</option>
                <option>Weekdays</option>
                <option>Weekends</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Type</label>
              <select className="w-full px-2 py-1 text-sm bg-gray-700/30 border border-gray-700/30 text-gray-300 rounded">
                <option>All types</option>
                <option>"How to"</option>
                <option>Tutorial</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}

      <div className="space-y-3">
        {sortedVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 bg-[#1A1D2E]/40 border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-colors cursor-pointer"
          >
            <div className="text-lg font-bold text-gray-500 w-8">#{index + 1}</div>
            
            <div className="flex-1">
              <h4 className="font-medium text-white mb-2">{video.title}</h4>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiEye} className="h-4 w-4" />
                  <span>{video.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiThumbsUp} className="h-4 w-4" />
                  <span>{video.engagement}%</span>
                </div>
                <div className="px-2 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/30 rounded text-xs font-medium">
                  {video.ctr}% CTR
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiClock} className="h-4 w-4" />
                  <span>{video.duration}</span>
                </div>
                <span className="text-xs text-gray-500">{video.day}</span>
              </div>
            </div>

            <div className="w-24 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={video.trend.map((v, i) => ({ value: v }))}>
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-purple-900/50 border border-purple-500/30 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-300 mb-2">Content Patterns</h4>
          <ul className="text-sm text-purple-400 space-y-1">
            <li>• "How to" titles: <span className="font-semibold text-white">+40% views</span></li>
            <li>• 12-18 min videos: <span className="font-semibold text-white">Best engagement</span></li>
            <li>• Tuesday uploads: <span className="font-semibold text-white">+23% CTR</span></li>
          </ul>
        </div>
        
        <div className="bg-orange-900/50 border border-orange-500/30 p-4 rounded-lg">
          <h4 className="font-semibold text-orange-300 mb-2">Quick Wins</h4>
          <ul className="text-sm text-orange-400 space-y-1">
            <li>• Add timestamps to videos</li>
            <li>• Use bright thumbnails</li>
            <li>• Include trending keywords</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentInsights;
