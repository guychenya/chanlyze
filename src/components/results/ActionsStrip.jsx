import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const ActionsStrip = () => {
  const { FiDownload, FiCalendar, FiGitCompare, FiClock } = FiIcons;
  const [dateRange, setDateRange] = useState('90');
  const navigate = useNavigate();

  const handleDownloadReport = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(document.documentElement.outerHTML);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const handleCompare = () => {
    navigate('/compare');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 sticky top-4 z-10 no-print"
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCalendar} className="h-5 w-5 text-gray-600" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="180">Last 6 months</option>
              <option value="365">Last year</option>
            </select>
          </div>

          <button 
            onClick={handleCompare}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm transition-colors"
          >
            <SafeIcon icon={FiGitCompare} className="h-4 w-4" />
            <span>Compare Channels</span>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <SafeIcon icon={FiClock} className="h-4 w-4" />
            <span>Updated now</span>
          </div>

          <button 
            onClick={handleDownloadReport}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            <SafeIcon icon={FiDownload} className="h-4 w-4" />
            <span>Download Full Report</span>
          </button>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          <span className="font-medium">PDF Report includes:</span> Complete analytics, video performance breakdown, 
          competitor benchmarks, and actionable recommendations with supporting data.
        </p>
      </div>
    </motion.div>
  );
};

export default ActionsStrip;
