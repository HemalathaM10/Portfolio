import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Education } from "@/components/Education/Education";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Certifications } from "@/components/Certifications/Certifications";
import { Career } from "@/components/Career/Career";
import { Resume } from "@/components/Resume/Resume";
import { Contact } from "@/components/Contact/Contact";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Loader } from "@/components/Loader/Loader";
import { Cursor } from "@/components/Cursor/Cursor";

export default function Home() {
  return (
    <main className="relative z-0 bg-background overflow-hidden selection:bg-secondary/30 selection:text-white">
      <Loader />
      <Cursor />
      <Navbar />
      
      <div className="relative z-0">
        <Hero />
      </div>

      <About />
      <Education />
      <Skills />
      
      <div className="relative z-0">
        <Projects />
        <Certifications />
        <Career />
      </div>

      <div className="relative z-0">
        <Resume />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
