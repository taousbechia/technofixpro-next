

"use client";
import { motion } from "framer-motion";
import { Wrench, Globe, Laptop, Shield } from "lucide-react";

const services = [
  {
    icon: <Wrench size={40} />,
    title: "Maintenance informatique",
    desc: "Diagnostic, réparation et optimisation de vos équipements informatiques.",
  },
  {
    icon: <Globe size={40} />,
    title: "Développement Web",
    desc: "Création de sites modernes, rapides et adaptés à votre activité.",
  },
  {
    icon: <Laptop size={40} />,
    title: "Logiciels sur mesure",
    desc: "Applications personnalisées pour répondre à vos besoins spécifiques.",
  },
  {
    icon: <Shield size={40} />,
    title: "Réseaux & sécurité",
    desc: "Installation réseau, protection et sécurisation de vos données.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#020617] text-white min-h-screen px-6 py-16">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">
          Nos <span className="text-blue-500">Services</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Découvrez nos solutions professionnelles pour booster votre activité digitale.
        </p>
      </div>

      {/* CARDS */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#0a0f2c] border border-white/10 rounded-xl p-6 hover:scale-105 transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <div className="text-blue-500 mb-4">
              {service.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {service.desc}
            </p>
          </motion.div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold">
          Besoin d’un service personnalisé ?
        </h2>

        <p className="text-gray-400 mt-2">
          Contactez-nous dès maintenant pour un devis gratuit.
        </p>

        <a
          href="/devis"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-blue-600/30"
        >
          Demander un devis →
        </a>
      </div>

    </section>
  );
}