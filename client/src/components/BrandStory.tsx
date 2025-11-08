import { motion } from "framer-motion";
import lifestyleImage from "@assets/generated_images/Brand_story_lifestyle_interior_39bb9a97.png";

export default function BrandStory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-story-title">
              Built on Precision, Performance, and Trust
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-story-p1">
                Orizma is a new-age home appliance brand built on precision, performance, and trust. Every product we create embodies a commitment to lasting quality and thoughtful design, crafted to meet modern lifestyles while standing the test of time.
              </p>
              <p data-testid="text-story-p2">
                With an unwavering focus on durability, innovation, and aesthetic excellence, Orizma brings advanced technology into everyday living. From vivid displays to intelligent functionality, every Orizma product is engineered to deliver enduring value and a premium experience that goes beyond expectation.
              </p>
              <p className="text-primary font-semibold text-lg" data-testid="text-story-tagline">
                Orizma – Crafted to Endure.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={lifestyleImage}
                alt="ORIZMA Lifestyle"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
