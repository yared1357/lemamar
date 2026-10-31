import { Facebook, MapPin, MessageCircle, Music2, Navigation, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-jaguar-mist to-jaguar-cream px-6 py-20 pt-24 lg:px-12 lg:py-28"
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
        <div className="mb-10 text-center lg:mb-14">
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-jaguar-ink md:text-5xl lg:text-6xl">
            Get in <span className="text-gradient-red">touch</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.22),_transparent_44%),linear-gradient(145deg,#191920_0%,#252530_60%,#17171e_100%)] p-7 text-white shadow-2xl shadow-black/15 sm:min-h-[390px] sm:p-10 lg:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-12 h-72 w-72 rounded-full border border-jaguar-gold/15"
            >
              <div className="absolute inset-5 rounded-full border border-white/5" />
              <div className="absolute inset-12 rounded-full border border-white/5" />
            </div>
            <div className="relative z-10 flex flex-1 flex-col items-center text-center">
              <img
                src="/mesfin-biru-boxing-emblem.png"
                alt=""
                className="mb-5 h-16 w-16 rounded-2xl border border-jaguar-gold/40 bg-white/5 object-contain p-1.5 shadow-lg shadow-jaguar-gold/10"
              />
              <h3 className="max-w-lg font-display text-3xl font-bold uppercase leading-[1.08] sm:text-4xl lg:text-5xl">
                Ready to <span className="text-gradient-gold">train?</span>
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/65 sm:text-base">
                Call or message us to get started.
              </p>

              <div className="mt-7 flex items-center justify-center gap-3">
                <a
                  href={siteConfig.telUrl}
                  aria-label="Call the gym"
                  title="Call the gym"
                  className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-jaguar-red text-white shadow-lg shadow-jaguar-red/30 transition-transform duration-200 hover:scale-110"
                >
                  <span className="absolute inset-0 rounded-full bg-jaguar-red animate-pulse-ring" />
                  <Phone size={20} className="relative z-10" />
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-jaguar-gold/50 bg-white/5 text-jaguar-gold-light transition-all duration-200 hover:scale-110 hover:border-jaguar-gold hover:bg-white/10"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href={siteConfig.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit TikTok"
                  title="TikTok"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-jaguar-gold/40 bg-white/5 text-white transition-all duration-200 hover:scale-110 hover:border-jaguar-gold hover:bg-white/10"
                >
                  <Music2 size={20} />
                </a>
                <a
                  href={siteConfig.social.facebook.url}
                  aria-label="Visit Facebook"
                  title="Facebook"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-jaguar-gold/40 bg-white/5 text-white transition-all duration-200 hover:scale-110 hover:border-jaguar-gold hover:bg-white/10"
                >
                  <Facebook size={20} />
                </a>
              </div>

              <div className="mt-auto w-full border-t border-white/10 pt-5">
                <a
                  href={siteConfig.telUrl}
                  className="group inline-flex cursor-pointer items-center justify-center gap-3 transition-transform duration-200 hover:scale-105"
                  dir="ltr"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-gold">Call us</span>
                  <span className="text-sm font-semibold text-white/90 transition-colors group-hover:text-jaguar-gold-light">
                    {siteConfig.phoneIntl}
                  </span>
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
              <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-jaguar-dark/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md">
                <MapPin size={14} className="text-jaguar-gold-light" />
                {siteConfig.shortName}
              </span>
            </div>
            <div className="relative overflow-hidden p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-14 h-36 w-36 rounded-full bg-jaguar-gold/10 blur-2xl"
              />
              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-jaguar-red to-jaguar-red-dark text-white shadow-lg shadow-jaguar-red/20">
                  <Navigation size={21} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-jaguar-gold-dark">
                    Find us in
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold uppercase leading-tight text-jaguar-ink sm:text-2xl">
                    {siteConfig.locationLabel}
                  </h3>
                </div>
              </div>
              <p
                className="relative mt-6 rounded-2xl border border-jaguar-gold/20 bg-gradient-to-br from-jaguar-cream to-white px-5 py-5 text-center text-base font-semibold leading-9 text-jaguar-ink shadow-sm sm:px-7 sm:py-6 sm:text-lg sm:leading-10"
                dir="rtl"
                style={{ fontFamily: '"Noto Sans Ethiopic", "Noto Serif Ethiopic", system-ui, sans-serif' }}
              >
                {siteConfig.locationAmharic}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
