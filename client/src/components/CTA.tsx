import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Download, Mail, Lightbulb, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { skillsData } from "@/lib/data";

const roleEmojis = ["⚙️", "☁️", "💻", "📊", "🎨"];

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-y border-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 neon-text">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always excited about innovative projects and collaborations. Let's connect!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                className="bg-primary hover:bg-primary/80 text-black font-display font-bold px-8 py-6 text-lg rounded-full w-full sm:w-auto"
              >
                <a href={`mailto:${profile.email}?subject=Let's%20Collaborate!`}>
                  <Mail size={20} className="mr-2" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>

            {/* Resume Dropdown */}
            <div className="relative">
              <motion.button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-6 rounded-full border-2 border-secondary text-secondary hover:bg-secondary/20 font-display font-bold text-lg transition-all w-full sm:w-auto justify-center"
              >
                <Download size={20} />
                Download Resume
                <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-background border-2 border-secondary rounded-xl overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.4)] z-50"
                  >
                    <div className="p-3 space-y-1">
                      {skillsData.map((role, idx) => (
                        <motion.a
                          key={role.id}
                          href={role.resumeLink}
                          download
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ x: 5, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all group"
                        >
                          <span className="text-lg">{roleEmojis[idx]}</span>
                          <div className="text-left flex-1">
                            <p className="font-semibold text-sm">{role.title}</p>
                            <p className="text-xs text-muted-foreground">Download</p>
                          </div>
                          <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">↓</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-12 p-6 glass-card rounded-xl border-l-4 border-secondary max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <Lightbulb className="text-secondary flex-shrink-0 mt-1" size={24} />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">
                  <span className="font-tech font-semibold text-secondary">Pro Tip:</span> Hover over Download Resume to see all 5 role-specific resumes!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
