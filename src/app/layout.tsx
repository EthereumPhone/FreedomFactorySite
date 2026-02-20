import type { Metadata } from "next";
import { Chakra_Petch, Space_Mono, Outfit } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--ff-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--ff-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const outfit = Outfit({
  variable: "--ff-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freedom Factory — The Next Generation Mobile OS",
  description:
    "ethOS: an open-source mobile OS for the dGEN1. Open protocols, user sovereignty, and AI agents with first-class identity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${chakraPetch.variable} ${spaceMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
