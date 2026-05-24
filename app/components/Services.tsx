




"use client";

import Link from "next/link";
import { Wrench, Monitor, Laptop, Shield } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Maintenance informatique",
    desc: "Maintenance, dépannage et optimisation.",
    link: "maintenance",
  },
  {
    icon: Laptop,
    title: "Développement web",
    desc: "Sites modernes et rapides.",
    link: "web",
  },
  {
    icon: Monitor,
    title: "Développement logiciel",
    desc: "Logiciels sur mesure.",
    link: "software",
  },
  {
    icon: Shield,
    title: "Réseaux & Sécurité",
    desc: "Solutions sécurisées.",
    link: "reseaux",
  },
];

export default function Services() {
  return (
    <div className="w-full px-6 md:px-20 py-20 bg-gradient-to-b from-white to-gray-100">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-blue-600 font-semibold tracking-widest">
          NOS SERVICES
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
          Des solutions adaptées à{" "}
          <span className="text-blue-600">vos besoins</span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <Link
              key={i}
              href={`/services#${service.link}`}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-200 to-indigo-200 hover:scale-105 transition duration-300 block"
            >
              <div className="bg-white rounded-2xl p-6 h-full shadow-sm group-hover:shadow-xl transition">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 mb-4">
                  <Icon className="text-blue-600 w-6 h-6" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {service.desc}
                </p>

                <span className="text-blue-600 text-sm font-semibold">
                  En savoir plus →
                </span>

              </div>
            </Link>
          );
        })}

      </div>

      {/* ABOUT */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/service.PNG"
          className="rounded-2xl shadow-xl"
          alt="about"
        />

        <div>
          <p className="text-blue-600 font-semibold mb-2">À propos</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre partenaire informatique de{" "}
            <span className="text-blue-600">confiance</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Chez Technofixpro, nous créons des solutions modernes,
            rapides et sécurisées pour votre business.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Support réactif</li>
            <li>✔ Solutions personnalisées</li>
            <li>✔ Satisfaction garantie</li>
            <li>✔ Service premium</li>
          </ul>

          <Link
            href="/about"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            EN SAVOIR PLUS →
          </Link>
        </div>

      </div>

      


    </div>
  );
}
