import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navbar } from '../components/Navbar' // Adjusted import to relative path
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Opuyo Mixed Demonstration Farm | Goat Breeding & Farmer Training in Uganda',
  description: 'Learn profitable farming systems for goat breeding, fish farming, apiary, and crop integration at Opuyo Mixed Demonstration Farm in Soroti, Uganda.',
  keywords: [
    'goat farming Uganda',
    'goat breeding Soroti',
    'demonstration farm Uganda',
    'mixed farming Uganda',
    'farmer training Uganda',
    'Boer goats Uganda',
    'Galla goats Uganda',
    'fish farming Uganda',
    'apiary training Uganda',
  ],
  authors: [{ name: 'Opuyo Mixed Demonstration Farm' }],
  creator: 'Opuyo Farm',
  publisher: 'Opuyo Mixed Demonstration Farm',
  metadataBase: new URL('https://opuyofarm.ug'),
  alternates: {
    canonical: 'https://opuyofarm.ug',
  },
  openGraph: {
    title: 'Opuyo Mixed Demonstration Farm',
    description: 'See it, learn it, earn from it — on 1 acre. Transform your farm into a profitable agribusiness.',
    url: 'https://opuyofarm.ug',
    siteName: 'Opuyo Farm',
    locale: 'en_UG',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Opuyo Mixed Demonstration Farm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opuyo Mixed Demonstration Farm',
    description: "Learn profitable farming systems from Uganda's leading demonstration farm.",
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#261f1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f5f0]`}>
      <body className="font-sans antialiased text-[#0d2210]">
        {/* 1. Navbar acts as a global floating layout wrapper header */}
        <Navbar />

        {/* 2. Main content nodes injected directly under navigation stream */}
        {children}
        
        {/* 3. Operational telemetries */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}