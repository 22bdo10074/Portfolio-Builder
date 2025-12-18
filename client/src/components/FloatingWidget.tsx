import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAfterScroll, setShowAfterScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowAfterScroll(true);
      } else {
        setShowAfterScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showAfterScroll) return null;

  return (
    <div className="fixed bottom-24 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 glass-card p-6 rounded-2xl w-80 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-lg">Let's Connect!</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Have a project in mind? Let's work together!
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-primary/20 transition-colors group"
              >
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-sm font-tech font-semibold">Email</p>
                  <p className="text-xs text-muted-foreground truncate">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-secondary/20 transition-colors group"
              >
                <Phone className="text-secondary group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-sm font-tech font-semibold">Phone</p>
                  <p className="text-xs text-muted-foreground">{profile.phone}</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-blue-500/20 transition-colors group"
              >
                <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-sm font-tech font-semibold">LinkedIn</p>
                  <p className="text-xs text-muted-foreground">Connect with me</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{ scale: isOpen ? 1 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all shadow-lg text-white"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
}
