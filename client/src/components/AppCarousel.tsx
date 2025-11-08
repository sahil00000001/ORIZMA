import { motion } from "framer-motion";
import { SiNetflix, SiYoutube } from "react-icons/si";

const apps = [
  { name: "Netflix", icon: SiNetflix, color: "#E50914" },
  { name: "YouTube", icon: SiYoutube, color: "#FF0000" },
  { name: "Prime", icon: null, color: "#00A8E1" },
  { name: "Google TV", icon: null, color: "#4285F4" },
];

export default function AppCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...apps, ...apps, ...apps].map((app, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-24 h-24 rounded-lg bg-card border border-card-border flex items-center justify-center hover-elevate group"
            data-testid={`app-${app.name.toLowerCase()}-${idx}`}
          >
            {app.icon ? (
              <app.icon className="h-12 w-12 group-hover:scale-110 transition-transform" style={{ color: app.color }} />
            ) : (
              <div className="text-2xl font-bold" style={{ color: app.color }}>
                {app.name.substring(0, 2)}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
