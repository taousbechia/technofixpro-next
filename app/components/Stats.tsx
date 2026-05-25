
// StatsSection.jsx
export default function StatsSection() {
  const stats = [
    { id: 1, number: "100+", title: "Interventions réalisées", icon: "⚙️" },
    { id: 2, number: "200+", title: "Clients satisfaits", icon: "⭐" },
    { id: 3, number: "300+", title: "Interventions techniques", icon: "🔧" },
    { id: 4, number: "50+", title: "Projets réalisés", icon: "📋" },
  ];

  return (
    <section className="relative bg-white overflow-hidden">

      {/* HERO */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center flex items-start"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 w-full">

          {/* LOGO + BRAND */}
          <div className="flex items-center gap-3">

            {/* Logo circle */}
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/Logou.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-3xl md:text-3xl font-extrabold text-white">
                Technofix<span className="text-blue-500">pro</span>
              </h1>

              <p className="text-base md:text-xl mt-2 text-white">
                <span className="text-blue-500 font-semibold">
                  Développement. Maintenance.
                </span>{" "}
                Solutions performantes.
              </p>
            </div>

          </div>

          {/* LINE */}
          <div className="w-16 h-1 bg-blue-500 mt-8"></div>

          {/* TITLE */}
          <div className="mt-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Nos chiffres clés
            </h2>

            <p className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed">
              Des chiffres concrets qui prouvent notre expertise
              <br />
              et la satisfaction de nos clients.
            </p>
          </div>

        </div>
      </div>

      {/* STATS SECTION */}
      <div className="relative -mt-20 px-6">

        <div className="bg-[#f3f3f3] rounded-[30px] shadow-2xl p-6 md:p-12 max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {stats.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-3xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                {/* ICON */}
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* NUMBER */}
                <h3 className="text-4xl md:text-4xl font-extrabold text-blue-600">
                  {item.number}
                </h3>

                {/* TITLE */}
                <p className="mt-3 text-lg md:text-xl font-semibold text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* SPACE */}
      <div className="h-20 md:h-40"></div>
    </section>
  );
}