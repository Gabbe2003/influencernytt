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
    <section className="py-12">
      <div className="base-width">
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl p-8 md:p-12 text-center text-white">
          <Mail className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-2">H\u00e5ll dig uppdaterad</h2>
          <p className="text-sm text-gray-300 mb-6 max-w-md mx-auto">
            Prenumerera p\u00e5 v\u00e5rt nyhetsbrev och f\u00e5 de senaste trenderna direkt i din inkorg.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-300">
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
                className="flex-1 px-4 py-3 rounded-lg text-sm text-[var(--color-foreground)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Skickar..." : "Prenumerera"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
