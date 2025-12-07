// lib/seo.ts
import { Metadata } from 'next'

interface SEOParams {
    title: string
    description: string
    keywords?: string[]
    image?: string
    url?: string
    type: 'website' | 'article' | 'course'
    publishedTime?: string
    author?: string
}

export function generateSEOConfig({
    title,
    description,
    keywords = [],
    image = '/og-default.png',
    url = '',
    type = 'website',
    publishedTime,
    author,
}: SEOParams): Metadata {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bespoke-pika-28ba05.netlify.app'
    const fullUrl = url ? `${baseUrl}${url}` : baseUrl
    const fullImageUrl = `${baseUrl}${image}`

    const config: Metadata = {
        title: `${title} | Google Learning Hub`,
        description,
        keywords: ['Google Analytics', 'SEO', 'Learning', ...keywords],
        authors: author ? [{ name: author }] : undefined,
        openGraph: {
            title,
            description,
            url: fullUrl,
            siteName: 'Google Learning Hub',
            images: [
                {
                    url: fullImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
            ...(publishedTime && { publishedTime }),
        },

        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [fullImageUrl],
            creator: '@YourTwitterHandle',
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        alternates: {
            canonical: fullUrl,
        },
    }

    return config
}