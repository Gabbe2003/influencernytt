import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-secondary)] text-white/70 mt-20">
      <div className="base-width py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo size="md" />
            </Link>
            <p className="text-sm leading-relaxed">
              Sveriges ledande plattform f\u00f6r ekonominyheter, marknadsanalys
              och finansiell information. Vi g\u00f6r ekonomi begripligt.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">
              Kategorier
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Ekonomi", href: "/category/ekonomi" },
                { label: "Marknad", href: "/category/marknad" },
                { label: "Finans", href: "/category/finans" },
                { label: "Politik", href: "/category/politik" },
                { label: "B\u00f6rs", href: "/category/bors" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">
              F\u00f6retag
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Om oss", href: "/about" },
                { label: "Kontakt", href: "/contact" },
                { label: "Annonsera", href: "/advertisement" },
                { label: "Arkiv", href: "/archive" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">
              Juridiskt
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Integritetspolicy", href: "/privacy-policy" },
                { label: "Cookiepolicy", href: "/cookie-policy" },
                { label: "Anv\u00e4ndarvillkor", href: "/terms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} TrendRadar. Alla r\u00e4ttigheter f\u00f6rbeh\u00e5llna.
          </p>
          <Link
            href="/sitemap.xml"
            className="text-xs text-white/30 hover:text-white/50 transition-colors"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
