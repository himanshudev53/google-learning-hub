import Link from 'next/link';
import { CalendarDays, User, Clock } from 'lucide-react';

interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    author: string;
    authorRole: string;
}

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <Link href={`/blog/${post.slug}`}>
            <article className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Category Badge */}
                <div className="p-6 pb-0">
                    <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>

                {/* Meta Information */}
                <div className="px-6 pb-6 mt-auto">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <CalendarDays size={14} />
                                <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock size={14} />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <User size={14} />
                            <span>{post.author.split(' ')[0]}</span>
                        </div>
                    </div>
                </div>

                {/* Read More Button */}
                <div className="border-t px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center justify-center w-full group">
                        Read Article
                        <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </article>
        </Link>
    );
}