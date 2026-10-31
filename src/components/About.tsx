import { motion } from 'framer-motion';
import { Compass, Flag, Target } from 'lucide-react';
import { aboutImage } from '@/config/images';

const principles = [
  {
    title: 'Our Vision',
    description:
      'To develop disciplined, confident, and skilled athletes while contributing to the growth of boxing in Ethiopia and inspiring the next generation of champions.',
    icon: Flag,
    accent: 'bg-jaguar-red/10 text-jaguar-red',
  },
  {
    title: 'Our Mission',
    description:
      'To provide quality boxing training, professional guidance, and a supportive training environment for beginners, aspiring boxers, and competitive athletes.',
    icon: Target,
    accent: 'bg-jaguar-gold/15 text-jaguar-gold-dark',
  },
  {
    title: 'Our Philosophy',
    description:
      'We believe boxing is more than a sport. It is a journey of discipline, courage, determination, respect, and self-development.',
    icon: Compass,
    accent: 'bg-jaguar-ink/5 text-jaguar-ink',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-jaguar-cream px-5 py-20 pt-24 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-gradient-to-l from-jaguar-mist/60 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-9 max-w-3xl lg:mb-12"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-9 bg-jaguar-gold" />
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-jaguar-gold-dark">
              The story behind the gloves
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-jaguar-ink sm:text-4xl lg:text-5xl">
            About <span className="text-gradient-red">Mesfin Biru</span>
          </h2>
          <p className="mt-2 font-display text-base font-semibold uppercase tracking-[0.08em] text-jaguar-slate sm:text-lg">
            The Fighter. The Trainer. The Inspiration.
          </p>
        </motion.header>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-jaguar-dark shadow-xl shadow-jaguar-ink/15 lg:aspect-[4/3]">
              <img
                src={aboutImage}
                alt="Boxer training in a ring"
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jaguar-dark/70 via-transparent to-jaguar-dark/10" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:bottom-5 sm:left-5">
                <span className="h-1.5 w-1.5 rounded-full bg-jaguar-gold" />
                Built in the ring
              </div>
            </div>
            <div className="absolute -bottom-3 -right-2 -z-10 h-24 w-24 rounded-br-3xl border-b-2 border-r-2 border-jaguar-gold/60 sm:-bottom-4 sm:-right-4 sm:h-32 sm:w-32" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:py-4"
          >
            <div className="mb-5 flex items-center gap-3 border-l-2 border-jaguar-red pl-4">
              <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-jaguar-ink">
                From competition to community
              </p>
            </div>
            <div className="space-y-4 text-[14px] leading-6 text-jaguar-slate sm:text-[15px] sm:leading-7">
              <p>
                Mesfin Biru is an Ethiopian boxer dedicated to the sport of boxing and the
                development of future athletes. With experience in competitive boxing,
                including international-level representation, he brings a passion for the
                sport and a commitment to helping others discover their potential.
              </p>
              <p>
                Through Mesfin Biru Boxing Training Center, his vision is to create an
                environment where individuals can develop their boxing skills, improve
                physical fitness, build confidence, and cultivate the discipline required
                to succeed both inside and outside the ring.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Strength', 'Discipline', 'Speed'].map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-jaguar-gold/30 bg-white/70 px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-jaguar-slate"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group rounded-2xl border border-jaguar-line bg-white/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-jaguar-gold/40 hover:shadow-lg hover:shadow-jaguar-ink/5 sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${principle.accent}`}>
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <div>
                    <span className="block font-display text-[9px] font-semibold uppercase tracking-[0.2em] text-jaguar-ash">
                      Principle 0{index + 1}
                    </span>
                    <h3 className="mt-0.5 font-display text-base font-bold uppercase tracking-wide text-jaguar-ink">
                      {principle.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[13px] leading-6 text-jaguar-slate sm:text-sm">
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45 }}
          className="relative mt-5 overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_right,_rgba(212,175,55,0.2),_transparent_45%),linear-gradient(110deg,#191920_0%,#282832_100%)] px-5 py-7 text-center shadow-lg sm:mt-6 sm:px-8 sm:py-8"
        >
          <span className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 bg-gradient-to-r from-jaguar-red via-jaguar-gold to-jaguar-red" />
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-jaguar-gold-light">
            Our guiding principle
          </p>
          <p className="mt-2 font-display text-xl font-bold uppercase tracking-[0.06em] text-white sm:text-2xl lg:text-3xl">
            Discipline builds <span className="text-gradient-gold">champions.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
