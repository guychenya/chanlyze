// Usage tracking for subscription limits
export const PLAN_LIMITS = {
  free: 3,
  pro: 20
};

export const getUserPlan = (user) => {
  return user?.publicMetadata?.plan || 'free';
};

export const getUserUsageToday = (user) => {
  const usage = user?.publicMetadata?.usageToday || 0;
  const lastReset = user?.publicMetadata?.lastReset;
  const today = new Date().toDateString();
  
  // Reset if it's a new day
  if (lastReset !== today) {
    return 0;
  }
  
  return usage;
};

export const canUserAnalyze = (user) => {
  const plan = getUserPlan(user);
  const usageToday = getUserUsageToday(user);
  const limit = PLAN_LIMITS[plan];
  
  return usageToday < limit;
};

export const getRemainingAnalyses = (user) => {
  const plan = getUserPlan(user);
  const usageToday = getUserUsageToday(user);
  const limit = PLAN_LIMITS[plan];
  
  return Math.max(0, limit - usageToday);
};

export const incrementUsage = async (user) => {
  if (!user) return false;
  
  const currentUsage = getUserUsageToday(user);
  const today = new Date().toDateString();
  
  try {
    await user.update({
      publicMetadata: {
        ...user.publicMetadata,
        usageToday: currentUsage + 1,
        lastReset: today
      }
    });
    return true;
  } catch (error) {
    console.error('Failed to update usage:', error);
    return false;
  }
};
