'use client'

import { useReportWebVitals } from 'next/web-vitals'

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to your analytics endpoint
    const body = JSON.stringify(metric)
    const url = '/api/web-vitals'

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body)
    } else {
      fetch(url, { body, method: 'POST', keepalive: true })
    }

    // Optional: Send to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      })
    }
  })

  return null
}