import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "July 29, 2024",
    validity: "Valid until July 29, 2026",
    image: "/attached_assets/Screenshot_2025-12-18_212835_1766074496254.png"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "December 02, 2025",
    validity: "Valid until December 02, 2027",
    image: "/attached_assets/Screenshot_2025-12-18_212556_1766074496253.png"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "December 02, 2025",
    validity: "Valid until December 02, 2027",
    image: "/attached_assets/Screenshot_2025-12-18_212732_1766074496254.png"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    date: "June 6, 2024",
    validity: "Active"
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
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-secondary/10 transition-colors">
                  <Award className="text-primary group-hover:text-secondary transition-colors" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-secondary font-tech font-semibold">{cert.issuer}</p>
                </div>
              </div>

              {cert.image && (
                <div className="mb-4 rounded-lg overflow-hidden h-40 bg-black/20 border border-white/5">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-1 text-sm text-muted-foreground">
                <p>📅 <span className="text-white">{cert.date}</span></p>
                <p>✓ <span className="text-green-400">{cert.validity}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
