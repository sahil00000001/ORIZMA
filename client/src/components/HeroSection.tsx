import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Hero_TV_mountain_lake_1f9f3e3d.png";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        <img
          src={heroImage}
          alt="ORIZMA Premium Television"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            ORIZMA
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-foreground/90 tracking-wider">
            Experience Entertainment Like Never Before
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
            Premium TVs designed for the ultimate viewing experience. Stunning visuals, smart features, and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Button
            size="lg"
            className="neon-glow px-8 text-lg hover-elevate active-elevate-2"
            data-testid="button-shop-now"
            onClick={() => setLocation("/products")}
          >
            Explore Our TVs
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 text-lg backdrop-blur-md bg-background/20 border-primary/50 hover-elevate active-elevate-2"
            data-testid="button-explore"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
