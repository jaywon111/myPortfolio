import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkGrid from "@/components/WorkGrid";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <WorkGrid />
      <FAQ />
      <Contact />
    </main>
  );
}
