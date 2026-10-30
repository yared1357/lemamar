interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', size = 64, variant = 'light' }: LogoProps) {
  const titleColor = variant === 'dark' ? 'text-white' : 'text-jaguar-ink';
  const subtitleColor = variant === 'dark' ? 'text-neutral-300' : 'text-jaguar-slate';
  const taglineColor = variant === 'dark' ? 'text-neutral-400' : 'text-jaguar-ash';

  return (
    <a
      href="#home"
      aria-label="LEMAMAR Boxing Center home"
      className={`group inline-flex min-w-0 items-center gap-2.5 ${className}`}
    >
      <span className="relative flex-shrink-0 rounded-2xl border border-jaguar-gold/45 bg-gradient-to-br from-white/15 to-black/10 p-0.5 shadow-[0_4px_18px_rgba(212,175,55,0.18)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-jaguar-gold group-hover:shadow-[0_6px_24px_rgba(212,175,55,0.3)]">
        <img
          src="/mesfin-biru-boxing-emblem.png"
          alt=""
          width={size}
          height={size}
          className="block rounded-[0.8rem] object-contain"
        />
      </span>
      <span className="flex min-w-0 flex-col justify-center">
        <span
          className={`whitespace-nowrap font-display font-bold uppercase leading-none tracking-[0.1em] ${titleColor} transition-colors group-hover:text-jaguar-red ${
            size < 70 ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'
          }`}
        >
          LEMAMAR
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <span className="h-[2px] w-3 rounded-full bg-jaguar-red sm:w-4" />
          <span
            className={`whitespace-nowrap font-display font-semibold uppercase leading-none tracking-[0.16em] ${subtitleColor} ${
              size < 70 ? 'text-[0.55rem] sm:text-[0.6rem]' : 'text-[0.62rem]'
            }`}
          >
            Boxing Center
          </span>
          <span className="h-[2px] w-3 rounded-full bg-jaguar-gold sm:w-4" />
        </span>
        <span className={`mt-1.5 hidden font-display text-[0.5rem] font-medium uppercase tracking-[0.19em] sm:block ${taglineColor}`}>
          Discipline builds champions
        </span>
      </span>
    </a>
  );
}
