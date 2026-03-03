# SEO Optimized Blog Template

Welcome to your new SEO-optimized blog template! This project is designed to be easily customizable via a single configuration file, making it perfect for developers who want to launch a high-performance, SEO-friendly blog in minutes.

## 🚀 Key Features

- **Built with Next.js 15 (App Router)**
- **SEO Optimized Out-of-the-Box**: Dynamic meta tags, OpenGraph, Twitter Cards, Sitemap, and Robots.txt.
- **MarbleCMS Integration**: Manage your blog content effortlessly.
- **Centralized Configuration**: Customize your entire app using `app-config.json`.
- **Modern UI**: Styled with Tailwind CSS and Radix UI.

## 🛠️ Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-ui>
cd <your-repo-name>
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Your App

Open `app-config.json` in the root directory and update your application details:

```json
{
  "appName": "Your Stunning App Name",
  "appDescription": "Describe your app here for search engines.",
  "appUrl": "https://your-domain.com",
  "keywords": ["blog", "seo", "template", "customize"],
  "author": "Your Name/Brand",
  "twitter": "@your_twitter",
  "favicons": {
    "ico": "/favicon.ico",
    "png": "/icon1.png",
    "svg": "/icon0.svg",
    "apple": "/apple-icon.png"
  },
  "openGraphImage": "/meta.webp",
  "cms": {
    "provider": "marblecms",
    "config": {
      "baseUrl": "https://media.marblecms.com"
    }
  }
}
```

### 3. Set Up Environment Variables

Copy `.env.example` to `.env` and fill in your MarbleCMS credentials:

```bash
cp .env.example .env
```

Required variables:

- `MARBLE_API_URL`: Your MarbleCMS API endpoint.
- `MARBLE_API_KEY`: Your MarbleCMS API key.

### 4. Customizing Media (Favicons & Meta Images)

To update your app's branding, replace the following files in the `public/` directory:

- **Favicon (ICO)**: Replace `public/favicon.ico`.
- **App Icon (PNG)**: Replace `public/icon1.png` (Used for manifest/shortcuts).
- **SVG Icon**: Replace `public/icon0.svg`.
- **Apple Touch Icon**: Replace `public/apple-icon.png`.
- **SEO/Meta Image**: Replace `public/meta.webp` (This is the image shown when shared on Social Media).

> [!TIP]
> Ensure your images have the same filenames as specified in `app-config.json` or update the file paths in the JSON accordingly.

### 5. Running Locally

```bash
npm run dev
```

Your app will be available at `http://localhost:3000`.

## 📈 SEO Best Practices

This template automatically generates:

- **`sitemap.ts`**: Dynamically includes all blog posts from MarbleCMS.
- **`robots.ts`**: Standard configuration for search engine crawlers.
- **Metadata**: Title templates, description, keywords, and social sharing tags.

## 📄 License

This project is open-source. Feel free to use and modify it for your own projects!
