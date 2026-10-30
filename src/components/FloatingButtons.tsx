import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
      {/* WhatsApp button */}
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-200 group"
      >
        <MessageCircle size={26} className="text-white" />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-jaguar-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden lg:block">
          WhatsApp
        </span>
      </a>

      {/* Call button with pulse */}
      <a
        href={siteConfig.telUrl}
        aria-label="Call Mesfin"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-600 shadow-lg shadow-green-600/30 hover:scale-110 transition-transform duration-200 group"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-600 animate-pulse-ring" />
        <Phone size={24} className="text-white relative z-10" />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-jaguar-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden lg:block">
          Call Mesfin
        </span>
      </a>
    </div>
  );
}
