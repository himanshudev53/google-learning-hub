import BlogCard from '@/app/components/BlogCard';

export const metadata = {
    title: 'Blog & Tutorials | Google Learning Hub',
    description: 'Latest tutorials, guides, and insights on Google Analytics, SEO, and web development',
};

// Blog post data
export const blogPosts = [
    {
        id: 1,
        slug: 'ga4-implementation-guide',
        title: 'Complete GA4 Implementation Guide for 2024',
        excerpt: 'Step-by-step guide to setting up Google Analytics 4 with best practices for event tracking and conversions.',
        category: 'Analytics',
        readTime: '8 min read',
        date: '2024-01-15',
        author: 'Alex Johnson',
        authorRole: 'Analytics Expert',
    },
    {
        id: 2,
        slug: 'nextjs-seo-checklist',
        title: 'Next.js SEO Checklist: Boost Your Rankings',
        excerpt: 'Comprehensive checklist to optimize your Next.js application for search engines.',
        category: 'SEO',
        readTime: '6 min read',
        date: '2024-01-10',
        author: 'Maria Chen',
        authorRole: 'SEO Specialist',
    },
    {
        id: 3,
        slug: 'core-web-vitals-optimization',
        title: 'Optimizing Core Web Vitals: Real-World Examples',
        excerpt: 'Practical techniques to improve LCP, FID, and CLS scores based on actual case studies.',
        category: 'Performance',
        readTime: '10 min read',
        date: '2024-01-05',
        author: 'David Park',
        authorRole: 'Performance Engineer',
    },
    {
        id: 4,
        slug: 'google-tag-manager-tips',
        title: '10 Google Tag Manager Tips You Probably Didn\'t Know',
        excerpt: 'Advanced GTM techniques to streamline your tracking implementation.',
        category: 'Analytics',
        readTime: '7 min read',
        date: '2023-12-28',
        author: 'Sam Wilson',
        authorRole: 'Tagging Specialist',
    },
    {
        id: 5,
        slug: 'seo-for-developers',
        title: 'SEO for Developers: Technical Deep Dive',
        excerpt: 'Essential SEO concepts every web developer should understand and implement.',
        category: 'SEO',
        readTime: '12 min read',
        date: '2023-12-20',
        author: 'Lisa Wang',
        authorRole: 'Technical SEO Lead',
    },
    {
        id: 6,
        slug: 'analytics-dashboard-design',
        title: 'Designing Effective Analytics Dashboards',
        excerpt: 'How to create dashboards that actually drive business decisions and insights.',
        category: 'Analytics',
        readTime: '9 min read',
        date: '2023-12-15',
        author: 'Michael Torres',
        authorRole: 'Data Visualization Expert',
    },
];

export default function BlogPage() {
    const categories = ['All', 'Analytics', 'SEO', 'Performance', 'Development'];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Learn, Build, Optimize
                    </h1>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        Expert tutorials, guides, and insights on Google Analytics, SEO optimization, and modern web development
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Featured Post */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-blue-50 to-white border rounded-2xl p-8 md:p-12">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                Featured
                            </span>
                            <span className="text-gray-600">{blogPosts[0].category}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            {blogPosts[0].title}
                        </h2>
                        <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                            {blogPosts[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                                    <span className="font-bold text-blue-800">AJ</span>
                                </div>
                                <div>
                                    <p className="font-medium">{blogPosts[0].author}</p>
                                    <p className="text-sm text-gray-600">{blogPosts[0].authorRole}</p>
                                </div>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
                                Read Full Article
                            </button>
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-full font-medium transition ${category === 'All'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Grid */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-gray-800">Latest Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {blogPosts.slice(1).map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border rounded-2xl p-8 text-center mb-12">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">
                            Stay Updated with Latest Insights
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Get weekly tutorials, industry news, and exclusive resources delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Popular Tags */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Explore by Topic</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['Google Analytics', 'GA4', 'SEO', 'Next.js', 'Performance', 'Tag Manager', 'Data Studio', 'E-commerce', 'Mobile Analytics'].map((tag) => (
                            <a
                                key={tag}
                                href="#"
                                className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition"
                            >
                                #{tag}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}