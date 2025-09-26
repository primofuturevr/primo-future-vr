import Link from "next/link";

const games = [
  { slug: "red-planet", title: "Red Planet", summary: "Verteidige die Mars-Basis gegen außerirdische Angriffe.", players: "2–10", duration: "10–15 Minuten", genre: "Sci-Fi" },
  { slug: "spaceport", title: "Spaceport", summary: "Kämpfe um Ressourcen auf einer Raumstation am Rand der Galaxie.", players: "2–10", duration: "10–15 Minuten", genre: "Sci-Fi" },
  { slug: "zombie-mall", title: "Zombie Mall", summary: "Verlassene Mall, enge Gänge, überall Zombies – Überleben im Team.", players: "1–6", duration: "10–15 Minuten", genre: "Zombie" },
  { slug: "battle-for-new-year", title: "Battle for New Year", summary: "Festliches Neujahrs-Setting mit schnellen, strategischen Kämpfen.", players: "1–6", duration: "10–15 Minuten", genre: "Event" },
  { slug: "the-citadel", title: "The Citadel", summary: "High-Tech-Raumschiff, Hologramme, Kontrollpunkt erobern.", players: "2–10", duration: "10–15 Minuten", genre: "Sci-Fi/Postapok." },
  { slug: "zombie-farm", title: "Zombie Farm", summary: "Bauernhof verteidigen – Zombies aus allen Richtungen, Deckung im Maisfeld.", players: "1–6", duration: "10–15 Minuten", genre: "Zombie" },
  { slug: "nuklearer-bunker", title: "Nuklearer Bunker", summary: "Geheimer Bunker: Sprengköpfe & radioaktive Abfälle als Verstecke.", players: "2–10", duration: "10–15 Minuten", genre: "Postapok." },
  { slug: "the-last-frontier", title: "The Last Frontier", summary: "Cartoony Endzeit-Stadt – letzte Bastion sichern, Adrenalin pur.", players: "2–10", duration: "10–15 Minuten", genre: "Postapok." },
  { slug: "last-train", title: "Last Train", summary: "Spezialoperation im Industrie-Depot – klassischer Shooter-Flow.", players: "2–10", duration: "10–12 Minuten", genre: "Shooter" },
  { slug: "wall-street", title: "Wall Street", summary: "Büro-Arena für Firmenkämpfe: Kabinen, Korridore, viele Ecken.", players: "2–10", duration: "7–10 Minuten", genre: "Teamevent" }
];

export default function SpielePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Unsere Spiele</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <article key={g.slug} className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold">{g.title}</h2>
            <p className="text-sm text-gray-600">{g.summary}</p>
            <p className="mt-2 text-sm">👥 {g.players} | ⏱ {g.duration}</p>
            <p className="text-sm">🏷 {g.genre}</p>
            <Link href={`/spiele/${g.slug}`} className="inline-block mt-3 underline">
              Details &amp; Buchen →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
