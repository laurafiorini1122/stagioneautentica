import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeasonCard from "@/components/SeasonCard";
import homeHero from "@/assets/home-hero.jpg";
import cardUomo from "@/assets/un-uomo.png";
import cardPercorso from "@/assets/Tracce.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader minimal />

      {/* Hero: solo testo */}
      <section className="container py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p
            className="font-sans text-[11px] md:text-xs uppercase tracking-[0.22em] mb-6 flex items-center gap-3"
            style={{ color: "hsl(var(--accent-terracotta))" }}
          >
            <span
              className="inline-block w-7 h-px"
              style={{ background: "hsl(var(--accent-terracotta))" }}
            />
            racconti · strumenti · scrittura collaborativa
          </p>
          <h1
            className="font-serif text-foreground tracking-tight mb-10 leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
          >
            La stagione più{" "}
            <em
              className="italic font-normal"
              style={{ color: "hsl(var(--accent-terracotta))" }}
            >
              autentica
            </em>
          </h1>
          <div
            className="font-sans text-foreground/85 text-base md:text-lg space-y-6"
            style={{ lineHeight: 1.7 }}
          >
            <p>
              La scuola, il lavoro, la carriera ci preparano a produrre, a
              occupare un ruolo, a essere utili. Ma nessuno ci insegna cosa
              fare quando quel ruolo finisce.
            </p>
            <p>
              Questo sito nasce da quel momento — il disorientamento dei
              primi mesi di pensione, la domanda «Cosa fai ora?» che suona
              come una sentenza, e il lungo percorso per trasformare quella
              crisi in qualcosa di inaspettatamente ricco.
            </p>
            <p>
              Attraverso racconti scritti con ironia e lucidità, strumenti
              concreti di riflessione e uno spazio di scrittura collaborativa,
              La stagione più autentica esplora l'ultima fase della vita non
              come un epilogo, ma come il momento in cui, finalmente liberi
              dal ruolo, il tempo è davvero nostro e possiamo scegliere chi
              essere...
            </p>
          </div>
        </div>
      </section>

      {/* Tre card con immagini */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <SeasonCard
            variant="uomo"
            title="Un Uomo"
            subtitle="L'abisso raccontato con ironia"
            to="/un-uomo"
            image={cardUomo}
          />
          <SeasonCard
            variant="donna"
            title="Una Donna"
            subtitle="Il finale riscritto con libertà"
            to="/una-donna"
            image={homeHero}
          />
          <SeasonCard
            variant="tracce"
            title="Tracce"
            subtitle="Percorsi da inventare"
            to="/tracce"
            image={cardPercorso}
            imageClassName="scale-[1.15]"
          />
        </div>
      </section>

      {/* CTA contatti */}
      <section className="container pb-24">
        <div className="max-w-xl mx-auto text-center">
          <Link
            to="/contatti"
            className="inline-block font-sans text-xs uppercase tracking-[0.22em] px-9 py-4 rounded-sm border border-foreground/40 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Contatti
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
