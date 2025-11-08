import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Wifi, Mic, Tv, MonitorSpeaker } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  size: string;
  resolution: string;
  tier: "PRO" | "PRIME" | "MAX" | "GT";
  features: string[];
  onClick?: () => void;
}

const tierColors = {
  PRO: "bg-secondary",
  PRIME: "bg-chart-4",
  MAX: "bg-chart-2",
  GT: "bg-accent",
};

const featureIcons: Record<string, any> = {
  wifi: Wifi,
  voice: Mic,
  display: Tv,
  audio: MonitorSpeaker,
};

export default function ProductCard({
  name,
  price,
  image,
  size,
  resolution,
  tier,
  features,
  onClick,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden group cursor-pointer hover-elevate active-elevate-2" onClick={onClick} data-testid={`card-product-${name.replace(/\s/g, '-')}`}>
        <div className="relative aspect-video bg-card overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className={`absolute top-4 left-4 ${tierColors[tier]}`} data-testid={`badge-tier-${tier}`}>
            {tier}
          </Badge>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" data-testid={`text-name-${name.replace(/\s/g, '-')}`}>
            {name}
          </h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-primary" data-testid={`text-price-${name.replace(/\s/g, '-')}`}>
              {price}
            </span>
          </div>

          <div className="space-y-2 mb-4 text-sm text-muted-foreground">
            <p data-testid={`text-size-${name.replace(/\s/g, '-')}`}>Screen: {size}</p>
            <p data-testid={`text-resolution-${name.replace(/\s/g, '-')}`}>Resolution: {resolution}</p>
          </div>

          <div className="flex gap-2 mb-4 flex-wrap">
            {features.slice(0, 4).map((feature, idx) => {
              const Icon = featureIcons[feature] || Tv;
              return (
                <div
                  key={idx}
                  className="p-2 rounded-md bg-muted/50 hover-elevate"
                  title={feature}
                  data-testid={`icon-feature-${idx}`}
                >
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              );
            })}
          </div>

          <Button className="w-full hover-elevate active-elevate-2" data-testid={`button-details-${name.replace(/\s/g, '-')}`}>
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
