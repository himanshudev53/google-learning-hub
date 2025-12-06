export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t mt-12 py-8 text-center text-gray-600">
            <p>© {currentYear} Google Learning Hub. Built with Next.js & deployed on Netlify.</p>
            <p className="mt-2 text-sm">Learn Analytics, SEO, and modern web technologies.</p>
        </footer>
    );
}