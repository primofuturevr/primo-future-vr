import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Primo Future VR Dortmund</title>
        <meta
          name="description"
          content="Free-Roam VR in Dortmund. Kabellos bewegen, sprinten, ducken – als Squad gemeinsam durch Welten laufen."
        />
      </Head>

      <main className="bg-black text-white min-h-screen">
        {/* ===== HEADER ===== */}
        <header className="sticky top-0 z-50 border-b border-neutral-900 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Primo Future VR</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              <a href="/spiele" className="hover:text-white">Erlebnisse</a>
              <a href="/preise" className="hover:text-white">Preise</a>
              <a href="/buchung" className="hover:text-white">Buchung</a>
              <a href="/faq" className="hover:text-white">FAQ</a>
              <a href="/kontakt" className="hover:text-white">Kontakt</a>
            </nav>

            <a
              href="/buchung"
              className="rounded-lg px-3 py-1.5 bg-blue-600 text-white font-semibold hover:bg-blue-500"
            >
              Jetzt buchen
            </a>
          </div>
        </header>

        {/* ===== HERO ===== */}
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Free-Roam VR in Dortmund<br />
                <span className="text-blue-400">Team-Action, die kickt.</span>
              </h1>
              <p className="mt-4 text-neutral-300">
                Kabellos bewegen, sprinten, ducken – als Squad gemeinsam durch Welten laufen.
                Perfekt für Freunde, Firmen & Events.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SPIELE ===== */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Zombie Outbreak",
              desc: "Überlebt die Zombie-Apokalypse im Koop-Modus.",
              img: "https://images.unsplash.com/photo-1606112219348-2047db894e7q",
            },
            {
              title: "Space Salvage",
              desc: "Rettet ein gestrandetes Schiff im All.",
              img: "https://images.unsplash.com/photo-1581092919535-7146f3bf2c67",
            },
            {
              title: "Heist Run",
              desc: "Plant und meistert den perfekten Raub.",
              img: "https://images.unsplash.com/photo-1584438784894-089d6a62b8d1",
            },
          ].map((g) => (
            <div key={g.title} className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg">
              <img src={g.img} alt={g.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{g.title}</h3>
                <p className="text-neutral-400">{g.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="mt-20 text-gray-500 text-sm">
          Standort: Dortmund · Altersempfehlung: ab 12 · Deutsch & Englisch
        </footer>
      </main>
    </>
  );
}