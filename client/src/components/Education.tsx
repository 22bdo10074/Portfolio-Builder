import { education } from "@/lib/data";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center neon-purple-text">
        Education Journey
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 transform -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-6 shadow-[0_0_15px_hsl(var(--primary))] hidden md:block" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group">
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <GraduationCap className="text-secondary group-hover:text-primary transition-colors" />
                    <h3 className="text-xl font-bold font-display text-white">{edu.degree}</h3>
                  </div>
                  
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 font-tech ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Calendar size={14} />
                    <span>{edu.year}</span>
                  </div>
                  
                  <p className="text-lg text-primary/80 font-medium mb-1">{edu.institution}</p>
                  <p className="text-secondary font-bold">{edu.score}</p>
                </div>
              </div>
              
              {/* Spacer for alternate side */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
