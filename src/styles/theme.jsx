// Unified Design System for Chanlyze
export const theme = {
  // Background
  bg: {
    primary: 'bg-[#0B0D17]',
    card: 'bg-[#1A1D2E]/60',
    cardHover: 'hover:bg-[#1A1D2E]/80',
  },
  
  // Borders
  border: {
    default: 'border-purple-500/30',
    hover: 'hover:border-purple-500/50',
  },
  
  // Text
  text: {
    primary: 'text-white',
    secondary: 'text-gray-400',
    muted: 'text-gray-500',
  },
  
  // Buttons
  button: {
    primary: 'bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white hover:from-purple-700 hover:via-purple-800 hover:to-pink-700',
    secondary: 'bg-[#1A1D2E]/60 text-white border border-purple-500/30 hover:border-purple-500/50',
  },
  
  // Effects
  blur: 'backdrop-blur-2xl',
  shadow: 'shadow-lg shadow-purple-500/25',
  
  // Gradients (for background orbs)
  gradients: {
    orb1: 'bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-transparent',
    orb2: 'bg-gradient-to-tr from-indigo-600/20 via-purple-700/10 to-transparent',
    orb3: 'bg-gradient-to-br from-pink-600/10 to-transparent',
  }
};

export const GradientBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-transparent rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-tr from-indigo-600/20 via-purple-700/10 to-transparent rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-[40%] left-[30%] w-[600px] h-[600px] bg-gradient-to-br from-pink-600/10 to-transparent rounded-full blur-[100px]"></div>
  </div>
);
