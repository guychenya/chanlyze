# YouTube API Setup Guide

## Getting Your YouTube Data API v3 Key

### Step 1: Access Google Cloud Console

1. Go to [console.developers.google.com](https://console.developers.google.com/)
2. Sign in with your Google account

### Step 2: Create a Project

1. Click **Select a project** (top left)
2. Click **New Project**
3. Enter project name: `Chanlyze` (or any name)
4. Click **Create**
5. Wait for project creation (~30 seconds)

### Step 3: Enable YouTube Data API v3

1. In the dashboard, click **Enable APIs and Services**
2. Search for: `YouTube Data API v3`
3. Click on **YouTube Data API v3**
4. Click **Enable**
5. Wait for activation

### Step 4: Create API Key

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **API Key**
3. Your API key is generated!
4. **Copy the key** (you'll need it for Netlify)

### Step 5: Restrict API Key (Recommended)

1. Click on your API key to edit
2. Under **API restrictions**:
   - Select **Restrict key**
   - Check **YouTube Data API v3**
3. Under **Application restrictions**:
   - Select **HTTP referrers (web sites)**
   - Add: `https://chanlyze.netlify.app/*`
   - Add: `https://*.netlify.app/*` (for deploy previews)
4. Click **Save**

## 🔐 Security Best Practices

### API Key Restrictions

**Always restrict your API key to**:
1. YouTube Data API v3 only
2. Your Netlify domain(s)

**Example restrictions**:
```
API restrictions:
✅ YouTube Data API v3

HTTP referrer restrictions:
✅ https://chanlyze.netlify.app/*
✅ https://your-custom-domain.com/*
✅ http://localhost:5173/* (for local dev)
```

### Monitoring Usage

1. Go to Google Cloud Console
2. Navigate to **APIs & Services** → **Dashboard**
3. Click on **YouTube Data API v3**
4. View quota usage and requests

## 📊 Understanding API Quotas

### Daily Quota Limit

- **Free Tier**: 10,000 units per day
- Resets at midnight Pacific Time (PT)

### Quota Costs per Operation

| Operation | Cost (units) |
|-----------|--------------|
| Channel details | 1 |
| Video list (50 videos) | 1 |
| Search | 100 |
| Channel statistics | 1 |

### Typical Usage

- **Single channel analysis**: ~3-5 units
- **Channel comparison**: ~6-10 units
- **Daily capacity**: ~1,000-3,000 analyses

## 🚨 Quota Exceeded?

### Solutions

**Option 1: Wait for Reset**
- Quota resets at midnight PT
- Check current time: [time.is/PT](https://time.is/PT)

**Option 2: Request Quota Increase**
1. Go to Google Cloud Console
2. Navigate to **APIs & Services** → **Quotas**
3. Select **YouTube Data API v3**
4. Click **Edit Quotas**
5. Request increase (requires justification)

**Option 3: Use Multiple API Keys**
- Create multiple projects
- Rotate between API keys
- Update Netlify environment variable

## 🔧 Adding API Key to Netlify

### Via Netlify Dashboard

1. Go to your site in Netlify
2. Click **Site settings**
3. Go to **Environment variables**
4. Click **Add a variable**
5. Set:
   - **Key**: `VITE_YOUTUBE_API_KEY`
   - **Value**: Your API key
6. Click **Save**
7. **Trigger redeploy** for changes to take effect

### Via Netlify CLI (Optional)

```bash
netlify env:set VITE_YOUTUBE_API_KEY "your_api_key_here"
```

## 🧪 Testing Your API Key

### Test in Browser

```javascript
// Open browser console on your deployed site
fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
  .then(r => r.json())
  .then(console.log)
```

### Test with cURL

```bash
curl "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=YOUR_API_KEY"
```

**Expected response**: JSON with channel data

**Error responses**:
- `400`: Invalid API key format
- `403`: API not enabled or quota exceeded
- `404`: Channel not found

## 🔄 Rotating API Keys

If your key is compromised:

1. **Create new API key** in Google Cloud Console
2. **Update Netlify** environment variable
3. **Trigger redeploy**
4. **Delete old key** in Google Cloud Console

## 📝 Local Development

For local testing, create `.env` file:

```env
VITE_YOUTUBE_API_KEY=your_api_key_here
VITE_YOUTUBE_QUOTA_LIMIT=10000
```

**Important**: Never commit `.env` to Git!

## ❓ Common Issues

### "API key not valid"

**Solutions**:
- Check key is copied correctly (no spaces)
- Verify YouTube Data API v3 is enabled
- Check API restrictions aren't too strict
- Wait a few minutes after creating key

### "Quota exceeded"

**Solutions**:
- Wait for daily reset (midnight PT)
- Request quota increase
- Optimize API usage in code

### "Access Not Configured"

**Solution**:
- Enable YouTube Data API v3 in Google Cloud Console
- Wait 1-2 minutes for activation

## 📞 Support

**Google Cloud Issues**:
- [Google Cloud Support](https://cloud.google.com/support)
- [YouTube API Documentation](https://developers.google.com/youtube/v3)

**Chanlyze Issues**:
- Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- Create issue on GitHub

---

**Next step**: Add your API key to Netlify and deploy!
