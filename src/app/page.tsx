import { About } from "@/components/About";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { JsonLd } from "@/components/JsonLd";
import { getProfileStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <JsonLd id="profile-structured-data" data={getProfileStructuredData()} />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
