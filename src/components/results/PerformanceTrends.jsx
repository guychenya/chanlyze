import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const PerformanceTrends = () => {
  const { FiEye, FiUsers } = FiIcons;
  const [showViews, setShowViews] = useState(true);
  const [showSubs, setShowSubs] = useState(true);

  const data = [
    { month: 'Jan', views: 120000, subs: 15000 },
    { month: 'Feb', views: 150000, subs: 18000 },
    { month: 'Mar', views: 180000, subs: 22000 },
    { month: 'Apr', views: 220000, subs: 28000 },
    { month: 'May', views: 280000, subs: 35000 },
    { month: 'Jun', views: 350000, subs: 42000, annotation: 'Peak' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1D2E]/60 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Performance Trends</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowViews(!showViews)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-sm transition-colors ${
              showViews ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-gray-700/20 text-gray-400 border border-gray-700/30'
            }`}
          >
            <SafeIcon icon={FiEye} className="h-4 w-4" />
            <span>Views</span>
          </button>
          <button
            onClick={() => setShowSubs(!showSubs)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-sm transition-colors ${
              showSubs ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-gray-700/20 text-gray-400 border border-gray-700/30'
            }`}
          >
            <SafeIcon icon={FiUsers} className="h-4 w-4" />
            <span>Subscribers</span>
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <defs>
            <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis yAxisId="left" stroke="#3b82f6" />
          <YAxis yAxisId="right" orientation="right" stroke="#ef4444" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            formatter={(value, name) => [
              name === 'views' ? value.toLocaleString() + ' views' : value.toLocaleString() + ' subs',
              name === 'views' ? 'Views' : 'Subscribers'
            ]}
          />
          {showViews && (
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="views" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fill="url(#viewsGradient)"
            />
          )}
          {showSubs && (
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="subs" 
              stroke="#ef4444" 
              strokeWidth={3}
              dot={{ fill: '#ef4444', r: 4 }}
            />
          )}
          <ReferenceDot 
            x="Jun" 
            y={350000} 
            yAxisId="left"
            r={8} 
            fill="#10b981" 
            stroke="#fff" 
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-green-800">
            June 2024: 350K views, +7K subs
          </span>
        </div>
        <p className="text-xs text-green-700 mt-1 ml-4">Best performing month with consistent upload schedule</p>
      </div>
    </motion.div>
  );
};

export default PerformanceTrends;
