# GitHub Pages Deployment Guide

Your portfolio site is now ready to be deployed to GitHub Pages! Here's everything you need to know:

## 📁 Files Created

- **`index.html`** - Entry point for GitHub Pages (copied from client/index.html)
- **`vite.github-pages.config.ts`** - Vite configuration optimized for GitHub Pages
- **`.github/workflows/deploy-github-pages.yml`** - GitHub Actions workflow for automated deployment
- **`.nojekyll`** - Tells GitHub Pages not to use Jekyll processing

## 🚀 Deploy Options

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as the source
   - The site will build automatically on every push to main branch

3. **Access your site:**
   - Your site will be available at: `https://your-username.github.io/your-repo-name/`

### Option 2: Manual Deployment

1. **Build the site:**
   ```bash
   npx vite build --config vite.github-pages.config.ts
   ```

2. **Deploy the dist folder:**
   - Use GitHub's web interface to upload the contents of the `dist` folder
   - Or use a tool like `gh-pages` npm package

## ⚙️ Configuration

### Repository Name Setup
The configuration automatically detects your repository name from GitHub environment variables. However, if deploying manually or if you need to override:

1. **For repository pages** (e.g., `username.github.io/repo-name`):
   ```typescript
   base: "/your-repo-name/",
   ```

2. **For user/organization pages** (e.g., `username.github.io`):
   ```typescript
   base: "/",
   ```

### Important: SPA Routing
Your site uses client-side routing. The deployment automatically:
- Creates a 404.html fallback for deep links
- Configures base-aware asset and CV download paths
- Sets up proper GitHub Pages integration

### Custom Domain
If you're using a custom domain, set:
```typescript
base: "/",
```

## 🔧 Build Process

The build process:
1. Uses the root `index.html` as the entry point
2. Bundles all your React components and assets
3. Outputs static files to the `dist` directory
4. Includes your CV file from the `public` directory

## ✅ What's Included

Your deployed site will include:
- ✅ Full React portfolio application
- ✅ WhatsApp contact integration
- ✅ CV download functionality
- ✅ All styling and assets
- ✅ Mobile responsive design

## 🐛 Troubleshooting

**White screen after deployment?**
- Check the browser console for errors
- Verify the base path in the config matches your repository structure

**CV download not working?**
- Ensure the `public` folder is included in your repository
- Check that the CV file path is correct in the contact section

**Assets not loading?**
- Verify all image imports use the `@assets` alias
- Check that attached_assets folder is committed to git

## 📞 Support

Your site is now ready for GitHub Pages! The deployment process is fully automated and will update your live site every time you push changes to the main branch.