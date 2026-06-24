import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const parole = [
  {
    nome: "Fermarsi",
    citazione:
      "Fermarsi è una grande arte. È un'arte umile. È quella di intuire quando siamo stanchi o quando abbiamo bisogno di camminare piano piano verso noi stessi e non verso qualcosa o qualcun altro",
    autore: "Chandra Livia Candiani",
  },
  {
    nome: "Respirare",
    citazione:
      "Quando ti alzi il mattino, pensa quale prezioso privilegio è essere vivi: respirare, pensare, provare gioia e amare",
    autore: "Marco Aurelio",
  },
  {
    nome: "Silenzio",
    citazione: "La parola è un'ala del silenzio",
    autore: "Pablo Neruda",
  },
  {
    nome: "Accorgersi",
    citazione: "Non mettermi accanto a chi non sa accorgersi più di un tramonto",
    autore: "Alda Merini",
  },
  {
    nome: "Consapevolezza",
    citazione:
      "Il vero viaggio di scoperta non consiste nel trovare nuovi territori, ma nel possedere altri occhi",
    autore: "Marcel Proust",
  },
];

const ParoleBenePresenza = () => {
  return (
    <PageShell title="Presenza" subtitle="Le parole che fanno stare bene">
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

export default ParoleBenePresenza;
