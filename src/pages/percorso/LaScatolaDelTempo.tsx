import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LaScatolaDelTempo = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="La scatola delle tracce">
      <article className="space-y-6">
        <p className={pCls}>Il percorso fatto fino a qui è intimo, personale, spesso privato. Ma non deve restare per forza chiuso in un cassetto. Possiamo decidere che una parte di queste riflessioni, delle storie della nostra vita, sia raccolta e affidata a chi verrà dopo di noi.</p>
        <p className={pCls}>Non sarebbe bello se i cimiteri raccogliessero le nostre scatole delle tracce? Magari non scatole di carta, ma, come ho immaginato in un racconto, un QR code sulla lapide, che rimanda a quello che vogliamo che gli altri sappiano di noi, un messaggio che può essere ancora utile a chi resta.</p>
        <p className={pCls}>Amo leggere le biografie proprio per questo: per capire come uomini e donne hanno reagito al destino, o quanto sono riusciti a rendere reale ciò che sembrava inarrivabile. Forse anche la nostra storia, per quanto piccola, può diventare quel tipo di lettura per qualcun altro, un giorno.</p>
        <p className={pCls}>Non è necessario compilarla subito né tutta insieme. È uno strumento che si costruisce nel tempo, aggiungendo un pezzo alla volta: una lettera, un oggetto e il suo significato, un consiglio, una fotografia commentata, una ricetta di famiglia, un ricordo che altrimenti andrebbe perso.</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default LaScatolaDelTempo;
