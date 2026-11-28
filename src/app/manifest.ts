import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prashanth T. (@StarOne01), ML Systems Engineer",
    short_name: "StarOne01",
    description: "ML Systems Engineer based in Coimbatore. Production ASR, compiler infrastructure, and distributed systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#080A08",
    theme_color: "#080A08",
    orientation: "portrait-primary",
    lang: "en-US",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["technology", "developer", "portfolio"],
  };
}
