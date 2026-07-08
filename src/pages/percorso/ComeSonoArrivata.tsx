import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const ComeSonoArrivata = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Alcune Tracce">
      <article className="space-y-6">
        <p className={pCls}>Questa sezione si chiama Tracce perché una traccia non si legge in fretta: va fermata, guardata, a volte riletta. Può essere qualcosa che hai lasciato tu o qualcosa che altri hanno lasciato su di te. In ogni caso, per capirla occorre fermarsi.</p>
        <p className={pCls}>Trovi qui vari spunti da seguire, da ignorare o da modificare secondo le tue esigenze. Non c'è un ordine da rispettare: si può partire da quello che più incuriosisce, lasciarne uno a metà e tornarci mesi dopo. Non serve finire uno strumento prima di passare al successivo. Bastano pochi minuti, una pagina alla volta.</p>
        <p className={pCls}>Strumenti concreti che ho usato io e che propongo non come ricetta ma come punto di partenza.</p>
        <p className={pCls}>Ognuno di questi strumenti guarda a un pezzo diverso della tua storia. Messi insieme, disegnano qualcosa di più grande: non solo cosa hai fatto, ma chi sei stata dentro quello che hai fatto. È un percorso che porta dritto al curriculum dell'autostima, il cuore di questa sezione. Perché, come diceva Osho, "abbandona l'idea di diventare qualcuno: sei già un capolavoro, devi solo realizzarlo." Trovare il tempo per crederci davvero, qualsiasi percorso tu abbia fatto, è forse la cosa più importante che puoi fare qui.</p>
        <p className={pCls}>Il curriculum vitae, la linea del tempo, l'albero genealogico, i luoghi, le parole che fanno stare bene: ciascuno è un modo diverso di guardarsi e di capire da dove si parte.</p>
        <p className={pCls}>Compilarli richiede fatica, soprattutto all'inizio. Ma una volta cominciato, viene voglia di andare avanti.</p>
        <p className={pCls}>È un percorso molto intimo. Possiamo suggerirci nuovi strumenti o migliorare quelli che propongo, alcuni li possiamo condividere.</p>
        <p className={pCls}>Se hai dei suggerimenti scrivi a <a href="mailto:redazione@stagioneautentica.it" className="underline underline-offset-4 hover:text-foreground/60 transition-colors">redazione@stagioneautentica.it</a></p>

        <p className={pCls}><em>Curriculum Vitae</em> — Il punto di partenza: rileggere il proprio percorso professionale con occhi nuovi, per capire cosa quell'elenco racconta davvero, e cosa lascia fuori.</p>
        <p className={pCls}><em>Linea del Tempo</em> — Dal curriculum alla vita intera: gli anni, i luoghi, gli eventi, e soprattutto come hai risposto a quello che ti è successo.</p>
        <p className={pCls}><em>Albero genealogico</em> — Le radici che non hai scelto: cosa ti hanno dato, nel bene e nel male, le persone da cui vieni.</p>
        <p className={pCls}><em>Incontri</em> — Le persone che il caso ha messo sul tuo cammino: buoni e cattivi maestri, compagni di viaggio, conflitti che ti hanno cambiata.</p>
        <p className={pCls}><em>Luoghi</em> — Non i viaggi, ma le atmosfere rimaste dentro: luci, profumi, spazi che hanno contato, grandi o piccoli che siano.</p>
        <p className={pCls}><em>Curriculum dell'autostima</em> — Il punto d'arrivo: mettere insieme tutto il percorso fatto per riconoscere, finalmente, quanto vali.</p>

        <p className={pCls}>Seguono poi altri strumenti, meno legati a un percorso in sequenza:</p>

        <p className={pCls}><em>Parole che fanno stare bene</em> — Le parole che, quando le leggi o le senti, allentano qualcosa dentro.</p>
        <p className={pCls}><em>La Fine</em> — Pensare alla morte per dare più senso al tempo che resta, e per lasciare scritte le proprie volontà.</p>
        <p className={pCls}><em>La Scatola delle Tracce</em> — Cosa vuoi lasciare a chi verrà dopo di te.</p>
        <p className={pCls}><em>Letture</em> — Libri che accompagnano le domande di questo momento della vita.</p>
        <p className={pCls}><em>Film</em> — Storie che raccontano, per immagini, alcuni dei temi di questa sezione.</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default ComeSonoArrivata;
