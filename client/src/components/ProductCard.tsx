import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  screenSize: string;
  resolution: string;
  tier: "PRO" | "PRIME" | "MAX" | "GT";
  features: string[];
  apps: string[];
  onClick?: () => void;
  index?: number;
}

const tierColors = {
  PRO: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  PRIME: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  MAX: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  GT: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

export default function ProductCard({
  name,
  price,
  image,
  screenSize,
  resolution,
  tier,
  features,
  apps,
  onClick,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="overflow-hidden group cursor-pointer h-full flex flex-col bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300" onClick={onClick}>
        <div className="relative aspect-[4/3] bg-gradient-to-br from-background/50 to-background/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-700" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-xl" />
          </div>
          <img
            src={image}
            alt={name}
            className="relative w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
          />
          <Badge className={`absolute top-4 right-4 font-bold border ${tierColors[tier]}`}>
            {tier}
          </Badge>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {name}
          </h3>
          
          <div className="mb-4">
            <span className="text-4xl font-bold text-primary">
              {price}
            </span>
          </div>

          <div className="space-y-1 mb-4 text-sm">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground/80">Screen:</span> {screenSize}
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground/80">Resolution:</span> {resolution}
            </p>
          </div>

          <div className="mb-4 flex-grow">
            <p className="text-xs font-semibold text-muted-foreground mb-2">KEY FEATURES</p>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-xs text-muted-foreground ml-6">
                  +{features.length - 3} more features
                </li>
              )}
            </ul>
          </div>

          <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
            View Full Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
