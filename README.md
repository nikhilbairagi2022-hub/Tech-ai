# Tech AI - Gemini-Powered Chat Application

A modern AI-powered chat application built with Next.js 14, featuring Google Gemini integration, voice mode, and Vercel Web Analytics.

## ✨ Features

- **💬 Chat Interface**: Interactive chat with Gemini AI
- **🎤 Voice Mode**: Speak naturally to interact with AI
- **🖼️ Image Generation**: Create images from text prompts (coming soon)
- **📊 Web Analytics**: Built-in Vercel Web Analytics for visitor tracking
- **⚡ Modern Stack**: Next.js 14 App Router with TypeScript
- **🎨 Responsive Design**: Works on all devices

## 🏗️ Project Structure

```
my-tech-ai/
├── app/
│   ├── layout.tsx          # Root layout with Analytics
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── App.tsx             # Main chat interface
│   └── VoiceView.tsx       # Voice interaction mode
├── lib/
│   └── Geminiservice.ts    # Gemini AI service
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, pnpm, yarn, or bun package manager
- A Vercel account (for analytics and deployment)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-tech-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Gemini API key:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Vercel Web Analytics

This project includes **Vercel Web Analytics** for tracking page views and visitor analytics.

### Quick Setup

1. Deploy to Vercel:
   ```bash
   vercel deploy
   ```

2. Enable Analytics in your [Vercel Dashboard](https://vercel.com/dashboard):
   - Select your project
   - Go to **Analytics** tab
   - Click **Enable Web Analytics**

3. View your analytics data after deployment!

For detailed analytics documentation, see [ANALYTICS.md](./ANALYTICS.md).

## 🧩 Components

### AlEngine (Geminiservice.ts)
The core service that communicates with Google's Gemini AI. Provides methods for:
- Chat conversations
- Image generation (coming soon)
- Image analysis (coming soon)

### Main UI (App.tsx)
The primary chat interface where users can:
- Send text messages to AI
- View conversation history
- Switch to voice mode
- Access monetization features (coming soon)

### Voice Mode (VoiceView.tsx)
An immersive voice interaction interface where users can:
- Speak naturally to the AI
- Receive audio responses
- Enjoy a hands-free experience

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS (inline styles)
- **AI Integration**: Google Gemini API
- **Analytics**: Vercel Web Analytics
- **Deployment**: Vercel

## 🔧 Configuration

### Gemini API Setup

1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_key_here
   ```

### Analytics Configuration

The Analytics component is already integrated in `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 📦 Deployment

### Deploy to Vercel

The easiest way to deploy:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your Git repository for automatic deployments:
1. Push to GitHub/GitLab/Bitbucket
2. Import to Vercel
3. Configure environment variables
4. Deploy automatically on every push

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Google Gemini API](https://ai.google.dev/)
- [Vercel Deployment](https://vercel.com/docs)

## 🆘 Support

For issues or questions:
- Check [ANALYTICS.md](./ANALYTICS.md) for analytics setup
- Review [Next.js Documentation](https://nextjs.org/docs)
- Open an issue on GitHub

---

Built with ❤️ using Next.js and Vercel
