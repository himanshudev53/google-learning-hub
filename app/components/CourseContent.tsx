import { Course } from "../lib/constants";

interface CourseContentProps {
    course: Course;
}

export default function CourseContent({ course }: CourseContentProps) {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{course.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold">Level</h3>
                    <p>{course.level}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold">Duration</h3>
                    <p>{course.duration}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold">Chapters</h3>
                    <p>{course.chapters}</p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Topics Covered</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {course.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}