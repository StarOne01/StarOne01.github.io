import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Experience from "@/components/sections/experience";
import Stack from "@/components/sections/stack";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import ParallaxImage from "@/components/ui/parallax-image";

/**
 * Cinematic interlude: a full-bleed photograph that melts into the page
 * top and bottom, stamped like a film credit.
 */
function Interlude({ src, sm, alt, stamp }: { src: string; sm: string; alt: string; stamp: string }) {
  return (
    <figure
      aria-hidden
      className="relative h-[44vh] overflow-hidden border-y border-line md:h-[60vh]"
    >
      <ParallaxImage src={src} srcSet={`${sm} 800w, ${src} 1600w`} sizes="100vw" alt={alt} />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#070D17_0%,transparent_20%,transparent_80%,#070D17_100%)]" />
      <figcaption className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.26em] text-ink/60 sm:bottom-6 sm:left-8">
        {stamp}
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <About />
      <Interlude
        src="/aurora_milkyway_ridge_overlook.webp"
        sm="/band1-sm.webp"
        alt="Milky way over a mountain ridge overlook"
        stamp="milky way — ridge overlook"
      />
      <Work />
      <Experience />
      <Interlude
        src="/aurora_reflection_misty_lake.webp"
        sm="/band2-sm.webp"
        alt="Aurora reflected in a misty mountain lake"
        stamp="aurora — reflected, still lake"
      />
      <Stack />
      <Interlude
        src="/bioluminescent-waves-milky-way-night.webp"
        sm="/band3-sm.webp"
        alt="Bioluminescent waves crashing under the milky way"
        stamp="bioluminescence — night tide"
      />
      <Contact />
      <Footer />
    </main>
  );
}
