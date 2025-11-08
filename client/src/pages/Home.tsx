import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import FeatureCard from "@/components/FeatureCard";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Wifi, Mic, Tv, Volume2, Smartphone, Monitor } from "lucide-react";
import { useLocation } from "wouter";

import tv32 from "@assets/generated_images/32-inch_TV_product_shot_6cb4aeaf.png";
import tv43 from "@assets/generated_images/43-inch_TV_product_shot_758a16b4.png";
import tv55 from "@assets/generated_images/55-inch_TV_product_shot_ff8031e3.png";
import tv65 from "@assets/generated_images/65-inch_TV_product_shot_7baf4268.png";

export default function Home() {
  const [, setLocation] = useLocation();

  const categories = [
    { size: '32"', image: tv32, modelCount: 4, priceRange: "₹15,999" },
    { size: '43"', image: tv43, modelCount: 4, priceRange: "₹30,990" },
    { size: '55"', image: tv55, modelCount: 2, priceRange: "₹55,999" },
    { size: '65"', image: tv65, modelCount: 2, priceRange: "₹65,999" },
  ];

  const features = [
    {
      icon: Tv,
      title: "Bezel-less Design",
      description: "Edge-to-edge display with ultra-thin bezels for an immersive viewing experience.",
    },
    {
      icon: Mic,
      title: "Voice Assistant",
      description: "BT Remote with built-in voice control for hands-free operation and smart home integration.",
    },
    {
      icon: Volume2,
      title: "Dolby Audio",
      description: "Premium sound quality with Dolby Audio technology for cinematic entertainment.",
    },
    {
      icon: Wifi,
      title: "Dual Band Wi-Fi",
      description: "Fast and reliable connectivity with dual-band Wi-Fi support for seamless streaming.",
    },
    {
      icon: Monitor,
      title: "4K UHD HDR 10",
      description: "Stunning picture quality with 4K resolution and HDR 10 for vivid, lifelike colors.",
    },
    {
      icon: Smartphone,
      title: "Smart Apps",
      description: "Access to Netflix, Prime Video, YouTube, Google Play, and more streaming services.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-categories-title">
              Explore by Size
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-categories-subtitle">
              Find the perfect television for your space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <ProductCategoryCard
                key={idx}
                {...category}
                onClick={() => setLocation(`/products/${category.size.replace('"', '')}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-features-title">
              Premium Features
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-features-subtitle">
              Advanced technology for an exceptional experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <BrandStory />
      <Footer />
    </div>
  );
}
