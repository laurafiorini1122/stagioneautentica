import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const parole = [
  {
    nome: "Amare",
    citazione:
      "L'amore impedisce la morte. L'amore è vita. Tutto, tutto ciò che io capisco, lo capisco solamente perché amo",
    autore: "Lev Tolstoj",
  },
  {
    nome: "Relazionarsi",
    citazione:
      "Una volta accettata la consapevolezza che anche fra gli esseri più vicini continuano a esistere distanze infinite, si può evolvere una meravigliosa vita, fianco a fianco, se quegli esseri riescono ad amare questa distanza fra loro, che rende possibile a ciascuno dei due di vedere l'altro, nella sua interezza, stagliato contro il cielo",
    autore: "Rainer Maria Rilke",
  },
  {
    nome: "Lasciare andare",
    citazione:
      "La conoscenza è imparare qualcosa ogni giorno. La saggezza è lasciar andare qualcosa ogni giorno",
    autore: "Proverbio zen",
  },
  {
    nome: "Sorridere",
    citazione: "Il riso è il sole che scaccia l'inverno dal volto umano",
    autore: "Victor Hugo",
  },
];

const ParoleBeneLegame = () => {
  return (
    <PageShell title="Legame" subtitle="Le parole che fanno stare bene">
      <article className="space-y-12">
        {parole.map((p, i) => (
          <div
            key={p.nome}
            className={i > 0 ? "pt-12 border-t border-foreground/15" : ""}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
              {p.nome}
            </h2>
            <p className="mt-5 font-serif italic text-lg leading-[1.8] text-foreground/85">
              {p.citazione}
            </p>
            <p className="mt-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
              — {p.autore}
            </p>
          </div>
        ))}
      </article>

      <div className="mt-16 mb-8">
        <Link
          to="/tracce/le-parole-che-fanno-stare-bene"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna a Le parole che fanno stare bene
        </Link>
      </div>
    </PageShell>
  );
};

export default ParoleBeneLegame;
