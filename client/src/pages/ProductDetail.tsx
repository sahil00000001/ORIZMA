import { useRoute, useLocation } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Mic, Tv, Volume2, Smartphone, Monitor, ArrowLeft, Package, Settings, CheckCircle2 } from "lucide-react";
import { products } from "@/lib/productData";
import { getProductSpecifications } from "@/lib/productSpecifications";

type TabType = "specifications" | "features" | "in-the-box";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>("specifications");
  
  const product = products.find((p) => p.id === params?.id);

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
    "Built in Wi-Fi & BT": Wifi,
    "BT Remote with Voice Assistant": Mic,
    "Bezel less design": Tv,
    "Frameless Design": Tv,
    "Dolby Audio": Volume2,
    "Google Play": Smartphone,
    "Google TV": Tv,
    "4K UHD HDR 10": Monitor,
    "HD": Monitor,
    "FHD": Monitor,
  };

  const productFeatures = product.features.map((f: string) => ({
    icon: featureIcons[f] || Tv,
    title: f,
  }));

  const productDetails = getProductSpecifications(
    product.id,
    product.screenSize,
    product.tier,
    product.resolution
  );

  const tabs = [
    { id: "specifications" as TabType, label: "Specifications", icon: Settings },
    { id: "features" as TabType, label: "Features", icon: CheckCircle2 },
    { id: "in-the-box" as TabType, label: "In the Box", icon: Package },
  ];

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
                    <p className="text-lg font-semibold" data-testid="text-screen-size">{product.screenSize}</p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <p className="text-sm text-muted-foreground">Resolution</p>
                    <p className="text-lg font-semibold" data-testid="text-resolution">{product.resolution}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mb-8 flex-wrap">
                <Button size="lg" variant="outline" className="flex-1 hover-elevate active-elevate-2" onClick={() => setLocation("/contact")} data-testid="button-contact-us">
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
            <div className="flex justify-center gap-1 mb-8 border-b border-border/30">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onHoverStart={() => setActiveTab(tab.id)}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-8 py-4 text-base font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`tab-${tab.id}`}
                  >
                    <Icon className="h-5 w-5" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-accent"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[500px]"
              >
                {activeTab === "specifications" && (
                  <div className="space-y-8">
                    <SpecSection title="Display" specs={productDetails.specifications.display} />
                    <SpecSection title="Audio" specs={productDetails.specifications.audio} />
                    <SpecSection title="Smart Features" specs={productDetails.specifications.smartFeatures} />
                    <SpecSection title="Connectivity" specs={productDetails.specifications.connectivity} />
                    <SpecSection title="Design & Build" specs={productDetails.specifications.design} />
                  </div>
                )}

                {activeTab === "features" && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {productDetails.keyFeatures.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
                        data-testid={`feature-${idx}`}
                      >
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "in-the-box" && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {productDetails.inTheBox.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50"
                        data-testid={`box-item-${idx}`}
                      >
                        <Package className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function SpecSection({ title, specs }: { title: string; specs: Record<string, string> }) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 p-6">
      <h3 className="text-2xl font-bold mb-6 text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(specs).map(([key, value], idx) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-col gap-1 p-3 rounded-lg bg-background/20 hover:bg-background/30 transition-all duration-300"
          >
            <dt className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </dt>
            <dd className="text-sm font-medium text-foreground">{value}</dd>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
