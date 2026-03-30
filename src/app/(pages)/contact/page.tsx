import type { Metadata } from "next";
import { ContactForm } from "./_components/ContactForm";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | TrendRadar",
  description: "Kontakta TrendRadar - vi vill g\u00e4rna h\u00f6ra fr\u00e5n dig.",
};

export default function ContactPage() {
  return (
    <div className="base-width py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Kontakta oss</h1>
        <p className="text-[var(--color-muted)] mb-10 max-w-2xl">
          Har du fr\u00e5gor, nyhetstips eller vill diskutera samarbete? Fyll i
          formul\u00e4ret nedan eller kontakta oss direkt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-[var(--input)] rounded-xl">
              <Mail className="w-5 h-5 text-[var(--color-accent)] mb-2" />
              <h3 className="font-semibold mb-1">E-post</h3>
              <p className="text-sm text-[var(--color-muted)]">
                kontakt@trendradar.se
              </p>
            </div>
            <div className="p-6 bg-[var(--input)] rounded-xl">
              <MapPin className="w-5 h-5 text-[var(--color-accent)] mb-2" />
              <h3 className="font-semibold mb-1">Redaktion</h3>
              <p className="text-sm text-[var(--color-muted)]">
                Stockholm, Sverige
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
