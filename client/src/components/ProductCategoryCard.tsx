import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ProductCategoryCardProps {
  size: string;
  images: string[];
  modelCount: number;
  priceRange: string;
  onClick?: () => void;
}

export default function ProductCategoryCard({
  size,
  images,
  modelCount,
  priceRange,
  onClick,
}: ProductCategoryCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className="overflow-hidden group cursor-pointer border-card-border hover-elevate active-elevate-2"
        onClick={onClick}
        data-testid={`card-category-${size}`}
      >
        <div className="relative aspect-video overflow-hidden bg-card">
          {images && images.length > 0 ? (
            images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`${size} ORIZMA TV ${idx + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${
                  idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No images available
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {images && images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2" data-testid={`text-size-${size}`}>
            {size}
          </h3>
          <p className="text-muted-foreground mb-4" data-testid={`text-price-${size}`}>
            Starting at {priceRange}
          </p>
          <Button
            variant="outline"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            data-testid={`button-view-${size}`}
          >
            View Models
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
