import { motion } from "framer-motion";
import { Code2, Cloud, Wrench, Database } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    color: "text-cyan-400",
    tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
  },
  {
    category: "Backend & APIs",
    icon: Wrench,
    color: "text-purple-400",
    tools: ["Node.js", "Express", "REST APIs", "Python", "Java", "Bash"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "text-blue-400",
    tools: ["AWS (EKS, Lambda, RDS)", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"]
  },
  {
    category: "Databases & Tools",
    icon: Database,
    color: "text-green-400",
    tools: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Linux", "Prometheus/Grafana"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function TechStack() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-black/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 neon-text">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I work with daily
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.category}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl border-t-2 border-primary hover:border-secondary transition-all group"
              >
                <div className={`flex items-center gap-3 mb-6`}>
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className={`${tech.color} group-hover:scale-110 transition-transform`} size={28} />
                  </div>
                  <h3 className="font-display font-bold text-lg">{tech.category}</h3>
                </div>

                <div className="space-y-2">
                  {tech.tools.map((tool) => (
                    <motion.div
                      key={tool}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
