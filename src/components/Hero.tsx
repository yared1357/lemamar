import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight as ChevR,
  MessageCircle,
} from 'lucide-react';
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

  const scrollToTraining = () => {
    document.querySelector('#training')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-jaguar-dark">
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
      <div className="relative z-10 flex h-full flex-col justify-center px-5 pb-10 pt-24 sm:px-10 sm:pt-20 md:px-16 lg:px-24 lg:pb-0 lg:pt-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 flex items-center gap-3"
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
            className="font-display text-[2rem] font-bold uppercase leading-[1.02] tracking-[-0.035em] text-white drop-shadow-lg min-[380px]:text-[2.25rem] sm:text-[2.8rem] md:text-6xl lg:text-7xl"
          >
            Unleash Your
            <br />
            <span className="text-gradient-red">Inner Champion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 max-w-xl text-sm leading-6 text-white/90 drop-shadow sm:mt-6 sm:text-base sm:leading-7 md:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-7 flex w-full max-w-[31rem] flex-row gap-2 sm:mt-8 sm:gap-3"
          >
            <a
              href={siteConfig.telUrl}
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-jaguar-red-light/70 bg-gradient-to-r from-jaguar-red to-[#ff3535] px-2.5 py-3 text-[10px] font-bold leading-tight text-white shadow-[0_8px_24px_rgba(227,27,35,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(227,27,35,0.45)] sm:gap-2 sm:px-5 sm:text-sm"
            >
              <MessageCircle size={15} className="shrink-0 sm:h-[18px] sm:w-[18px]" />
              <span className="whitespace-nowrap">Talk to a Coach</span>
            </a>
            <button
              onClick={scrollToTraining}
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-2.5 py-3 text-[10px] font-bold leading-tight text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-jaguar-gold/80 hover:bg-white/20 sm:gap-2 sm:px-5 sm:text-sm"
            >
              <span className="whitespace-nowrap">Explore Training</span>
              <ArrowRight size={15} className="shrink-0 sm:h-[18px] sm:w-[18px]" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            Discover
          </span>
          <ArrowDown size={16} className="animate-bounce text-jaguar-gold" />
        </div>
      </div>
    </section>
  );
}
