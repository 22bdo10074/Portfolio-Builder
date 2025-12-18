import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, profile } from "@/lib/data";
import { ChevronDown, Download, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SkillAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 container mx-auto" id="skills">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 neon-purple-text">
          Technical Skills
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Specialized expertise across multiple domains. Click to explore my capabilities in each area.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        {skillsData.map((skill) => (
          <div 
            key={skill.id}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              openId === skill.id 
                ? "border-primary bg-primary/5 shadow-[0_0_20px_rgba(6,182,212,0.1)]" 
                : "border-white/10 bg-card hover:border-primary/50"
            }`}
          >
            <button
              onClick={() => setOpenId(openId === skill.id ? null : skill.id)}
              className="w-full p-6 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${openId === skill.id ? "bg-primary text-black" : "bg-white/5 text-primary"}`}>
                  <skill.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground hidden md:block">
                    {skill.description}
                  </p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform duration-300 ${openId === skill.id ? "rotate-180 text-primary" : "text-muted-foreground"}`} 
              />
            </button>

            <AnimatePresence>
              {openId === skill.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-white/5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    {/* Key Skills */}
                    <div className="space-y-3">
                      <h4 className="text-primary font-tech font-bold uppercase tracking-wider text-sm">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.keySkills.map((k) => (
                          <Badge key={k} variant="secondary" className="bg-white/10 hover:bg-primary hover:text-black transition-colors">
                            {k}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-3">
                      <h4 className="text-primary font-tech font-bold uppercase tracking-wider text-sm">Certifications</h4>
                      <ul className="space-y-2">
                        {skill.certs.map((c) => (
                          <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-secondary mt-1">★</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4 md:col-span-2 lg:col-span-1 flex flex-col justify-center bg-white/5 p-4 rounded-lg">
                      <h4 className="text-primary font-tech font-bold uppercase tracking-wider text-sm mb-2">Connect & Resume</h4>
                      <Button variant="outline" className="w-full justify-between hover:border-primary hover:text-primary cursor-pointer" asChild>
                        <a href={skill.resumeLink} download target="_blank">
                          Download Resume <Download size={16} />
                        </a>
                      </Button>
                      <div className="flex gap-2">
                         <Button variant="ghost" size="icon" className="flex-1 border border-white/10 hover:bg-green-500/20 hover:text-green-500" title="WhatsApp/Phone">
                          <a href={`tel:${profile.phone}`}><Phone size={18} /></a>
                        </Button>
                        <Button variant="ghost" size="icon" className="flex-1 border border-white/10 hover:bg-blue-500/20 hover:text-blue-500" title="Email">
                          <a href={`mailto:${profile.email}`}><Mail size={18} /></a>
                        </Button>
                      </div>
                    </div>

                    {/* Featured Projects */}
                    <div className="md:col-span-2 lg:col-span-3 space-y-3 mt-4">
                       <h4 className="text-primary font-tech font-bold uppercase tracking-wider text-sm">Featured Projects</h4>
                       <div className="grid md:grid-cols-2 gap-4">
                          {skill.projects.map((proj) => (
                            <div key={proj.title} className="bg-black/40 p-4 rounded-lg border border-white/5 hover:border-secondary/50 transition-colors">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-bold text-lg">{proj.title}</h5>
                                
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">{proj.desc}</p>
                              <div className="flex gap-2 flex-wrap">
                                {proj.tech.map((t) => (
                                  <span key={t} className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                       </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
