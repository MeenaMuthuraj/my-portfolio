import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meena-portfolio.vercel.app"),
  title: "Meena M | QA Engineer Portfolio",
  description: "Quality Assurance Engineer with 1 year at Skillmine Technologies. Skilled in software testing, automation, and simulation-driven verification.",
  openGraph: {
    type: "website",
    title: "Meena M | QA Engineer",
    description: "Quality Assurance Engineer · 1 Year @ Skillmine Technologies · Portfolio 2025",
    siteName: "Meena M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meena M | QA Engineer",
    description: "Quality Assurance Engineer · 1 Year @ Skillmine Technologies · Portfolio 2025",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <BackgroundEffects />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
