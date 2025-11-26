import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const KPICard = ({ title, value, delta, trend, sparklineData, icon, delay = 0, tooltip }) => {
  const { FiTrendingUp, FiTrendingDown, FiInfo } = FiIcons;
  const isPositive = delta >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-[#1A1D2E]/60 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-purple-500/30 hover:border-purple-500/50 transition-all group"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <SafeIcon icon={icon} className="h-5 w-5 text-gray-300" />
          <span className="text-sm text-gray-300 font-medium">{title}</span>
        </div>
        {tooltip && (
          <div className="relative group/tooltip">
            <SafeIcon icon={FiInfo} className="h-4 w-4 text-gray-400 cursor-help" />
            <div className="absolute right-0 top-6 w-48 bg-gray-900 text-white text-xs p-2 rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-10">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <SafeIcon 
            icon={isPositive ? FiTrendingUp : FiTrendingDown} 
            className={`h-3 w-3 ${isPositive ? 'text-green-400' : 'text-red-400'}`} 
          />
          <span className={`text-xs font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{delta}%
          </span>
          <span className="text-xs text-gray-500">vs prev</span>
        </div>
      </div>

      {sparklineData && (
        <div className="mt-2 h-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={isPositive ? '#34d399' : '#f87171'} 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </motion.div>
  );
};

export default KPICard;
