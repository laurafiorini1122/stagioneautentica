import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LingannevolePauraDiNonEssereAllAltezza = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";
  const qCls = "font-serif italic text-lg leading-[1.8] text-foreground/85 border-l-2 border-foreground/30 pl-6 my-8";

  return (
    <PageShell title="L'ingannevole paura di non essere all'altezza" subtitle="Strategie per riconoscere il proprio valore">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Roberta Milanese</p>
          <p className="text-base text-foreground/70 mt-1">Ponte alle Grazie, 2020</p>
        </div>

        <h2 className={hCls}>Chi è Roberta Milanese</h2>
        <p className={pCls}>
          Psicologa, psicoterapeuta e ricercatrice associata al Centro di Terapia Strategica di Arezzo, diretto da Giorgio Nardone. Dopo la laurea in Psicologia si è specializzata in Psicoterapia Breve Strategica e, successivamente, in Ipnosi Strategica. Da trent'anni collabora con Nardone, contribuendo all'evoluzione del Modello di Terapia Breve Strategica in ambito clinico, organizzativo e della scienza della performance.
        </p>

        <h2 className={hCls}>Il filo comune</h2>
        <p className={pCls}>
          Questo libro parla di una forma di sofferenza silenziosa e molto diffusa: la sensazione permanente di non essere abbastanza. Milanese la chiama "epidemia di insicurezza" e mostra come colpisca spesso proprio le persone più capaci, innescando paure che ostacolano la vita invece di proteggerla. Il punto di arrivo è uno solo: l'autostima non è qualcosa che si riceve, si costruisce sul campo, affrontando le prove e scoprendo di saperle superare.
        </p>

        <h2 className={hCls}>Il valore di sé: un cantiere, non un dono</h2>
        <p className={pCls}>
          L'autostima, spiega Milanese, non è innata. Si guadagna ogni volta che accettiamo di misurarci con qualcosa di difficile e scopriamo di farcela. Chi evita sistematicamente le situazioni rischiose rimane intrappolato in un'insicurezza che si autoalimenta: più evita, più si conferma l'idea di non valere abbastanza. Al contrario, chi accetta piccole prove progressivamente più impegnative costruisce, passo dopo passo, una fiducia reale nelle proprie risorse. Come scrive Nardone, richiamato nel testo: «L'autostima non si eredita, si costruisce».
        </p>

        <h2 className={hCls}>Il giudice interno: quando lo scettico diventa inquisitore</h2>
        <p className={pCls}>
          Molte persone convivono con una voce interna che valuta, critica, sminuisce. Finché questa voce rimane uno "scettico-coach", può spingere a migliorarsi. Il problema sorge quando si trasforma in un inquisitore impietoso che inchioda ogni mattina alle presunte inadeguatezze, rendendo paralizzante anche il più piccolo errore.
        </p>

        <h2 className={hCls}>Il passato come trappola: rimettere le macerie nel passato</h2>
        <p className={pCls}>
          Chi ha accumulato anni di rinunce porta spesso addosso il peso di tutto ciò che non ha fatto: avrei voluto, avrei dovuto, ormai è tardi. Questa catena di "non fatto" blocca il presente e rende impossibile immaginare un futuro diverso. Una tecnica usata in terapia è quella di scrivere tutti i propri disastri passati; in questo modo quello che molti scoprono, è che quei fallimenti visti da vicino non sono poi così gravi. La scrittura aiuta a buttare fuori, a distanziare, a chiudere i conti emotivi con il passato.
        </p>

        <h2 className={hCls}>La strategia del "come peggiorare": se vuoi drizzare una cosa, impara a storcerla di più</h2>
        <p className={pCls}>
          Uno degli strumenti più originali della Psicoterapia Breve Strategica usato nel libro è la tecnica del "come peggiorare". Invece di chiedere alla persona cosa dovrebbe fare per stare meglio, le si chiede cosa farebbe se volesse deliberatamente peggiorare la propria situazione. La domanda sembra assurda, ma funziona: portare alla luce i comportamenti che alimentano il problema permette di vederli con chiarezza e, per avversione, di smettere di metterli in atto.
        </p>
        <p className={qCls}>
          «Se vuoi drizzare una cosa, impara a storcerla di più.»
        </p>

        <h2 className={hCls}>La paura del fallimento: si è sconfitti solo quando ci si arrende</h2>
        <p className={pCls}>
          La paura di fallire porta spesso a non giocare, a tenere l'asticella bassa, a scegliere solo battaglie già vinte. Ma è proprio questo evitamento a impedire la crescita. Milanese mostra, attraverso diversi casi, come il fallimento faccia parte del percorso verso la competenza: si prova, si cade, ci si rialza. L'alternativa, la rinuncia definitiva, è la vera sconfitta.
        </p>

        <h2 className={hCls}>La perfezione come nemica di sé stessi</h2>
        <p className={pCls}>
          Chi si sente inadeguato tende a compensare puntando alla perfezione assoluta: nessun errore, nessuna imperfezione visibile. Ma questa strategia si ritorce contro. Chi vuole essere sempre perfetto in tutto ciò che fa rischia di cadere in grandi imperfezioni per eccesso di rigidità o di perdere completamente il controllo quando non riesce a mantenere lo standard impossibile che si è imposto.
        </p>

        <h2 className={hCls}>Il Decalogo per una sana autostima</h2>
        <p className={pCls}>
          Il libro si chiude con dieci raccomandazioni pratiche. Alcune delle più significative: affrontare le sfide che la vita propone, senza delegare ad altri le prove che ci appartengono. Accettare che non si può piacere a tutti. Coltivare l'arte di migliorare sé stessi senza fermarsi ai risultati già raggiunti. E, soprattutto, ricordare che si è sconfitti solo quando ci si arrende.
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

export default LingannevolePauraDiNonEssereAllAltezza;
