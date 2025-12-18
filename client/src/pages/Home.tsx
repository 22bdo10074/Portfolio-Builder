import Hero from "@/components/Hero";
import SkillAccordion from "@/components/SkillAccordion";
import FlashCards from "@/components/FlashCards";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-black">
      <Hero />
      <SkillAccordion />
      <FlashCards />
      <Projects />
      <Education />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5 bg-black/40">
        <p className="font-tech">© 2025 Sandhya Kumari. Designed with <span className="text-primary">Neon</span> & Code.</p>
      </footer>
    </main>
  );
}
