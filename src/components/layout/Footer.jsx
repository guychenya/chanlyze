import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const Footer = () => {
  const { FiPlay, FiGithub, FiTwitter, FiMail, FiHeart } = FiIcons;

  return (
    <footer className="bg-[#0f0f17] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <SafeIcon icon={FiPlay} className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Chanlyze</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transform your YouTube analytics into actionable growth strategies. 
              Get AI-powered insights, competitor analysis, and optimization recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/guychenya/chanlyze" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <SafeIcon icon={FiGithub} className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <SafeIcon icon={FiTwitter} className="h-5 w-5" />
              </a>
              <a href="mailto:info@relatech.org" className="text-gray-400 hover:text-purple-400 transition-colors">
                <SafeIcon icon={FiMail} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/analyze" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Analyze Channel
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Compare Channels
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/guychenya/chanlyze#readme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://developers.google.com/youtube/v3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="mailto:info@relatech.org" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Chanlyze. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <SafeIcon icon={FiHeart} className="h-4 w-4 text-pink-500 mx-1" /> by{' '}
            <a href="https://www.linkedin.com/in/guychenya/" target="_blank" rel="noopener noreferrer" className="ml-1 text-purple-400 hover:text-purple-300 transition-colors">
              Guy Chenya
            </a>
            {' '}for{' '}educational purposes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
