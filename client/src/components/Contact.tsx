import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black/40 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 neon-purple-text">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to collaborations, opportunities, and interesting conversations. Reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {/* Email */}
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-xl text-center hover:border-primary transition-all group cursor-pointer"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary group-hover:scale-110 transition-transform" size={32} />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground text-sm break-all">{profile.email}</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${profile.phone}`}
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-xl text-center hover:border-secondary transition-all group cursor-pointer"
          >
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <Phone className="text-secondary group-hover:scale-110 transition-transform" size={32} />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">{profile.phone}</p>
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-4 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all"
          >
            <Linkedin className="text-primary" size={28} />
          </motion.a>
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="p-4 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all"
          >
            <Github className="text-primary" size={28} />
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-4 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all"
          >
            <Mail className="text-primary" size={28} />
          </motion.a>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <Button 
            asChild
            className="bg-primary hover:bg-primary/80 text-black font-display font-bold text-lg px-8 py-6 rounded-full"
          >
            <a href={`mailto:${profile.email}?subject=Let's%20Connect!`}>
              <Send size={20} className="mr-2" />
              Send me an Email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
