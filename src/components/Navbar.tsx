import { useEffect, useState } from 'react';
import { MessageCircle, Music2, Phone } from 'lucide-react';
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
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.telUrl}
            aria-label="Call the gym"
            title="Call the gym"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-jaguar-red shadow-lg shadow-jaguar-red/30 transition-transform duration-200 hover:scale-110"
          >
            <span className="absolute inset-0 rounded-full bg-jaguar-red animate-pulse-ring" />
            <Phone size={21} className="relative z-10 text-white" />
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-jaguar-gold/50 bg-white/5 text-jaguar-gold-light transition-transform duration-200 hover:scale-110 hover:bg-jaguar-gold/15"
          >
            <MessageCircle size={21} />
          </a>
          <a
            href={siteConfig.social.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit TikTok"
            title="TikTok"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-jaguar-gold/40 bg-white/5 text-white transition-colors duration-200 hover:border-jaguar-gold hover:bg-white/10"
          >
            <Music2 size={21} />
          </a>
        </div>
      </nav>
    </header>
  );
}
