
'use client';

import Logo from './Logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo size={80} />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-gray-300 hover:text-white">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/files" className="text-gray-300 hover:text-white">
              Files
            </Link>
          </li>
          <li>
            <Link href="/features" className="text-gray-300 hover:text-white">
              Features
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
