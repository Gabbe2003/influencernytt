"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Search, TrendingUp } from "lucide-react";
import { SearchBar } from "./SearchBar";

const NAV_LINKS = [
  { label: "Hem", href: "/" },
  { label: "Teknik", href: "/category/teknik" },
  { label: "AI", href: "/category/ai" },
  { label: "Trender", href: "/category/trender" },
  { label: "Analys", href: "/category/analys" },
  { label: "Arkiv", href: "/archive" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const today = new Date().toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)] transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top bar */}
        <div className="bg-[var(--color-secondary)] text-white text-xs py-1.5">
          <div className="base-width flex justify-between items-center">
            <span className="capitalize">{today}</span>
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">
                Om oss
              </Link>
              <Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="base-width flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <TrendingUp className="w-7 h-7 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[var(--color-primary)]">Trend</span>
              <span className="text-[var(--color-accent)]">Radar</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-[var(--input)] transition-colors"
              aria-label="S\u00f6k"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[var(--input)] transition-colors"
              aria-label="Meny"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="border-t border-[var(--border)] py-3">
            <div className="base-width">
              <SearchBar onClose={() => setIsSearchOpen(false)} />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-[var(--border)] bg-white">
            <div className="base-width py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium py-2 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
