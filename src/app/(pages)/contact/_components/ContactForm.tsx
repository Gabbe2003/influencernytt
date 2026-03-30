"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 bg-[var(--input)] rounded-xl text-center">
        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-2">Tack f\u00f6r ditt meddelande!</h3>
        <p className="text-sm text-[var(--color-muted)]">
          Vi \u00e5terkommer s\u00e5 snart som m\u00f6jligt.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Namn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 bg-[var(--input)] border border-[var(--border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            E-post
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 bg-[var(--input)] border border-[var(--border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          \u00c4mne
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full px-4 py-2.5 bg-[var(--input)] border border-[var(--border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 bg-[var(--input)] border border-[var(--border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-vertical"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {loading ? "Skickar..." : "Skicka meddelande"}
      </button>
    </form>
  );
}
