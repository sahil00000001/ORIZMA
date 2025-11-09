import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the warranty period for Orizma TVs?",
      answer: "All Orizma TVs come with a comprehensive 5-year warranty covering manufacturing defects and hardware issues. Extended warranty options are also available at the time of purchase."
    },
    {
      question: "Do you offer free installation?",
      answer: "Yes! We provide complimentary professional installation with every TV purchase. Our trained technicians will set up your TV, ensure proper mounting if needed, and demonstrate all features."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, UPI payments, net banking, and EMI options. We also offer zero-cost EMI on select models through our partner banks."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery typically takes 3-5 business days for metro cities and 5-7 business days for other locations. Express delivery options are available for select pin codes."
    },
    {
      question: "Can I return or exchange my TV?",
      answer: "Yes, we offer a 7-day return policy if the product is unused and in original packaging. Exchanges are available within 15 days if you'd like to upgrade to a different model."
    },
    {
      question: "Are Orizma TVs compatible with gaming consoles?",
      answer: "Absolutely! Our TVs feature HDMI 2.1 ports, low input lag, and high refresh rates, making them perfect for PS5, Xbox Series X, and other gaming consoles."
    },
    {
      question: "Do the TVs support screen mirroring?",
      answer: "Yes, all our Smart TVs support screen mirroring from both Android and iOS devices. You can easily cast content from your smartphone, tablet, or laptop."
    },
    {
      question: "What streaming apps are pre-installed?",
      answer: "Our Smart TVs come with popular apps like Netflix, Prime Video, YouTube, Disney+ Hotstar, Sony Liv, and many more. You can also download additional apps from Google Play Store."
    },
    {
      question: "Is customer support available 24/7?",
      answer: "Yes, our dedicated customer support team is available 24/7 via phone, email, and chat to assist you with any queries or technical issues."
    },
    {
      question: "How do I update the software on my Orizma TV?",
      answer: "Software updates are automatic when your TV is connected to the internet. You can also manually check for updates in Settings > System > Software Update."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about Orizma TVs, warranty, delivery, and more
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center p-8 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you 24/7
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
