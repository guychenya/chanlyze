import axios from 'axios';
import { YOUTUBE_CONFIG, CHANNEL_PARTS, VIDEO_PARTS, getCurrentApiKey, validateApiKey } from '../config/youtube';
import quotaManager from './quotaManager';
import { generateMockChannelData, generateMockVideoData } from '../utils/mockData';

class YouTubeApiService {
  constructor() {
    this.baseURL = YOUTUBE_CONFIG.BASE_URL;
    this.quotaUsed = 0;

    // Create axios instance with default config
    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
    });

    // Add request interceptor for quota tracking and API key injection
    this.api.interceptors.request.use((config) => {
      // Always use the current API key (from localStorage or env)
      const currentApiKey = getCurrentApiKey();
      config.params = { ...config.params, key: currentApiKey };
      
      console.log(`📡 YouTube API Request: ${config.url}`);
      return config;
    });

    // Add response interceptor for error handling
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('YouTube API Error:', error.response?.data || error.message);
        throw new Error(this.handleApiError(error));
      }
    );
  }

  handleApiError(error) {
    if (error.response?.status === 403) {
      const errorData = error.response.data.error;
      if (errorData.errors?.[0]?.reason === 'quotaExceeded') {
        return 'QUOTA_EXCEEDED';
      }
      if (errorData.errors?.[0]?.reason === 'keyInvalid') {
        return 'Invalid YouTube API key. Please check your configuration.';
      }
      return 'YouTube API access forbidden. Please check your API key and permissions.';
    }
    
    if (error.response?.status === 404) {
      return 'Channel not found. Please check the URL and ensure the channel is public.';
    }
    
    if (error.response?.status === 400) {
      return 'Invalid request. Please check the channel URL format.';
    }
    
    return error.response?.data?.error?.message || 'Failed to fetch data from YouTube API';
  }

  // Enhanced API call with quota management and fallback
  async makeApiCall(endpoint, params, quotaCost = 1) {
    const cacheKey = `${endpoint}_${JSON.stringify(params)}`;
    
    // Try cache first
    const cached = quotaManager.getCache(cacheKey);
    if (cached) {
      console.log('📦 Using cached data for:', endpoint);
      return { data: cached, fromCache: true };
    }

    // Check quota availability
    if (!quotaManager.hasQuotaAvailable(quotaCost)) {
      console.warn('⚠️ YouTube API quota exceeded, using mock data');
      throw new Error('QUOTA_EXCEEDED');
    }

    try {
      // Make API call
      const response = await this.api.get(endpoint, { params });
      
      // Update quota usage
      quotaManager.addQuotaUsage(quotaCost);
      
      // Cache the response
      quotaManager.setCache(cacheKey, response.data, 1800000); // 30 minutes cache
      
      return { data: response.data, fromCache: false };
    } catch (error) {
      if (this.handleApiError(error) === 'QUOTA_EXCEEDED') {
        throw new Error('QUOTA_EXCEEDED');
      }
      throw error;
    }
  }

  // Extract channel ID from various YouTube URL formats
  extractChannelId(url) {
    const patterns = [
      // @username format
      /@([a-zA-Z0-9_.-]+)/,
      // Channel ID format
      /\/channel\/([a-zA-Z0-9_-]+)/,
      // Custom URL format
      /\/c\/([a-zA-Z0-9_-]+)/,
      // User format
      /\/user\/([a-zA-Z0-9_-]+)/,
      // Handle format
      /\/([a-zA-Z0-9_.-]+)$/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return {
          id: match[1],
          type: url.includes('@') ? 'handle' : 'id'
        };
      }
    }
    
    throw new Error('Invalid YouTube channel URL format');
  }

  // Get channel by handle (@username) with fallback
  async getChannelByHandle(handle) {
    try {
      const result = await this.makeApiCall(YOUTUBE_CONFIG.ENDPOINTS.CHANNELS, {
        part: CHANNEL_PARTS,
        forHandle: handle.startsWith('@') ? handle : `@${handle}`
      }, YOUTUBE_CONFIG.QUOTA_COSTS.CHANNELS);
      
      return result.data;
    } catch (error) {
      if (error.message === 'QUOTA_EXCEEDED') {
        // Return mock data when quota is exceeded
        const mockData = this.generateMockChannelResponse(handle);
        return mockData;
      }
      throw error;
    }
  }

  // Get channel by ID with fallback
  async getChannelById(channelId) {
    try {
      const result = await this.makeApiCall(YOUTUBE_CONFIG.ENDPOINTS.CHANNELS, {
        part: CHANNEL_PARTS,
        id: channelId
      }, YOUTUBE_CONFIG.QUOTA_COSTS.CHANNELS);
      
      return result.data;
    } catch (error) {
      if (error.message === 'QUOTA_EXCEEDED') {
        // Return mock data when quota is exceeded
        const mockData = this.generateMockChannelResponse(channelId);
        return mockData;
      }
      throw error;
    }
  }

  // Get channel videos with fallback
  async getChannelVideos(channelId, maxResults = 50) {
    try {
      // First get the uploads playlist ID
      const channelResult = await this.makeApiCall(YOUTUBE_CONFIG.ENDPOINTS.CHANNELS, {
        part: 'contentDetails',
        id: channelId
      }, YOUTUBE_CONFIG.QUOTA_COSTS.CHANNELS);

      if (!channelResult.data.items?.length) {
        throw new Error('Channel not found');
      }

      const uploadsPlaylistId = channelResult.data.items[0].contentDetails.relatedPlaylists.uploads;

      // Get videos from uploads playlist
      const playlistResult = await this.makeApiCall(YOUTUBE_CONFIG.ENDPOINTS.PLAYLIST_ITEMS, {
        part: 'snippet,contentDetails',
        playlistId: uploadsPlaylistId,
        maxResults
      }, YOUTUBE_CONFIG.QUOTA_COSTS.PLAYLIST_ITEMS);

      const videoIds = playlistResult.data.items
        .map(item => item.contentDetails.videoId)
        .join(',');

      // Get detailed video statistics
      const videosResult = await this.makeApiCall(YOUTUBE_CONFIG.ENDPOINTS.VIDEOS, {
        part: VIDEO_PARTS,
        id: videoIds
      }, YOUTUBE_CONFIG.QUOTA_COSTS.VIDEOS);

      return videosResult.data;
    } catch (error) {
      if (error.message === 'QUOTA_EXCEEDED') {
        // Return mock video data when quota is exceeded
        const mockData = this.generateMockVideosResponse(maxResults);
        return mockData;
      }
      throw error;
    }
  }

  // Generate mock channel response for quota exceeded scenarios
  generateMockChannelResponse(identifier) {
    const mockData = generateMockChannelData(identifier);
    
    return {
      items: [{
        id: mockData.id,
        snippet: {
          title: mockData.title,
          description: mockData.description,
          thumbnails: {
            medium: { url: mockData.thumbnail },
            default: { url: mockData.thumbnail }
          },
          publishedAt: new Date(mockData.createdAt).toISOString(),
          country: mockData.country,
          customUrl: `@${identifier}`
        },
        statistics: {
          subscriberCount: mockData.subscriberCount.toString(),
          videoCount: mockData.videoCount.toString(),
          viewCount: mockData.totalViews.toString()
        },
        brandingSettings: {
          channel: {
            keywords: mockData.keywords?.join(' ') || ''
          }
        }
      }],
      quotaExceeded: true
    };
  }

  // Generate mock videos response for quota exceeded scenarios
  generateMockVideosResponse(count = 10) {
    const mockVideos = generateMockVideoData(count);
    
    return {
      items: mockVideos.map(video => ({
        id: video.id,
        snippet: {
          title: video.title,
          description: `Mock description for ${video.title}`,
          thumbnails: {
            medium: { url: video.thumbnail },
            default: { url: video.thumbnail }
          },
          publishedAt: new Date(video.uploadDate).toISOString(),
          tags: ['youtube', 'tutorial', 'guide']
        },
        statistics: {
          viewCount: Math.floor(video.views).toString(),
          likeCount: Math.floor(video.likes).toString(),
          commentCount: Math.floor(video.likes * 0.1).toString()
        },
        contentDetails: {
          duration: `PT${video.duration.replace(':', 'M')}S`
        }
      })),
      quotaExceeded: true
    };
  }

  // Search for channel by name/keyword
  async searchChannels(query, maxResults = 10) {
    try {
      const result = await this.makeApiCall(YOUTUBE_CONFIG.ENDPOINTS.SEARCH, {
        part: 'snippet',
        q: query,
        type: 'channel',
        maxResults
      }, YOUTUBE_CONFIG.QUOTA_COSTS.SEARCH);
      
      return result.data;
    } catch (error) {
      if (error.message === 'QUOTA_EXCEEDED') {
        // Return empty results when quota is exceeded
        return { items: [], quotaExceeded: true };
      }
      throw error;
    }
  }

  // Get quota usage
  getQuotaUsage() {
    const usage = quotaManager.getQuotaUsage();
    return {
      used: usage.used,
      limit: usage.limit,
      percentage: (usage.used / usage.limit) * 100,
      timeUntilReset: quotaManager.formatTimeUntilReset(),
      resetTime: usage.resetTime
    };
  }

  // Reset quota counter (for testing)
  resetQuota() {
    quotaManager.resetQuota();
  }

  // Clear cache
  clearCache() {
    localStorage.removeItem(quotaManager.cacheKey);
  }
}

// Create singleton instance
const youtubeApiService = new YouTubeApiService();

export default youtubeApiService;

// Export individual methods for easier importing
export const {
  extractChannelId,
  getChannelByHandle,
  getChannelById,
  getChannelVideos,
  searchChannels,
  getQuotaUsage,
  resetQuota,
  clearCache
} = youtubeApiService;