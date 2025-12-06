import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

import './globals.css'
import { WebVitals } from './components/WebVitals'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Google Learning Hub',
    template: '%s | Google Learning Hub'
  },
  description: 'Learn Google Analytics, SEO, and modern web technologies with practical tutorials',
  alternates: {
    canonical: 'https://google-learning-hub.com'
  },
  openGraph: {
    type: 'website',
    title: 'Google Learning Hub',
    description: 'Master analytics, SEO, and performance optimization',
    images: ['/og-cover.png']
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-cover.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Tag Manager script */}
        <GoogleTagManager gtmId="GTM-XXXXXX" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <WebVitals />
        {/* Add Google Analytics */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}