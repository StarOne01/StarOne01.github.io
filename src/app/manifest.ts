import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prashanth T. (@StarOne01) — ML Systems Engineer",
    short_name: "StarOne01",
    description: "ML Systems Engineer based in Coimbatore. Production ASR, compiler infrastructure, and distributed systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    lang: "en-US",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["technology", "developer", "portfolio"],
  };
}
