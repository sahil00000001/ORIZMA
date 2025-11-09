import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Recycle, Zap, Award, Target, Trees } from "lucide-react";

export default function Sustainability() {
  const initiatives = [
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "All Orizma TVs are designed with advanced power-saving technology, consuming up to 40% less energy than industry standards",
      stats: "40% Less Energy"
    },
    {
      icon: Recycle,
      title: "Recycling Program",
      description: "Free e-waste collection and recycling service for old electronics when you purchase a new Orizma TV",
      stats: "100% Recyclable"
    },
    {
      icon: Trees,
      title: "Carbon Neutral",
      description: "We offset 100% of our manufacturing emissions through verified reforestation and renewable energy projects",
      stats: "Net Zero by 2025"
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "Our packaging uses 90% recycled materials and is fully biodegradable, reducing landfill waste",
      stats: "90% Recycled"
    }
  ];

  const commitments = [
    "Zero hazardous materials in manufacturing",
    "Renewable energy powered facilities by 2026",
    "Water conservation in production processes",
    "Ethical and sustainable supply chain partnerships",
    "Extended product lifecycle through repairability",
    "Community e-waste education programs"
  ];

  const certifications = [
    { name: "Energy Star", description: "Certified for superior energy efficiency" },
    { name: "RoHS Compliant", description: "Restriction of Hazardous Substances" },
    { name: "ISO 14001", description: "Environmental Management Systems" },
    { name: "EPEAT Gold", description: "Electronic Product Environmental Assessment" }
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
              <Leaf className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sustainability Commitment
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building a greener future through innovative technology and responsible manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {initiatives.map((initiative, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                    <p className="text-muted-foreground mb-3">{initiative.description}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-semibold">
                      {initiative.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16 p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-green-500" />
              <h2 className="text-2xl font-bold">Our Environmental Commitments</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commitments.map((commitment, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{commitment}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Award className="h-7 w-7 text-primary" />
              Environmental Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-4">Join Our Green Initiative</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              When you choose Orizma, you're choosing a sustainable future. Learn more about our recycling program and how you can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
              >
                Recycle Your Old TV
              </a>
              <a 
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border/50 font-medium hover:border-primary/30 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
