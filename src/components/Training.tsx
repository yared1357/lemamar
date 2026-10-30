import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { trainingPrograms } from '@/config/images';
import { siteConfig } from '@/config/site';

export default function Training() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="training" className="relative py-20 lg:py-32 px-6 lg:px-12 bg-jaguar-mist overflow-hidden pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-jaguar-gold" />
            <span className="text-xs font-semibold tracking-[0.3em] text-jaguar-gold-dark font-display uppercase">
              Programs
            </span>
            <div className="h-px w-10 bg-jaguar-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-jaguar-ink">
            Training <span className="text-gradient-red">Programs</span>
          </h2>
          <p className="mt-4 text-jaguar-slate text-sm md:text-base max-w-2xl mx-auto">
            From your first jab to competitive fight preparation — discover the right path for your boxing journey.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingPrograms.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-jaguar-card shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jaguar-dark via-jaguar-dark/20 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-3 max-h-0 overflow-hidden opacity-0 transition-all duration-400 group-hover:max-h-24 group-hover:opacity-100">
                  {program.description}
                </p>
                <div className="flex items-center gap-1.5 text-jaguar-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={siteConfig.telUrl}
                    className="text-xs font-bold uppercase tracking-wider hover:text-white"
                  >
                    Inquire
                  </a>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile swipeable slider */}
        <div className="md:hidden -mx-6 px-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={false}
            loop
            speed={700}
            grabCursor
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            className="!overflow-visible"
          >
            {trainingPrograms.map((program, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative rounded-2xl overflow-hidden shadow-md h-80">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jaguar-dark via-jaguar-dark/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous training program"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-jaguar-gold/50 bg-white text-jaguar-ink shadow-sm transition-colors hover:bg-jaguar-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jaguar-red"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next training program"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-jaguar-gold/50 bg-white text-jaguar-ink shadow-sm transition-colors hover:bg-jaguar-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jaguar-red"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <p className="text-xs font-medium tracking-wide text-jaguar-slate">
              Swipe to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
