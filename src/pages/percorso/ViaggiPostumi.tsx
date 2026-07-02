import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const ViaggiPostumi = () => {
  return (
    <PageShell title="Viaggi postumi" subtitle="Avventure post-mortem dei personaggi illustri">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Omar Lopez</p>
          <p className="text-base text-foreground/70 mt-1">Odoya, 2012</p>
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

export default ViaggiPostumi;
