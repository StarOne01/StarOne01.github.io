import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Experience from "@/components/sections/experience";
import Stack from "@/components/sections/stack";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import ParallaxImage from "@/components/ui/parallax-image";

function Band({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="px-2 sm:px-3 md:px-4">
      <figure className="relative h-56 overflow-hidden rounded-xl border border-line sm:rounded-2xl md:h-[420px]">
        <ParallaxImage src={src} alt={alt} />
      </figure>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <About />
      <Band src="/aurora_milkyway_ridge_overlook.webp" alt="Milky way over a mountain ridge overlook" />
      <Work />
      <Experience />
      <Band src="/aurora_reflection_misty_lake.webp" alt="Aurora reflected in a misty mountain lake" />
      <Stack />
      <Band src="/bioluminescent-waves-milky-way-night.webp" alt="Bioluminescent waves crashing under the milky way" />
      <Contact />
      <Footer />
    </main>
  );
}
