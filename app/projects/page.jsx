"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const categories = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "apps", label: "Apps" },
    { id: "software", label: "Logiciels" },
    { id: "network", label: "Réseaux" },
  ];

  const projects = [
    // 🌐 WEB
    {
      id: 1,
      title: "Site vitrine premium",
      category: "web",
      type: "Website",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "E-commerce moderne",
      category: "web",
      type: "Shop",
      image:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Site entreprise IT",
      category: "web",
      type: "Corporate Website",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Landing page SaaS",
      category: "web",
      type: "Marketing Website",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    },

    // 📱 APPS
    {
      id: 5,
      title: "Dashboard SaaS",
      category: "apps",
      type: "Web App",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Application mobile gestion clients",
      category: "apps",
      type: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    },

    // 💻 SOFTWARE (AJOUT FINAL)
    {
      id: 7,
      title: "Logiciel de gestion de stock",
      category: "software",
      type: "Desktop Software",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Système de facturation professionnel",
      category: "software",
      type: "Business Software",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },


    // 🌐 NETWORK
    {
      id: 10,
      title: "Infrastructure réseau entreprise",
      category: "network",
      type: "IT Setup",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="bg-[#020617] text-white py-28 px-6 md:px-20">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-blue-400 tracking-[0.3em] text-xs uppercase">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-6xl font-light mt-4">
          Nos réalisations
        </h2>

        <p className="text-gray-400 mt-6">
          Sites web, applications et logiciels professionnels modernes et performants.
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mt-12">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition
              ${
                active === c.id
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {filtered.map((p) => (
          <div
            key={p.id}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition"
          >

            {/* IMAGE */}
            <div className="h-[240px] overflow-hidden">
              <img
                src={p.image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>


            {/* CONTENT */}
            <div className="p-5">

              <span className="text-xs text-blue-400 tracking-widest uppercase">
                {p.type}
              </span>

              <h3 className="text-lg font-semibold mt-2">
                {p.title}
              </h3>

           

              </div>

            {/* BORDER ANIMATION */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></div>

          </div>
        ))}

      </div>



    </section>
  );
}