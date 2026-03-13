import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Achievements />
      <Footer />
    </main>
  );
}
