import { trackEvent } from "./analytics"

// Track SEO-related user behavior
export const trackSEOMetrics = {
    // Track scroll depth
    trackScrollDepth: () => {
        if (typeof window === 'undefined') return

        const scrollPercentages = [25, 50, 75, 90]
        let tracked: number[] = []

        window.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY
            const percentage = Math.round((scrolled / scrollHeight) * 100)

            scrollPercentages.forEach((threshold) => {
                if (percentage >= threshold && !tracked.includes(threshold)) {
                    trackEvent('scroll_depth', {
                        depth_percentage: threshold,
                        page_path: window.location.pathname,
                    })
                    tracked.push(threshold)
                }
            })
        })
    },

    // Track time on page
    trackTimeOnPage: () => {
        if (typeof window === 'undefined') return

        let startTime = Date.now()

        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000)

            trackEvent('time_on_page', {
                seconds_spent: timeSpent,
                page_path: window.location.pathname,
                page_title: document.title,
            })
        })
    },

    // Track outbound links
    trackOutboundLinks: () => {
        document.addEventListener('click', (e) => {
            const link = (e.target as HTMLElement).closest('a')

            if (link && link.href && !link.href.includes(window.location.hostname)) {
                trackEvent('click_outbound_link', {
                    link_url: link.href,
                    link_text: link.textContent?.substring(0, 100),
                    page_path: window.location.pathname,
                })
            }
        })
    },
}