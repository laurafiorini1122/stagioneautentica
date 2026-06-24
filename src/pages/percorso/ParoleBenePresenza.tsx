import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const parole = ["Fermarsi", "Respirare", "Silenzio", "Accorgersi", "Consapevolezza"];

const ParoleBenePresenza = () => {
  return (
    <PageShell title="Presenza" subtitle="Le parole che fanno stare bene">
      <article className="space-y-6">
        <ul className="font-serif text-xl md:text-2xl leading-[1.8] text-foreground/85 space-y-1">
          {parole.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </article>

      <div className="mt-16 mb-8">
        <Link
          to="/tracce/le-parole-che-fanno-stare-bene"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna alle parole
        </Link>
      </div>
    </PageShell>
  );
};

export default ParoleBenePresenza;
