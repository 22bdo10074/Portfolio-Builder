import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Software Engineer Intern",
    company: "DevOps Quest",
    date: "July 2025 - Present",
    description: "Frontend Development & UI/UX Implementation",
    tags: ["React", "Node.js", "Frontend"]
  },
  {
    type: "work",
    title: "Software Developer",
    company: "FOODISTA",
    date: "July 2024 - December 2024",
    description: "D2C-Style Ordering System Development",
    tags: ["JavaScript", "Backend", "API Integration"]
  },
  {
    type: "education",
    title: "B.E. Computer Science",
    company: "Chandigarh University",
    date: "2022 - 2026",
    description: "Specialization in DevOps Engineering",
    tags: ["DevOps", "Cloud", "Distributed Systems"]
  },
  {
    type: "work",
    title: "Research Analyst",
    company: "Self-Study",
    date: "2023",
    description: "Security & Architecture Analysis",
    tags: ["Cybersecurity", "Research", "Architecture"]
  }
];

export default function Timeline() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center neon-text">
          Experience & Journey
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="flex md:flex-1 justify-start md:justify-end relative">
                  <div className="absolute left-0 md:right-0 w-16 h-16 md:-mr-8 bg-background rounded-full border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    {item.type === 'work' ? (
                      <Briefcase className="text-primary" size={24} />
                    ) : (
                      <GraduationCap className="text-secondary" size={24} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 md:flex-1 pb-4">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 rounded-xl border-t-2 border-primary hover:border-secondary transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold font-display">{item.title}</h3>
                        <p className="text-secondary font-tech font-semibold">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 font-tech">{item.date}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-primary hover:bg-primary/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
