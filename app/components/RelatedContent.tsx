import Link from 'next/link'

interface RelatedItem {
    title: string
    description: string
    url: string
    type: 'course' | 'article'
}

interface RelatedContentProps {
    items: RelatedItem[]
    currentPage: string
}

export default function RelatedContent({ items, currentPage }: RelatedContentProps) {
    return (
        <aside
            aria-label="Related content"
            className="mt-12 p-6 bg-gray-50 rounded-xl"
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Continue Learning
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item) => (
                    <Link
                        key={item.url}
                        href={item.url}
                        className="block p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                        onClick={() => {
                            // Track internal link clicks
                            if (window.gtag) {
                                window.gtag('event', 'click_related_content', {
                                    from_page: currentPage,
                                    to_page: item.url,
                                    content_type: item.type,
                                    content_title: item.title,
                                })
                            }
                        }}
                    >
                        <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded ${item.type === 'course' ? 'bg-blue-100' : 'bg-green-100'
                                }`}>
                                {item.type === 'course' ? '🎓' : '📚'}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    )
}