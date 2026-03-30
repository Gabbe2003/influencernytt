import type { Metadata } from "next";
import { BarChart3, Users, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Annonsera | TrendRadar",
  description: "Annonsera hos TrendRadar och n\u00e5 beslutsfattare och ekonomiintresserade i Sverige.",
};

export default function AdvertisementPage() {
  return (
    <div className="base-width py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 tracking-tight">Annonsera hos TrendRadar</h1>
        <p className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed">
          N\u00e5 beslutsfattare, investerare och ekonomiintresserade genom att
          annonsera hos TrendRadar. Vi erbjuder annonsl\u00f6sningar som levererar
          resultat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-6 bg-[var(--input)] rounded-xl">
            <Users className="w-7 h-7 text-[var(--color-accent)] mb-3" />
            <h3 className="font-semibold mb-1">Kvalificerad m\u00e5lgrupp</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Beslutsfattare och ekonomiintresserade bes\u00f6kare.
            </p>
          </div>
          <div className="p-6 bg-[var(--input)] rounded-xl">
            <Eye className="w-7 h-7 text-[var(--color-accent)] mb-3" />
            <h3 className="font-semibold mb-1">H\u00f6g synlighet</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Premium-placeringar f\u00f6r maximal effekt.
            </p>
          </div>
          <div className="p-6 bg-[var(--input)] rounded-xl">
            <BarChart3 className="w-7 h-7 text-[var(--color-accent)] mb-3" />
            <h3 className="font-semibold mb-1">M\u00e4tbara resultat</h3>
            <p className="text-sm text-[var(--color-muted)]">
              Detaljerad rapportering och analys av kampanjer.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 tracking-tight">Annonsformat</h2>
        <ul className="space-y-3 mb-8 text-[var(--color-muted)]">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
            Display-annonser (banner, sidebar, in-article)
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
            Sponsrat inneh\u00e5ll och native advertising
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
            Nyhetsbrev-sponsring (Morgonbrevet)
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
            Skr\u00e4ddarsydda kampanjer
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
