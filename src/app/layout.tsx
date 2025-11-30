import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prashanth | CTO at Medclara",
  description: "Chief Technology Officer at Medclara - Building technology that transforms healthcare delivery",
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
      </head>
      <body className={`${inter.className} bg-black`}>
        <Nav />
        {children}</body>
    </html>
  );
}
