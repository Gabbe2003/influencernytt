import type { Metadata } from "next";
import { TrendingUp, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Om oss | TrendRadar",
  description: "L\u00e4r dig mer om TrendRadar - din k\u00e4lla f\u00f6r de senaste trenderna inom teknik, AI och innovation.",
};

export default function AboutPage() {
  return (
    <div className="base-width py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Om TrendRadar</h1>

        <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
          TrendRadar \u00e4r din p\u00e5litliga k\u00e4lla f\u00f6r de senaste trenderna inom teknik,
          artificiell intelligens och digital innovation. Vi analyserar och
          rapporterar om de teknologier och trender som formar framtiden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-[var(--input)] rounded-xl text-center">
            <TrendingUp className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Trendanalys</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Vi identifierar och analyserar de viktigaste trenderna inom tech.
            </p>
          </div>
          <div className="p-6 bg-[var(--input)] rounded-xl text-center">
            <Target className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Djupg\u00e5ende artiklar</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Kvalitativt inneh\u00e5ll som ger dig verklig insikt.
            </p>
          </div>
          <div className="p-6 bg-[var(--input)] rounded-xl text-center">
            <Eye className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Framtidsblick</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Vi hj\u00e4lper dig ligga steget f\u00f6re i den digitala utvecklingen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">V\u00e5r mission</h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-6">
          V\u00e5r mission \u00e4r att g\u00f6ra komplex teknik och innovation tillg\u00e4nglig f\u00f6r
          alla. Vi tror p\u00e5 att kunskap om framtidens trender inte ska vara
          f\u00f6rbeh\u00e5llet en liten elit, utan tillg\u00e4nglig f\u00f6r alla som vill f\u00f6rst\u00e5
          vart v\u00e4rlden \u00e4r p\u00e5 v\u00e4g.
        </p>

        <h2 className="text-2xl font-bold mb-4">Kontakta oss</h2>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Har du fr\u00e5gor, tips eller vill samarbeta? Tveka inte att{" "}
          <a href="/contact" className="text-[var(--color-accent)] hover:underline">
            kontakta oss
          </a>.
        </p>
      </div>
    </div>
  );
}
