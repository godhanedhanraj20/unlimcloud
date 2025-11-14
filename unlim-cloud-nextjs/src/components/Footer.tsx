'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto py-8 text-center">
      <div className="text-gray-500 text-sm">
        <div className="mb-4">
          <Link href="/" className="text-gray-400 hover:text-white px-2">
            Home
          </Link>
          <Link href="/features" className="text-gray-400 hover:text-white px-2">
            Features
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white px-2">
            About
          </Link>
        </div>
        <p>
          Made with ❤️ by{' '}
          <a
            href="https://inulute.github.io/linkme/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            inulute
          </a>
        </p>
        <p className="mt-2">
          This application is not affiliated with the official Unlim Cloud but is an independent endeavor.
        </p>
      </div>
    </footer>
  );
}
