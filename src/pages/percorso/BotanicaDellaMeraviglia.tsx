import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const BotanicaDellaMeraviglia = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";

  return (
    <PageShell title="La botanica della meraviglia" subtitle="Coltivare lo stupore alla fine del mondo">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-base">Maura Gancitano, Andrea Colamedici</p>
          <p className="text-base text-foreground/70">HarperCollins Italia</p>
        </div>

        <p className={pCls}>
          Questo libro suggerisce che la risposta alla domanda «cosa fare nell'ultimo periodo della vita» è un orientamento verso la gioia del presente, verso la fedeltà alla propria natura, verso una presenza che non ha bisogno di giustificazioni future.
        </p>

        <h2 className={hCls}>Morte</h2>
        <p className={pCls}>
          C'è un capitolo intero dedicato alla pratica di frequentare i cimiteri. Gli autori li descrivono come soglie: luoghi dove i vivi e i morti condividono lo stesso spazio, e questa prossimità, invece di pesare, alleggerisce. Il cimitero è un posto dove il tempo rallenta da solo. Ci si cammina in modo diverso, si legge qualche nome, si sta in silenzio. Quella quiete non è malinconia: è chiarezza. Gli autori propongono di attraversare i cimiteri come esercizio concreto. Passarci, sostarci, lasciarsi toccare dalla presenza di chi non c'è più. Non è un rito funebre. È un modo per ricordarsi di essere vivi, ora, mentre si cammina.
        </p>
        <p className={pCls}>
          Heidegger viene citato per dire una cosa semplice: non siamo esseri viventi che un giorno moriranno, siamo esseri che vivono sempre in relazione alla propria fine. Riconoscere questo non paralizza. Apre. Rende ogni gesto più denso, ogni scelta più vera. La vera libertà sta nell'assumere consapevolmente la propria condizione di mortali, facendone il fondamento di un'esistenza significativa.
        </p>

        <h2 className={hCls}>Gioia</h2>
        <p className={pCls}>
          La gioia di cui parlano gli autori non è ottimismo né speranza. È qualcosa di più radicale che Spinoza chiama <em>laetitia</em>: un passaggio verso una potenza maggiore di esistere e agire. Accade nel presente, non dipende da un futuro. Etty Hillesum la esprime così, dal campo di concentramento di Westerbork: «La vita è bella non perché ignoriamo l'orrore, ma perché anche nell'orrore qualcosa in noi continua a fiorire inappropriatamente, ostinatamente, necessariamente.»
        </p>
        <p className={pCls}>
          È la stessa gioia del poeta giapponese Mizuta Masahide che, bruciata la capanna con tutti i suoi averi, scrisse: «La mia capanna è bruciata / ora posso vedere la luna.» La perdita aveva aperto uno spazio nella percezione. Dove prima c'era un tetto, ora c'era il cielo.
        </p>

        <h2 className={hCls}>Il corpo che invecchia</h2>
        <p className={pCls}>
          Il corpo è la meraviglia stessa, incustodibile per eccellenza. Il pensiero è sempre in ritardo rispetto all'esperienza immediata del corpo. Quando invecchi, le rughe si formano indipendentemente da tutte le teorie che hai elaborato. Il corpo sa cose che la mente ha dimenticato di sapere. È depositario di una memoria resistente al tempo e alla malattia, una memoria individuale e collettiva insieme. Accettare questa sua natura, permeabile e in continuo divenire, è una forma di pace più solida di qualsiasi tentativo di controllo.
        </p>

        <h2 className={hCls}>Eudaimonia e senso di sé</h2>
        <p className={pCls}>
          L'introduzione richiama il concetto greco di <em>eudaimonia</em>: vita vissuta secondo la propria natura più profonda. È una modalità dell'esistere, il modo in cui un essere esprime compiutamente ciò che è, anche nelle condizioni più avverse. Ogni atto di fedeltà a sé stessi in un momento difficile è già fioritura.
        </p>

        <h2 className={hCls}>Conoscenza di sé come pratica</h2>
        <p className={pCls}>
          La filosofia, rifacendosi ad André Amar, è un continuo riesame dei propri pensieri: un'igiene mentale che impedisce di irrigidirsi nelle certezze. Ogni persona è potenzialmente filosofa, a patto di fermarsi ogni tanto, di fare una pausa in cui ci si chiede davvero cosa si sta pensando e perché. Senza questo fermarsi, si finisce per essere pensati invece di pensare.
        </p>

        <h2 className={hCls}>Il tempo che resta</h2>
        <p className={pCls}>
          La pratica più trasformativa che il libro propone non è la meditazione né la terapia. È l'attenzione. Prestare attenzione a ciò che si fa, a come ci si sente mentre lo si fa, a cosa accade nel corpo durante un'esperienza. Gli autori tornano più volte su questo: le pratiche che cambiano qualcosa davvero sono quelle che portano la consapevolezza nell'ordinario, non quelle straordinarie che si fanno una volta e si raccontano per anni.
        </p>
        <p className={pCls}>
          La frase finale del libro è: «Finché c'è vita, non c'è speranza. C'è gioia.» È il contrario del nichilismo: la pienezza non va attesa, non dipende da un futuro migliore. È già nell'atto stesso di fare ciò che si sa fare, fino alla fine. Come i musicisti del Titanic che continuarono a suonare: non per eroismo, ma perché quello era il loro modo di essere completamente presenti, completamente sé stessi, nel momento in cui tutto stava per finire.
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

export default BotanicaDellaMeraviglia;
