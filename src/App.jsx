import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* animated gradient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="blob animate-blob-1 left-[-10%] top-[-15%] h-[34rem] w-[34rem] bg-blue-300" />
        <div className="blob animate-blob-2 right-[-12%] top-[20%] h-[30rem] w-[30rem] bg-teal-200" />
        <div className="blob animate-blob-3 bottom-[-18%] left-[25%] h-[32rem] w-[32rem] bg-sky-200" />
      </div>

      <ParticleBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
