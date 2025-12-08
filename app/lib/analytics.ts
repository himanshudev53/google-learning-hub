// lib/analytics.ts
declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}

export const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
) => {
    // Only run in browser environment
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams)
    }
}

// Common event types
export const AnalyticsEvents = {
    COURSE_VIEW: 'course_view',
    COURSE_START: 'course_start',
    COURSE_COMPLETE: 'course_complete',
    SEARCH: 'search',
    FILTER_COURSES: 'filter_courses',
    DOWNLOAD_RESOURCE: 'download_resource',
    NAVIGATE: 'navigate',
    CLICK_EXTERNAL_LINK: 'click_external_link',
    BEGIN_CHECKOUT: 'begin_checkout',
    PURCHASE: 'purchase',
} as const

// Helper function with proper typing
export const trackCourseView = (courseId: string, courseTitle: string): void => {
    if (typeof window === 'undefined') {
        // Server-side: do nothing
        return
    }

    trackEvent(AnalyticsEvents.COURSE_VIEW, {
        course_id: courseId,
        course_title: courseTitle,
        page_location: window.location?.pathname || '',
    })
}

export const trackSearch = (searchTerm: string, resultCount: number): void => {
    trackEvent(AnalyticsEvents.SEARCH, {
        search_term: searchTerm,
        result_count: resultCount,
    })
}