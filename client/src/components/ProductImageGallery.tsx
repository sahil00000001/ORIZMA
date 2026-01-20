import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImageGalleryProps {
  images: string[];
  staticImage?: string;
  alt: string;
}

export default function ProductImageGallery({
  images,
  staticImage,
  alt,
}: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const displayImages = images && images.length > 0 ? images : (staticImage ? [staticImage] : []);

  if (displayImages.length === 0) {
    return (
      <div className="aspect-square bg-gradient-to-br from-background/50 to-background/30 rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground">No image available</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm">
        <div className="aspect-square relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={displayImages[selectedIndex]}
              alt={`${alt} - Image ${selectedIndex + 1}`}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-500"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        </div>
      </div>

      {displayImages.length > 1 && (
        <div className="grid grid-cols-6 gap-2">
          {displayImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === selectedIndex
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border/50 hover:border-primary/50"
              }`}
              data-testid={`button-gallery-thumbnail-${index}`}
            >
              <img
                src={img}
                alt={`${alt} thumbnail ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-contain bg-card/50 p-1"
              />
              {index === selectedIndex && (
                <motion.div
                  layoutId="selectedThumbnail"
                  className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
