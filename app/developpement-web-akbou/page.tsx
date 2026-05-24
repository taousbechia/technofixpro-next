import Link from "next/link";

export const metadata = {
  title: "Développement web à Akbou | Création site - TechnoFixPro",
  description:
    "Création de site web à Akbou. Développement moderne, rapide et optimisé SEO avec TechnoFixPro.",
};

export default function Page() {
  return (
    <div className="p-10 max-w-4xl mx-auto">

      {/* TITRE */}
      <h1 className="text-4xl font-extrabold mb-6">
        Développement web à Akbou
      </h1>

      {/* INTRO */}
      <p className="text-gray-600 mb-6">
        TechnoFixPro crée des sites web professionnels à Akbou.
        Nous réalisons des sites modernes, rapides et optimisés pour Google.
      </p>

      {/* SERVICES */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Nos services web
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Création site vitrine</li>
        <li>Site e-commerce</li>
        <li>Design moderne et responsive</li>
        <li>Optimisation SEO</li>
        <li>Maintenance et mise à jour</li>
      </ul>

      {/* POURQUOI NOUS */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Pourquoi choisir TechnoFixPro ?
      </h2>

      <p className="text-gray-600">
        Nous concevons des sites performants, rapides et sécurisés.
        Notre objectif est de vous aider à attirer plus de clients grâce
        à une présence professionnelle sur internet.
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
          <Link href="/developpement-logiciel-akbou" className="hover:underline">
            Développement logiciel à Akbou
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