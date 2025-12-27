import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syren.com"),
  title: "Syren | Experience Egypt Differently",
  description:
    "Curated luxury travel experiences in Egypt — parties, hidden gems, and local adventures.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syren | Experience Egypt Differently",
    description:
      "Curated luxury travel experiences in Egypt — parties, hidden gems, and local adventures.",
    url: "https://syren.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syren Egypt Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syren | Experience Egypt Differently",
    description:
      "Curated luxury travel experiences in Egypt — parties, hidden gems, and local adventures.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main id="main-content" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
