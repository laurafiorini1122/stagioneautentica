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
          Questo libro suggerisce che la risposta alla domanda «cosa fare nell'ultimo periodo della vita» non è una strategia, ma un orientamento verso la gioia del presente, verso la fedeltà alla propria natura, verso una presenza che non ha bisogno di giustificazioni future.
        </p>

        <h2 className={hCls}>Morte</h2>
        <p className={pCls}>
          C'è un capitolo intero dedicato alla pratica di frequentare i cimiteri, non come luogo di dolore, ma come spazio dove rallentare e guardare la vita da un'angolatura diversa. Heidegger viene usato per dire una cosa semplice: non siamo esseri viventi che un giorno moriranno, siamo esseri che vivono sempre in relazione alla propria fine. Riconoscere questo non paralizza. Apre. Rende ogni gesto più denso, ogni scelta più vera. La vera libertà non sta nel fuggire dalla condizione di mortali, ma nell'assumersela consapevolmente, facendone il fondamento di un'esistenza significativa.
        </p>

        <h2 className={hCls}>Gioia</h2>
        <p className={pCls}>
          La gioia di cui parlano gli autori non è ottimismo né speranza. È qualcosa di più radicale. Spinoza la chiama <em>laetitia</em>: non uno stato emotivo, ma un passaggio verso una potenza maggiore di esistere e agire. Accade nel presente, non dipende da un futuro. Etty Hillesum la esprime così, dal campo di Westerbork: «La vita è bella non perché ignoriamo l'orrore, ma perché anche nell'orrore qualcosa in noi continua a fiorire inappropriatamente, ostinatamente, necessariamente.» È la stessa gioia del poeta giapponese Mizuta Masahide che, bruciata la capanna con tutti i suoi averi, scrisse: «La mia capanna è bruciata / ora posso vedere la luna.» La perdita aveva aperto uno spazio nella percezione. Dove prima c'era un tetto, ora c'era il cielo.
        </p>

        <h2 className={hCls}>Il corpo che invecchia</h2>
        <p className={pCls}>
          Il corpo non è uno strumento che usiamo: è la meraviglia stessa, incustodibile per eccellenza. Il pensiero è sempre in ritardo rispetto all'esperienza immediata del corpo. Quando invecchi, le rughe si formano indipendentemente da tutte le teorie sull'invecchiamento che hai elaborato. Il corpo sa cose che la mente ha dimenticato di sapere. È depositario di una memoria resistente al tempo e alla malattia, una memoria che non è solo individuale ma anche collettiva. Accettare questa sua natura, permeabile e in continuo divenire, è una forma di pace più solida di qualsiasi tentativo di controllo.
        </p>

        <h2 className={hCls}>Eudaimonia e senso di sé</h2>
        <p className={pCls}>
          L'introduzione richiama il concetto greco di <em>eudaimonia</em>, non come felicità momentanea, ma come vita vissuta secondo la propria natura più profonda. Non è uno stato emotivo: è una modalità dell'esistere, il modo in cui un essere esprime compiutamente ciò che è, anche nelle condizioni più avverse. Ogni atto di fedeltà a sé stessi in un momento difficile è già fioritura.
        </p>

        <h2 className={hCls}>Conoscenza di sé come pratica</h2>
        <p className={pCls}>
          La filosofia, rifacendosi ad André Amar, non è una collezione di opinioni su questioni trascendentali. È un continuo riesame dei propri pensieri, un'igiene mentale che impedisce di irrigidirsi nelle certezze. Ogni persona è potenzialmente filosofa, a patto di fermarsi ogni tanto a fare un pit-stop esistenziale. Senza questo fermarsi, si finisce per essere pensati invece di pensare.
        </p>

        <h2 className={hCls}>Il tempo che resta</h2>
        <p className={pCls}>
          La frase finale del libro è: «Finché c'è vita, non c'è speranza. C'è gioia.» Non è nichilismo. È il contrario: la pienezza non va attesa, non dipende da un futuro migliore. È già nell'atto stesso di fare ciò che si sa fare, fino alla fine. Come i musicisti del Titanic che continuarono a suonare non per eroismo, ma perché quello era il loro modo di essere completamente presenti, completamente se stessi, nel momento in cui tutto stava per finire.
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
