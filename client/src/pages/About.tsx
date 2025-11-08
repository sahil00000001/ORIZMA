import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Zap, Shield, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Durability",
      description: "Every product is built to stand the test of time with premium materials and rigorous quality control.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We bring cutting-edge technology into everyday living with smart features and intuitive design.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "From vivid displays to intelligent functionality, we deliver products that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Built on precision, performance, and reliability to provide enduring value to our customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/50">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent"
            >
              About ORIZMA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4"
            >
              Crafted to Endure
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-24"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              <div className="relative z-10">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6"
                >
                  Orizma is a new-age home appliance brand built on precision, performance, and trust. 
                  Every product we create embodies a commitment to lasting quality and thoughtful design, 
                  crafted to meet modern lifestyles while standing the test of time.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6"
                >
                  With an unwavering focus on durability, innovation, and aesthetic excellence, 
                  Orizma brings advanced technology into everyday living. From vivid displays to 
                  intelligent functionality, every Orizma product is engineered to deliver enduring 
                  value and a premium experience that goes beyond expectation.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-lg md:text-xl leading-relaxed text-foreground/90 font-semibold"
                >
                  At Orizma, we don't just make appliances — we craft reliability, elegance, and endurance.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 p-6 h-full">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-purple-500/10 to-accent/20 backdrop-blur-xl border border-primary/20 p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Orizma — Crafted to Endure
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Experience the perfect blend of innovation, quality, and timeless design 
                  in every product we create.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
