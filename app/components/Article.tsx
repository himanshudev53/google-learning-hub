interface ArticleProps {
    title: string
    children: React.ReactNode
    publishedDate?: string
    author?: string
    readingTime?: string
}

export default function Article({
    title,
    children,
    publishedDate,
    author,
    readingTime,
}: ArticleProps) {
    return (
        <article className="max-w-4xl mx-auto py-8 px-4">
            {/* Article header with microdata */}
            <header
                itemScope
                itemType="https://schema.org/Article"
                className="mb-8 pb-8 border-b"
            >
                <h1
                    itemProp="headline"
                    className="text-4xl font-bold text-gray-900 mb-4"
                >
                    {title}
                </h1>

                <div className="flex items-center space-x-4 text-gray-600">
                    {author && (
                        <span itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">By {author}</span>
                        </span>
                    )}
                    {publishedDate && (
                        <time
                            itemProp="datePublished"
                            dateTime={publishedDate}
                            className="text-gray-600"
                        >
                            {new Date(publishedDate).toLocaleDateString()}
                        </time>
                    )}
                    {readingTime && (
                        <span className="text-gray-600">{readingTime} read</span>
                    )}
                </div>
            </header>

            {/* Article content */}
            <div
                itemProp="articleBody"
                className="prose prose-lg max-w-none"
            >
                {children}
            </div>

            {/* Article footer */}
            <footer className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                    {['SEO', 'Google Analytics', 'Web Performance'].map((tag) => (
                        <a
                            key={tag}
                            href={`/blog/tag/${tag.toLowerCase()}`}
                            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                            rel="tag"
                        >
                            #{tag}
                        </a>
                    ))}
                </div>
            </footer>
        </article>
    )
}