import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prashanth | AI & distributed systems engineer",
  description: "Systems and AI Engineer specializing in distributed architecture, low-latency microservices, and production-grade machine learning pipelines.",
  keywords: ["Machine Learning", "Distributed Systems", "AI Infrastructure", "Systems Engineer", "Backend Architecture", "Go", "C++", "Python", "PEFT", "ASR"],
  authors: [{ name: "Prashanth" }],
  openGraph: {
    type: "website",
    url: "https://starone01.github.io",
    title: "Prashanth | AI & Systems Engineer",
    description: "Designing high-performance distributed systems and production-grade machine learning pipelines.",
    siteName: "Prashanth Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="M6nxCCzJ_3vuz-HM6P0E9M_uDE5wv1IgOT72IqJ5mGY" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Prashanth",
            url: "https://starone01.github.io",
            jobTitle: "AI & Systems Engineer",
            description: "Systems and AI Engineer specializing in distributed architecture, low-latency microservices, and production-grade machine learning pipelines.",
            knowsAbout: [
              "Distributed Systems",
              "Machine Learning",
              "Production AI Infrastructure",
              "Cloud Architecture",
              "Systems Engineering"
            ],
            sameAs: [
              "https://www.linkedin.com/in/StarOne01/",
              "https://github.com/StarOne01"
            ]
          }),
        }}
      />
      </head>
      <body className={`${inter.className} bg-black`}>
        <Nav />
        {children}</body>
    </html>
  );
}
