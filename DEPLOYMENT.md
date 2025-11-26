# Deployment Guide - Chanlyze

## GitHub + Netlify Deployment

This application deploys automatically from GitHub to Netlify. No local installation required.

## 🚀 Quick Deploy (5 minutes)

### 1. Fork the Repository

1. Go to [github.com/guychenya/chanlyze](https://github.com/guychenya/chanlyze)
2. Click **Fork** button (top right)
3. Wait for fork to complete

### 2. Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub
5. Select your forked `chanlyze` repository

### 3. Configure Build Settings

Netlify should auto-detect these settings:

```
Build command: npm run build
Publish directory: dist
```

If not, set them manually.

### 4. Add Environment Variables

Before deploying, add your API key:

1. In Netlify, go to **Site settings** → **Environment variables**
2. Click **Add a variable**
3. Add:
   - **Key**: `VITE_YOUTUBE_API_KEY`
   - **Value**: Your YouTube API key (see [API_SETUP.md](./API_SETUP.md))
4. Click **Save**

### 5. Deploy

1. Click **Deploy site**
2. Wait for build to complete (~2-3 minutes)
3. Your site is live! 🎉

## 📝 Getting Your YouTube API Key

See [API_SETUP.md](./API_SETUP.md) for detailed instructions.

Quick steps:
1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create project → Enable YouTube Data API v3
3. Create API Key
4. Copy and add to Netlify environment variables

## 🔄 Automatic Deployments

Once connected:
- **Push to main branch** → Netlify auto-deploys
- **Pull requests** → Netlify creates preview deployments
- **Rollback** → Use Netlify dashboard to rollback

## 🌐 Custom Domain (Optional)

1. In Netlify, go to **Domain settings**
2. Click **Add custom domain**
3. Follow instructions to configure DNS
4. SSL certificate auto-generated

## 🔧 Build Configuration

### netlify.toml (Optional)

Create `netlify.toml` in root for advanced config:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🐛 Troubleshooting

### Build Fails

**Check build logs** in Netlify dashboard:
- Look for error messages
- Verify environment variables are set
- Check Node.js version compatibility

**Common issues**:
- Missing `VITE_YOUTUBE_API_KEY` → Add in environment variables
- Linting errors → Fix in code and push
- Dependency issues → Check `package.json`

### Site Loads but API Fails

**Check**:
1. Environment variable is set correctly
2. API key is valid
3. YouTube Data API v3 is enabled
4. No API restrictions blocking requests

**Test API key**:
```bash
curl "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=YOUR_API_KEY"
```

### Deploy Preview Not Working

**Solutions**:
- Check if PR is from forked repo (may need approval)
- Verify branch protection rules
- Check Netlify deploy settings

## 📊 Monitoring

### Netlify Dashboard

Monitor:
- Build status and logs
- Deploy history
- Bandwidth usage
- Form submissions (if added)

### Analytics (Optional)

Add analytics in Netlify:
1. Go to **Integrations**
2. Enable **Netlify Analytics** ($9/month)
3. Or add Google Analytics to your code

## 🔒 Security

### Environment Variables

- ✅ Stored securely in Netlify
- ✅ Not exposed in client code
- ✅ Not in Git repository
- ⚠️ Accessible in browser (client-side app)

### API Key Security

**Best practices**:
1. Restrict API key to YouTube Data API v3 only
2. Set HTTP referrer restrictions in Google Cloud Console
3. Monitor quota usage regularly
4. Rotate keys if compromised

**Restrict by HTTP referrer**:
```
https://your-site.netlify.app/*
https://chanlyze.netlify.app/*
```

## 🚀 Advanced: Deploy Contexts

Configure different settings for different branches:

```toml
[context.production]
  command = "npm run build"

[context.deploy-preview]
  command = "npm run build"

[context.branch-deploy]
  command = "npm run build"
```

## 📈 Performance

### Build Optimization

- Netlify caches `node_modules`
- Average build time: 2-3 minutes
- Automatic CDN distribution

### Runtime Optimization

- Static files served from CDN
- Automatic HTTPS
- HTTP/2 enabled
- Gzip compression

## 🔄 Updating Your Site

### Method 1: GitHub Web Interface

1. Go to your repo on GitHub
2. Edit files directly
3. Commit changes
4. Netlify auto-deploys

### Method 2: Local Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/chanlyze.git
cd chanlyze

# Install dependencies
npm install

# Create .env for local testing
cp .env.example .env
# Add your API key

# Make changes and test
npm run dev

# Push to GitHub
git add .
git commit -m "Your changes"
git push

# Netlify auto-deploys
```

## 📞 Support

**Netlify Issues**:
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Support](https://www.netlify.com/support/)

**Application Issues**:
- Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- Create issue on GitHub

---

**Ready to deploy?** Start with step 1: Fork the repository!
