import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SkillAccordion from "@/components/SkillAccordion";
import FlashCards from "@/components/FlashCards";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import ResearchPapers from "@/components/ResearchPapers";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <div id="hero" className="pt-16">
        <Hero />
      </div>
      <Stats />
      <div id="skills">
        <SkillAccordion />
      </div>
      <div id="interpersonal">
        <FlashCards />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="research">
        <ResearchPapers />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5 bg-black/40">
        <p className="font-tech">© 2025 Sandhya Kumari • Designed with <span className="text-primary">Neon</span> & Code</p>
      </footer>
    </main>
  );
}
