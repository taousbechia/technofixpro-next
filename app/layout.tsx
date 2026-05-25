


import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TechnoFixPro",
  description: "Réparation informatique à Akbou",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="overflow-x-hidden">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENU FULL WIDTH */}
        <main className="w-full">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* WHATSAPP */}
        <a
          href="https://wa.me/213672970329"
          target="_blank"
          className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg z-50"
        >
          WhatsApp
        </a>

      </body>
    </html>
  );
}


