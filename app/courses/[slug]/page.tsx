'use client' // ← ADD THIS - Makes it a CLIENT component

import { useEffect, useState } from 'react'
import CourseContent from '@/app/components/CourseContent'
import { courses } from '@/app/lib/constants'
import { notFound, useParams } from 'next/navigation'
import { trackCourseView } from '@/app/lib/analytics'

// This function can't be async anymore since we're using 'use client'
export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.id === params.slug)

  if (!course) return {}

  return {
    title: `${course.title} | Google Learning Hub`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: 'article',
    },
    alternates: {
      canonical: `https://bespoke-pika-28ba05.netlify.app/courses/${params.slug}`
    },
    keywords: ['ga4 course', 'google analytics certification', 'ga4 tutorial free', 'learn analytics online'],
  }
}

export default function CoursePage() {
  const params = useParams() // ← Use useParams() hook in client component
  const slug = params.slug as string
  const [course, setCourse] = useState<typeof courses[0] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundCourse = courses.find(c => c.id === slug)
    
    if (foundCourse) {
      setCourse(foundCourse)
      // Track course view - this runs only on CLIENT side
      trackCourseView(foundCourse.id, foundCourse.title)
    } else {
      notFound()
    }
    
    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    )
  }

  if (!course) {
    return null // notFound() will handle this
  }

  return <CourseContent course={course} />
}