import type { Metadata } from "next";
import { Inter, Parkinsans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarOne01 | Prashanth's Portfolio",
  description: "Prashanth's Portfolio",
};

const parkin = Parkinsans({ weight: "400", subsets: ["latin"] });


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
      <body className={parkin.className}>
        <Nav />
        {children}</body>
    </html>
  );
}
