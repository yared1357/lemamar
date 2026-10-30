import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import { siteConfig } from '@/config/site';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 hidden bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.12),_transparent_45%),linear-gradient(135deg,#17171e_0%,#20202a_55%,#17171e_100%)] transition-all duration-300 lg:block ${
        scrolled
          ? 'border-b border-jaguar-gold/20 py-3 shadow-lg shadow-black/20'
          : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Logo size={60} variant="dark" />
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-semibold tracking-wide text-neutral-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jaguar-red transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
        <a
          href={siteConfig.telUrl}
          className="inline-flex items-center gap-2 rounded-full bg-jaguar-red px-5 py-2.5 text-sm font-bold text-white hover:bg-jaguar-red-dark transition-colors duration-200 shadow-lg shadow-jaguar-red/20"
        >
          Call Now
        </a>
      </nav>
    </header>
  );
}
