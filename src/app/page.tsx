import NoiseOverlay from "@/components/NoiseOverlay";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";
import MouseParticles from "@/components/MouseParticles";
import MouseSpotlight from "@/components/MouseSpotlight";
import Process from "@/components/Process";
import ReadyToStart from "@/components/ReadyToStart";
import SkillsShowcase from "@/components/SkillsShowcase";

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <MouseParticles />
      <MouseSpotlight />
      <Navbar />

      <main className="text-foreground selection:bg-primary/30 relative">
        <FloatingElements />
        <Hero />
        <About />
        <Process />
        <SkillsShowcase />
        <ReadyToStart />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
