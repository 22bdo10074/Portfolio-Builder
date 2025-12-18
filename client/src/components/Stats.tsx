import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { label: "Projects Built", value: 3, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "" },
  { label: "Years Coding", value: 3, suffix: "+" },
  { label: "Specializations", value: 5, suffix: "" }
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = value;
    const increment = target / 20;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-y border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold neon-text mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-tech">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
