# Deployment Checklist

## Pre-Deployment

- [ ] YouTube API key obtained (see [API_SETUP.md](./API_SETUP.md))
- [ ] GitHub account ready
- [ ] Netlify account created

## Deployment Steps

### 1. Fork Repository
- [ ] Go to [github.com/guychenya/chanlyze](https://github.com/guychenya/chanlyze)
- [ ] Click **Fork** button
- [ ] Wait for fork to complete

### 2. Connect to Netlify
- [ ] Sign in to [netlify.com](https://netlify.com)
- [ ] Click **Add new site** → **Import an existing project**
- [ ] Choose **GitHub**
- [ ] Authorize Netlify
- [ ] Select `chanlyze` repository

### 3. Configure Build
- [ ] Verify build command: `npm run build`
- [ ] Verify publish directory: `dist`
- [ ] (These should auto-detect from `netlify.toml`)

### 4. Add Environment Variable
- [ ] Go to **Site settings** → **Environment variables**
- [ ] Add variable:
  - Key: `VITE_YOUTUBE_API_KEY`
  - Value: Your YouTube API key
- [ ] Click **Save**

### 5. Deploy
- [ ] Click **Deploy site**
- [ ] Wait for build (~2-3 minutes)
- [ ] Check build logs for errors

### 6. Test
- [ ] Visit your site URL
- [ ] Try analyzing a channel (e.g., `@mkbhd`)
- [ ] Verify data loads correctly
- [ ] Check browser console for errors

## Post-Deployment

### Optional: Custom Domain
- [ ] Go to **Domain settings**
- [ ] Add custom domain
- [ ] Configure DNS
- [ ] Wait for SSL certificate

### Optional: API Key Restrictions
- [ ] Go to Google Cloud Console
- [ ] Edit API key
- [ ] Add HTTP referrer: `https://your-site.netlify.app/*`
- [ ] Save restrictions

## Troubleshooting

If deployment fails, check:
- [ ] Build logs in Netlify dashboard
- [ ] Environment variable is set correctly
- [ ] YouTube Data API v3 is enabled
- [ ] API key is valid

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for detailed help.

## Success! 🎉

Your site is live at: `https://your-site.netlify.app`

Next steps:
- Share your site
- Monitor API quota usage
- Customize features
- Contribute improvements

---

**Need help?** Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.
