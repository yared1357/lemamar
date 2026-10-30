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

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.telUrl}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-jaguar-red px-6 py-3 text-sm font-bold text-white shadow-lg shadow-jaguar-red/25 transition-all hover:-translate-y-0.5 hover:bg-jaguar-red-dark hover:shadow-jaguar-red/40"
                >
                  <Phone size={17} />
                  Call the gym
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition-colors hover:border-green-400/50 hover:bg-green-400/10 hover:text-green-200"
                >
                  <MessageCircle size={17} />
                  WhatsApp us
                </a>
              </div>

              <div className="mt-auto border-t border-white/10 pt-6">
                <a
                  href={siteConfig.telUrl}
                  className="group inline-flex items-center gap-3"
                  dir="ltr"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-jaguar-gold-light transition-colors group-hover:border-jaguar-gold/40">
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
                  className="mt-4 flex w-fit items-center gap-2 text-xs font-medium text-white/55 transition-colors hover:text-jaguar-gold-light"
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
            <div className="relative flex min-h-52 flex-1 items-center justify-center overflow-hidden bg-[#e8e4d8] p-6">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(30deg,transparent_47%,rgba(255,255,255,0.9)_48%,rgba(255,255,255,0.9)_50%,transparent_51%),linear-gradient(150deg,transparent_47%,rgba(255,255,255,0.8)_48%,rgba(255,255,255,0.8)_50%,transparent_51%)] [background-size:74px_74px]"
              />
              <div
                aria-hidden="true"
                className="absolute -left-12 top-1/2 h-3 w-[120%] -rotate-[18deg] rounded-full border-y border-white/80 bg-[#d6ddc9]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-12 top-1/3 h-2 w-[115%] rotate-[24deg] rounded-full border-y border-white/80 bg-[#d6ddc9]"
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-jaguar-red text-white shadow-xl shadow-jaguar-red/25">
                  <MapPin size={27} fill="currentColor" />
                </span>
                <span className="mt-3 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-jaguar-ink shadow-lg backdrop-blur">
                  {siteConfig.locationLabel}
                </span>
              </div>
              <span className="absolute bottom-4 right-4 rounded-full border border-white/70 bg-white/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-jaguar-slate backdrop-blur">
                Find your corner
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
                Exact map directions will be added once the gym location is verified.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
