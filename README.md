# 🚀 https://zaryab-hayat-khan.vercel.app/ Website

> Modern, performant portfolio website built with Next.js, React, and GSAP. Featuring smooth animations, real-time status tracking, and a beautiful gradient-based design.



[![Next.js](https://img.shields.io/badge/Next.js-16.0.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful gradient-based design with smooth animations
- 🎭 **GSAP Animations** - Advanced 3D animations and scroll-triggered effects
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized** - Built with Next.js 16 for optimal speed
- 🎯 **Real-time Status** - Live status tracking (Online/Offline/Holidays)
- 📧 **Contact Form** - Integrated contact form with Cloudflare Turnstile
- 🌐 **SEO Optimized** - Complete SEO setup with sitemap generation
- 🎨 **Custom Scrollbar** - Beautiful gradient scrollbars throughout

## 🛠️ Tech Stack

### Core

- **[Next.js 16](https://nextjs.org/)** - React framework for production
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS

### Animation & UI

- **[GSAP](https://greensock.com/gsap/)** - Professional animation library with ScrollTrigger
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scroll library
- **Custom SVG icons** - Local icon set for better bundle control

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[React Turnstile](https://github.com/marsidev/react-turnstile)** - Cloudflare Turnstile integration

### Other

- **[Axios](https://axios-http.com/)** - HTTP client
- **[Nodemailer](https://nodemailer.com/)** - Email sending
- **[Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)** - Sitemap generation

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/fbrzlarosa/Zee-Tech-website.git
   cd Zee-Tech-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Status Tracker
   STATUS_API_SECRET=your_secure_secret_here
   TRACKER_API_URL=http://localhost:3000/api/status

   # Contact Form (Brevo/SendGrid)
   SMTP_HOST=smtp-relay.brevo.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_password
   SMTP_FROM=your_email@example.com
   SMTP_TO=recipient@example.com

   # Cloudflare Turnstile
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
   TURNSTILE_SECRET_KEY=your_secret_key

   # Social Links
   NEXT_PUBLIC_SOCIAL_GITHUB=https://github.com/yourusername
   NEXT_PUBLIC_SOCIAL_LINKEDIN=https://linkedin.com/in/yourprofile
   NEXT_PUBLIC_SOCIAL_DEVTO=https://dev.to/yourusername

   # Privacy Policy (Iubenda)
   NEXT_PUBLIC_IUBENDA_POLICY_ID=your_policy_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Status Tracker

The website features a real-time status system that displays your availability (Online/Offline/Holidays) on the homepage.

### How It Works

1. **Status Store** (`src/lib/statusStore.ts`)

   - In-memory store for status data
   - ⚠️ **Note**: In Vercel Serverless, this resets on cold boot
   - For production, consider using Vercel KV, Redis, or a database

2. **API Endpoint** (`src/app/api/status/route.ts`)

   - `GET /api/status` - Retrieves current status
   - `POST /api/status` - Updates status (requires secret)

3. **Tracker Script** (`scripts/tracker.js`)
   - Monitors desktop idle time
   - Automatically updates status based on activity
   - Runs every 30 seconds

### Running the Status Tracker

#### Manual Execution

```bash
npm run tracker
# or
node scripts/tracker.js
```

#### Automatic Execution (Windows)

Use the provided PowerShell scripts:

```powershell
# Setup autostart
.\scripts\setup-windows-autostart.ps1

# Or run hidden
.\scripts\run-tracker-hidden.ps1
```

For more details, see [`scripts/README-WINDOWS.md`](scripts/README-WINDOWS.md)

#### Automatic Execution (Linux/Mac)

Use PM2 or systemd:

```bash
# With PM2
pm2 start scripts/tracker.js --name status-tracker
pm2 save
pm2 startup
```

### Status Values

- `online` - User is active (idle time < 60 seconds)
- `offline` - User is away (idle time ≥ 60 seconds)
- `holidays` - Manual status for holidays/vacation

## 🏗️ Project Structure

```
Zee-Tech-website/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── sitemap.xml
├── scripts/               # Utility scripts
│   ├── tracker.js         # Status tracker script
│   └── setup-windows-autostart.ps1
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── api/          # API routes
│   │   │   ├── contact/  # Contact form endpoint
│   │   │   └── status/   # Status API
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── SkillsShowcase.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── lib/              # Utilities
│   │   ├── statusStore.ts
│   │   └── utils.ts
│   └── types/            # TypeScript types
└── package.json
```

## 🎨 Key Components

- **Hero** - Animated hero section with 3D effects
- **About** - Story section with timeline
- **SkillsShowcase** - Interactive skill cards with parallax
- **Process** - How I work section
- **Contact** - Contact form with validation
- **ReadyToStart** - Call-to-action section
- **Footer** - Footer with open source modal
- **StatusBadge** - Real-time status indicator

## 🚀 Deployment

### Environment Variables for Production

Make sure to set all environment variables in your deployment platform:

- `STATUS_API_SECRET` - Secure secret for status API
- `SMTP_*` - Email configuration
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Cloudflare Turnstile
- `TURNSTILE_SECRET_KEY` - Cloudflare Turnstile secret
- `NEXT_PUBLIC_SOCIAL_*` - Social media links
- `NEXT_PUBLIC_IUBENDA_POLICY_ID` - Privacy policy ID

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run tracker` - Start status tracker

## 🔧 Configuration

### Email Setup (Brevo)

See [`BREVO-SMTP-SETUP.md`](BREVO-SMTP-SETUP.md) for detailed email configuration instructions.

### Sitemap

The sitemap is automatically generated on build using `next-sitemap`. Configuration is in `next-sitemap.config.js`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: https://zaryab-hayat-khan.vercel.app/
- **Repository**: [GitHub](https://github.com/fbrzlarosa/Zee-Tech-website)

## 🙏 Acknowledgments

- Built with amazing open source technologies
- Icons implemented as local SVG components
- Animations powered by [GSAP](https://greensock.com/gsap/)

## 👨‍💻 About the Developer

This portfolio showcases the work of a **Shopify specialist and full-stack web developer** with 4+ years of professional experience. Started freelancing during university and graduated with a Software Engineering degree in 2022. Currently a Mid-Senior Frontend Web Developer at Translation Empire PK (Islamabad).

### Professional Background

**Specializations:**
- **Shopify Theme Development** — Deep expertise in Liquid, custom sections, metafields, and schema customization
- **React & Next.js** — Performance optimization and modern frontend architecture
- **Full-Stack Web Development** — From concept to deployment

**Track Record:**
- 100% Job Success Score on Upwork with Rising Talent badge
- 30+ completed freelance projects
- Named client work: Snacktopia, Martin's Chocolates, Noire Lash, XARA Shilajit
- Sustained high-rated freelance career alongside full-time employment

Looking to solve your e-commerce or web development challenges? Reach out and let's build something great together.

---

Made with ❤️ by Fabrizio La Rosa
