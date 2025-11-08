import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  index?: number;
}

export default function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="p-6 backdrop-blur-sm bg-gradient-to-br from-card/80 via-card/60 to-card/40 border border-border/50 hover:border-primary/30 transition-all duration-300 group h-full">
        <div className={`flex ${description ? 'items-start gap-4' : 'flex-col items-center text-center gap-4'}`}>
          <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/20 transition-all duration-300">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-2">
              {title}
            </h4>
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
