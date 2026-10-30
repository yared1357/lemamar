import { Phone, MessageCircle, Instagram, Facebook, Youtube, Send, Music2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface SocialLinksProps {
  variant?: 'row' | 'grid';
  iconSize?: number;
  className?: string;
}

export default function SocialLinks({
  variant = 'row',
  iconSize = 20,
  className = '',
}: SocialLinksProps) {
  const confirmed = [
    {
      label: siteConfig.social.tiktok.label,
      url: siteConfig.social.tiktok.url,
      icon: Music2,
      color: 'hover:text-jaguar-gold-dark hover:border-jaguar-gold/50',
      bgColor: 'hover:bg-jaguar-gold/10',
    },
    {
      label: siteConfig.social.whatsapp.label,
      url: siteConfig.social.whatsapp.url,
      icon: MessageCircle,
      color: 'hover:text-green-600 hover:border-green-500/50',
      bgColor: 'hover:bg-green-500/10',
    },
  ];

  const unconfirmed = [
    { label: 'Instagram', url: siteConfig.social.instagram.url, icon: Instagram },
    { label: 'Facebook', url: siteConfig.social.facebook.url, icon: Facebook },
    { label: 'YouTube', url: siteConfig.social.youtube.url, icon: Youtube },
    { label: 'Telegram', url: siteConfig.social.telegram.url, icon: Send },
  ].filter((s) => !s.url);

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-2 gap-3 ${className}`}>
        {confirmed.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 rounded-xl border border-jaguar-line bg-jaguar-card px-4 py-3 text-sm font-semibold text-jaguar-slate transition-all duration-200 ${social.color} ${social.bgColor}`}
            >
              <Icon size={iconSize} />
              {social.label}
            </a>
          );
        })}
        {unconfirmed.length === 0 && confirmed.length < 4 && (
          <div className="col-span-2 text-xs text-jaguar-ash text-center pt-1">
            More social links coming soon.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 flex-wrap ${className}`}>
      {confirmed.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`flex items-center justify-center rounded-full border border-jaguar-line bg-jaguar-card p-3 text-jaguar-ash transition-all duration-200 ${social.color} ${social.bgColor} hover:scale-105`}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
