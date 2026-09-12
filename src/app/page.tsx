import Hero from "@/components/sections/hero";
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
      <About />
      <Work />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
