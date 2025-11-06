// YouTube API Quota Management Service
class QuotaManager {
  constructor() {
    this.quotaKey = 'youtube_api_quota';
    this.cacheKey = 'youtube_api_cache';
    this.dailyLimit = 10000; // Default YouTube API daily quota
    this.resetTime = this.getNextResetTime();
  }

  // Get next quota reset time (midnight UTC)
  getNextResetTime() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setUTCDate(now.getUTCDate() + 1);
    tomorrow.setUTCHours(0, 0, 0, 0);
    return tomorrow.getTime();
  }

  // Get current quota usage
  getQuotaUsage() {
    const stored = localStorage.getItem(this.quotaKey);
    if (!stored) {
      return { used: 0, limit: this.dailyLimit, resetTime: this.resetTime };
    }

    const data = JSON.parse(stored);
    
    // Reset quota if past reset time
    if (Date.now() > data.resetTime) {
      this.resetQuota();
      return { used: 0, limit: this.dailyLimit, resetTime: this.getNextResetTime() };
    }

    return data;
  }

  // Add quota usage
  addQuotaUsage(cost) {
    const current = this.getQuotaUsage();
    const newUsage = {
      used: current.used + cost,
      limit: current.limit,
      resetTime: current.resetTime
    };
    
    localStorage.setItem(this.quotaKey, JSON.stringify(newUsage));
    return newUsage;
  }

  // Check if quota is available
  hasQuotaAvailable(cost = 1) {
    const usage = this.getQuotaUsage();
    return (usage.used + cost) <= usage.limit;
  }

  // Reset quota (for new day)
  resetQuota() {
    const newData = {
      used: 0,
      limit: this.dailyLimit,
      resetTime: this.getNextResetTime()
    };
    localStorage.setItem(this.quotaKey, JSON.stringify(newData));
    return newData;
  }

  // Get time until quota reset
  getTimeUntilReset() {
    const usage = this.getQuotaUsage();
    const timeLeft = usage.resetTime - Date.now();
    return Math.max(0, timeLeft);
  }

  // Format time until reset
  formatTimeUntilReset() {
    const timeLeft = this.getTimeUntilReset();
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }

  // Cache management
  setCache(key, data, ttl = 3600000) { // 1 hour default TTL
    const cacheData = {
      data,
      timestamp: Date.now(),
      ttl
    };
    
    const cache = this.getCache();
    cache[key] = cacheData;
    localStorage.setItem(this.cacheKey, JSON.stringify(cache));
  }

  getCache(key = null) {
    const stored = localStorage.getItem(this.cacheKey);
    const cache = stored ? JSON.parse(stored) : {};
    
    if (!key) return cache;
    
    const item = cache[key];
    if (!item) return null;
    
    // Check if cache is still valid
    if (Date.now() - item.timestamp > item.ttl) {
      delete cache[key];
      localStorage.setItem(this.cacheKey, JSON.stringify(cache));
      return null;
    }
    
    return item.data;
  }

  clearExpiredCache() {
    const cache = this.getCache();
    const now = Date.now();
    let hasChanges = false;
    
    Object.keys(cache).forEach(key => {
      if (now - cache[key].timestamp > cache[key].ttl) {
        delete cache[key];
        hasChanges = true;
      }
    });
    
    if (hasChanges) {
      localStorage.setItem(this.cacheKey, JSON.stringify(cache));
    }
  }
}

export default new QuotaManager();