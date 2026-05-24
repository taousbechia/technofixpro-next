
"use client";
import Link from "next/link";
import { Wrench, Globe, Laptop, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#020617] text-white flex flex-col lg:flex-row items-center">

      {/* LEFT */}
      <div className="z-10 px-10">

        <h1 className="text-5xl lg:text-4xl font-bold leading-tight">
          Maintenance informatique<br />
          <span className="text-blue-500">
            & développement sur mesure
          </span>
        </h1>

        <p className="mt-5 text-gray-400">
          Des solutions fiables, sécurisées et évolutives pour booster votre
          <br />
          Des solutions informatiques innovantes, sécurisées et adaptées à vos besoins.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-10">

          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-medium"
          >
            NOS SERVICES
          </Link>

          <Link
            href="/contact"
            className="border border-blue-600 hover:bg-blue-600 transition px-6 py-3 rounded-md"
          >
            NOUS CONTACTER
          </Link>

        </div>

        {/* ICONS */}
        <div className="flex gap-6 mt-12 flex-wrap">

          <div className="flex flex-col items-center hover:scale-110 transition">
            <Wrench className="text-blue-500 w-10 h-10" />
            <p className="text-sm">Maintenance</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition">
            <Globe className="text-blue-500 w-10 h-10" />
            <p className="text-sm">Web</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition">
            <Laptop className="text-blue-500 w-10 h-10" />
            <p className="text-sm">Logiciel</p>
          </div>

          <div className="flex flex-col items-center hover:scale-110 transition">
            <Shield className="text-blue-500 w-10 h-10" />
            <p className="text-sm">Sécurité</p>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 h-[500px]">
        <img
          src="/ma photo web.png"
          alt="hero"
          className="w-full h-full object-cover object-right"
        />
      </div>

    </section>
  );
};

export default Hero;











