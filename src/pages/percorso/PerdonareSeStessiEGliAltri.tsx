import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const PerdonareSeStessiEGliAltri = () => {
  return (
    <PageShell title="Perdonare se stessi e gli altri" subtitle="Strategie per fare pace con il passato">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-base">Guidalberto Bormolini, Roberta Milanese</p>
        </div>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce/le-letture" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna alle letture
        </Link>
      </div>
    </PageShell>
  );
};

export default PerdonareSeStessiEGliAltri;
