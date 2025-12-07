// lib/analytics.ts
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

export const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

// Common event types for your learning platform
export const AnalyticsEvents = {
    // Course interactions
    COURSE_VIEW: 'course_view',
    COURSE_START: 'course_start',
    COURSE_COMPLETE: 'course_complete',

    // User engagement
    SEARCH: 'search',
    FILTER_COURSES: 'filter_courses',
    DOWNLOAD_RESOURCE: 'download_resource',

    // Navigation
    NAVIGATE: 'navigate',
    CLICK_EXTERNAL_LINK: 'click_external_link',

    // E-commerce (if you add payments)
    BEGIN_CHECKOUT: 'begin_checkout',
    PURCHASE: 'purchase',
};

// Helper functions for common actions
export const trackCourseView = (courseId: string, courseTitle: string) => {
    trackEvent(AnalyticsEvents.COURSE_VIEW, {
        course_id: courseId,
        course_title: courseTitle,
        page_location: window.location.pathname,
    });
};

export const trackSearch = (searchTerm: string, resultCount: number) => {
    trackEvent(AnalyticsEvents.SEARCH, {
        search_term: searchTerm,
        result_count: resultCount,
    });
};