import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LaNotteNonFaPaura = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";
  const qCls = "font-serif italic text-lg leading-[1.8] text-foreground/85 border-l-2 border-foreground/30 pl-6 my-8";

  return (
    <PageShell title="La notte non fa paura" subtitle="Riflessioni sulla morte come parte della vita">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Kathryn Mannix</p>
          <p className="text-base text-foreground/70 mt-1">Corbaccio, 2018</p>
        </div>

        <p className={pCls}>
          Kathryn Mannix ha trascorso trent'anni accanto a persone che morivano. Quello che ha imparato, e che racconta in questo libro, è che la morte fa meno paura quando smette di essere un tabù e diventa qualcosa di cui si può parlare, con calma, tra persone normali.
        </p>

        <h2 className={hCls}>Morte</h2>
        <p className={pCls}>
          Mannix parte da una convinzione precisa: la morte, nella maggior parte dei casi, non è un'agonia. Il corpo ha un suo modo di prepararsi, di rallentare, di lasciarsi andare. Il dolore che temiamo è spesso quello dell'immaginazione, non quello dell'esperienza. Il suo lavoro in cure palliative le ha mostrato che le persone che muoiono con più serenità sono quelle che ci avevano pensato prima, che non erano state lasciate sole con il silenzio.
        </p>
        <p className={pCls}>
          La paura della morte, dice, è in larga parte una paura del non sapere. Parlarne aiuta, non perché risolva qualcosa, ma perché toglie il peso dell'indicibile.
        </p>

        <h2 className={hCls}>Il presente</h2>
        <p className={pCls}>
          Nelle pause tra le storie, Mannix invita chi legge a usare le vite altrui come specchio. Non per rattristarsi, ma per chiedersi: come sto attraversando la mia esistenza? Con quale sguardo guardo il mondo? Sono davvero presente in quello che faccio?
        </p>
        <p className={pCls}>
          Chi lavora con i malati terminali lo sa: stare vicino a chi sta per morire cambia il modo di stare nella vita. Succede ai pazienti, succede ai familiari, succede ai medici stessi. L'urgenza del presente smette di essere un'idea astratta.
        </p>

        <h2 className={hCls}>Conoscenza di sé</h2>
        <p className={pCls}>
          Le storie del libro non sono solo storie di morte. Sono storie di persone che, proprio alla fine, capiscono qualcosa di sé stesse che non avevano ancora visto. C'è chi fa pace con una relazione, chi smette di rimandare una conversazione, chi scopre che ciò che contava davvero non era quello che pensava.
        </p>
        <p className={pCls}>
          Mannix non lo dice con tono sentenzioso. Lo racconta, e basta. Ma il messaggio arriva: la conoscenza di sé non è un lusso per chi ha tempo. È qualcosa che matura, se la si coltiva, e che porta frutto esattamente quando più serve.
        </p>

        <h2 className={hCls}>Come abitare l'ultimo periodo</h2>
        <p className={pCls}>
          Uno dei contributi più originali del libro è restituire dignità al processo del morire. Mannix descrive come le persone che muoiono bene, di solito, abbiano avuto accanto qualcuno in grado di stare nel presente con loro, senza fuggire, senza riempire il silenzio di false speranze.
        </p>
        <p className={qCls}>
          «Le storie di persone che riescono ad amare e vivere intensamente la vita che stanno per abbandonare non perché siano persone eccezionali, ma perché è così che si comportano gli umani.»
        </p>
        <p className={pCls}>
          Questa frase, scritta da Mannix stessa, è forse il cuore del libro. Morire bene non è un talento raro. È qualcosa di cui siamo capaci, se qualcuno ci prepara il terreno.
        </p>

        <h2 className={hCls}>Il valore della comunicazione</h2>
        <p className={pCls}>
          Da giovane medica, Mannix assistette a una comunicazione di diagnosi fatta in modo così freddo da sembrare crudele. Da quel momento, ha cercato un modo diverso di stare con i pazienti: uno in cui le parole avessero peso, i silenzi fossero rispettati e la verità venisse detta con cura. Non nascosta, ma portata con garbo.
        </p>
        <p className={pCls}>
          Il libro nasce da lì: dalla convinzione che parlare della morte apra uno spazio più ampio alla vita. Che sapere come finisce aiuti a capire come si vuole vivere.
        </p>
        <p className={qCls}>
          «Il mio scopo è reclamare uno spazio pubblico alla morte: è importante che tutti ne possano parlare apertamente.»
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

export default LaNotteNonFaPaura;
