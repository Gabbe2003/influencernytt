import type { Metadata } from "next";
import { BarChart3, Users, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Annonsera | TrendRadar",
  description: "Annonsera hos TrendRadar och n\u00e5 en engagerad m\u00e5lgrupp intresserad av teknik, AI och innovation.",
};

export default function AdvertisementPage() {
  return (
    <div className="base-width py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Annonsera hos TrendRadar</h1>
        <p className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed">
          N\u00e5 en engagerad och teknikintresserad m\u00e5lgrupp genom att annonsera hos
          TrendRadar. Vi erbjuder skr\u00e4ddarsydda annonsl\u00f6sningar som hj\u00e4lper
          ditt varum\u00e4rke att synas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-[var(--input)] rounded-xl text-center">
            <Users className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Engagerad m\u00e5lgrupp</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Bes\u00f6kare intresserade av teknik och innovation.
            </p>
          </div>
          <div className="p-6 bg-[var(--input)] rounded-xl text-center">
            <Eye className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
            <h3 className="font-semibold mb-1">H\u00f6g synlighet</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Premium-placeringar f\u00f6r maximal effekt.
            </p>
          </div>
          <div className="p-6 bg-[var(--input)] rounded-xl text-center">
            <BarChart3 className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
            <h3 className="font-semibold mb-1">M\u00e4tbara resultat</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Detaljerad rapportering och analys.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Annonsformat</h2>
        <ul className="space-y-3 mb-8 text-[var(--color-muted)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] font-bold">\u2022</span>
            Display-annonser (banner, sidebar, in-article)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] font-bold">\u2022</span>
            Sponsrat inneh\u00e5ll och native advertising
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] font-bold">\u2022</span>
            Nyhetsbrev-sponsring
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] font-bold">\u2022</span>
            Anpassade kampanjer
          </li>
        </ul>

        <p className="text-[var(--color-muted)]">
          Intresserad? Kontakta oss p\u00e5{" "}
          <a href="mailto:annons@trendradar.se" className="text-[var(--color-accent)] hover:underline">
            annons@trendradar.se
          </a>{" "}
          eller via v\u00e5rt{" "}
          <a href="/contact" className="text-[var(--color-accent)] hover:underline">
            kontaktformul\u00e4r
          </a>.
        </p>
      </div>
    </div>
  );
}
