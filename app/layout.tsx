import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechnoFixPro - Réparation informatique à Akbou",
  description:
    "TechnoFixPro vous propose la réparation informatique, service professionnel et fiable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENU */}
        <main className="flex-1 w-full px-4 md:px-8">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* WHATSAPP */}
        <a
          href="https://wa.me/213672970329"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg z-50"
        >
          WhatsApp
        </a>

      </body>
    </html>
  );
}
