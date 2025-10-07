import Image from "next/image";
import Link from "next/link";
import { games } from "./games";

export default function Spiele() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <h1 className="text-5xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_15px_#00ffff]">
        Unsere Spiele
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {games.map((game) => (
          <div
            key={game.slug}
            className="group relative bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl p-5 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:border-cyan-400/80 hover:shadow-[0_0_25px_#00ffff50]"
          >
            <div className="h-48 w-full overflow-hidden rounded-xl mb-4">
              <Image
                src={game.image}
                alt={game.title}
                width={500}
                height={300}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500"
              />
            </div>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
              {game.title}
            </h2>
            <p className="text-gray-400 mb-6">{game.description}</p>
            <div className="flex items-center gap-3 text-gray-400 text-sm mb-6">
              <span>👥 2–10</span>
              <span>🕒 10–15 Min</span>
              <span>🎮 VR</span>
            </div>
            <Link
              href={`/spiele/${game.slug}`}
              className="block text-center border border-cyan-400 text-cyan-300 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 group-hover:shadow-[0_0_15px_#00ffff]"
            >
              Details & Buchen →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
