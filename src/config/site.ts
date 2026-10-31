export const siteConfig = {
  name: 'Mesfin Biru',
  alias: 'THE JAGUAR',
  fullName: 'Mesfin Biru – The Jaguar Official',
  shortName: 'The Jaguar',
  tagline: 'Strength. Discipline. Speed. The Spirit of Boxing.',
  headline: 'UNLEASH YOUR INNER CHAMPION',
  phone: '0944005758',
  phoneIntl: '+251944005758',
  whatsapp: '251944005758',
  whatsappUrl: 'https://wa.me/251944005758',
  telUrl: 'tel:+251944005758',
  locationAmharic:
    'ሌማመር በኢትዮጵያ የመጀመሪያው ቦክስ ጂም ጄኔራል ውንጌት ት/ቤት ጀርባ ወደ ብርጭቆ በሚወስደው መንገድ ጠሮ አደባባይ!',
  locationLabel: 'Addis Ababa, Ethiopia',
  description:
    'Professional boxing training center led by Mesfin Biru — The Jaguar. Building champions through strength, discipline, and speed.',
  social: {
    tiktok: {
      label: 'TikTok',
      url: 'https://www.tiktok.com/@mesfinbirulemamer',
      username: '@mesfinbirulemamer',
      confirmed: true,
    },
    instagram: {
      label: 'Instagram',
      url: '',
      confirmed: false,
    },
    facebook: {
      label: 'Facebook',
      url: 'https://www.facebook.com/mesfin.biru.12/posts/4288155427997655/',
      confirmed: true,
    },
    youtube: {
      label: 'YouTube',
      url: '',
      confirmed: false,
    },
    telegram: {
      label: 'Telegram',
      url: '',
      confirmed: false,
    },
    whatsapp: {
      label: 'WhatsApp',
      url: 'https://wa.me/251944005758',
      confirmed: true,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
