import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiepolicy | TrendRadar",
  description: "L\u00e4s om hur TrendRadar anv\u00e4nder cookies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="base-width py-12">
      <div className="max-w-3xl mx-auto prose">
        <h1>Cookiepolicy</h1>
        <p className="text-[var(--color-muted)]">
          Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
        </p>

        <h2>Vad \u00e4r cookies?</h2>
        <p>
          Cookies \u00e4r sm\u00e5 textfiler som lagras p\u00e5 din enhet n\u00e4r du bes\u00f6ker en
          webbplats. De anv\u00e4nds f\u00f6r att webbplatsen ska fungera korrekt och
          f\u00f6r att f\u00f6rb\u00e4ttra din upplevelse.
        </p>

        <h2>Vilka cookies anv\u00e4nder vi?</h2>
        <ul>
          <li>
            <strong>N\u00f6dv\u00e4ndiga cookies:</strong> Kr\u00e4vs f\u00f6r att webbplatsen ska
            fungera korrekt.
          </li>
          <li>
            <strong>Analyscookies:</strong> Hj\u00e4lper oss att f\u00f6rst\u00e5 hur
            bes\u00f6kare interagerar med webbplatsen.
          </li>
          <li>
            <strong>Annonscookies:</strong> Anv\u00e4nds f\u00f6r att visa relevanta
            annonser.
          </li>
        </ul>

        <h2>Hantera cookies</h2>
        <p>
          Du kan hantera eller ta bort cookies via din webbl\u00e4sares
          inst\u00e4llningar. Observera att detta kan p\u00e5verka webbplatsens
          funktionalitet.
        </p>
      </div>
    </div>
  );
}
