









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
    "TechnoFixPro vous propose la réparation informatique ,Service professionnel et fiable.",
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
      <body className="min-h-full flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENU */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* 🔥 BOUTON WHATSAPP GLOBAL */}
        <a
          href="https://wa.me/213672970329"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50"
        >
          WhatsApp
        </a>

      </body>
    </html>
  );
}




