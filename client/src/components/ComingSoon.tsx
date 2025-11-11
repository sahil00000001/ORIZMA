import { motion } from "framer-motion";
import { Sparkles, Zap, Clock, Heart } from "lucide-react";
import smartwatch from "@assets/generated_images/Premium_smartwatch_product_render_91d56c2d.png";
import laptop from "@assets/generated_images/Premium_laptop_product_render_e27058f1.png";
import soundbar from "@assets/generated_images/Premium_soundbar_product_render_44ec2306.png";

export default function ComingSoon() {
  const upcomingProducts = [
    {
      id: 1,
      name: "Orizma Watch Pro",
      category: "Smart Watch",
      image: smartwatch,
      launchDate: "Q2 2025",
      tagline: "Time Reimagined",
      specs: [
        "1.9\" AMOLED Display",
        "7-Day Battery Life",
        "Health Monitoring",
        "50+ Workout Modes",
        "Water Resistant IP68"
      ],
      highlights: ["Always-On Display", "GPS Tracking", "Premium Build"]
    },
    {
      id: 2,
      name: "Orizma Book Ultra",
      category: "Laptop",
      image: laptop,
      launchDate: "Q3 2025",
      tagline: "Power Meets Portability",
      specs: [
        "15.6\" 4K OLED Display",
        "Intel Core i9 Processor",
        "32GB RAM / 1TB SSD",
        "NVIDIA RTX Graphics",
        "20-Hour Battery Life"
      ],
      highlights: ["Thunderbolt 4", "Backlit Keyboard", "Ultra-Thin Design"]
    },
    {
      id: 3,
      name: "Orizma Sound X",
      category: "Soundbar",
      image: soundbar,
      launchDate: "Q2 2025",
      tagline: "Cinema-Quality Audio",
      specs: [
        "Dolby Atmos & DTS:X",
        "11.1.4 Channel System",
        "Wireless Subwoofer",
        "HDMI eARC Support",
        "Voice Assistant Built-in"
      ],
      highlights: ["Room Calibration", "4K Pass-through", "Premium Drivers"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-6"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Coming Soon</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-coming-soon-title">
            The Future of Innovation
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-coming-soon-subtitle">
            Experience the next generation of technology with our upcoming products designed to elevate your digital lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover-elevate">
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">{product.launchDate}</span>
                </div>

                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent z-10" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-xs font-semibold text-primary border border-primary/30">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    {product.tagline}
                  </p>

                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {product.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md bg-primary/10 text-xs font-medium text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 backdrop-blur-xl border border-primary/30"
        >
          <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Be the First to Know</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stay updated on our latest innovations and be among the first to experience these groundbreaking products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
