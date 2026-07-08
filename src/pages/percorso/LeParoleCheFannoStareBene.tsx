import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const aree = [
  {
    nome: "Presenza",
    href: "/tracce/le-parole-che-fanno-stare-bene/presenza",
    parole: ["Fermarsi", "Respirare", "Silenzio", "Accorgersi", "Consapevolezza"],
  },
  {
    nome: "Slancio",
    href: "/tracce/le-parole-che-fanno-stare-bene/slancio",
    parole: ["Scegliere", "Osare", "Passione", "Impegno", "Volare", "Sognare", "Diversità"],
  },
  {
    nome: "Cura",
    href: "/tracce/le-parole-che-fanno-stare-bene/cura",
    parole: ["Gentilezza", "Rispetto", "Pace", "Leggerezza", "Bellezza", "Semplicità", "Dignità"],
  },
  {
    nome: "Legame",
    href: "/tracce/le-parole-che-fanno-stare-bene/legame",
    parole: ["Amare", "Relazionarsi", "Lasciare andare", "Sorridere"],
  },
];

const LeParoleCheFannoStareBene = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";

  return (
    <PageShell title="Le parole che fanno stare bene">
      <article className="space-y-6">
        <p className={pCls}>
          Ci sono parole che non si limitano a descrivere: fanno qualcosa. Le senti pronunciare o le leggi e qualcosa si allenta, dentro. Non sempre sai spiegare perché. Ho raccolto le mie. Le ho divise per aree, per affinità, come si sistemano le cose quando trovano il loro posto. Forse ne riconosci alcune. Forse ne hai altre, tue. C'è spazio anche per quelle. Scrivi a{" "}
          <a
            href="mailto:redazione@stagioneautentica.it"
            className="underline underline-offset-4 hover:text-foreground/60 transition-colors"
          >
            redazione@stagioneautentica.it
          </a>
          .
        </p>
      </article>

      <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {aree.map((a) => (
          <Link
            key={a.nome}
            to={a.href}
            className="group block border-t border-foreground/20 pt-5 hover:border-foreground/60 transition-colors"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight underline-offset-4 group-hover:underline">
              {a.nome}
            </h2>
            <ul className="mt-4 space-y-1 font-serif text-base text-foreground/70">
              {a.parole.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Link>
        ))}
      </section>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default LeParoleCheFannoStareBene;
