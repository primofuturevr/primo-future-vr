import Head from "next/head";

export default function Spiele() {
  const games = [
    {
      title: "Zombie Outbreak",
      tag: "Action / Koop",
      desc: "Überlebt die Zombie-Apokalypse mit Teamwork und Adrenalin.",
      players: "2–6 Spieler",
      duration: "30–40 Min.",
      img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1200"
    },
    {
      title: "Space Salvage",
      tag: "Sci-Fi / Puzzle",
      desc: "Rettet ein gestrandetes Schiff und löst Rätsel im All – gegen die Zeit.",
      players: "2–6 Spieler",
      duration: "35–45 Min.",
      img: "https://images.unsplash.com/photo-1581092919535-7146f3bfa2c6?q=80&w=1200"
    },
    {
      title: "Heist Run",
      tag: "Taktik / Teamplay",
      desc: "Ein Raub unter Zeitdruck – Rollen verteilen, sauber entkommen.",
      players: "2–6 Spieler",
      duration: "30–40 Min.",
      img: "https://images.unsplash.com/photo-1584438784894-089d6a62b8d1?q=80&w=1200"
    },
    {
      title: "Cyber Arena",
      tag: "PvP / Action",
      desc: "Tretet gegeneinander in einer futuristischen VR-Arena an.",
      players: "2–6 Spieler",
      duration: "20–30 Min.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
    },
    {
      title: "Ancient Temple",
      tag: "Adventure / Rätsel",
      desc: "Erkundet einen mystischen Tempel und entdeckt seine Geheimnisse.",
      players: "2–5 Spieler",
      duration: "40–50 Min.",
      img: "https://images.unsplash.com/photo-1590402494682-cd89d88d33a4?q=80&w=1200"
    },
    {
      title: "Alien Invasion",
      tag: "Sci-Fi / Shooter",
      desc: "Verteidigt die Erde gegen eine außerirdische Invasion.",
      players: "3–6 Spieler",
      duration: "30–45 Min.",
      img: "https://images.unsplash.com/photo-1503437313881-503a91226419?q=80&w=1200"
    }
  ];

  return (
    <>
      <Head>
        <title>VR-Erlebnisse · Primo Future VR</title>
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* HEADER */}
        <header className="sticky top-0 z-40 border-b border-neutral-900 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-semibold">Primo Future VR</a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              <a href="/preise" className="hover:text-white">Preise</a>
              <a href="/buchung" className="hover:text-white">Buchung</a>
              <a href="/faq" className="hover:text-white">FAQ</a>
              <a href="/kontakt" className="hover:text-white">Kontakt</a>
              <a href="/buchung" className="rounded-lg px-3 py-1.5 bg-blue-600 font-semibold hover:bg-blue-500">Jetzt buchen</a>
            </nav>
          </div>
        </header>

        {/* GAME GRID */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Unsere VR-Erlebnisse</h1>
          <p className="text-neutral-300 mb-8">
            Free-Roam ohne Kabel. Wählt euer Abenteuer – egal ob Action, Rätsel oder Team-Mission.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map(g => (
              <article key={g.title} className="rounded-2xl border border-neutral-900 bg-neutral-950 overflow-hidden">
                <div className="aspect-video bg-neutral-900">
                  <img src={g.img} alt={g.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{g.title}</h2>
                    <span className="text-xs text-neutral-400">{g.tag}</span>
                  </div>
                  <p className="text-sm text-neutral-300 mt-1">{g.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs text-neutral-300">
                    <span className="rounded-full border border-neutral-800 px-2 py-1">{g.players}</span>
                    <span className="rounded-full border border-neutral-800 px-2 py-1">{g.duration}</span>
                  </div>
                  <a href="/buchung" className="inline-block mt-4 rounded-lg px-4 py-2 bg-blue-600 font-semibold hover:bg-blue-500">
                    Slot sichern
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-900 py-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Primo Future VR
        </footer>
      </main>
    </>
  );
}
