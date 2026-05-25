




"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const NAV_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À propos", href: "/about" },
  { name: "Projets", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/100 backdrop-blur-md border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/Logou.png" alt="logo" className="w-9 h-9" />

          <div className="leading-tight">
            <h1 className="text-white font-extrabold text-lg">
              TECHNO <span className="text-blue-500">FIXPRO</span>
            </h1>
            <p className="text-[10px] text-gray-400">
              Solutions informatiques
            </p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-5">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* WhatsApp */}
          <a
            href="https://wa.me/213672970329"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 font-semibold hover:opacity-80"
          >
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+213781382799"
            className="flex items-center gap-1 text-white hover:text-blue-400"
          >
            <Phone size={16} />
            Call
          </a>

          {/* ✅ EMAIL FIX (GMAIL DIRECT) */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=technofixpro21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-yellow-400 hover:opacity-80"
          >
            <Mail size={16} />
            Email
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@technofixpro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            TikTok
          </a>
        </div>

        {/* BOUTON DEVIS (PC) */}
        <Link
          href="/devis"
          className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition"
        >
          Devis →
        </Link>

        {/* BOUTON MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="lg:hidden bg-white text-[#020617] px-6 py-5 space-y-4 shadow-xl">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-semibold text-lg"
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t pt-4 space-y-3">

            {/* WhatsApp */}
            <a
              href="https://wa.me/213672970329"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-green-600 font-bold"
            >
              💬 WhatsApp
            </a>

            {/* Call */}
            <a
              href="tel:+213781382799"
              className="block text-blue-600 font-bold"
            >
              📞 Appeler
            </a>

            {/* ✅ EMAIL FIX MOBILE */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=technofixpro21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-yellow-500 font-bold"
            >
              📧 Email
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@technofixpro"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-bold"
            >
              🎵 TikTok
            </a>
          </div>

          {/* DEVIS MOBILE */}
          <Link
            href="/devis"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 bg-blue-600 text-white text-center py-3 rounded-lg font-bold"
          >
            DEMANDER UN DEVIS →
          </Link>
        </div>
      )}
    </nav>
  );
}

