import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageCarouselProps {
  images: string[];
  staticImage: string;
  alt: string;
  autoPlayInterval?: number;
}

export default function ProductImageCarousel({
  images,
  staticImage,
  alt,
  autoPlayInterval = 3000,
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const hasCarouselImages = images && images.length > 1;

  const nextSlide = useCallback(() => {
    if (!hasCarouselImages) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length, hasCarouselImages]);

  const prevSlide = useCallback(() => {
    if (!hasCarouselImages) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length, hasCarouselImages]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    if (!isHovered || !hasCarouselImages) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide, autoPlayInterval, hasCarouselImages]);

  useEffect(() => {
    if (!isHovered) {
      setCurrentIndex(0);
    }
  }, [isHovered]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const displayImage = isHovered && hasCarouselImages ? images[currentIndex] : staticImage;
  const hasValidImage = displayImage && displayImage.length > 0;

  return (
    <div
      className="relative aspect-[4/3] bg-gradient-to-br from-background/50 to-background/30 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasValidImage ? (
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={isHovered && hasCarouselImages ? currentIndex : 'static'}
            src={displayImage}
            alt={`${alt}${isHovered && hasCarouselImages ? ` - Image ${currentIndex + 1}` : ''}`}
            loading="lazy"
            custom={direction}
            variants={isHovered && hasCarouselImages ? variants : undefined}
            initial={isHovered && hasCarouselImages ? "enter" : false}
            animate="center"
            exit={isHovered && hasCarouselImages ? "exit" : undefined}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full object-contain p-4"
          />
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-muted/20 flex items-center justify-center">
              <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm">Image coming soon</p>
          </div>
        </div>
      )}

      {isHovered && hasCarouselImages && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center opacity-100 transition-opacity duration-300 hover:bg-background"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center opacity-100 transition-opacity duration-300 hover:bg-background"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
