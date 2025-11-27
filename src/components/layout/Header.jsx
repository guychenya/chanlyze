import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
import SafeIcon from '../../common/SafeIcon';

const Header = () => {
  const location = useLocation();
  const { user } = useUser();
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
              <div className="flex flex-col items-center gap-1">
                <div className="relative">
                  <UserButton afterSignOutUrl="/" />
                  {user?.publicMetadata?.plan === 'pro' && (
                    <div className="absolute -top-1.5 -right-1.5">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L14.5 7L20 8L16 12L17 18L12 15L7 18L8 12L4 8L9.5 7L12 2Z" fill="url(#crownGradient)" stroke="#B45309" strokeWidth="0.5"/>
                        <defs>
                          <linearGradient id="crownGradient" x1="12" y1="2" x2="12" y2="18">
                            <stop offset="0%" stopColor="#FCD34D"/>
                            <stop offset="100%" stopColor="#F59E0B"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
                {user?.publicMetadata?.plan === 'pro' ? (
                  <span className="text-xs font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">PRO</span>
                ) : (
                  <span className="text-xs font-semibold text-gray-400">FREE</span>
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