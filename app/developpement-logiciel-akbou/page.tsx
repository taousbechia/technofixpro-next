import Link from "next/link";

export const metadata = {
  title: "Développement logiciel à Akbou | Applications - TechnoFixPro",
  description:
    "Développement de logiciels à Akbou. Applications sur mesure, automatisation et solutions professionnelles avec TechnoFixPro.",
};

export default function Page() {
  return (
    <div className="p-10 max-w-4xl mx-auto">

      {/* TITRE */}
      <h1 className="text-4xl font-extrabold mb-6">
        Développement logiciel à Akbou
      </h1>

      {/* INTRO */}
      <p className="text-gray-600 mb-6">
        TechnoFixPro développe des logiciels sur mesure à Akbou pour
        entreprises et particuliers. Nous créons des solutions adaptées à vos
        besoins pour améliorer votre productivité.
      </p>

      {/* SERVICES */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Nos solutions logicielles
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Applications personnalisées</li>
        <li>Logiciels de gestion</li>
        <li>Automatisation des tâches</li>
        <li>Solutions pour entreprises</li>
        <li>Maintenance et mise à jour</li>
      </ul>

      {/* POURQUOI NOUS */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Pourquoi choisir TechnoFixPro ?
      </h2>

      <p className="text-gray-600">
        Nous proposons des solutions fiables, modernes et évolutives.
        Notre équipe vous accompagne dans chaque étape pour garantir
        un logiciel performant et adapté à votre activité.
      </p>

      {/* LIENS INTERNES SEO */}
      <p className="mt-10 text-blue-600 font-semibold">
        Découvrez aussi nos services :
      </p>

      <ul className="list-disc pl-6 text-blue-600 space-y-2">
        <li>
          <Link href="/reparation-informatique-akbou" className="hover:underline">
            Réparation informatique à Akbou
          </Link>
        </li>
        <li>
          <Link href="/developpement-web-akbou" className="hover:underline">
            Développement web à Akbou
          </Link>
        </li>
      </ul>

      {/* CTA WHATSAPP 🔥 */}
      <a
        href="https://wa.me/213XXXXXXXXX"
        target="_blank"
        className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Contactez-nous sur WhatsApp
      </a>

    </div>
  );
}