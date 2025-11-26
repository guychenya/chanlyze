# Troubleshooting Guide - Chanlyze

## Deployment Issues

### Build Fails on Netlify

**Check Netlify build logs**:
1. Go to Netlify dashboard
2. Click on failed deploy
3. View build logs

**Common issues**:

**Missing environment variable**
```
Error: VITE_YOUTUBE_API_KEY is not defined
Solution: Add API key in Netlify environment variables
```

**Linting errors**
```
Error: ESLint found problems
Solution: Fix linting errors in code or temporarily disable in build command
```

**Dependency issues**
```
Error: Cannot find module
Solution: Check package.json, clear cache, redeploy
```

### Site Deploys but Shows Blank Page

**Check browser console** (F12):
- Look for JavaScript errors
- Check network tab for failed requests

**Common causes**:
- Missing environment variables
- API key not configured
- Build artifacts corrupted

**Solution**:
1. Verify `VITE_YOUTUBE_API_KEY` is set in Netlify
2. Trigger manual redeploy
3. Clear Netlify cache and redeploy

## API Issues

### "Invalid API Key" Error

**Checklist**:
1. ✅ API key added to Netlify environment variables
2. ✅ Variable name is exactly `VITE_YOUTUBE_API_KEY`
3. ✅ YouTube Data API v3 enabled in Google Cloud Console
4. ✅ No extra spaces in API key
5. ✅ Site redeployed after adding variable

**Verify in Netlify**:
1. Go to Site settings → Environment variables
2. Check `VITE_YOUTUBE_API_KEY` exists
3. If missing or wrong, update and redeploy

**Test API key manually**:
```bash
curl "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=YOUR_API_KEY"
```

### "Quota Exceeded" Error

**Cause**: YouTube API daily limit of 10,000 units reached

**Solutions**:
1. Wait for quota reset (midnight Pacific Time)
2. Request quota increase in Google Cloud Console
3. Optimize API usage in code

**Check quota**:
- Go to [Google Cloud Console](https://console.developers.google.com/)
- APIs & Services → Dashboard
- View YouTube Data API v3 usage

### "Channel Not Found" Error

**Supported URL formats**:
```
✅ https://youtube.com/@channelhandle
✅ https://youtube.com/channel/UCxxxxxxxxx
✅ https://youtube.com/c/customname
✅ https://youtube.com/user/username
❌ https://youtube.com/watch?v=... (video URL)
```

**Possible causes**:
- Channel is private or deleted
- Invalid channel handle/ID
- Typo in URL

## Netlify-Specific Issues

### Environment Variables Not Working

**After adding/updating variables**:
1. Variables only apply to new deploys
2. Trigger manual redeploy
3. Wait for build to complete

**Check if variable is loaded**:
```javascript
// In browser console on your site
console.log(import.meta.env.VITE_YOUTUBE_API_KEY ? 'Set' : 'Missing')
```

### Deploy Previews Not Working

**For pull requests**:
- Preview deploys created automatically
- Check Netlify dashboard for preview URL
- May need approval if from forked repo

### Custom Domain Issues

**DNS not resolving**:
1. Check DNS settings in domain registrar
2. Wait for DNS propagation (up to 48 hours)
3. Verify Netlify DNS records are correct

**SSL certificate issues**:
- Netlify auto-generates SSL
- May take a few minutes
- Check Site settings → Domain management

## Runtime Issues

### API Calls Failing

**Check browser DevTools** (F12):
1. Go to Network tab
2. Try analyzing a channel
3. Look for failed requests (red)
4. Check response details

**Common issues**:
- CORS errors → API key restrictions too strict
- 403 errors → API not enabled or quota exceeded
- 404 errors → Invalid channel ID

**Fix API restrictions**:
1. Go to Google Cloud Console
2. Edit API key
3. Add HTTP referrer: `https://chanlyze.netlify.app/*`
4. Add: `https://*.netlify.app/*` (for previews)

### Slow Performance

**Causes**:
- YouTube API rate limiting
- Network latency
- Large channel with many videos

**Solutions**:
- Check Netlify Analytics for performance metrics
- Optimize API calls in code
- Implement better caching

## Browser Issues

### Features Not Working

**Minimum browser requirements**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Check browser**:
```javascript
// In browser console
console.log(navigator.userAgent)
```

### Cache Issues

**Clear browser cache**:
- Chrome: Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)
- Or use incognito/private mode

## GitHub Issues

### Fork Not Syncing

**Sync your fork**:
1. Go to your fork on GitHub
2. Click **Sync fork** button
3. Click **Update branch**

### Pull Request Conflicts

**Resolve conflicts**:
1. Sync your fork with upstream
2. Resolve conflicts locally or via GitHub
3. Push updated branch

## Local Development Issues (Optional)

### npm install Fails

**Solutions**:
```bash
# Clear cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### .env Not Loading

**Requirements**:
1. File must be named exactly `.env`
2. Must be in root directory
3. Variables must start with `VITE_`
4. Restart dev server after changes

## Getting Help

### Check Documentation

1. [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment setup
2. [API_SETUP.md](./API_SETUP.md) - API configuration
3. [README.md](./README.md) - General information

### External Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [YouTube API Documentation](https://developers.google.com/youtube/v3)
- [Vite Documentation](https://vitejs.dev/)

### Create an Issue

If problem persists:
1. Go to [GitHub Issues](https://github.com/guychenya/chanlyze/issues)
2. Search existing issues
3. Create new issue with:
   - Error message
   - Steps to reproduce
   - Browser/OS info
   - Screenshots if applicable

---

**Still stuck?** Create an issue on GitHub with details!
