import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const DashboardHeader = ({ data }) => {
  const { FiExternalLink, FiWifi, FiCalendar, FiTag } = FiIcons;
  const isLiveData = !data.mockData && !data.quotaExceeded;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-20 h-20 rounded-full border-2 border-gray-200"
          />
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
              {data.customUrl && (
                <a
                  href={`https://youtube.com/${data.customUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  <SafeIcon icon={FiExternalLink} className="h-5 w-5" />
                </a>
              )}
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
              <div className="flex items-center space-x-1">
                <SafeIcon icon={FiCalendar} className="h-4 w-4" />
                <span>Created {data.createdAt}</span>
              </div>
              <span>•</span>
              <span>{data.country}</span>
              {data.keywords?.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiTag} className="h-4 w-4" />
                    <span>{data.keywords.slice(0, 2).join(', ')}</span>
                  </div>
                </>
              )}
            </div>

            <p className="text-gray-600 max-w-2xl line-clamp-2">{data.description}</p>
          </div>
        </div>

        <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
          isLiveData ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
        }`}>
          <div className={`w-2 h-2 rounded-full ${isLiveData ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
          <SafeIcon icon={FiWifi} className={`h-4 w-4 ${isLiveData ? 'text-green-600' : 'text-yellow-600'}`} />
          <span className={`text-sm font-medium ${isLiveData ? 'text-green-700' : 'text-yellow-700'}`}>
            {isLiveData ? 'Live Data' : 'Mock Data'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
