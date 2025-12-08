'use client'

import { useEffect } from 'react'
import CourseContent from '@/app/components/CourseContent'
import { trackCourseView } from '@/app/lib/analytics'

export interface CoursePageClientProps {
  course: {
    id: string
    title: string
    description: string
    duration: string
    level: string
    chapters: number
    topics: string[]
  }
}

export default function CoursePageClient({ course }: CoursePageClientProps) {
  useEffect(() => {
    // This runs ONLY on the client side
    trackCourseView(course.id, course.title)
  }, [course.id, course.title])

  return <CourseContent course={course} />
}