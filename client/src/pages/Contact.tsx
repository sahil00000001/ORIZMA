import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "orizmaglobal@gmail.com",
      link: "mailto:orizmaglobal@gmail.com",
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.orizma.in",
      link: "https://www.orizma.in",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "BK Block, Shalimar Bagh, Delhi- 110088",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/50">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Have questions about our products? We're here to help you find the perfect ORIZMA television for your home.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 p-6 h-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-foreground/90">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground break-words">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 p-8 md:p-12 mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience ORIZMA?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover our range of premium televisions crafted to endure. Each model is designed 
                with cutting-edge technology and timeless elegance to elevate your viewing experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="neon-glow hover-elevate active-elevate-2"
                  onClick={() => window.location.href = "/products"}
                >
                  View All Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover-elevate active-elevate-2"
                  onClick={() => window.location.href = "mailto:orizmaglobal@gmail.com"}
                >
                  Send Us an Email
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-purple-500/10 to-accent/20 backdrop-blur-xl border border-primary/20 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl font-semibold mb-2">ORIZMA</p>
                <p className="text-muted-foreground">Crafted to Endure</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
