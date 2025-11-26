import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const LoadingAnimation = ({ step, steps }) => {
  const { FiLoader, FiCheckCircle } = FiIcons;

  return (
    <div className="min-h-screen bg-[#0B0D17] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#1A1D2E]/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-xl p-8 text-center"
        >
          {/* Animated Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full inline-flex mb-6"
          >
            <SafeIcon icon={FiLoader} className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-2xl font-bold text-white mb-2">
            Analyzing Your Channel
          </h2>
          
          <p className="text-gray-300 mb-8">
            Please wait while we process your channel data...
          </p>

          {/* Progress Steps */}
          <div className="space-y-4">
            {steps.map((stepText, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: index <= step ? 1 : 0.5,
                  x: 0 
                }}
                className="flex items-center space-x-3"
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  index < step 
                    ? 'bg-green-500/20' 
                    : index === step 
                    ? 'bg-purple-500/20' 
                    : 'bg-gray-700/20'
                }`}>
                  {index < step ? (
                    <SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-400" />
                  ) : index === step ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <SafeIcon icon={FiLoader} className="h-4 w-4 text-purple-400" />
                    </motion.div>
                  ) : (
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  )}
                </div>
                <span className={`text-sm ${
                  index <= step ? 'text-gray-200' : 'text-gray-500'
                }`}>
                  {stepText}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="bg-gray-700/30 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {Math.round(((step + 1) / steps.length) * 100)}% complete
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation;