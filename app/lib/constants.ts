export interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  chapters: number
  topics: string[]
}

export const courses: Course[] = [
  {
    id: 'google-analytics-4',
    title: 'Google Analytics 4 Masterclass',
    description: 'Complete guide to GA4 implementation, reporting, and analysis',
    duration: '6 hours',
    level: 'Beginner',
    chapters: 12,
    topics: ['GA4 Setup', 'Event Tracking', 'Conversion Goals', 'Custom Reports']
  },
  {
    id: 'nextjs-seo',
    title: 'Next.js SEO Optimization',
    description: 'Advanced SEO techniques for Next.js applications',
    duration: '4 hours',
    level: 'Intermediate',
    chapters: 8,
    topics: ['Metadata API', 'Rendering Strategies', 'Performance', 'Structured Data']
  },
  {
    id: 'core-web-vitals',
    title: 'Core Web Vitals Deep Dive',
    description: 'Measure and optimize LCP, FID, and CLS',
    duration: '3 hours',
    level: 'Intermediate',
    chapters: 6,
    topics: ['LCP Optimization', 'CLS Prevention', 'INP Testing', 'Monitoring Tools']
  }
]