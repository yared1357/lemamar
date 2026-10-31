import { ArrowUpRight, Facebook, MapPin, MessageCircle, Music2, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { siteConfig } from '@/config/site';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="hidden md:block overflow-hidden border-t border-jaguar-gold/20 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.12),_transparent_45%),linear-gradient(135deg,#17171e_0%,#20202a_55%,#17171e_100%)] px-6 pb-8 pt-12 lg:px-12 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 rounded-3xl border border-jaguar-gold/25 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:mb-16">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-jaguar-gold" />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-jaguar-gold-light">
                Your next round starts here
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
              Ready to unleash your <span className="text-gradient-gold">inner champion?</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Train with purpose. Build strength, discipline, and speed at {siteConfig.shortName}.
            </p>
          </div>
          <a
            href={siteConfig.telUrl}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-jaguar-red px-6 py-3 text-sm font-bold text-white shadow-lg shadow-jaguar-red/25 transition-all hover:-translate-y-0.5 hover:bg-jaguar-red-dark hover:shadow-jaguar-red/40"
          >
            Call Now
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3 lg:gap-16 lg:pb-12">
          <div>
            <Logo size={68} variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-300 transition-all hover:border-jaguar-gold/60 hover:bg-jaguar-gold/10 hover:text-jaguar-gold-light"
              >
                <Music2 size={18} />
              </a>
              <a
                href={siteConfig.social.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-300 transition-all hover:border-green-400/60 hover:bg-green-400/10 hover:text-green-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={siteConfig.social.facebook.url}
                aria-label="Visit Facebook"
                title="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-300 transition-all hover:border-jaguar-gold/60 hover:bg-jaguar-gold/10 hover:text-jaguar-gold-light"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="md:justify-self-center">
            <h4 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.22em] text-jaguar-gold">
              Explore
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-neutral-400 transition-colors hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.22em] text-jaguar-gold">
              Visit & Connect
            </h4>
            <div className="space-y-4">
              <a
                href={siteConfig.telUrl}
                className="flex items-center gap-3 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-jaguar-red/10 text-jaguar-red">
                  <Phone size={16} />
                </span>
                <span dir="ltr">+251 {siteConfig.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-jaguar-gold/10 text-jaguar-gold">
                  <MapPin size={16} />
                </span>
                <span>{siteConfig.locationLabel}</span>
              </div>
              <a
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-jaguar-gold/10 text-jaguar-gold">
                  <Music2 size={16} />
                </span>
                {siteConfig.social.tiktok.username}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-neutral-500">
            Copyright © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Strength <span className="text-jaguar-gold">·</span> Discipline <span className="text-jaguar-gold">·</span> Speed
          </p>
        </div>
      </div>
    </footer>
  );
}
