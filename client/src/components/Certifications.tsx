import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certs = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "July 29, 2024",
    validity: "Valid until July 29, 2026",
    image: "/attached_assets/Screenshot_2025-12-18_212835_1766080315641.png",
    icon: "🤖",
    category: "AI & Machine Learning"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "December 02, 2025",
    validity: "Valid until December 02, 2027",
    image: "/attached_assets/Screenshot_2025-12-18_212556_1766080315638.png",
    icon: "🧠",
    category: "AI Foundations"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "December 02, 2025",
    validity: "Valid until December 02, 2027",
    image: "/attached_assets/Screenshot_2025-12-18_212732_1766080315639.png",
    icon: "☁️",
    category: "Cloud Infrastructure"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    date: "June 6, 2024",
    validity: "Active",
    icon: "🟠",
    category: "Cloud Services"
  }
];

export default function Certifications() {
  return (
    <section className="py-20 px-4 bg-black/40">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-center neon-text">
          Certifications & Badges
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Validated expertise from industry-leading platforms
        </p>

        {/* Detailed Certificates */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl border-t-2 border-primary hover:border-secondary transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-secondary/10 transition-colors flex-shrink-0">
                  <Award className="text-primary group-hover:text-secondary transition-colors" size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors break-words">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm text-secondary font-tech font-semibold">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs border-secondary/50 text-secondary">
                      {cert.category}
                    </Badge>
                  </div>
                </div>
              </div>

              {cert.image && (
                <div className="mb-4 rounded-lg overflow-hidden h-40 bg-black/20 border border-white/5 hover:border-secondary/50 transition-colors">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>📅</span>
                  <span className="text-white">{cert.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className={cert.validity.includes("Active") ? "text-green-400" : "text-blue-400"} />
                  <span className={cert.validity.includes("Active") ? "text-green-400" : "text-blue-400"}>
                    {cert.validity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
