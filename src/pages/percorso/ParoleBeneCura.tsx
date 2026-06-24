import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const parole = [
  {
    nome: "Gentilezza",
    citazione:
      "La principale caratteristica della gentilezza disinteressata è di essere irriconoscibile, inconoscibile, invisibile, insospettabile, perché un beneficio che dica il suo nome non è mai disinteressato",
    autore: "Amélie Nothomb",
  },
  {
    nome: "Rispetto",
    citazione:
      "Quando sei contento di essere semplicemente te stesso e non fai confronti e non competi, tutti ti rispetteranno",
    autore: "Lao Tse",
  },
  {
    nome: "Pace",
    citazione:
      "C'è tale pace profonda e tale immensa bellezza nella natura, che tutto ciò che ci circonda ci invita ad esserne parte",
    autore: "Rabindranath Tagore",
  },
  {
    nome: "Leggerezza",
    citazione:
      "La leggerezza per me si associa con la precisione e la determinazione, non con la vaghezza e l'abbandono al caso",
    autore: "Italo Calvino",
  },
  {
    nome: "Bellezza",
    citazione: "La percezione della bellezza è un test morale",
    autore: "Henry David Thoreau",
  },
  {
    nome: "Semplicità",
    citazione: "La semplicità è la più grande sofisticatezza",
    autore: "Leonardo da Vinci",
  },
  {
    nome: "Dignità",
    citazione:
      "Tutta la vita merita rispetto. È trattando gli altri con dignità che si guadagna il rispetto per se stessi",
    autore: "Tahar Ben Jelloun",
  },
];

const ParoleBeneCura = () => {
  return (
    <PageShell title="Cura" subtitle="Le parole che fanno stare bene">
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

export default ParoleBeneCura;
