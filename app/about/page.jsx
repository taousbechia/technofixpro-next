"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="w-full px-6 md:px-20 py-10 bg-[#020617] text-white">

      {/* TITLE */}
      <div className="text-center mb-16">
        <p className="text-blue-500 font-semibold tracking-widest">
          À PROPOS
        </p>

        <div className="w-20 h-[2px] bg-blue-500 mx-auto mt-2 mb-4"></div>

        <h2 className="text-3xl md:text-5xl font-bold">
          Qui sommes-nous ?
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* IMAGE */}
        <div className="relative flex justify-center">

          <div className="absolute w-[320px] h-[320px] bg-blue-600/30 blur-3xl rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 p-4 rounded-3xl shadow-2xl">

            <img
              src="/service.PNG"
              alt="Moi"
              className="w-[400px] h-[320px] object-cover rounded-2xl"
            />

            <div className="absolute bottom-2 left-2/4 -translate-x-2/2 bg-blue-600 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              Réparation électronique
            </div>

          </div>
        </div>

        {/* TEXT */}
        <div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Techno <span className="text-blue-500">Fixpro</span>
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Je suis spécialisé dans le développement web, la maintenance informatique
            et les solutions digitales modernes.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mb-6">

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
              <h4 className="text-blue-500 text-xl font-bold">100+</h4>
              <p className="text-xs text-gray-400">Projets</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
              <h4 className="text-blue-500 text-xl font-bold">2+</h4>
              <p className="text-xs text-gray-400">Années</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
              <h4 className="text-blue-500 text-xl font-bold">24/7</h4>
              <p className="text-xs text-gray-400">Support</p>
            </div>

          </div>

          {/* BUTTON PRO */}
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            ME CONTACTER
          </Link>

        </div>

      </div>
    </section>
  );
}