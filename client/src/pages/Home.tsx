import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import FeatureCard from "@/components/FeatureCard";
import BrandStory from "@/components/BrandStory";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Wifi, Mic, Tv, Volume2, Smartphone, Monitor, Award, Truck, Headphones, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

import tv32 from "@assets/generated_images/32-inch_TV_with_glowing_effects_063dc3bc.png";
import tv43 from "@assets/generated_images/43-inch_TV_with_dramatic_lighting_472f3e37.png";
import tv55 from "@assets/generated_images/55-inch_TV_with_energy_glow_82d2d883.png";
import tv65 from "@assets/generated_images/65-inch_TV_with_radiant_glow_5f8e6fd0.png";

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
      title: "Stunning Display",
      description: "OLED technology delivers perfect blacks and vibrant colors for an immersive viewing experience.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Powerful processor ensures smooth navigation and instant app loading for seamless entertainment.",
    },
    {
      icon: Volume2,
      title: "Dolby Atmos",
      description: "Immersive 3D audio that puts you right in the middle of the action with cinema-quality sound.",
    },
    {
      icon: Wifi,
      title: "Smart Connectivity",
      description: "Built-in WiFi 6, multiple HDMI ports, and voice control for effortless connectivity.",
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

  const whyChoose = [
    {
      icon: ShieldCheck,
      title: "5-Year Warranty",
      description: "Comprehensive coverage for complete peace of mind",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Professional installation included on all models",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert assistance whenever you need it",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for innovation and quality",
    },
  ];

  const stats = [
    { value: "120Hz", label: "Refresh Rate" },
    { value: "HDR10+", label: "Technology" },
    { value: "Dolby", label: "Atmos Audio" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Designed for Excellence</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Every detail crafted to deliver the ultimate home entertainment experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-why-choose-title">
              Why Choose Orizma
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-why-choose-subtitle">
              More than just a TV, it's a commitment to quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-elevate"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ComingSoon />
      <BrandStory />
      <Footer />
    </div>
  );
}
