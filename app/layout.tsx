import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velora — Luxury Private Villa in Tangalle, Sri Lanka",
  description:
    "Velora is a private luxury villa in Tangalle, Sri Lanka — an intimate sanctuary blending contemporary architecture with the natural beauty of the southern coast.",
  openGraph: {
    title: "Velora — Luxury Private Villa in Tangalle, Sri Lanka",
    description:
      "An intimate luxury villa where architecture, light, and nature come together on the southern coast of Sri Lanka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
