import React from 'react';
import { motion } from 'framer-motion';

const UploadTimingHeatmap = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = ['12AM', '6AM', '12PM', '6PM'];
  
  const heatmapData = [
    [2, 1, 1, 2],
    [3, 5, 4, 3],
    [2, 3, 2, 2],
    [2, 2, 3, 2],
    [1, 2, 2, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];

  const getColor = (value) => {
    if (value >= 5) return 'bg-green-500';
    if (value >= 4) return 'bg-green-600';
    if (value >= 3) return 'bg-green-700';
    if (value >= 2) return 'bg-green-800';
    return 'bg-green-900';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1D2E]/60 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Best Upload Times</h3>
      
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="flex mb-2">
            <div className="w-16"></div>
            {hours.map((hour) => (
              <div key={hour} className="flex-1 text-center text-xs text-gray-400 font-medium">
                {hour}
              </div>
            ))}
          </div>
          
          {days.map((day, dayIndex) => (
            <div key={day} className="flex items-center mb-1">
              <div className="w-16 text-sm text-gray-400 font-medium">{day}</div>
              {heatmapData[dayIndex].map((value, hourIndex) => (
                <div key={hourIndex} className="flex-1 px-0.5">
                  <div
                    className={`h-8 rounded ${getColor(value)} transition-all hover:scale-110 cursor-pointer`}
                    title={`${day} ${hours[hourIndex]}: ${value * 20}% engagement`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
        <span>Lower engagement</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-green-900 rounded"></div>
          <div className="w-4 h-4 bg-green-700 rounded"></div>
          <div className="w-4 h-4 bg-green-600 rounded"></div>
          <div className="w-4 h-4 bg-green-500 rounded"></div>
        </div>
        <span>Higher engagement</span>
      </div>

      <div className="mt-4 bg-blue-900/50 border border-blue-500/30 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-sm font-medium text-blue-300">
            Optimal: Tuesdays at 2 PM
          </span>
        </div>
        <p className="text-xs text-blue-400 mt-1 ml-4">23% higher engagement during this time slot</p>
      </div>
    </motion.div>
  );
};

export default UploadTimingHeatmap;
