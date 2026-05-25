import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SeasonCard from "@/components/SeasonCard";
import homeHero from "@/assets/home-hero.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Immagine d'apertura */}
      <section className="container pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-sm">
          <img
            src={homeHero}
            alt="Sentiero nel bosco con panchina di legno affacciata su un lago di montagna"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Sezione introduttiva */}
      <section className="container pb-16 md:pb-24">
        <div
          className="mx-auto font-serif text-foreground/85 text-lg md:text-xl text-left"
          style={{ maxWidth: "680px", lineHeight: 1.8 }}
        >
          <p className="mb-6">
            La scuola, il lavoro, la carriera ci preparano a produrre, a occupare
            un ruolo, a essere utili. Ma nessuno ci insegna cosa fare quando quel
            ruolo finisce.
          </p>
          <p className="mb-6">
            Questo sito nasce da quel momento — il disorientamento dei primi mesi
            di pensione, la domanda «Cosa fai ora?» che suona come una sentenza,
            e il lungo percorso per trasformare quella crisi in qualcosa di
            inaspettatamente ricco.
          </p>
          <p>
            Attraverso racconti scritti con ironia e lucidità, strumenti concreti
            di riflessione e uno spazio di scrittura collettiva, La stagione più
            autentica esplora l'ultima fase della vita non come un epilogo, ma
            come il momento in cui, finalmente liberi dal ruolo, il tempo è
            davvero nostro e possiamo scegliere chi essere...
          </p>
        </div>
      </section>

      {/* Tre card */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <SeasonCard
            title="Un Uomo"
            subtitle="L'abisso raccontato con ironia"
            to="/un-uomo"
            variant="uomo"
          />
          <SeasonCard
            title="Una Donna"
            subtitle="Il finale riscritto con libertà"
            to="/una-donna"
            variant="donna"
          />
          <SeasonCard
            title="Un Percorso"
            subtitle="Gli strumenti per guardarsi dentro"
            to="/il-percorso"
            variant="percorso"
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
