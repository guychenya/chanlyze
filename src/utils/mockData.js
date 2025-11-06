export const generateMockChannelData = (channelId, url = '') => {
  const channelNames = [
    "Tech Insights Pro",
    "Creative Studio Hub", 
    "Gaming Masters",
    "Lifestyle Guru",
    "Educational Content",
    "DIY Workshop",
    "Fitness Journey",
    "Cooking Adventures",
    "Photography Tips",
    "Music Production"
  ];

  const descriptions = [
    "Latest technology reviews and tutorials for creators and tech enthusiasts",
    "Creative content and design inspiration for digital artists",
    "Gaming content, reviews, and live streams for hardcore gamers", 
    "Lifestyle tips, wellness advice, and daily vlogs for modern living",
    "Educational content and learning resources for curious minds",
    "DIY projects, home improvement, and crafting tutorials",
    "Fitness tips, workout routines, and health transformation journeys",
    "Cooking recipes, food reviews, and culinary adventures",
    "Photography techniques, camera reviews, and visual storytelling",
    "Music production tutorials, beat making, and audio engineering"
  ];

  const thumbnails = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face", 
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  ];

  // Generate deterministic but varied data based on channelId
  const hash = channelId.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);

  const index = Math.abs(hash) % channelNames.length;
  const thumbIndex = Math.abs(hash) % thumbnails.length;

  // More realistic subscriber ranges
  const subscriberBase = 5000 + (Math.abs(hash) % 95000); // 5K to 100K
  const videoBase = 20 + (Math.abs(hash) % 180); // 20 to 200 videos
  const viewsMultiplier = 15 + (Math.abs(hash) % 35); // 15-50x subscriber count

  return {
    id: channelId,
    title: channelNames[index],
    description: descriptions[index],
    thumbnail: thumbnails[thumbIndex],
    subscriberCount: subscriberBase,
    videoCount: videoBase,
    totalViews: subscriberBase * viewsMultiplier,
    createdAt: "2020-06-15",
    country: "United States",
    keywords: ["tutorial", "guide", "tips", "review", "how-to"],
    analytics: {
      healthScore: 50 + (Math.abs(hash) % 50), // 50-100
      subscriberGrowth: -10 + (Math.abs(hash) % 30), // -10% to +20%
      viewGrowth: -5 + (Math.abs(hash) % 25), // -5% to +20%
      avgViewsPerVideo: Math.round((subscriberBase * viewsMultiplier) / videoBase),
      uploadConsistency: 60 + (Math.abs(hash) % 40), // 60-100%
      engagementRate: 1 + ((Math.abs(hash) % 50) / 10), // 1-6%
      uploadsPerMonth: 2 + (Math.abs(hash) % 6) // 2-8 per month
    }
  };
};

export const generateMockVideoData = (count = 10) => {
  const videoTitles = [
    "How to Optimize YouTube Thumbnails for More Clicks",
    "YouTube Algorithm Secrets Revealed", 
    "Content Strategy That Actually Works",
    "Growing Your Channel from 0 to 100K Subscribers",
    "Best Video Editing Software for Beginners",
    "YouTube SEO Tips That Work in 2024",
    "Creating Viral Content: A Step-by-Step Guide", 
    "Monetizing Your YouTube Channel Effectively",
    "Camera Setup for Professional YouTube Videos",
    "Building a Community Around Your Content",
    "Advanced Analytics: Understanding Your Audience",
    "Thumbnail Design Psychology and Best Practices",
    "Live Streaming Setup and Engagement Tips",
    "Collaboration Strategies for Channel Growth",
    "Copyright and Fair Use Guidelines for Creators"
  ];

  const thumbnails = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
  ];

  return Array.from({ length: count }, (_, index) => {
    const baseViews = 5000 + Math.random() * 45000; // 5K to 50K views
    const engagementRate = 0.02 + Math.random() * 0.08; // 2-10% engagement
    
    return {
      id: `video-${index + 1}`,
      title: videoTitles[index % videoTitles.length],
      thumbnail: thumbnails[index % thumbnails.length],
      views: Math.floor(baseViews),
      likes: Math.floor(baseViews * engagementRate * 0.8), // 80% of engagement is likes
      comments: Math.floor(baseViews * engagementRate * 0.2), // 20% of engagement is comments
      duration: `${Math.floor(Math.random() * 15) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      uploadDate: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      engagement: (engagementRate * 100).toFixed(1)
    };
  });
};