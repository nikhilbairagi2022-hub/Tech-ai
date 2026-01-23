# Vercel Web Analytics Integration

This project has been configured with **Vercel Web Analytics** to track visitors, page views, and user interactions.

## What's Included

The `@vercel/analytics` package has been integrated into this Next.js application with the following setup:

### 1. Package Installation

The `@vercel/analytics` package (v1.4.0) is included in `package.json`:

```json
"dependencies": {
  "@vercel/analytics": "^1.4.0"
}
```

### 2. Analytics Component Integration

The `Analytics` component has been added to the root layout (`app/layout.tsx`):

```tsx
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

## How It Works

The `Analytics` component:
- Automatically tracks page views
- Detects route changes in Next.js App Router
- Sends analytics data to `/_vercel/insights/*` routes
- Works seamlessly with Next.js without additional configuration
- Respects user privacy settings

## Enabling Analytics on Vercel

To start collecting analytics data:

1. **Deploy to Vercel**:
   ```bash
   vercel deploy
   ```

2. **Enable Web Analytics in Dashboard**:
   - Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
   - Click the **Analytics** tab
   - Click **Enable Web Analytics**

3. **Verify Installation**:
   - After deployment, visit your site
   - Open browser DevTools → Network tab
   - Look for requests to `/_vercel/insights/view`
   - If you see these requests, analytics is working!

## Viewing Your Data

Once enabled and deployed:

1. Visit your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. View metrics including:
   - Page views
   - Unique visitors
   - Top pages
   - Referrer sources
   - Device types
   - Geographic data

## Features

### Automatic Route Tracking
The `Analytics` component automatically tracks:
- Client-side navigation
- Server-side rendering
- Route changes
- Dynamic routes

### Privacy-Friendly
- No cookies used
- GDPR compliant
- No personal data collected
- Respects Do Not Track

### Performance
- Minimal impact on page load
- Async script loading
- Small bundle size (~1KB)

## Advanced Usage

### Custom Events (Pro/Enterprise Plans)

Track custom user interactions:

```tsx
import { track } from '@vercel/analytics'

// Track a custom event
track('button_clicked', { button_name: 'signup' })
```

### Development Mode

Analytics only tracks in production by default. To enable in development:

```tsx
import { Analytics } from '@vercel/analytics/next'

<Analytics debug={true} />
```

## Troubleshooting

### Analytics Not Showing Up

1. **Check Deployment**: Ensure your app is deployed to Vercel
2. **Enable in Dashboard**: Verify Web Analytics is enabled in project settings
3. **Wait for Data**: Analytics may take a few hours to appear initially
4. **Check Network**: Look for `/_vercel/insights/*` requests in DevTools

### Local Development

Analytics won't work in local development (`localhost`) unless you:
- Deploy to Vercel preview deployments
- Or add `debug={true}` prop for testing

## Learn More

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Analytics Package API](https://vercel.com/docs/analytics/package)
- [Custom Events Guide](https://vercel.com/docs/analytics/custom-events)
- [Privacy Policy](https://vercel.com/docs/analytics/privacy-policy)

## Project Structure

```
my-tech-ai/
├── app/
│   ├── layout.tsx          # ✅ Analytics component added here
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── App.tsx             # Main chat interface
│   └── VoiceView.tsx       # Voice mode interface
├── lib/
│   └── Geminiservice.ts    # Gemini AI integration
└── package.json            # ✅ @vercel/analytics included
```

## Support

For issues or questions about Vercel Web Analytics:
- [Vercel Support](https://vercel.com/support)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Analytics Documentation](https://vercel.com/docs/analytics)
