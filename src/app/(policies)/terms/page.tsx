import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anv\u00e4ndarvillkor | TrendRadar",
  description: "L\u00e4s TrendRadars anv\u00e4ndarvillkor.",
};

export default function TermsPage() {
  return (
    <div className="base-width py-12">
      <div className="max-w-3xl mx-auto prose">
        <h1>Anv\u00e4ndarvillkor</h1>
        <p className="text-[var(--color-muted)]">
          Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
        </p>

        <h2>1. Allm\u00e4nt</h2>
        <p>
          Genom att anv\u00e4nda TrendRadar accepterar du dessa anv\u00e4ndarvillkor.
          Om du inte accepterar villkoren, v\u00e4nligen avst\u00e5 fr\u00e5n att anv\u00e4nda
          webbplatsen.
        </p>

        <h2>2. Inneh\u00e5ll</h2>
        <p>
          Allt inneh\u00e5ll p\u00e5 TrendRadar \u00e4r skyddat av upphovsr\u00e4tt. Du f\u00e5r inte
          kopiera, distribuera eller p\u00e5 annat s\u00e4tt anv\u00e4nda inneh\u00e5llet utan
          v\u00e5rt skriftliga samtycke.
        </p>

        <h2>3. Ansvarsbegr\u00e4nsning</h2>
        <p>
          Informationen p\u00e5 TrendRadar tillhandah\u00e5lls i informationssyfte.
          Vi garanterar inte att informationen \u00e4r fullst\u00e4ndig, korrekt eller
          aktuell.
        </p>

        <h2>4. \u00c4ndringar</h2>
        <p>
          Vi f\u00f6rbeh\u00e5ller oss r\u00e4tten att \u00e4ndra dessa villkor n\u00e4r som helst.
          \u00c4ndringar tr\u00e4der i kraft n\u00e4r de publiceras p\u00e5 denna sida.
        </p>
      </div>
    </div>
  );
}
