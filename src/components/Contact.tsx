import { useRef, useState, type FormEvent } from 'react';
import {
  Facebook,
  LoaderCircle,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Music2,
  Navigation,
  Phone,
  Send,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = useRef(false);
  const submitTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting.current) return;

    const form = event.currentTarget;
    const phone = form.elements.namedItem('phone');
    if (phone instanceof HTMLInputElement) {
      const digitCount = phone.value.replace(/\D/g, '').length;
      if (
        !/^[+0-9().\s-]{7,25}$/.test(phone.value.trim()) ||
        digitCount < 7 ||
        digitCount > 15
      ) {
        phone.setCustomValidity('Enter a phone number with 7 to 15 digits.');
        phone.reportValidity();
        phone.setCustomValidity('');
        return;
      }
    }

    isSubmitting.current = true;
    setStatus('submitting');

    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.delete('formsubmit');
    nextUrl.searchParams.set('formsubmit', 'success');
    nextUrl.hash = 'contact';
    const nextField = form.elements.namedItem('_next');
    if (nextField instanceof HTMLInputElement) {
      nextField.value = nextUrl.toString();
    }

    submitTimeout.current = setTimeout(() => {
      isSubmitting.current = false;
      setStatus('error');
    }, 30000);
    form.submit();
  };

  const handleFormResponse = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
    if (!isSubmitting.current) return;

    try {
      const responseLocation = event.currentTarget.contentWindow?.location;
      if (!responseLocation) return;
      const responseUrl = new URL(responseLocation.href);
      if (responseUrl.origin === 'null') return;

      if (
        responseUrl.origin === window.location.origin &&
        responseUrl.searchParams.get('formsubmit') === 'success'
      ) {
        if (submitTimeout.current) clearTimeout(submitTimeout.current);
        formRef.current?.reset();
        isSubmitting.current = false;
        setStatus('success');
        return;
      }

      if (responseUrl.origin !== window.location.origin) {
        if (submitTimeout.current) clearTimeout(submitTimeout.current);
        isSubmitting.current = false;
        setStatus('error');
      }
    } catch {
      if (submitTimeout.current) clearTimeout(submitTimeout.current);
      isSubmitting.current = false;
      setStatus('error');
    }
  };

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
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-jaguar-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-jaguar-gold-dark">
              Lemamar Boxing
            </span>
            <div className="h-px w-10 bg-jaguar-gold" />
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-jaguar-ink md:text-5xl lg:text-6xl">
            Join the <span className="text-gradient-red">Jaguar Boxing Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-jaguar-slate md:text-base">
            Ready to train? Send us a message and Mesfin Biru’s team will help you take the next step.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-jaguar-line bg-white shadow-xl shadow-jaguar-ink/5"
          >
            <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.2),_transparent_45%),linear-gradient(135deg,#17171e_0%,#252530_55%,#17171e_100%)] px-6 py-7 text-white sm:px-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full border border-jaguar-gold/15"
              >
                <div className="absolute inset-5 rounded-full border border-white/10" />
                <div className="absolute inset-10 rounded-full border border-jaguar-red/20" />
              </div>
              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-jaguar-gold-light">
                  Start your boxing journey
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase sm:text-3xl">
                  Get in touch
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                  Tell us how to reach you and what you’d like to know. We’ll be in touch soon.
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-9">
              <form
                ref={formRef}
                action={siteConfig.formSubmitUrl}
                method="POST"
                target="lemamar-contact-response"
                onSubmit={handleSubmit}
                aria-busy={status === 'submitting'}
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Contact Message - Lemamar Boxing" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="" />
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="contact-website">Leave this field empty</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-jaguar-ink">
                      Full Name <span className="text-jaguar-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      minLength={2}
                      maxLength={100}
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-jaguar-line bg-jaguar-cream/60 px-4 py-3 text-sm text-jaguar-ink outline-none transition placeholder:text-jaguar-ash focus:border-jaguar-red focus:ring-4 focus:ring-jaguar-red/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-jaguar-ink">
                      Phone Number <span className="text-jaguar-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      minLength={7}
                      maxLength={25}
                      required
                      placeholder="+251 9XX XXX XXX"
                      className="w-full rounded-xl border border-jaguar-line bg-jaguar-cream/60 px-4 py-3 text-sm text-jaguar-ink outline-none transition placeholder:text-jaguar-ash focus:border-jaguar-red focus:ring-4 focus:ring-jaguar-red/10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-jaguar-ink">
                    Email Address <span className="font-normal text-jaguar-ash">(optional)</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-jaguar-line bg-jaguar-cream/60 px-4 py-3 text-sm text-jaguar-ink outline-none transition placeholder:text-jaguar-ash focus:border-jaguar-red focus:ring-4 focus:ring-jaguar-red/10"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-jaguar-ink">
                    Message <span className="text-jaguar-red" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    minLength={8}
                    maxLength={2000}
                    required
                    placeholder="Tell us what you’d like to know about training..."
                    className="w-full resize-y rounded-xl border border-jaguar-line bg-jaguar-cream/60 px-4 py-3 text-sm text-jaguar-ink outline-none transition placeholder:text-jaguar-ash focus:border-jaguar-red focus:ring-4 focus:ring-jaguar-red/10"
                  />
                </div>

                {status === 'success' && (
                  <div
                    role="status"
                    className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium leading-6 text-emerald-800"
                  >
                    Your registration request has been received! Mesfin Biru’s team will contact you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
                  >
                    We couldn’t send your message right now. Please try again or call the gym at{' '}
                    <a className="font-semibold underline" href={siteConfig.telUrl}>
                      {siteConfig.phoneIntl}
                    </a>
                    .
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-jaguar-red to-jaguar-red-dark px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-jaguar-red/20 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jaguar-red disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-48"
                >
                  {status === 'submitting' ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={17} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
              <iframe
                name="lemamar-contact-response"
                title="Contact form response"
                aria-hidden="true"
                tabIndex={-1}
                onLoad={handleFormResponse}
                className="absolute h-0 w-0 border-0"
              />

              <p className="mt-5 text-xs leading-5 text-jaguar-ash">
                Messages are delivered to yared1357@gmail.com through FormSubmit. For the first message,
                confirm the activation email FormSubmit sends to this inbox.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-jaguar-line pt-5">
                <a
                  href={siteConfig.telUrl}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-jaguar-ink transition-colors hover:text-jaguar-red"
                  dir="ltr"
                >
                  <Phone size={16} className="text-jaguar-red" />
                  {siteConfig.phoneIntl}
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={`sms:${siteConfig.phoneIntl}`}
                    aria-label="Send a text message"
                    title="Text us"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-jaguar-line text-jaguar-slate transition-colors hover:border-jaguar-gold hover:text-jaguar-red"
                  >
                    <MessageSquareText size={17} />
                  </a>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    title="WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-jaguar-line text-jaguar-slate transition-colors hover:border-jaguar-gold hover:text-jaguar-red"
                  >
                    <MessageCircle size={17} />
                  </a>
                  <a
                    href={siteConfig.social.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit TikTok"
                    title="TikTok"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-jaguar-line text-jaguar-slate transition-colors hover:border-jaguar-gold hover:text-jaguar-red"
                  >
                    <Music2 size={17} />
                  </a>
                  <a
                    href={siteConfig.social.facebook.url}
                    aria-label="Visit Facebook"
                    title="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-jaguar-line text-jaguar-slate transition-colors hover:border-jaguar-gold hover:text-jaguar-red"
                  >
                    <Facebook size={17} />
                  </a>
                </div>
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
                Lemamar Boxing
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

        <div className="mx-auto mt-8 max-w-6xl md:hidden">
          <div className="relative isolate overflow-hidden rounded-3xl border border-jaguar-gold/30 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.2),_transparent_45%),linear-gradient(135deg,#17171e_0%,#252530_55%,#17171e_100%)] px-6 py-8 text-center text-white shadow-xl shadow-black/15">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-20 -z-10 h-48 w-48 rounded-full border border-jaguar-gold/15"
            >
              <div className="absolute inset-5 rounded-full border border-white/10" />
              <div className="absolute inset-10 rounded-full border border-jaguar-red/20" />
            </div>
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-jaguar-red to-jaguar-gold" />
            <h3 className="font-display text-xl font-black uppercase leading-tight tracking-wide sm:text-2xl">
              Discipline builds <span className="text-gradient-gold">champions.</span>
            </h3>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/65">
              Lemamae Boxing Center
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
