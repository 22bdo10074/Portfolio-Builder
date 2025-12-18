import { motion } from "framer-motion";
import { FileText, Calendar, Tag } from "lucide-react";

const papers = [
  {
    title: "Analytical Approach on Cyber Security",
    date: "January 2023 - March 2023",
    description: "An in-depth analysis of various cybersecurity measures to evaluate their effectiveness in safeguarding data against potential threats. Explored different tools, techniques, and methodologies used to protect sensitive information from cyber attacks.",
    tags: ["Cybersecurity", "Threat Analysis", "Security Protocols"],
    icon: "🔒"
  },
  {
    title: "Web Security & Architecture Analysis",
    date: "January 2023 - March 2023",
    description: "System Architecture analysis examining digital systems and eCommerce security. Developed curiosity about how real-world systems handle security and traffic at scale.",
    tags: ["Web Security", "Architecture", "eCommerce"],
    icon: "🌐"
  },
  {
    title: "Network Security & Threat Mitigation",
    date: "Research Period",
    description: "Research on Deep Packet Inspection (DPI) and transport security protocols to safeguard data in distributed networks. Analysis of Malware Protection and Intrusion Prevention Systems.",
    tags: ["Network Security", "DPI", "IPS/IDS"],
    icon: "🛡️"
  }
];

export default function ResearchPapers() {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-center neon-purple-text">
          Research & Analysis
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Academic research and deep dives into cybersecurity and architecture
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {papers.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl border-l-4 border-primary hover:border-secondary transition-colors group"
            >
              <div className="text-4xl mb-4">{paper.icon}</div>
              
              <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                {paper.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-tech">
                <Calendar size={14} />
                {paper.date}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {paper.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-secondary hover:bg-secondary/20 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
