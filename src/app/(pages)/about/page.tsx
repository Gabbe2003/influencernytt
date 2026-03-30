import type { Metadata } from "next";
import { BarChart3, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Om oss | TrendRadar",
  description: "TrendRadar \u00e4r Sveriges ledande plattform f\u00f6r ekonominyheter, marknadsanalys och finansiell information.",
};

export default function AboutPage() {
  return (
    <div className="base-width py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 tracking-tight">Om TrendRadar</h1>

        <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
          TrendRadar \u00e4r Sveriges ledande oberoende plattform f\u00f6r ekonominyheter,
          marknadsanalys och finansiell information. Vi bevakar allt fr\u00e5n
          Riksbankens beslut till globala marknadstrender - och g\u00f6r det
          begripligt f\u00f6r alla.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-6 bg-[var(--input)] rounded-xl">
            <BarChart3 className="w-7 h-7 text-[var(--color-accent)] mb-3" />
            <h3 className="font-semibold mb-2">Marknadsanalys</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Djupg\u00e5ende analyser av b\u00f6rsen, r\u00e4ntel\u00e4get och konjunkturen.
            </p>
          </div>
          <div className="p-6 bg-[var(--input)] rounded-xl">
            <TrendingUp className="w-7 h-7 text-[var(--color-accent)] mb-3" />
            <h3 className="font-semibold mb-2">Ekonomiska trender</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Vi identifierar de ekonomiska trenderna innan de n\u00e5r mainstream.
            </p>
          </div>
          <div className="p-6 bg-[var(--input)] rounded-xl">
            <Shield className="w-7 h-7 text-[var(--color-accent)] mb-3" />
            <h3 className="font-semibold mb-2">Oberoende journalism</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Vi \u00e4r inte bundna av finansiella intressen - v\u00e5r lojalitet
              ligger hos l\u00e4saren.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 tracking-tight">V\u00e5r mission</h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-6">
          Vi tror att ekonomisk kunskap ska vara tillg\u00e4nglig f\u00f6r alla. Oavsett
          om du \u00e4r professionell investerare, f\u00f6retagare eller privatperson
          som vill f\u00f6rst\u00e5 hur ekonomin p\u00e5verkar din vardag - TrendRadar \u00e4r
          din k\u00e4lla.
        </p>

        <h2 className="text-2xl font-bold mb-4 tracking-tight">Kontakta oss</h2>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Har du fr\u00e5gor, tips eller f\u00f6rslag? Tveka inte att{" "}
          <a href="/contact" className="text-[var(--color-accent)] hover:underline">
            kontakta oss
          </a>.
        </p>
      </div>
    </div>
  );
}
