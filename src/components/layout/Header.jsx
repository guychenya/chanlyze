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
            <img src="/logo.svg" alt="Chanlyze" className="h-10 w-10" />
            <span className="text-xl font-bold gradient-text">Chanlyze</span>
          </Link>

          {/* Auth & Menu */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="relative">
                <UserButton afterSignOutUrl="/" />
                {user?.publicMetadata?.plan === 'pro' && (
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-1 shadow-lg">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
              >
                <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
              </button>
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Menu Dropdown - Only for logged in users */}
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
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;