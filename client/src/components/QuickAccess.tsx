import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Linkedin, Github, Mail, ChevronDown } from "lucide-react";
import { profile } from "@/lib/data";
import { skillsData } from "@/lib/data";

const quickLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: profile.linkedin,
    color: "text-blue-500 hover:bg-blue-500/20"
  },
  {
    icon: Github,
    label: "GitHub",
    url: profile.github,
    color: "text-gray-400 hover:bg-gray-500/20"
  },
  {
    icon: Mail,
    label: "Email",
    url: `mailto:${profile.email}`,
    color: "text-primary hover:bg-primary/20"
  }
];

const roleEmojis = ["⚙️", "☁️", "💻", "📊", "🎨"];

export default function QuickAccess() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 px-4 bg-black/40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
          
          {/* Left: Quick Access Icons */}
          <div className="flex justify-center gap-8">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`p-4 rounded-full bg-white/5 border-2 border-white/10 transition-all ${link.color}`}
                  title={link.label}
                >
                  <Icon size={32} />
                </motion.a>
              );
            })}
          </div>

          {/* Right: Resume Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary text-secondary hover:bg-secondary/20 transition-all font-tech font-semibold"
            >
              📄 Resume
              <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-background border-2 border-secondary rounded-xl overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.3)] z-50"
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
      </div>
    </section>
  );
}
