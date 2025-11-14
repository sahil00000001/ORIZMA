import { motion } from "framer-motion";
import { Sparkles, Zap, Clock, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const speaker = "/images/Premium_smart_speaker_product_4c75c008.png";
const refrigerator = "/images/Premium_refrigerator_product_e3a11ed3.png";
const washingMachine = "/images/Premium_washing_machine_product_73b124b0.png";

const API_BASE_URL = "https://orizmaapi.onrender.com";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been added to our notification list",
        });
        setEmail("");
      } else {
        // Handle specific error cases
        if (response.status === 409 || data.message === "Email already exists") {
          toast({
            title: "Already Subscribed",
            description: "This email is already on our notification list!",
          });
          setEmail("");
        } else {
          toast({
            title: "Error",
            description: data.message || data.error || "Failed to subscribe. Please try again.",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const upcomingProducts = [
    {
      id: 1,
      name: "Orizma Sound Pro",
      category: "Smart Speaker",
      image: speaker,
      tagline: "Sound That Surrounds",
      specs: [
        "360° Premium Audio",
        "Voice Assistant Built-in",
        "Multi-Room Sync",
        "Touch Controls",
        "Premium Fabric Finish"
      ],
      highlights: ["Deep Bass", "Crystal Clear", "Smart Home Hub"]
    },
    {
      id: 2,
      name: "Orizma Chill Max",
      category: "Refrigerator",
      image: refrigerator,
      tagline: "Freshness Redefined",
      specs: [
        "French Door Design",
        "Smart Cooling Technology",
        "Digital Temperature Control",
        "Energy Efficient",
        "Spacious Interior"
      ],
      highlights: ["Frost-Free", "LED Lighting", "Premium Finish"]
    },
    {
      id: 3,
      name: "Orizma Wash Pro",
      category: "Washing Machine",
      image: washingMachine,
      tagline: "Clean Like Never Before",
      specs: [
        "Front Load Design",
        "Smart Wash Programs",
        "Energy Saving Mode",
        "Quick Wash Feature",
        "Large Capacity Drum"
      ],
      highlights: ["Silent Operation", "Digital Display", "Premium Build"]
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
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="input-email-subscription"
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-notify-me"
            >
              {isSubmitting ? "Subscribing..." : "Notify Me"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
