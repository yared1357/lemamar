import { Facebook, MessageSquareText, Music2, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { siteConfig } from '@/config/site';

export default function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:hidden border-b border-jaguar-gold/30 bg-gradient-to-r from-[#111111]/95 via-[#1a1a1a]/95 to-[#30251a]/95 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4">
        <Logo size={44} variant="dark" className="gap-2" />
        <div className="flex shrink-0 items-center gap-2">
        <a
          href={siteConfig.telUrl}
          aria-label="Call the gym"
          title="Call the gym"
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-jaguar-red shadow-md shadow-jaguar-red/30 transition-transform duration-200 active:scale-95"
        >
          <span className="absolute inset-0 rounded-full bg-jaguar-red animate-pulse-ring" />
          <Phone size={17} className="relative z-10 text-white" />
        </a>
        <a
          href={`sms:${siteConfig.phoneIntl}`}
          aria-label="Send a text message"
          title="Text us"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-jaguar-gold/50 bg-white/5 text-jaguar-gold-light transition-transform duration-200 active:scale-95 active:bg-jaguar-gold/15"
        >
          <MessageSquareText size={17} />
        </a>
        <a
          href={siteConfig.social.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit TikTok"
          title="TikTok"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-jaguar-gold/40 bg-white/5 text-white transition-colors duration-200 active:bg-white/10"
        >
          <Music2 size={17} />
        </a>
        <a
          href={siteConfig.social.facebook.url}
          aria-label="Visit Facebook"
          title="Facebook"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-jaguar-gold/40 bg-white/5 text-white transition-colors duration-200 active:bg-white/10"
        >
          <Facebook size={17} />
        </a>
        </div>
      </div>
    </header>
  );
}
