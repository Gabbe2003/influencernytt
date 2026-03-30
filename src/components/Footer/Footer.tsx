import Link from "next/link";
import { TrendingUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-secondary)] text-white mt-16">
      <div className="base-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-[var(--color-accent)]" />
              <span className="text-lg font-bold">
                <span className="text-white">Trend</span>
                <span className="text-[var(--color-accent)]">Radar</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Din k\u00e4lla f\u00f6r de senaste trenderna inom teknik, AI och innovation.
              Vi bevakar framtiden s\u00e5 att du kan ligga steget f\u00f6re.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Kategorier
            </h3>
            <ul className="space-y-2">
              {["Teknik", "AI", "Trender", "Analys"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${cat.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              F\u00f6retag
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Om oss", href: "/about" },
                { label: "Kontakt", href: "/contact" },
                { label: "Annonsera", href: "/advertisement" },
                { label: "Arkiv", href: "/archive" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Juridiskt
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Integritetspolicy", href: "/privacy-policy" },
                { label: "Cookiepolicy", href: "/cookie-policy" },
                { label: "Anv\u00e4ndarvillkor", href: "/terms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} TrendRadar. Alla r\u00e4ttigheter f\u00f6rbeh\u00e5llna.
          </p>
          <Link
            href="/sitemap.xml"
            className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
