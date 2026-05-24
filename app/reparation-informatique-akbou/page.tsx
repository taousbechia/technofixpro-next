import Link from "next/link";
export const metadata = {
  title: "Réparation informatique à Akbou | Dépannage PC - TechnoFixPro",
  description:
    "Service de réparation informatique à Akbou. Dépannage PC rapide, maintenance ordinateur et solutions fiables avec TechnoFixPro.",
};

export default function Page() {
  return (
    <div className="p-10 max-w-4xl mx-auto">

      <h1 className="text-4xl font-extrabold mb-6">
        Réparation informatique à Akbou
      </h1>

      <p className="text-gray-600 mb-6">
        TechnoFixPro est spécialisé dans la réparation informatique à Akbou.
        Nous proposons des services de dépannage PC, maintenance informatique
        et assistance technique rapide.
      </p>
      <p className="mt-6 text-blue-600">
  Découvrez aussi nos services :
</p>
<ul className="list-disc pl-6 text-blue-600">
  <li>
    <Link href="/developpement-web-akbou" className="hover:underline">
      Développement web à Akbou
    </Link>
  </li>
  <li>
    <Link href="/developpement-logiciel-akbou" className="hover:underline">
      Développement logiciel à Akbou
    </Link>
  </li>
</ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Nos services à Akbou
      </h2>

<ul className="list-disc pl-6 text-gray-600 space-y-2">
  <li>Dépannage ordinateur portable et PC</li>
  <li>Suppression virus et sécurité</li>
  <li>Installation Windows et logiciels</li>
  <li>Maintenance informatique complète</li>
  <li>Nettoyage et optimisation PC</li>
  <li>Récupération de données</li>
</ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Pourquoi choisir TechnoFixPro ?
      </h2>

      <p className="text-gray-600">
        Nous offrons un service rapide, professionnel et fiable à Akbou.
        Notre objectif est de réparer votre ordinateur dans les meilleurs délais
        avec des solutions durables.
      </p>

    </div>
  );
}