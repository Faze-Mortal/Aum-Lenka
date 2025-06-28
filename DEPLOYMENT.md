# 🚀 Free Deployment Guide

## Option 1: Vercel (Recommended - Easiest)

### Step 1: Prepare Your Project
1. Make sure your code is committed to a GitHub repository
2. Your project is ready to deploy!

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"
6. Your site will be live in 2-3 minutes!

### Step 3: Custom Domain (Optional)
- In your Vercel dashboard, go to your project settings
- Add your custom domain (e.g., `aumlenka.com`)

---

## Option 2: Netlify

### Step 1: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

---

## Option 3: GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these scripts to your package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Deploy
```bash
npm run deploy
```

---

## 🎯 Quick Start (Vercel)

1. **Push to GitHub**: Make sure your code is on GitHub
2. **Visit Vercel**: Go to [vercel.com](https://vercel.com)
3. **Import Project**: Connect your GitHub repo
4. **Deploy**: Click deploy and wait 2 minutes
5. **Done!** Your portfolio is live at `your-project.vercel.app`

## 🔧 Troubleshooting

### If build fails:
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally
- Check the build logs in your deployment platform

### If images don't load:
- Make sure all assets are in the `public` or `assets` folder
- Check that image paths are correct

### If routing doesn't work:
- The `vercel.json` file handles this automatically
- For other platforms, you may need to configure redirects

## 🌟 Pro Tips

1. **Custom Domain**: All platforms support custom domains
2. **Environment Variables**: Set up any API keys in your deployment platform
3. **Automatic Deployments**: Every push to main branch will auto-deploy
4. **Preview Deployments**: Test changes before going live

## 📊 Performance Tips

- Your Vite build is already optimized
- Images are automatically optimized by most platforms
- Consider adding a CDN for global performance 