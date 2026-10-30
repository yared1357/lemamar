import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Music2,
  Navigation,
  Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-jaguar-mist to-jaguar-cream px-6 py-24 pt-28 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-jaguar-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-jaguar-red/5 blur-3xl"
      />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-jaguar-gold" />
            <span className="text-xs font-semibold tracking-[0.3em] text-jaguar-gold-dark font-display uppercase">
              Your next round
            </span>
            <div className="h-px w-10 bg-jaguar-gold" />
          </div>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-jaguar-ink md:text-5xl lg:text-6xl">
            Get in <span className="text-gradient-red">touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-jaguar-slate md:text-base">
            Every champion starts with a first conversation. Let’s get yours started.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="relative flex min-h-[440px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.22),_transparent_44%),linear-gradient(145deg,#191920_0%,#252530_60%,#17171e_100%)] p-7 text-white shadow-2xl shadow-black/15 sm:p-10 lg:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-12 h-72 w-72 rounded-full border border-jaguar-gold/15"
            >
              <div className="absolute inset-5 rounded-full border border-white/5" />
              <div className="absolute inset-12 rounded-full border border-white/5" />
            </div>
            <div className="relative z-10 flex flex-1 flex-col">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-jaguar-gold/30 bg-jaguar-gold/10 px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-jaguar-gold-light">
                <span className="h-1.5 w-1.5 rounded-full bg-jaguar-gold shadow-[0_0_10px_rgba(212,175,55,0.9)]" />
                Let’s talk boxing
              </span>
              <h3 className="mt-7 max-w-lg font-display text-3xl font-bold uppercase leading-[1.08] sm:text-4xl lg:text-5xl">
                Make your
                <br />
                <span className="text-gradient-gold">next move.</span>
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base">
                Ask about training, find the right program, or simply come say hello. We’re ready when you are.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.telUrl}
                  className="inline-flex min-h-14 min-w-0 items-center justify-center gap-2 rounded-2xl border border-jaguar-red/45 bg-jaguar-red/10 px-2.5 py-3 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:border-jaguar-red/70 hover:bg-jaguar-red/20 sm:gap-3 sm:px-4 sm:text-sm"
                >
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jaguar-red shadow-md shadow-jaguar-red/30">
                    <span className="absolute inset-0 rounded-full bg-jaguar-red animate-pulse-ring" />
                    <Phone size={17} className="relative z-10 text-white" />
                  </span>
                  <span className="whitespace-nowrap">Call the gym</span>
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 min-w-0 items-center justify-center gap-2 rounded-2xl border border-jaguar-gold/35 bg-white/[0.04] px-2.5 py-3 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:border-jaguar-gold/65 hover:bg-jaguar-gold/10 sm:gap-3 sm:px-4 sm:text-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-jaguar-gold/50 bg-white/5 text-jaguar-gold-light">
                    <MessageCircle size={17} />
                  </span>
                  <span className="whitespace-nowrap">WhatsApp us</span>
                </a>
              </div>

              <div className="mt-auto grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 sm:items-center">
                <a
                  href={siteConfig.telUrl}
                  className="group inline-flex min-w-0 items-center gap-3"
                  dir="ltr"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-jaguar-gold/30 bg-jaguar-gold/10 text-jaguar-gold-light transition-colors group-hover:border-jaguar-gold/60">
                    <Phone size={16} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Call us directly
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-white/90 transition-colors group-hover:text-jaguar-gold-light">
                      {siteConfig.phoneIntl}
                    </span>
                  </span>
                </a>
                <a
                  href={siteConfig.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 text-xs font-medium text-white/65 transition-colors hover:text-jaguar-gold-light sm:justify-self-end"
                >
                  <Music2 size={15} />
                  Follow {siteConfig.social.tiktok.username}
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col overflow-hidden rounded-[2rem] border border-jaguar-line bg-white shadow-xl shadow-jaguar-ink/5"
          >
            <div className="relative h-64 min-h-64 overflow-hidden bg-jaguar-mist sm:h-72 lg:h-80">
              <iframe
                title="Map showing Mesfin Biru Boxing Training Center"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8186.355861129623!2d38.71031878927355!3d9.057240026499057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b89df2ed31057%3A0xfa393971e66ef3f0!2zV2luZ2V0IEtpZGFuZW1laHJldHzhi4rhipXhjIzhibUg4Yqq4Yuz4YqQ4Yid4YiF4Yio4Ym1!5e0!3m2!1sen!2s!4v1793360941923!5m2!1sen!2s"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-jaguar-ink shadow-lg backdrop-blur">
                <MapPin size={14} className="text-jaguar-red" />
                {siteConfig.shortName} · {siteConfig.locationLabel}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-jaguar-gold/15 text-jaguar-gold-dark">
                  <Navigation size={20} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-jaguar-gold-dark">
                    Come train with us
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold uppercase text-jaguar-ink sm:text-2xl">
                    {siteConfig.locationLabel}
                  </h3>
                </div>
              </div>
              <p
                className="mt-5 border-t border-jaguar-line pt-5 text-sm leading-7 text-jaguar-slate"
                dir="rtl"
                style={{ fontFamily: 'Noto Sans Ethiopic, system-ui, sans-serif' }}
              >
                {siteConfig.locationAmharic}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-jaguar-ash">
                Use the map above to view the location and plan your visit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
