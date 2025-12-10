import { notFound } from 'next/navigation';
import { blogPosts } from '../page';
import { generateSEOConfig } from '@/app/lib/seo'
import BlogPostClient from './BlogPostClient';

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

    return generateSEOConfig({
        title: post.title,
        description: post.excerpt,
        // image: post.image,
        url: `/blog/${post.slug}`,
        type: 'article',
        publishedTime: post.date,
        author: post.author,
    });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    // If no post is found, show a 404 page
    if (!post) {
        notFound();
    }

    // Pass data to client component for tracking
    return <BlogPostClient post={post} />;
}