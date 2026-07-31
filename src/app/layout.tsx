import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/navbar";
import Grain from "@/components/ui/grain";
import ScrollProgress from "@/components/ui/scroll-progress";
import Terminal from "@/components/ui/terminal";
import ScrollSpeed from "@/components/ui/scroll-speed";
import SelectEgg from "@/components/ui/select-egg";
import { site, stack, experience, expertise, featuredWork } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const SITE_URL = "https://starone01.github.io";
const FULL_NAME = "Prashanth T.";

const STACK_FLAT = Object.values(stack)
  .flat()
  .map((i) => (typeof i === "string" ? i : i.name));

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} (@${site.handle}) — ${site.role}`,
    template: `%s — ${FULL_NAME}`,
  },
  applicationName: `${site.handle} portfolio`,
  description:
    "Prashanth T. (@StarOne01) — ML Systems Engineer based in Coimbatore, Tamil Nadu. Production ASR (Conformer, RNN-T, Whisper), LLVM contributor, distributed systems, and privacy-by-design infrastructure in Go and C++.",
  keywords: [
    "Prashanth",
    "StarOne01",
    "ML Systems Engineer",
    "ASR",
    "Automatic Speech Recognition",
    "Conformer",
    "RNN-T",
    "Whisper",
    "IndicConformer",
    "QLoRA",
    "PEFT",
    "Speaker Diarization",
    "Ollama",
    "LLVM",
    "Compiler",
    "Distributed Systems",
    "Go",
    "C++",
    "Python",
    "TypeScript",
    "AWS",
    "GCP",
    "Docker",
    "Privacy by design",
    "GDPR",
    "Flutter",
    "Next.js",
    "Coimbatore",
    "Tamil Nadu",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  category: "technology",
  classification: "Portfolio",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "profile",
    siteName: `${FULL_NAME} — Portfolio`,
    locale: "en_US",
    url: SITE_URL,
    title: `${FULL_NAME} (@${site.handle}) — ${site.role}`,
    description:
      "Production ASR, compiler infrastructure, and the AI systems underneath. Coimbatore-based ML systems engineer.",
    firstName: site.name,
    lastName: "T.",
    username: site.handle,
    emails: [site.email],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} (@${site.handle}) — ${site.role}`,
    description: "Production ASR, compiler infrastructure, and the AI systems underneath.",
    creator: `@${site.handle}`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0168;76.9558",
    ICBM: "11.0168, 76.9558",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: FULL_NAME,
      alternateName: [site.handle, site.name],
      givenName: site.name,
      familyName: "T.",
      additionalName: site.handle,
      jobTitle: site.role,
      description:
        "ML Systems Engineer based in Coimbatore, Tamil Nadu. Production ASR (Conformer, RNN-T, Whisper fine-tuning with QLoRA), active LLVM contributor, and founder of multiple ventures spanning voice-first clinical AI, AI-native dating, and an integrated wellness ecosystem.",
      url: SITE_URL,
      email: `mailto:${site.email}`,
      image: `${SITE_URL}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      homeLocation: {
        "@type": "Place",
        name: "Coimbatore, Tamil Nadu, India",
      },
      nationality: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "Automatic Speech Recognition",
        "Conformer",
        "RNN-T",
        "Connectionist Temporal Classification (CTC)",
        "Whisper fine-tuning",
        "QLoRA",
        "PEFT",
        "Speaker diarization",
        "Local LLM inference",
        "Ollama",
        "LLVM",
        "Compiler design",
        "AST transformations",
        "Distributed systems",
        "Privacy by design",
        "GDPR Article 9",
        "GDPR Article 22",
        "India DPDP Act",
        "CCPA",
        "CPRA",
        "End-to-end encryption",
        "Argon2id",
        "Go",
        "C++",
        "Python",
        "TypeScript",
        "JavaScript",
        "Dart",
        "Flutter",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "AWS",
        "GCP",
        "Docker",
        "Redis",
        "PostgreSQL",
        "Vector databases",
        "System design",
        "Production AI deployment",
        "Unreal Engine 5",
        "DaVinci Resolve",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: site.role,
        occupationLocation: {
          "@type": "City",
          name: "Coimbatore",
          containedInPlace: {
            "@type": "State",
            name: "Tamil Nadu",
            containedInPlace: {
              "@type": "Country",
              name: "India",
            },
          },
        },
        skills: STACK_FLAT,
        description: "Building production ML systems, compilers, and distributed infrastructure.",
      },
      worksFor: experience
        .filter((e) => e.status === "active" || e.status === "development" || e.status === "ongoing")
        .map((e) => ({
          "@type": "Organization",
          name: e.company,
          description: e.description,
        })),
      sameAs: [site.socials.linkedin.href, site.socials.github.href],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: `${FULL_NAME} — Portfolio`,
      description:
        "Personal portfolio of Prashanth T. (StarOne01), ML Systems Engineer based in Coimbatore, India.",
      inLanguage: "en-US",
      author: { "@id": `${SITE_URL}#person` },
      publisher: { "@id": `${SITE_URL}#person` },
      copyrightHolder: { "@id": `${SITE_URL}#person` },
      copyrightYear: 2026,
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}#profile`,
      url: SITE_URL,
      name: `${FULL_NAME} (@${site.handle}) — ${site.role}`,
      description:
        "ML Systems Engineer working on production ASR, compiler infrastructure, and the distributed systems that power real-world AI.",
      mainEntity: { "@id": `${SITE_URL}#person` },
      about: { "@id": `${SITE_URL}#person` },
      isPartOf: { "@id": `${SITE_URL}#website` },
      inLanguage: "en-US",
      keywords: STACK_FLAT.join(", "),
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "ItemList",
      name: `${FULL_NAME} — Selected Work`,
      itemListElement: featuredWork.map((work, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: work.name,
          description: work.description,
          url: work.href,
          keywords: work.tag,
          author: { "@id": `${SITE_URL}#person` },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Who is ${site.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${site.name} (${site.handle}) is a ${site.role.toLowerCase()} based in ${site.location}. He is a final-year Electrical & Electronics Engineering student and self-taught programmer building production ML pipelines, compiler infrastructure, and distributed systems.`,
          },
        },
        {
          "@type": "Question",
          name: `What does ${site.name} work on?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `He works on production Automatic Speech Recognition (ASR) — Conformer, RNN-T, CTC, and Whisper fine-tuning with QLoRA — plus on-premise LLM inference with Ollama. He is an active LLVM contributor and founder of Medclara (clinical documentation, past), the Software Development Agency, self / primesoma (AI-native dating, in development), and primesoma (wellness ecosystem, upcoming).`,
          },
        },
        {
          "@type": "Question",
          name: `What technologies does ${site.name} use?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Go, Python, TypeScript, JavaScript, C++ (favorite), Dart. ASR tooling: Whisper, IndicConformer, PEFT / QLoRA, Ollama. Cloud: AWS, GCP, Docker, Redis, PostgreSQL. Low-level: LLVM, compiler internals, AST transformations. Frontend: Next.js, React, Tailwind, Framer Motion.`,
          },
        },
        {
          "@type": "Question",
          name: `How do you contact ${site.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Email: ${site.email}. LinkedIn: linkedin.com/in/${site.handle}. GitHub: github.com/${site.handle}.`,
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link rel="me" href={site.socials.linkedin.href} />
        <link rel="me" href={site.socials.github.href} />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable summary" />
        <meta name="google-site-verification" content="M6nxCCzJ_3vuz-HM6P0E9M_uDE5wv1IgOT72IqJ5mGY" />
        <meta name="author" content={FULL_NAME} />
        <meta name="designer" content={FULL_NAME} />
        <meta name="owner" content={FULL_NAME} />
        <meta name="subject" content={`${site.role} portfolio`} />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-black text-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:font-mono focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to content
        </a>
        <Grain />
        <ScrollProgress />
        <Nav />
        <ScrollSpeed />
        <SelectEgg />
        <Terminal />
        {children}
      </body>
    </html>
  );
}
