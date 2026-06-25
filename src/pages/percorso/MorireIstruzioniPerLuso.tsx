import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const MorireIstruzioniPerLuso = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";

  return (
    <PageShell title="Morire. Istruzioni per l'uso" subtitle="Una traccia per guardarsi dentro">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-base">Simon Boas</p>
          <p className="text-base text-foreground/70">Garzanti</p>
        </div>

        <p className={pCls}>A breve i contenuti.</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce/le-letture" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna alle letture
        </Link>
      </div>
    </PageShell>
  );
};

export default MorireIstruzioniPerLuso;
