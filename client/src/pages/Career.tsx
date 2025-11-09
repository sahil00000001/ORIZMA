import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Heart, Code, Lightbulb } from "lucide-react";

export default function Career() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities, mentorship programs, and clear career paths"
    },
    {
      icon: Users,
      title: "Great Culture",
      description: "Inclusive, collaborative environment where innovation and creativity thrive"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Work on cutting-edge technology and contribute to groundbreaking products"
    }
  ];

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Delhi, India",
      type: "Full-time"
    },
    {
      title: "Customer Support Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Multiple Locations",
      type: "Full-time"
    },
    {
      title: "Quality Assurance Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace new ideas to create exceptional products"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do"
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives"
    }
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
              <Briefcase className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Be part of a team that's revolutionizing home entertainment with cutting-edge technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border border-primary/30"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Why Orizma?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + idx * 0.05 }}
                  className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 rounded-md border border-primary/50 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center p-8 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50"
          >
            <Code className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and tell us how you can contribute to Orizma's mission.
            </p>
            <a 
              href="mailto:careers@orizma.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
