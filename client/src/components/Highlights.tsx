import { motion } from "framer-motion";
import { Zap, Target, Rocket, Heart } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly master new technologies and adapt to emerging industry standards"
  },
  {
    icon: Target,
    title: "Focused Developer",
    description: "Deliver clean, maintainable code with attention to performance and scalability"
  },
  {
    icon: Rocket,
    title: "Full Stack Capability",
    description: "Span from DevOps infrastructure to beautiful frontend interfaces"
  },
  {
    icon: Heart,
    title: "Passionate Builder",
    description: "Driven by curiosity and commitment to building reliable, user-centric systems"
  }
];

export default function Highlights() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl border-l-4 border-secondary hover:border-primary transition-all group"
              >
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-secondary group-hover:text-primary transition-colors" size={24} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
