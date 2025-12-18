import { motion } from "framer-motion";
import { Download, Mail, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export default function CTA() {
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary/20 font-display font-bold px-8 py-6 text-lg rounded-full w-full sm:w-auto"
              >
                <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="mt-12 p-6 glass-card rounded-xl border-l-4 border-secondary max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <Lightbulb className="text-secondary flex-shrink-0 mt-1" size={24} />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">
                  <span className="font-tech font-semibold text-secondary">Pro Tip:</span> Check out my specific role resumes in the Technical Skills section above to see role-specific expertise!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
