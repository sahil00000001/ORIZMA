import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 backdrop-blur-sm bg-card/50 border-card-border hover-elevate active-elevate-2 group" data-testid={`card-feature-${title.replace(/\s/g, '-')}`}>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
            <Icon className="h-6 w-6 text-primary" data-testid={`icon-${title.replace(/\s/g, '-')}`} />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-2" data-testid={`text-title-${title.replace(/\s/g, '-')}`}>
              {title}
            </h4>
            <p className="text-sm text-muted-foreground" data-testid={`text-description-${title.replace(/\s/g, '-')}`}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
