import { useState } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { products, Product } from "@/lib/productData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tierColors = {
  PRO: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  PRIME: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  MAX: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  GT: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

export default function Compare() {
  const [, setLocation] = useLocation();
  const [selectedProduct1, setSelectedProduct1] = useState<Product | null>(null);
  const [selectedProduct2, setSelectedProduct2] = useState<Product | null>(null);

  const handleProductSelect = (productId: string, slot: 1 | 2) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      if (slot === 1) {
        setSelectedProduct1(product);
      } else {
        setSelectedProduct2(product);
      }
    }
  };

  const ComparisonColumn = ({ product }: { product: Product | null }) => {
    if (!product) {
      return (
        <div className="flex items-center justify-center h-full min-h-[400px] text-muted-foreground">
          <p data-testid="text-select-tv">Select a TV to compare</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-background/50 to-background/30 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6"
            data-testid={`img-product-${product.id}`}
          />
          <Badge className={`absolute top-4 right-4 font-bold border ${tierColors[product.tier]}`}>
            {product.tier}
          </Badge>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold mb-2" data-testid={`text-name-${product.id}`}>
              {product.name}
            </h3>
            <p className="text-3xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
              {product.price}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="text-muted-foreground">Screen Size</span>
              <span className="font-semibold" data-testid={`text-screensize-${product.id}`}>{product.screenSize}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="text-muted-foreground">Resolution</span>
              <span className="font-semibold" data-testid={`text-resolution-${product.id}`}>{product.resolution}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/50">
              <span className="text-muted-foreground">Tier</span>
              <Badge className={tierColors[product.tier]}>{product.tier}</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm text-muted-foreground">FEATURES</h4>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm" data-testid={`text-feature-${product.id}-${idx}`}>
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm text-muted-foreground">APPS & SERVICES</h4>
            <div className="flex flex-wrap gap-2">
              {product.apps.map((app, idx) => (
                <Badge key={idx} variant="secondary" data-testid={`badge-app-${product.id}-${idx}`}>
                  {app}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => setLocation("/products")}
            className="mb-8 hover-elevate"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-page-title">
              Compare TVs
            </h1>
            <p className="text-muted-foreground text-lg text-center mb-8" data-testid="text-page-subtitle">
              Select two TV models to compare their features side-by-side
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-4">
                <label className="text-sm font-semibold mb-2 block text-muted-foreground">
                  TV 1
                </label>
                <Select
                  value={selectedProduct1?.id || ""}
                  onValueChange={(value) => handleProductSelect(value, 1)}
                >
                  <SelectTrigger data-testid="select-tv1">
                    <SelectValue placeholder="Select first TV" />
                  </SelectTrigger>
                  <SelectContent>
                    {products
                      .filter((p) => p.id !== selectedProduct2?.id)
                      .map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} - {product.price}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </Card>

              <Card className="p-4">
                <label className="text-sm font-semibold mb-2 block text-muted-foreground">
                  TV 2
                </label>
                <Select
                  value={selectedProduct2?.id || ""}
                  onValueChange={(value) => handleProductSelect(value, 2)}
                >
                  <SelectTrigger data-testid="select-tv2">
                    <SelectValue placeholder="Select second TV" />
                  </SelectTrigger>
                  <SelectContent>
                    {products
                      .filter((p) => p.id !== selectedProduct1?.id)
                      .map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} - {product.price}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </Card>
            </div>

            {selectedProduct1 && selectedProduct2 && (
              <div className="flex justify-center mb-8">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedProduct1(null);
                    setSelectedProduct2(null);
                  }}
                  className="hover-elevate"
                  data-testid="button-clear"
                >
                  <X className="mr-2 h-4 w-4" />
                  Clear Selection
                </Button>
              </div>
            )}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 h-full">
                <ComparisonColumn product={selectedProduct1} />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 h-full">
                <ComparisonColumn product={selectedProduct2} />
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
