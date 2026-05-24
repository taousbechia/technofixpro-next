



"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=technofixpro21@gmail.com&su=${encodeURIComponent(
    "Demande de devis"
  )}&body=${encodeURIComponent("Bonjour TechnoFixPro,")}`;

  return (
    <footer className="bg-[#020617] text-white px-6 md:px-12 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO + DESC */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            <span>TECHNO</span>
            <span className="text-blue-500">FIXPRO</span>
          </h1>

          <p className="text-gray-400 text-sm mb-6">
            Solutions digitales modernes, sécurisées et performantes pour votre business.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">

            {/* WhatsApp */}
            <a
              href="https://wa.me/213672970329"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-xl flex items-center justify-center transition"
            >
              <MessageCircle size={18} />
            </a>

            {/* Gmail */}
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-red-500 rounded-xl flex items-center justify-center transition"
            >
              <Mail size={18} />
            </a>

            {/* Call */}
            <a
              href="tel:+213672970329"
              className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition"
            >
              <Phone size={18} />
            </a>

          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h2 className="font-semibold mb-6 text-lg">Navigation</h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">À propos</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400">Réalisations</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="font-semibold mb-6 text-lg">Services</h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Maintenance informatique</li>
            <li>Développement web</li>
            <li>Développement logiciel</li>
            <li>Réseaux & Sécurité</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-6 text-lg">Contact</h2>

          <div className="space-y-4 text-sm">

            {/* PHONE */}
            <a href="tel:+213672970329" className="flex items-center gap-3">
              <Phone size={16} className="text-blue-500" />
              <span className="text-gray-300">+213 672 970 329</span>
            </a>

            {/* EMAIL GMAIL */}
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Mail size={16} className="text-blue-500" />
              <span className="text-gray-300">technofixpro21@gmail.com</span>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-500" />
              <span className="text-gray-300">Akbou, Béjaïa</span>
            </div>

          </div>

          <Link href="/devis">
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-sm font-semibold transition">
              Demander un devis
            </button>
          </Link>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} TECHNOFIXPRO — Tous droits réservés
      </div>
    </footer>
  );
}