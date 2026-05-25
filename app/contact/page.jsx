




"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_d1zq093",
        "template_ul8922b",
        e.target,
        "KMLmMD45vRL0uh72n"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020617] text-white px-6 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-3xl"></div>

      {/* CARD LARGE */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl mt-10 mb-10 md:max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-center">
          Contactez-nous 🚀
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Nous répondons en moins de 24h
        </p>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="bg-green-500/20 text-green-400 p-3 rounded mb-4 text-center">
            ✅ Message envoyé avec succès !
          </div>
        )}

        {/* FORM */}
        <form onSubmit={sendEmail} className="space-y-4">

          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Votre message"
            className="w-full p-3 rounded bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-bold transition"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>

  {/* MAP AKBOU */}
<div className="mt-10 w-full rounded-2xl overflow-hidden border border-white/10">

  <div className="p-3 text-center text-sm text-gray-400">
    📍 Akbou - Béjaïa
  </div>

  <iframe
    title="Akbou Map"
    src="https://www.google.com/maps?q=Akbou,Béjaïa,Algeria&output=embed"
    width="100%"
    height="320"
    loading="lazy"
    className="w-full"
  />
</div>

      </motion.div>



    </section>
  );
}














