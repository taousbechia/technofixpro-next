"use client";
import { useState } from "react";

import { MessageCircle } from "lucide-react";

export default function DevisPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    if (!form.nom || !form.telephone || !form.service) {
      alert("Remplir les champs obligatoires ⚠️");
      return;
    }

    const text = `Bonjour Techno FixPro 👋

Nom: ${form.nom}
Email: ${form.email}
Téléphone: ${form.telephone}
Service: ${form.service}

Message:
${form.message || "Pas de message"}`;

    const url = `https://wa.me/213672970329?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
 

      <section className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-black text-white py-28 px-6 md:px-20">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Demander un devis 🚀
          </h1>

          <p className="text-gray-400">
            Réparation électronique • IT • Développement web & mobile
          </p>
        </div>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* NOM */}
          <input
            name="nom"
            placeholder="Nom *"
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-green-400"
          />

          {/* EMAIL */}
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-green-400"
          />

          {/* TELEPHONE */}
          <input
            name="telephone"
            placeholder="Téléphone *"
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-green-400"
          />

          {/* SERVICE */}
          <select
            name="service"
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/10 border border-white/20 text-gray-300 focus:outline-none focus:border-green-400"
          >
            <option value="">Choisir un service *</option>

            <option>🔧 Réparation téléphone</option>
            <option>🔧 Réparation carte mère</option>
            <option>🔧 Réparation PC portable</option>

            <option>💻 Maintenance informatique</option>
            <option>💻 Installation Windows</option>
            <option>💻 Réseau informatique</option>

            <option>🌐 Création site web</option>
            <option>🌐 Site e-commerce</option>
            <option>🌐 Landing page</option>

            <option>📱 Application mobile</option>
            <option>📱 Logiciel sur mesure</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Décrivez votre projet..."
            onChange={handleChange}
            className="md:col-span-2 p-4 rounded-lg bg-white/10 border border-white/20 h-32 focus:outline-none focus:border-green-400"
          ></textarea>

          {/* BOUTON WHATSAPP */}
          <button
            onClick={sendWhatsApp}
            className="md:col-span-2 bg-blue-400 hover:bg-[#1ebe5d] py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.9)] transition flex items-center justify-center gap-3"
          >
            <MessageCircle size={20} />
            Envoyer message WhatsApp
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          Réponse rapide ⚡ via WhatsApp
        </p>

      </section>
    </>
  );
}