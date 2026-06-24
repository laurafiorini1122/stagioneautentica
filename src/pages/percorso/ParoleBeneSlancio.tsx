import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const parole = [
  {
    nome: "Scegliere",
    citazione:
      "Per l'uomo arriva un momento in cui non ha più la libertà di scelta, non perché ha scelto ma perché non l'ha fatto",
    autore: "Søren Kierkegaard",
  },
  {
    nome: "Osare",
    citazione:
      "Non è perché le cose sono difficili che non osiamo, è perché non osiamo che sono difficili",
    autore: "Seneca",
  },
  {
    nome: "Passione",
    citazione:
      "Le passioni fanno vivere l'uomo, la saggezza lo fa soltanto vivere a lungo",
    autore: "Nicolas de Chamfort",
  },
  {
    nome: "Impegno",
    citazione:
      "Hai mai provato? Hai mai fallito? Non importa. Prova ancora. Fallisci ancora. Fallisci meglio",
    autore: "Samuel Beckett",
  },
  {
    nome: "Volare",
    citazione: "Gli uccelli nati in una gabbia pensano che volare sia una malattia",
    autore: "Alejandro Jodorowsky",
  },
  {
    nome: "Sognare",
    citazione: "Nel sogno sei autore e non sai come andrà a finire",
    autore: "Cesare Pavese",
  },
  {
    nome: "Diversità",
    citazione: "Colui che differisce da me, lungi dal danneggiarmi, mi arricchisce",
    autore: "Antoine de Saint-Exupéry",
  },
];

const ParoleBeneSlancio = () => {
  return (
    <PageShell title="Slancio" subtitle="Le parole che fanno stare bene">
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

export default ParoleBeneSlancio;
