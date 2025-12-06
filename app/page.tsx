import CourseCard from '@/app/components/CourseCard'
import { courses } from '@/app/lib/constants'

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Master Google Technologies
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Learn Google Analytics, SEO optimization, Web Vitals, and modern web development
          with practical, project-based tutorials.
        </p>
      </section>

      {/* Featured Courses */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* SEO & Analytics Info */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">Why Learn This?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">🚀 Better Rankings</h3>
            <p>Learn how SEO and performance optimization improve your search visibility.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">📊 Data-Driven Decisions</h3>
            <p>Use Google Analytics to understand user behavior and optimize conversions.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">⚡ Performance First</h3>
            <p>Master Core Web Vitals to build fast, user-friendly websites.</p>
          </div>
        </div>
      </section>
    </div>
  )
}