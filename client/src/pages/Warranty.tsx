import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, FileCheck, Headphones } from "lucide-react";

export default function Warranty() {
  const features = [
    {
      icon: ShieldCheck,
      title: "5-Year Comprehensive Coverage",
      description: "All manufacturing defects and hardware issues covered for 5 full years from date of purchase"
    },
    {
      icon: Clock,
      title: "Quick Resolution",
      description: "Most warranty claims are processed within 24-48 hours with doorstep service available"
    },
    {
      icon: FileCheck,
      title: "Easy Claims Process",
      description: "Simple online claim submission with minimal documentation required"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Priority customer service for all warranty-related queries and issues"
    }
  ];

  const coverage = [
    "Manufacturing defects in materials and workmanship",
    "Panel defects including dead pixels, backlight issues, and screen uniformity",
    "Power supply and circuit board failures",
    "Audio system malfunctions",
    "Remote control issues (within first year)",
    "Software and firmware issues",
    "Port and connectivity problems",
    "Built-in Wi-Fi and Bluetooth module failures"
  ];

  const exclusions = [
    "Physical damage from accidents, mishandling, or unauthorized modifications",
    "Damage from power surges, lightning, or improper voltage",
    "Normal wear and tear or cosmetic damage",
    "Damage from improper installation or mounting",
    "Issues caused by third-party accessories or peripherals",
    "Liquid damage or exposure to extreme environmental conditions",
    "Damage from unauthorized repairs or service"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Warranty Information
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive protection for your Orizma TV with our industry-leading 5-year warranty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-primary" />
                What's Covered
              </h2>
              <ul className="space-y-3">
                {coverage.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50"
            >
              <h2 className="text-2xl font-bold mb-6">What's Not Covered</h2>
              <ul className="space-y-3">
                {exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border border-primary/30"
          >
            <h2 className="text-2xl font-bold mb-4">How to File a Warranty Claim</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground">Call us or submit a claim online</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Provide Details</h3>
                <p className="text-sm text-muted-foreground">Share purchase info and issue description</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Verification</h3>
                <p className="text-sm text-muted-foreground">We verify your warranty coverage</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Resolution</h3>
                <p className="text-sm text-muted-foreground">Repair or replacement arranged</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-4">Need Warranty Support?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is ready to assist you with any warranty-related questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                File a Claim
              </a>
              <a 
                href="mailto:warranty@orizma.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border/50 font-medium hover:border-primary/30 transition-colors"
              >
                Email: warranty@orizma.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
