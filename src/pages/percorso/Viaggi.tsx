import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const Viaggi = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Luoghi">
      <article className="space-y-6">
        <p className={pCls}>Ci sono luoghi che restano dentro come atmosfere più che come immagini: una luce particolare, un profumo, un suono di sottofondo. Non sono le fotografie a custodirli, quelle fissano un'inquadratura, ma qualcosa di più impreciso che portiamo con noi.</p>
        <p className={pCls}>Non serve pensare ai viaggi intorno al mondo: se ci sono stati, ben vengano, ma non sono indispensabili. Vanno bene anche i piccoli spostamenti, un cortile, una strada percorsa mille volte, la casa di chi non c'è più. Quello che conta non è la distanza percorsa, ma cosa quel luogo ha significato per te in quel momento della vita.</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default Viaggi;
