import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { galleryImages } from '@/config/images';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="gallery" className="relative py-20 lg:py-32 px-6 lg:px-12 bg-jaguar-cream overflow-hidden pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-jaguar-gold" />
            <span className="text-xs font-semibold tracking-[0.3em] text-jaguar-gold-dark font-display uppercase">
              Gallery
            </span>
            <div className="h-px w-10 bg-jaguar-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-jaguar-ink">
            Inside <span className="text-gradient-gold">The Ring</span>
          </h2>
          <p className="mt-4 text-jaguar-slate text-sm md:text-base max-w-2xl mx-auto">
            Training, sparring, equipment, and the spirit of the boxing center.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          loop
          speed={700}
          grabCursor
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="!overflow-visible !pb-12"
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <button
                type="button"
                onClick={() => openLightbox(idx)}
                className="group relative block h-64 w-full overflow-hidden rounded-xl text-left shadow-sm transition-shadow duration-300 hover:shadow-lg sm:h-72 lg:h-80"
                aria-label={`View image: ${img.alt}`}
              >
                <img
                  src={img.image}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jaguar-dark/70 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-jaguar-red/80 p-3 backdrop-blur-sm">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
                <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider text-white">
                  {img.label}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 rounded-full bg-white/15 p-2.5 hover:bg-white/25 transition-colors"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 md:left-6 z-10 rounded-full bg-white/15 p-2.5 hover:bg-jaguar-red transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl max-h-[85vh] w-full px-12"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].image}
                alt={galleryImages[lightboxIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-center mt-4 text-sm text-white/70">
                {galleryImages[lightboxIndex].label} — {lightboxIndex + 1} of {galleryImages.length}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 md:right-6 z-10 rounded-full bg-white/15 p-2.5 hover:bg-jaguar-red transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={28} className="text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
