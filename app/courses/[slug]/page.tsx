import { courses } from '@/app/lib/constants'
import { notFound } from 'next/navigation'
import CoursePageClient from './CoursePageClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

// This MUST be a SERVER function (no 'use client')
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const course = courses.find(c => c.id === slug)

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
      canonical: `https://bespoke-pika-28ba05.netlify.app/courses/${slug}`
    },
    keywords: ['ga4 course', 'google analytics certification', 'ga4 tutorial free', 'learn analytics online'],
  }
}

// This is also a SERVER component
export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params
  const course = courses.find(c => c.id === slug)

  if (!course) {
    notFound()
  }

  // Pass the course data to client component
  return <CoursePageClient course={course} />
}