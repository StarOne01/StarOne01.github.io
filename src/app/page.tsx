import Hero from "@/components/sections/hero";
import IrPanel from "@/components/ui/ir-panel";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Experience from "@/components/sections/experience";
import Stack from "@/components/sections/stack";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <div className="pb-24 md:pb-32 -mt-10">
        <IrPanel />
      </div>
      <About />
      <Work />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
