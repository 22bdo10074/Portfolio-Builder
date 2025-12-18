import { motion } from "framer-motion";
import { Linkedin, Github, Mail, FileText } from "lucide-react";
import { profile } from "@/lib/data";

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
  },
  {
    icon: FileText,
    label: "Resume",
    url: profile.resume,
    color: "text-secondary hover:bg-secondary/20",
    download: true
  }
];

export default function QuickAccess() {
  return (
    <section className="py-16 px-4 bg-black/40">
      <div className="container mx-auto flex justify-center gap-8 max-w-md">
        {quickLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download}
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
    </section>
  );
}
