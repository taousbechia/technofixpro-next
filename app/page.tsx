










export default function Home() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="w-full bg-blue-600 text-white py-16 px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          TechnoFixPro
        </h1>
        <p className="mt-4 max-w-xl">
          Réparation informatique rapide et professionnelle à Akbou.
        </p>
      </section>

      {/* SERVICES */}
      <section className="w-full py-12 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Nos services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow">
            Réparation PC
          </div>
          <div className="p-6 border rounded-lg shadow">
            Installation Windows
          </div>
          <div className="p-6 border rounded-lg shadow">
            Nettoyage virus
          </div>
        </div>
      </section>

    </div>
  );
}
