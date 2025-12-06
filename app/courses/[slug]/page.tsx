
import { notFound } from 'next/navigation'
import { courses } from '@/lib/constants'
import CourseContent from '@/components/CourseContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

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
      canonical: `https://google-learning-hub.com/courses/${slug}`
    }
  }
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params
  const course = courses.find(c => c.id === slug)
  
  if (!course) {
    notFound()
  }
  
  return <CourseContent course={course} />
}