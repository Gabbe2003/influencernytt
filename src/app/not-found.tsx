import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="base-width py-24 text-center">
      <h1 className="text-6xl font-bold text-[var(--color-accent)] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Sidan hittades inte</h2>
      <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
        Sidan du letar efter finns inte eller har flyttats.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <Home className="w-4 h-4" />
        Tillbaka till startsidan
      </Link>
    </div>
  );
}
