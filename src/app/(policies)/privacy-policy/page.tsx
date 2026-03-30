import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy | TrendRadar",
  description: "L\u00e4s TrendRadars integritetspolicy och hur vi hanterar dina personuppgifter.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="base-width py-12">
      <div className="max-w-3xl mx-auto prose">
        <h1>Integritetspolicy</h1>
        <p className="text-[var(--color-muted)]">
          Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
        </p>

        <h2>1. Insamling av information</h2>
        <p>
          Vi samlar in information som du frivilligt tillhandah\u00e5ller oss, till
          exempel n\u00e4r du prenumererar p\u00e5 v\u00e5rt nyhetsbrev eller kontaktar oss
          via kontaktformul\u00e4ret.
        </p>

        <h2>2. Anv\u00e4ndning av information</h2>
        <p>
          Vi anv\u00e4nder den insamlade informationen f\u00f6r att tillhandah\u00e5lla och
          f\u00f6rb\u00e4ttra v\u00e5ra tj\u00e4nster, skicka nyhetsbrev och kommunicera med dig.
        </p>

        <h2>3. Cookies</h2>
        <p>
          Vi anv\u00e4nder cookies f\u00f6r att f\u00f6rb\u00e4ttra din upplevelse p\u00e5 v\u00e5r webbplats.
          Du kan v\u00e4lja att inaktivera cookies i din webbl\u00e4sares inst\u00e4llningar.
        </p>

        <h2>4. Tredjeparter</h2>
        <p>
          Vi delar inte dina personuppgifter med tredjeparter utan ditt
          samtycke, f\u00f6rutom n\u00e4r det kr\u00e4vs enligt lag.
        </p>

        <h2>5. Kontakt</h2>
        <p>
          Om du har fr\u00e5gor om v\u00e5r integritetspolicy, kontakta oss p\u00e5{" "}
          <a href="mailto:kontakt@trendradar.se">kontakt@trendradar.se</a>.
        </p>
      </div>
    </div>
  );
}
