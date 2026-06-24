import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/donna-pagine-intonse.png";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per trentanove anni una donna aveva lavorato nell'ufficio tecnico di un'azienda di componenti alimentari. Negli ultimi quindici, il suo corpo era diventato l'estensione dei macchinari: le sue dita sapevano quale valvola tendesse a bloccarsi col freddo e le sue orecchie distinguevano il ritardo di un fornitore dal rumore di un cuscinetto usurato. Conosceva la differenza tra la procedura d'emergenza scritta per gli ispettori e quella che, nel cuore della notte, salvava davvero la produzione.",
  "Quando arrivò il momento della pensione, l'azienda le propose di dedicare gli ultimi sei mesi alla stesura di un manuale di passaggio. La donna accettò subito: la mattina seguente era già alla scrivania, con le dita pronte sulla tastiera e un rigore che non lasciava spazio a esitazioni.",
  "Riempì le pagine con una precisione chirurgica. Scrisse procedure per ogni ingranaggio, allegando foto, schemi e i numeri privati dei tecnici di assistenza, annotando persino gli orari migliori per chiamarli perché certi esperti, di mattina, erano più collaborativi. Per ogni guasto, descrisse la soluzione vera, quella distillata in decenni di tentativi e silenzi davanti alle macchine che avevano smesso di girare.",
  "Il risultato finale fu un'opera in tre volumi blu scuro. La donna passò intere giornate a testare i rimandi dell'indice analitico, valutando con precisione i secondi necessari per passare dalla voce «Valvola» alla sottosezione «Blocco termico»: doveva essere un congegno perfetto.",
  "L'ultimo giorno di lavoro, consegnò l'opera alla sua successora, una giovane ingegnera di trentacinque anni. La ragazza la ringraziò, sfogliò le pagine con un cenno del capo e le posò sulla scrivania ancora sgombra. La donna chiuse la porta del suo ufficio e consegnò le chiavi alla vigilanza. Camminò verso il parcheggio con la schiena dritta, senza mai voltarsi a guardare le finestre del reparto tecnico.",
  "Negli anni che seguirono, durante gli inverni più rigidi, la donna osservava i fumi della fabbrica in lontananza.",
];

const PagineIntonseDonna = () => (
  <PageShell
    title="Pagine intonse"
    subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Quello che so vale solo se qualcuno è disposto a usarlo</em></strong></span></>}
    bgClassName="bg-page-donna"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Pagine intonse" width={2752} height={1536} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Pagine intonse" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default PagineIntonseDonna;
