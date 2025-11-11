'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <header className="relative w-full py-4 sm:py-6 flex justify-center items-center bg-background">
      {/* Left decorative corner */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-[45px] sm:w-[60px] opacity-80">
        <Image
          src="/images/nav-left.png"
          alt="Left corner ornament"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Navigation links */}
      <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 font-heading text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] text-red-900 tracking-wider sm:tracking-widest">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-all duration-200 ${
              pathname === href
                ? 'text-royal underline underline-offset-4 decoration-red-900'
                : 'hover:text-red-400'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Right decorative corner */}
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-[45px] sm:w-[60px] opacity-80">
        <Image
          src="/images/nav-right.png"
          alt="Right corner ornament"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </header>
  );
}
