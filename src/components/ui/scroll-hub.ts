// Shared scroll hub: one rAF-throttled listener for every parallax layer.
// Reads (getBoundingClientRect) all run before any writes (transform), so N
// layers cost one layout instead of N forced reflows.

type Subscriber = {
  frame: Element;
  apply: (progress: number, frameHeight: number) => void;
};

const subscribers = new Set<Subscriber>();
let raf = 0;

function tick() {
  raf = 0;
  const vh = window.innerHeight;
  const writes: Array<() => void> = [];
  subscribers.forEach((s) => {
    const rect = s.frame.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
    writes.push(() => s.apply(progress, rect.height));
  });
  writes.forEach((w) => w());
}

function onScroll() {
  if (!raf) raf = requestAnimationFrame(tick);
}

function ensureListening() {
  if (typeof window === "undefined" || subscribers.size === 0) return;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

export function subscribeParallax(sub: Subscriber): () => void {
  const first = subscribers.size === 0;
  subscribers.add(sub);
  if (first) {
    ensureListening();
    onScroll(); // paint initial positions
  } else {
    onScroll();
  }
  return () => {
    subscribers.delete(sub);
    if (subscribers.size === 0) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }
  };
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
