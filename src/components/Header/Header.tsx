"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { label: "Hem", href: "/" },
  { label: "Ekonomi", href: "/category/ekonomi" },
  { label: "Marknad", href: "/category/marknad" },
  { label: "Finans", href: "/category/finans" },
  { label: "Politik", href: "/category/politik" },
  { label: "B\u00f6rs", href: "/category/bors" },
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
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--border)] transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[var(--color-secondary)] text-white/80 text-xs py-1.5">
        <div className="base-width flex justify-between items-center">
          <span className="capitalize">{today}</span>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white transition-colors">
              Om oss
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Kontakt
            </Link>
            <Link href="/advertisement" className="hover:text-white transition-colors">
              Annonsera
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="base-width flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--input)] rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-lg hover:bg-[var(--input)] transition-colors"
            aria-label="S\u00f6k"
          >
            <Search className="w-[18px] h-[18px] text-[var(--color-muted)]" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--input)] transition-colors"
            aria-label="Meny"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
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
          <div className="base-width py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2.5 px-3 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--input)] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
