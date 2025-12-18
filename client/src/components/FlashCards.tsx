import { motion } from "framer-motion";
import { interpersonalSkills } from "@/lib/data";

export default function FlashCards() {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center neon-text">
          Interpersonal Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {interpersonalSkills.map((skill, index) => (
            <div key={skill.title} className="group h-64 perspective-1000">
              <div className="relative w-full h-full transition-all duration-500 transform style-preserve-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute w-full h-full glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center backface-hidden border-t-4 border-primary">
                  <div className="bg-primary/10 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <skill.icon size={48} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">{skill.title}</h3>
                  <p className="text-muted-foreground mt-2 font-tech text-sm">Hover to reveal</p>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-secondary/10 backdrop-blur-xl border border-secondary/30 rounded-xl p-8 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180">
                  <h4 className="text-xl font-bold text-secondary mb-4">Real Life Application</h4>
                  <p className="text-sm md:text-base leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
