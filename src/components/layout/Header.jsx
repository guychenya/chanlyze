import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import SafeIcon from '../../common/SafeIcon';

const Header = () => {
  const location = useLocation();
  const { FiPlay, FiBarChart3, FiTrendingUp, FiMenu, FiX } = FiIcons;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: FiPlay },
    { name: 'Analyze', href: '/analyze', icon: FiBarChart3 },
    { name: 'Compare', href: '/compare', icon: FiTrendingUp },
    { name: 'Pricing', href: '/subscription', icon: FiIcons.FiDollarSign },
  ];

  return (
    <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg">
              <SafeIcon icon={FiPlay} className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Chanlyze</span>
          </Link>

          {/* Desktop Auth & Menu */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                to="/analyze"
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Start Analysis
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            {/* Menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-4 top-16 w-64 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50"
        >
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-white font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <SafeIcon icon={item.icon} className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="block w-full text-gray-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors text-center mt-4">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="block w-full bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors text-center">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                to="/analyze"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors text-center mt-4"
              >
                Start Analysis
              </Link>
              <div className="flex justify-center mt-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;