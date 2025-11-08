import { useRoute, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppCarousel from "@/components/AppCarousel";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Wifi, Mic, Tv, Volume2, Smartphone, Monitor, ArrowLeft } from "lucide-react";
import { products } from "@/lib/productData";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  
  const product = products.find((p: typeof products[0]) => p.id === params?.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => setLocation("/")} data-testid="button-back-home">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const featureIcons: Record<string, any> = {
    "Built in Wi-Fi": Wifi,
    "BT Remote with Voice Assistant": Mic,
    "Bezel less design": Tv,
    "Frameless Design": Tv,
    "Dolby Audio": Volume2,
    "Google Play": Smartphone,
    "4K UHD HDR 10": Monitor,
  };

  const productFeatures = product.features.map((f: string) => ({
    icon: featureIcons[f] || Tv,
    title: f,
    description: `Premium ${f.toLowerCase()} for enhanced viewing experience.`,
  }));

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-8 hover-elevate"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="relative rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4" data-testid={`badge-tier-${product.tier}`}>
                {product.tier} SERIES
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-product-name">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-5xl font-bold text-primary" data-testid="text-product-price">
                  {product.price}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 pb-4 border-b border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Screen Size</p>
                    <p className="text-lg font-semibold" data-testid="text-screen-size">{product.size}</p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <p className="text-sm text-muted-foreground">Resolution</p>
                    <p className="text-lg font-semibold" data-testid="text-resolution">{product.resolution}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mb-8 flex-wrap">
                <Button size="lg" className="flex-1 neon-glow hover-elevate active-elevate-2" data-testid="button-buy-now">
                  Buy Now
                </Button>
                <Button size="lg" variant="outline" className="flex-1 hover-elevate active-elevate-2" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Product Highlights</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground" data-testid={`text-feature-${idx}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-features-title">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productFeatures.slice(0, 6).map((feature: any, idx: number) => (
                <FeatureCard key={idx} {...feature} index={idx} />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-apps-title">
              Supported Streaming Apps
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Access your favorite content with built-in app support
            </p>
            <AppCarousel />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
