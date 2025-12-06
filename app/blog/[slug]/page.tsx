import { notFound } from 'next/navigation';
import { blogPosts } from '../page';



interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Google Learning Hub`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    // If no post is found, show a 404 page
    if (!post) {
        notFound(); // This will trigger the not-found.js UI[citation:1]
    }

    // Helper function to format the date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <article className="max-w-4xl mx-auto py-12 px-4">
            {/* Back Link */}
            <a href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
                &larr; Back to all articles
            </a>

            {/* Category & Date */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    {post.category}
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center space-x-4 mb-12 pb-8 border-b">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-800 text-lg">
                        {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                </div>
                <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">{post.authorRole}</p>
                </div>
            </div>

            {/* Article Content */}
            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">Master Performance Optimization</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Dive deeper into web performance with our comprehensive course on Core Web Vitals.
                </p>
                <a
                    href="/courses/core-web-vitals"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
                >
                    Explore the Course
                </a>
            </div>
        </article>
    );
}