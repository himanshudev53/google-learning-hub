import CourseCard from '@/app/components/CourseCard';
import { courses } from '@/app/lib/constants';

export const metadata = {
    title: 'All Courses | Google Learning Hub',
    description: 'Browse all available courses on Google Analytics, SEO, and web technologies',
};

export default function CoursesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Master Digital Analytics & SEO
                    </h1>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        Comprehensive courses designed to take you from beginner to expert in Google technologies
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Filters & Stats */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">All Courses</h2>
                        <p className="text-gray-600 mt-2">{courses.length} courses available</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">Filter by:</span>
                            <select className="border rounded-lg px-4 py-2">
                                <option>All Levels</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* Learning Path Section */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Suggested Learning Paths</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mr-4">
                                <span className="font-bold text-lg">1</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Beginner Path</h4>
                                <p className="text-gray-600">Start with GA4 fundamentals → Basic SEO → Web Vitals introduction</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-purple-100 text-purple-800 rounded-lg p-3 mr-4">
                                <span className="font-bold text-lg">2</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Intermediate Path</h4>
                                <p className="text-gray-600">Advanced analytics → Technical SEO → Performance optimization</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border rounded-xl p-6">
                            <h4 className="font-semibold text-lg mb-3">Do I need prior experience?</h4>
                            <p className="text-gray-600">No! Our beginner courses start from the basics and guide you step-by-step.</p>
                        </div>
                        <div className="border rounded-xl p-6">
                            <h4 className="font-semibold text-lg mb-3">How long do I have access?</h4>
                            <p className="text-gray-600">All courses provide lifetime access, including future updates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}