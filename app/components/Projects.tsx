

"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const categories = [
    { id: "all", label: "TOUS" },
    { id: "web", label: "SITES WEB" },
    { id: "apps", label: "APPLICATIONS" },
    { id: "software", label: "LOGICIELS" },
    { id: "network", label: "RÉSEAUX" },
  ];

  const projects = [
    {
      id: 1,
      title: "Site vitrine – Agence de sécurité",
      category: "web",
      type: "Site web",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Boutique en ligne",
      category: "web",
      type: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Application de gestion",
      category: "apps",
      type: "Application web",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Installation réseau entreprise",
      category: "network",
      type: "Infrastructure réseau",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState("all");

  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="bg-gradient-to-br from-[#050816] via-[#0b1a2a] to-[#0a192f] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-blue-400 font-bold uppercase tracking-wide">
            Nos réalisations
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4">
            Quelques projets récents
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all
                ${
                  active === item.id
                    ? "bg-blue-600 text-white scale-105 shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition"></div>

              {/* CONTENT */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg md:text-xl">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {project.type}
                </p>
              </div>

              {/* HOVER LINE (bleu clair) */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* BUTTON PREMIUM */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-blue-900 text-blue-300 px-6 py-3 rounded-lg hover:bg-blue-500/10 hover:border-cyan-300 transition shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
          >
            Voir tous les projets
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}