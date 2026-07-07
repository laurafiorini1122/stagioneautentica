import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LeIntermittenzeDellaMorte = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";
  const qCls = "font-serif italic text-lg leading-[1.8] text-foreground/85 border-l-2 border-foreground/30 pl-6 my-8";

  return (
    <PageShell title="Le intermittenze della morte">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">José Saramago</p>
          <p className="text-base text-foreground/70 mt-1">Feltrinelli, 2006</p>
        </div>

        <h2 className={hCls}>Il limite che dà forma alla vita</h2>
        <p className={pCls}>
          Nel paese del romanzo la morte smette di lavorare da un giorno all'altro. All'inizio la gente esulta, poi si accorge che senza una fine tutto perde contorno: gli ospedali si riempiono di corpi che non muoiono, le famiglie restano sospese in un'attesa senza scadenza. Saramago mostra così una cosa semplice, il limite non è un difetto della vita, è ciò che le dà una forma riconoscibile.
        </p>
        <p className={pCls}>
          Anche le istituzioni che diamo per scontate, la cura dei malati, i riti di commiato, il senso stesso di un futuro, si reggono sull'idea che tutto, prima o poi, finisce. Tolto quel punto fermo, si scopre quanto la nostra organizzazione della vita dipenda dal sapere che ha una fine.
        </p>

        <h2 className={hCls}>L'avviso e l'ultimo tratto di vita</h2>
        <p className={pCls}>
          Quando la morte torna, cambia il modo in cui si presenta: invia una lettera viola una settimana prima, per dare a ciascuno il tempo di sistemare le cose in sospeso, salutare chi ama, fare i conti con quello che lascia.
        </p>
        <p className={pCls}>
          È un'idea che riguarda tutti, non solo i personaggi del libro. Sapere in anticipo quanto tempo resta cambia il modo di viverlo. Non è più tempo da riempire, diventa tempo da usare bene.
        </p>
        <p className={pCls}>
          Eppure la reazione degli uomini alla lettera non è mai semplice. C'è chi vorrebbe sapere e chi preferirebbe non sapere, chi accetta e chi rifiuta. Saramago mette in scena l'ambivalenza reale che ognuno porta dentro di fronte a un termine dichiarato.
        </p>

        <h2 className={hCls}>Conoscere la propria fine per viverla con serenità</h2>
        <p className={pCls}>
          Il romanzo suggerisce che la paura della morte si affievolisce quando la si guarda in faccia, non quando la si tiene lontana dai pensieri. Chi ha amato ed è stato presente alla propria vita arriva a quel momento con meno cose lasciate a metà.
        </p>
        <p className={pCls}>
          La morte, con la lettera viola, diventa quasi un invito a mettere ordine prima che sia tardi: un gesto che nel romanzo appartiene a un'entità soprannaturale, ma che nella vita reale tocca a ciascuno di noi decidere di fare da sé, senza aspettare un avviso.
        </p>

        <h2 className={hCls}>Il presente come unica risposta</h2>
        <p className={pCls}>
          Non potendo controllare quando arriverà la fine, resta solo una cosa su cui si ha davvero potere: come si vive il tempo che c'è ora. Il romanzo lo mostra per contrasto, mettendo in scena un'umanità che, liberata dalla morte, non sa più cosa fare del proprio tempo.
        </p>
        <p className={pCls}>
          La chiusura del libro riporta tutto al punto di partenza, con la stessa frase con cui si era aperto:
        </p>
        <p className={qCls}>
          «Il giorno seguente non morì nessuno.»
        </p>
        <p className={pCls}>
          Il cerchio si chiude e il senso resta lo stesso: è il limite a rendere ogni giorno degno di essere vissuto.
        </p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce/le-letture" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna alle letture
        </Link>
      </div>
    </PageShell>
  );
};

export default LeIntermittenzeDellaMorte;
