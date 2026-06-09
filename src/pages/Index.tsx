import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeasonCard from "@/components/SeasonCard";
import homeHero from "@/assets/home-hero.jpg";
import cardUomo from "@/assets/un-uomo.png";
import cardDonna from "@/assets/una-donna.jpg";
import cardPercorso from "@/assets/Tracce.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader minimal />

      {/* Hero: solo testo, larghezza allineata alle 3 card */}
      <section className="container py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h1
            className="font-serif text-foreground tracking-tight mb-10"
            style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", lineHeight: 1.2 }}
          >
            La stagione più autentica
          </h1>
          <div
            className="font-serif text-foreground/85 text-base md:text-lg space-y-6"
            style={{ lineHeight: 1.8 }}
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
              concreti di riflessione e uno spazio di scrittura collettiva,
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
            title="Un Uomo"
            subtitle="L'abisso raccontato con ironia"
            to="/un-uomo"
            image={cardUomo}
          />
          <SeasonCard
            title="Una Donna"
            subtitle="Il finale riscritto con libertà"
            to="/una-donna"
            image={homeHero}
          />
          <SeasonCard
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
            className="inline-block font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm border border-foreground/40 text-foreground hover:bg-foreground hover:text-background transition-colors"
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
