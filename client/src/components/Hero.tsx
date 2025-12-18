import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import background from "@assets/generated_images/dark_abstract_neon_cyber_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/80 to-background" />

      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold font-display tracking-wider border border-white/20 shadow-lg">
            OPEN TO WORK
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-display font-bold mb-4 neon-text tracking-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="text-primary">{profile.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 md:h-12 overflow-hidden mb-6"
        >
          <div className="text-xl md:text-3xl text-muted-foreground font-tech">
             DevOps • Cloud • SDE • SRE • Frontend
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl text-muted-foreground mb-8 text-lg italic border-l-4 border-primary pl-4 bg-white/5 py-4 rounded-r-lg"
        >
          "{profile.quote}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mb-16"
        >
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary">
            <Linkedin size={24} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary">
            <Github size={24} />
          </a>
          <a href={`mailto:${profile.email}`} className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary">
            <Mail size={24} />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:border-primary" title="Main Resume">
            <FileText size={24} />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ArrowDown className="text-primary/50 w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}
