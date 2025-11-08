import { useRoute, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/lib/productData";

export default function Products() {
  const [, params] = useRoute("/products/:size");
  const [, setLocation] = useLocation();

  const size = params?.size;
  const filteredProducts = size
    ? products.filter((p: typeof products[0]) => p.size.includes(size))
    : products;

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
            Back to Home
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              {size ? `${size}" Series` : "All Products"}
            </h1>
            <p className="text-muted-foreground text-lg" data-testid="text-page-subtitle">
              {filteredProducts.length} models available
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product: typeof products[0]) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => setLocation(`/product/${product.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
