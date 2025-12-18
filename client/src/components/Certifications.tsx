import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Award, CheckCircle2, X, Cloud, Cpu, Brain, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import professionalCert from "@assets/professional_cert_1766084442456.png";
import aiFoundationsBadge from "@assets/badge1_1766084442451.png";
import aiFoundationsCert from "@assets/Associate_ai_cert_1766084442448.png";
import foundationsBadge from "@assets/badge2_1766084442453.png";
import foundationsCert from "@assets/Associate_cert_1766084442448.png";
import genAiBadge from "@assets/badge3_1766084442454.png";
import awsCert from "@assets/aws_cert_1766084442449.png";
import profileImg from "@assets/Professional_img_1766085490399.jpg";

const certs = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "July 29, 2024",
    validity: "Valid until July 29, 2026",
    certificate: professionalCert,
    badge: genAiBadge,
    icon: Brain,
    iconColor: "text-orange-500",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-600/5",
    borderColor: "border-orange-500/30",
    category: "AI & Machine Learning"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "December 02, 2025",
    validity: "Valid until December 02, 2027",
    certificate: aiFoundationsCert,
    badge: aiFoundationsBadge,
    icon: Cpu,
    iconColor: "text-blue-500",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-500/30",
    category: "AI Foundations",
    hasProfile: true
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "December 02, 2025",
    validity: "Valid until December 02, 2027",
    certificate: foundationsCert,
    badge: foundationsBadge,
    icon: Cloud,
    iconColor: "text-cyan-500",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5",
    borderColor: "border-cyan-500/30",
    category: "Cloud Infrastructure"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    date: "June 6, 2024",
    validity: "Active",
    certificate: awsCert,
    icon: Zap,
    iconColor: "text-yellow-500",
    bgColor: "bg-gradient-to-br from-yellow-500/10 to-yellow-600/5",
    borderColor: "border-yellow-500/30",
    category: "Cloud Services"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

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
          {certs.map((cert, idx) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedCert(idx)}
                className={`glass-card p-6 rounded-xl border-2 ${cert.borderColor} ${cert.bgColor} hover:border-secondary transition-all group cursor-pointer hover:shadow-lg hover:shadow-secondary/20 relative overflow-hidden`}
              >
                {/* Profile Avatar for second card */}
                {cert.hasProfile && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative"
                    >
                      <Avatar className="h-20 w-20 border-2 border-secondary ring-2 ring-secondary/50">
                        <AvatarImage src={profileImg} alt="Profile" className="object-cover" />
                        <AvatarFallback>SK</AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>
                  </div>
                )}

                {/* Header with Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-lg ${cert.bgColor} border-2 ${cert.borderColor} group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <IconComponent className={`${cert.iconColor} group-hover:text-secondary transition-colors`} size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0 pr-24">
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors break-words">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-secondary font-tech font-semibold">{cert.issuer}</p>
                      <Badge variant="outline" className={`text-xs ${cert.borderColor} text-secondary border-current`}>
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Visual Divider with gradient */}
                <div className={`h-1 mb-4 rounded-full bg-gradient-to-r ${cert.iconColor.replace('text-', 'from-')} to-secondary opacity-30`}></div>

                {/* Metadata */}
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

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-white/10 text-sm text-secondary font-tech group-hover:text-primary transition-colors flex items-center gap-2">
                  <Award size={16} />
                  Click to view details
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="bg-background border-2 border-secondary rounded-xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const IconComponent = certs[selectedCert].icon;
                        return (
                          <div className={`p-3 rounded-lg ${certs[selectedCert].bgColor} border-2 ${certs[selectedCert].borderColor}`}>
                            <IconComponent className={`${certs[selectedCert].iconColor}`} size={32} strokeWidth={1.5} />
                          </div>
                        );
                      })()}
                      <h3 className="text-2xl font-display font-bold text-secondary">
                        {certs[selectedCert].title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Certificate */}
                    <div>
                      <p className="text-sm text-secondary font-tech font-semibold mb-3 flex items-center gap-2">
                        <Award size={16} />
                        Certificate
                      </p>
                      <div className="rounded-lg overflow-hidden border border-white/10 bg-black/20">
                        <img
                          src={certs[selectedCert].certificate}
                          alt="Certificate"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Badge - Only show for Oracle certs (indices 0, 1, 2) */}
                    {selectedCert < 3 && certs[selectedCert].badge && (
                      <div>
                        <p className="text-sm text-secondary font-tech font-semibold mb-3 flex items-center gap-2">
                          <Zap size={16} />
                          Digital Badge
                        </p>
                        <div className="rounded-lg overflow-hidden border border-white/10 bg-black/20">
                          <img
                            src={certs[selectedCert].badge}
                            alt="Badge"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-muted-foreground">
                      Click outside to close
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
