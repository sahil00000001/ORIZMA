import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCategoryCardProps {
  size: string;
  image: string;
  modelCount: number;
  priceRange: string;
  onClick?: () => void;
}

export default function ProductCategoryCard({
  size,
  image,
  modelCount,
  priceRange,
  onClick,
}: ProductCategoryCardProps) {
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
          <img
            src={image}
            alt={`${size} ORIZMA TV`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm" data-testid={`badge-models-${size}`}>
            {modelCount} Models
          </Badge>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2" data-testid={`text-size-${size}`}>
            {size} Series
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
