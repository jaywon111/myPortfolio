import Navbar from "@/components/Navbar";
import StickyCTA from "@/components/StickyCTA";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import WorkGrid from "@/components/WorkGrid";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <StickyCTA />
      <Hero />
      <About />
      <Capabilities />
      <WorkGrid />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
