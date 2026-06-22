import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import ilSuccessoreImg from "@/assets/unuomo-il-successore.png";

const paragrafi = [
  "Per trentacinque anni un uomo aveva diretto la produzione di un'azienda manifatturiera. Non era stato l'amministratore delegato, non aveva mai avuto il suo nome sulla porta dell'ufficio più grande, ma tutti, in fabbrica, sapevano che era lui a far funzionare le cose. I capireparto lo intercettavano nel corridoio prima di salire dal direttore generale. I problemi salivano fino a lui e lì, nel silenzio del suo ufficio, che odorava di lubrificante e carta stampata, trovavano una soluzione.",
  "Quando arrivò la pensione, l'azienda gli offrì una consulenza di due giorni a settimana. I cancelli si aprivano ancora al suo passaggio, ma il badge aveva il colore cenere dei visitatori: un permesso provvisorio. I primi mesi il nuovo responsabile, un giovane con la cravatta troppo stretta, cercava il suo sguardo davanti ai tabulati. L'uomo spiegava perché quella linea si inceppava sempre il giovedì, perché quel fornitore non andava mai sollecitato per email, ma solo per telefono, perché certi operai rendevano meglio se li si lasciava organizzare da soli le pause.",
  "Poi le domande diradarono. Il giovane portava software che parlavano una lingua straniera e soluzioni già impacchettate. Lo ringraziava con un sorriso asettico. La consulenza finì prima del previsto: semplicemente, un giorno, non lo richiamarono più per fissare la giornata successiva.",
  "A casa, la luce blu del monitor divenne la sua unica finestra sulla fabbrica. Consultava il sito aziendale prima ancora che la caffettiera fischiasse. Scoprì che esisteva un modo per restare informato senza nemmeno chiedere: il sito della Camera di Commercio pubblicava le variazioni di organigramma delle società, i depositi delle nomine, i cambi di procura. Bastava cercare la ragione sociale dell'azienda e tutto appariva, asettico e pubblico, in un elenco di atti notarili.",
  "Capì che il suo successore aveva ottenuto una procura più ampia. Scrutò il profilo del nuovo vice: trentadue anni, un master preso all'estero e un sorriso smagliante in una foto scattata in un ufficio dalle pareti di vetro. Troppa teoria, pensò, mentre le dita tamburellavano sulla scrivania.",
  "Il file «Produzione» nacque così: un documento di testo in cui annotava i nomi, le date delle nomine, le promozioni, gli arrivi e le uscite. Quando un dirigente lasciava l'azienda dopo pochi mesi, l'uomo scriveva un breve commento: «Previsto», oppure «Non aveva capito niente del reparto saldatura».",
  "I figli chiamavano, ma lui rispondeva restando con gli occhi incollati alle variazioni dell'organigramma, limitandosi a dire che si teneva informato. Il rito divenne una liturgia. Camera di Commercio, LinkedIn, rassegna stampa. Le pagine stampate riempivano raccoglitori neri che toglievano spazio ai libri negli scaffali. Sapeva tutto: chi entrava e chi usciva, i fallimenti prima che diventassero palesi, ricostruendo carriere su frammenti di dati pubblici.",
  "Una mattina d'inverno, il file contava quattrocentodue pagine. Il cursore lampeggiava nel buio della stanza. Una notifica segnalò che il suo successore andava in pensione. Una foto davanti ai cancelli, un post di addio per «trent'anni straordinari».",
  "L'uomo lesse il post due volte. Poi aprì il file e scrisse una nuova riga, con la data. Sotto, aggiunse un commento, come faceva sempre. Questa volta rimase a lungo con il cursore lampeggiante, senza scrivere nulla.",
  "Poi digitò: «Vediamo chi metteranno al suo posto».",
];

const IlSuccessore = () => {
  return (
    <PageShell
      title="Il successore"
      subtitle="Restare informati è un modo di non andarsene"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={ilSuccessoreImg}
          alt="Il successore"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full aspect-[16/9] object-cover"
        />
      </div>

      <article className="space-y-6">
        {paragrafi.map((p, i) => (
          <p
            key={i}
            className="font-serif text-lg leading-[1.8] text-foreground/85"
          >
            {p}
          </p>
        ))}
      </article>

      <div className="mt-16 mb-8">
        <Link
          to="/un-uomo"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna a Un uomo
        </Link>
      </div>
    </PageShell>
  );
};

export default IlSuccessore;
