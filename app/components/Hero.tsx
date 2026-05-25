









"use client";
import Link from "next/link";
import { Wrench, Globe, Laptop, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#020617] text-white flex flex-col lg:flex-row">

      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 py-16">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight space-y-2">
          <span className="block">Maintenance informatique</span>
          <span className="block">Réseaux & Sécurité</span>
          <span className="block text-blue-500">
            Développement sur mesure
          </span>
        </h1>

        <p className="mt-5 text-gray-400 max-w-xl">
          Des solutions fiables, sécurisées et évolutives pour booster votre activité.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-10 flex-wrap">

          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md"
          >
            NOS SERVICES
          </Link>

          <Link
            href="/contact"
            className="border border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-md"
          >
            NOUS CONTACTER
          </Link>

        </div>

        {/* ICONS */}
        <div className="flex gap-6 mt-12 flex-wrap">

          <div className="flex flex-col items-center">
            <Wrench className="text-blue-500 w-10 h-10" />
            <p className="text-sm">Maintenance</p>
          </div>

          <div className="flex flex-col items-center">
            <Globe className="text-blue-500 w-10 h-10" />
            <p className="text-sm">Web</p>
          </div>

          <div className="flex flex-col items-center">
            <Laptop className="text-blue-500 w-10 h-10" />
            <p className="text-sm">Logiciel</p>
          </div>

          <div className="flex flex-col items-center">
            <Shield className="text-blue-500 w-10 h-10" />
            <p className="text-sm">Sécurité</p>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-auto">
        <img
          src="/ma photo web.png"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default Hero;



