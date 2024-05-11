import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prashanth",
  description: "Prashanth's Portfolio",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
