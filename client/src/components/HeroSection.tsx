import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Power } from "lucide-react";

const heroImage = "/images/hero-tv.png";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background to-background/95 pt-20">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full relative"
          >
            <img
              src={heroImage}
              alt="ORIZMA Premium Television"
              className="w-full h-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-8 left-0 right-0 text-center z-20"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Power className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground tracking-wider">ORIZMA</h2>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight px-4">
                BRING THE CINEMA HOME
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl font-light text-muted-foreground tracking-wide">
                Where every frame feels alive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-32 md:bottom-40 left-0 right-0 flex gap-4 flex-wrap justify-center z-20 px-4"
            >
              <Button
                size="lg"
                className="neon-glow px-8 text-lg hover-elevate active-elevate-2"
                data-testid="button-shop-4k"
                onClick={() => setLocation("/products")}
              >
                Shop 4K Series
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-lg backdrop-blur-md bg-background/20 border-primary/50 hover-elevate active-elevate-2"
                data-testid="button-discover"
              >
                Discover the Difference
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
