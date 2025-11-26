# Chanlyze - YouTube Channel Analyzer

A comprehensive YouTube channel analytics tool that provides real-time insights, growth recommendations, and competitor analysis using the YouTube Data API v3.

**🌐 Live Demo**: [chanlyze.netlify.app](https://chanlyze.netlify.app)  
**📦 Repository**: [github.com/guychenya/chanlyze](https://github.com/guychenya/chanlyze)

## 🚀 Quick Deploy

This application deploys automatically via GitHub → Netlify:

1. **Fork the repository** on GitHub
2. **Connect to Netlify** (auto-deploys on push)
3. **Add environment variables** in Netlify dashboard:
   - `VITE_YOUTUBE_API_KEY` = your YouTube API key
4. **Deploy!** - Netlify builds and deploys automatically

**📚 Documentation:**
- [Deployment Guide](./DEPLOYMENT.md) - GitHub & Netlify setup
- [Getting Your API Key](./API_SETUP.md) - YouTube API configuration
- [Contributing Guide](./CONTRIBUTING.md) - For developers

## 📋 Prerequisites

- **GitHub Account**
- **Netlify Account** (free tier works)
- **YouTube Data API v3 Key** (see [API_SETUP.md](./API_SETUP.md))

## 🔑 Getting Your YouTube API Key

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project (or select existing)
3. Navigate to **APIs & Services** → **Library**
4. Search for and enable **YouTube Data API v3**
5. Go to **Credentials** → **Create Credentials** → **API Key**
6. Copy your API key and add it to Netlify

**Important**: Restrict your API key to YouTube Data API v3 only for security.

## ⚙️ Configuration

In Netlify dashboard, add environment variable:

```
VITE_YOUTUBE_API_KEY=your_actual_api_key_here
```

For local development, create `.env` file:

```env
VITE_YOUTUBE_API_KEY=your_actual_api_key_here
VITE_YOUTUBE_QUOTA_LIMIT=10000
```

## 🛠️ Available Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production (runs linter first)
npm run preview  # Preview production build
npm run lint     # Run ESLint on all files
```

## 🚀 Features

### Real-Time YouTube Data Integration
- **Live Statistics**: Real subscriber counts, views, and video metrics
- **Recent Video Analysis**: Performance analysis of latest 50 videos
- **Engagement Metrics**: Likes, comments, and interaction rates
- **Growth Tracking**: Upload frequency and performance trends

### Advanced Analytics
- **Channel Health Score**: Comprehensive performance scoring system
- **Competitor Comparison**: Side-by-side channel benchmarking
- **AI-Powered Recommendations**: Content optimization suggestions
- **Performance Visualization**: Interactive charts and graphs

### Premium User Experience
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion powered interactions
- **Real-Time Updates**: Live data fetching with progress indicators
- **Quota Management**: API usage monitoring and optimization

## 📊 API Usage & Quotas

### Quota Costs per Operation
- **Channel Analysis**: ~3-5 quota units
- **Video Fetching**: ~1-2 quota units  
- **Channel Comparison**: ~6-10 quota units

### Daily Quota Limit
- **Free Tier**: 10,000 units per day
- **Paid Tier**: Higher limits available

### Quota Optimization
- Intelligent caching to reduce API calls
- Progress tracking for quota usage
- Automatic quota management

## 🔧 Technical Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **React Router** - Client-side routing

### API Integration
- **YouTube Data API v3** - Real channel data
- **Axios** - HTTP client with interceptors
- **Error Handling** - Comprehensive error management
- **Quota Tracking** - Usage monitoring

### Development Tools
- **ESLint** - Code linting
- **Hot Reload** - Fast development
- **TypeScript Support** - Type safety (optional)

## 📱 Supported Channel URL Formats

The analyzer supports various YouTube URL formats:

```
https://youtube.com/@channelhandle
https://youtube.com/channel/UC1234567890
https://youtube.com/c/customname
https://youtube.com/user/username
```

## 🎯 Key Metrics Analyzed

### Channel Performance
- Subscriber count and growth rate
- Total views and average views per video
- Upload consistency and frequency
- Engagement rate (likes + comments / views)

### Video Analysis
- Top performing videos
- Recent video performance trends
- Content optimization opportunities
- Upload timing analysis

### Health Score Calculation
- **Subscriber Count** (0-20 points)
- **Engagement Rate** (0-25 points)
- **Upload Consistency** (0-20 points)
- **View Growth** (0-20 points)
- **Video Count** (0-15 points)

## 🚦 Common Issues

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for detailed solutions.

**Quick fixes**:
- **Invalid API Key**: Verify key in `.env` and restart server
- **Quota Exceeded**: Wait for daily reset (midnight PT)
- **Channel Not Found**: Check URL format and channel visibility

## 🔒 Privacy & Security

- **API keys stored locally** - Never sent to external servers
- **No data collection** - All analysis happens client-side
- **Public data only** - Only analyzes publicly available YouTube data
- **GDPR compliant** - No personal data storage

## 📈 Performance Optimizations

### API Efficiency
- Batch requests for multiple videos
- Intelligent caching strategies  
- Quota-aware request scheduling
- Error retry mechanisms

### UI Performance
- Lazy loading for components
- Optimized re-renders
- Smooth animations with Framer Motion
- Responsive image loading

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

Quick steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` to check code
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues
2. Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
3. Check [YouTube API documentation](https://developers.google.com/youtube/v3)
4. Create an issue on GitHub with details

---

**Note**: This application uses the YouTube Data API v3 and requires a valid API key to function. The accuracy of data depends on YouTube's public statistics availability.