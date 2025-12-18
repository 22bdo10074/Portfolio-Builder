import Ambient from "@/components/Ambient";
import Navbar from "@/components/Navbar";
import ScrollTop from "@/components/ScrollTop";
import FloatingWidget from "@/components/FloatingWidget";
import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Highlights from "@/components/Highlights";
import SkillAccordion from "@/components/SkillAccordion";
import FlashCards from "@/components/FlashCards";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import ResearchPapers from "@/components/ResearchPapers";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
        <Ambient />
        <div className="relative z-10">
          <Navbar />
          <ScrollTop />
          <FloatingWidget />
          
          <div id="hero" className="pt-16">
            <Hero />
          </div>
          
          <Stats />
          <Highlights />
          
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
          
          <div id="tech-stack">
            <TechStack />
          </div>
          
          <div id="projects">
            <Projects />
          </div>
          
          <div id="education">
            <Education />
          </div>
          
          <CTA />
          <Contact />
          
          <footer className="py-8 text-center text-muted-foreground border-t border-white/5 bg-black/40">
            <p className="font-tech">© 2025 Sandhya Kumari • Designed with <span className="text-primary">Neon</span> & Code</p>
          </footer>
        </div>
      </main>
    </PageTransition>
  );
}
