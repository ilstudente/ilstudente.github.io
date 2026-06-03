# David Ettel - Personal Website

A modern, minimal, and professional personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Home Page** - Clean landing page with introduction
- 📄 **Resume** - Professional resume with experience, education, and skills
- 💼 **Portfolio** - Showcase of projects and work
- 📝 **Blog** - Blog with markdown support for writing articles
- 👤 **About** - Personal information and interests
- 🎨 **Responsive Design** - Works great on all devices
- ⚡ **Fast Performance** - Optimized with Next.js and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter and remark
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── portfolio/         # Portfolio page
│   ├── resume/            # Resume page
│   └── layout.tsx         # Root layout
├── components/            # React components
├── content/               # Content files
│   └── posts/            # Blog posts (markdown)
├── lib/                   # Utility functions
└── public/               # Static assets

## Customization

### Updating Content

1. **Resume**: Edit `app/resume/page.tsx`
2. **Portfolio**: Edit `app/portfolio/page.tsx` and update the projects array
3. **Blog Posts**: Add markdown files to `content/posts/`
4. **About**: Edit `app/about/page.tsx`

### Adding Blog Posts

Create a new markdown file in `content/posts/` with the following format:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "A brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this template for your own website!

