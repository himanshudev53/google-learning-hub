import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
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
    canonical: 'https://bespoke-pika-28ba05.netlify.app'
  },
  metadataBase: new URL('https://bespoke-pika-28ba05.netlify.app'),
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TVH9Q4TP');`
          }}
        />
        {/* Add manual GA script here too */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q6YZXDXX4M"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q6YZXDXX4M');`
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVH9Q4TP"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        {/* Add Google Analytics */}
        {/* <GoogleAnalytics gaId="G-ZDC6JD8VCW" /> */}
      </body>
    </html>
  )
}