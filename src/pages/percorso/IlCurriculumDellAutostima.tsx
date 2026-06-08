import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const IlCurriculumDellAutostima = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Il curriculum dell'autostima" subtitle="Una traccia per guardarsi dentro">
      <article className="space-y-6">
        <p className={pCls}>A breve i contenuti.</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default IlCurriculumDellAutostima;
