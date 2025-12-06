import Link from 'next/link';

export default function Header() {
    return (
        <header className="border-b">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    Google Learning Hub
                </Link>
                <div className="space-x-6">
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                    <Link href="/courses" className="hover:text-blue-500">
                        Courses
                    </Link>
                    <Link href="/blog" className="hover:text-blue-500">
                        Blog
                    </Link>
                </div>
            </nav>
        </header>
    );
}