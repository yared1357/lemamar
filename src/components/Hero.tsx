import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight as ChevR } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { heroSlides } from '@/config/images';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="home" className="relative h-[70vh] w-full overflow-hidden bg-jaguar-dark lg:h-[100svh] lg:min-h-[640px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        loop
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="absolute inset-0 h-full w-full"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jaguar-dark/90 via-jaguar-dark/35 to-jaguar-dark/15" />
              <div className="absolute inset-0 bg-gradient-to-r from-jaguar-dark/75 via-jaguar-dark/25 to-transparent" />
              <div className="absolute inset-0 bg-jaguar-dark/10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Manual navigation arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 bg-black/20 p-2.5 backdrop-blur-md transition-colors duration-200 hover:bg-jaguar-red sm:left-6 sm:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft size={26} className="text-white" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 bg-black/20 p-2.5 backdrop-blur-md transition-colors duration-200 hover:bg-jaguar-red sm:right-6 sm:flex"
        aria-label="Next slide"
      >
        <ChevR size={26} className="text-white" />
      </button>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-10 md:px-16 lg:px-24">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-jaguar-gold sm:w-12" />
            <span className="text-xs font-semibold tracking-[0.28em] text-gradient-gold font-display uppercase sm:text-sm sm:tracking-[0.35em]">
              {siteConfig.alias}
            </span>
            <div className="h-px w-8 bg-jaguar-gold sm:w-12" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="whitespace-nowrap font-display text-[clamp(1.2rem,6.5vw,4.5rem)] font-bold uppercase leading-[1.02] tracking-[-0.035em] text-white drop-shadow-lg lg:text-7xl"
          >
            Unleash Your <span className="text-gradient-red">Inner Champion</span>
          </motion.h1>

        </div>
      </div>
    </section>
  );
}
