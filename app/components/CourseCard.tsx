import { Course } from "../lib/constants";
import Link from 'next/link';

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
    return (
        <Link href={`/courses/${course.id}`}>
            <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {course.level}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
            </div>
        </Link>
    );
}