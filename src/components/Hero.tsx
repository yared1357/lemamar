import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight as ChevR } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { heroSlides } from '@/config/images';

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="home" className="relative h-[70vh] w-full overflow-hidden bg-jaguar-dark lg:h-[100svh] lg:min-h-[640px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="absolute inset-0 h-full w-full"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                onError={(event) => {
                  if (event.currentTarget.src !== slide.fallback) {
                    event.currentTarget.src = slide.fallback;
                  }
                }}
                className="h-full w-full object-cover"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Manual navigation arrows */}
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="hero-prev absolute left-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 p-2.5 backdrop-blur-md transition-colors duration-200 hover:bg-jaguar-red sm:left-6"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="hero-next absolute right-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 p-2.5 backdrop-blur-md transition-colors duration-200 hover:bg-jaguar-red sm:right-6"
        aria-label="Next slide"
      >
        <ChevR size={24} className="text-white" />
      </button>

    </section>
  );
}
