import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

const heroImages = [
  "https://raw.githubusercontent.com/sahil00000001/ORIZMA/refs/heads/main/attached_assets/New_Images/AnyConv.com__herobanner1.webp",
  "https://raw.githubusercontent.com/sahil00000001/ORIZMA/refs/heads/main/attached_assets/New_Images/AnyConv.com__herobanner4.webp",
  "https://raw.githubusercontent.com/sahil00000001/ORIZMA/refs/heads/main/attached_assets/New_Images/AnyConv.com__herobanner3.webp",
  "https://raw.githubusercontent.com/sahil00000001/ORIZMA/refs/heads/main/attached_assets/New_Images/AnyConv.com__Herobanner2.webp",
];

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentIndex]}
            alt="ORIZMA Premium Television"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === currentIndex 
                ? "w-12 bg-primary" 
                : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            data-testid={`button-carousel-dot-${idx}`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-32 left-0 right-0 flex gap-4 flex-wrap justify-center z-20 px-4"
      >
        <Button
          size="lg"
          className="neon-glow px-8 text-lg hover-elevate active-elevate-2"
          data-testid="button-shop-4k"
          onClick={() => setLocation("/products")}
        >
          Explore Collection
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8 text-lg backdrop-blur-md bg-background/20 border-white/30 hover:border-white/50 hover-elevate active-elevate-2"
          data-testid="button-discover"
          onClick={() => setLocation("/products")}
        >
          View All Models
        </Button>
      </motion.div>
    </section>
  );
}
