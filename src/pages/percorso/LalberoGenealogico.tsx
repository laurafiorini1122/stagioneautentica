import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LalberoGenealogico = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="L'albero genealogico">
      <article className="space-y-6">
        <p className={pCls}>Dopo il curriculum vitae e la linea del tempo, lo sguardo si allarga. Non più solo la mia storia, ma le persone dentro cui quella storia è nata.</p>
        <p className={pCls}>Ho ripreso la scatola delle fotografie. Non per ordinarle: per rovistare, che è un gesto diverso. Tra quelle foto ho ritrovato facce che non vedevo da anni, e alcune che non vedrò più.</p>
        <p className={pCls}>I parenti non si scelgono. Si trovano, già lì, quando arrivi. Alcuni li hai frequentati abbastanza da costruire qualcosa di vero. Altri li hai tenuti a distanza, o ci hai provato. Anche questo fa parte della storia.</p>
        <p className={pCls}>Quello che ho cercato di fare, guardando quelle foto, è capire cosa ciascuna di quelle persone mi ha lasciato: in positivo e in negativo, perché entrambe le cose contano. Un modo di fare, una frase detta al momento giusto o sbagliato, un oggetto che è ancora in casa e che ogni tanto incontro. A volte è un episodio preciso, una situazione che ricordo bene e che mi ha fatto capire perché quella persona è stata importante, o difficile, o tutte e due le cose insieme.</p>
        <p className={pCls}>Questa traccia parte da lì: dall'albero genealogico come mappa di relazioni, non solo di nomi e date.</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default LalberoGenealogico;
