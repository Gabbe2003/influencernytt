"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Subscribe error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-14">
      <div className="base-width">
        <div className="relative overflow-hidden bg-[var(--color-secondary)] rounded-2xl p-8 md:p-14 text-center text-white">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <Mail className="w-9 h-9 mx-auto mb-4 text-[var(--color-accent)]" />
            <h2 className="text-2xl font-bold mb-2 tracking-tight">
              Morgonbrevet \u2014 ekonomin sammanfattad
            </h2>
            <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
              F\u00e5 dagens viktigaste ekonominyheter, marknadsdata och analyser
              direkt i din inkorg varje morgon. Gratis.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-[var(--color-accent)]">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Tack! Du \u00e4r nu prenumerant.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="din@email.se"
                  required
                  className="flex-1 px-4 py-3 rounded-xl text-sm text-[var(--color-foreground)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-xl text-sm font-semibold hover:brightness-110 transition-all disabled:opacity-50"
                >
                  {loading ? "Skickar..." : "Prenumerera"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
