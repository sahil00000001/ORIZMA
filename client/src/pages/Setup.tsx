import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Settings, Wifi, Tv, Volume2, Smartphone, Monitor } from "lucide-react";

export default function Setup() {
  const steps = [
    {
      title: "Unboxing & Placement",
      icon: Tv,
      instructions: [
        "Carefully remove the TV from the packaging and keep all accessories",
        "Choose a stable, level surface or wall mount location",
        "Ensure adequate ventilation space around the TV",
        "Keep the TV away from direct sunlight and heat sources"
      ]
    },
    {
      title: "Power Connection",
      icon: Settings,
      instructions: [
        "Connect the power cable to the TV and a grounded outlet",
        "Press the power button on the TV or remote control",
        "Wait for the initial startup screen to appear",
        "Follow the on-screen language selection"
      ]
    },
    {
      title: "Internet Setup",
      icon: Wifi,
      instructions: [
        "Navigate to Settings > Network & Internet",
        "Select your Wi-Fi network from the list",
        "Enter your Wi-Fi password using the on-screen keyboard",
        "Wait for connection confirmation and system updates"
      ]
    },
    {
      title: "Channel Scan",
      icon: Monitor,
      instructions: [
        "Connect your antenna or cable to the TV input",
        "Go to Settings > Channels > Channel Setup",
        "Select Auto Scan to detect available channels",
        "Wait for the scan to complete and save channels"
      ]
    },
    {
      title: "Audio Configuration",
      icon: Volume2,
      instructions: [
        "Navigate to Settings > Sound",
        "Choose your preferred sound mode (Standard, Movie, Music)",
        "Adjust bass, treble, and balance to your preference",
        "Enable Dolby Atmos if using compatible audio system"
      ]
    },
    {
      title: "Smart Features",
      icon: Smartphone,
      instructions: [
        "Sign in to your Google account for personalized experience",
        "Download your favorite streaming apps from the app store",
        "Set up screen mirroring for mobile devices",
        "Configure voice assistant settings if available"
      ]
    }
  ];

  const tips = [
    "Update your TV software regularly for best performance",
    "Use surge protector to safeguard against power fluctuations",
    "Clean the screen with a soft, dry microfiber cloth only",
    "Adjust brightness and contrast based on room lighting",
    "Enable parental controls if needed in Settings > Security",
    "Register your product online to activate the warranty"
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
              <Settings className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Setup Guide
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete step-by-step instructions to set up your Orizma TV and start enjoying premium entertainment
            </p>
          </motion.div>

          <div className="space-y-8 mb-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        Step {idx + 1}
                      </span>
                      <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {step.instructions.map((instruction, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-primary">{i + 1}</span>
                          </div>
                          <span className="text-muted-foreground">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border border-primary/30 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Pro Tips for Best Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-4">Need Help with Setup?</h3>
            <p className="text-muted-foreground mb-6">
              Our expert support team is available 24/7 to guide you through the setup process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Contact Support
              </a>
              <a 
                href="tel:1800-123-4567"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border/50 font-medium hover:border-primary/30 transition-colors"
              >
                Call: 1800-123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
