import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EduNite from "@/components/EduNite";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <EduNite />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Leadership />
      <BeyondCode />
      <Contact />
      <Footer />
    </main>
  );
}