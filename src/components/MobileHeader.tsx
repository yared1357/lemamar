import Logo from '@/components/Logo';

export default function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:hidden border-b border-jaguar-gold/30 bg-gradient-to-r from-[#111111]/95 via-[#1a1a1a]/95 to-[#30251a]/95 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-2.5">
        <Logo size={48} variant="dark" className="gap-2" />
        <a
          href="tel:+251944005758"
          className="inline-flex items-center justify-center rounded-full border border-jaguar-gold/60 bg-gradient-to-r from-jaguar-red to-[#ff4d4f] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(227,27,35,0.35)] transition-transform duration-200 active:scale-95"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
