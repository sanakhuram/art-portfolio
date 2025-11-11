// components/Nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/artwork', label: 'Artwork' },
  { href: '/blog', label: 'Blog' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="w-full py-6 flex justify-center bg-background">
      <nav className="flex gap-10 font-heading text-[1.5rem] text-red-900 tracking-widest">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-all duration-200 ${
              pathname === href
                ? 'text-royal underline underline-offset-4 decoration-nav'
                : 'hover:text-red-400'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
