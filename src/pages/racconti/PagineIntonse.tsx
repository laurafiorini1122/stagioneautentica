import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import pagineIntonseImg from "@/assets/unuomo-pagine-intonse.png";

const paragrafi = [
  "Per trentanove anni un uomo aveva lavorato nell'ufficio tecnico di un'azienda di componenti alimentari. Negli ultimi quindici, il suo corpo era diventato l'estensione dei macchinari: le sue dita sapevano quale valvola tendesse a bloccarsi col freddo e le sue orecchie distinguevano il ritardo di un fornitore dal rumore di un cuscinetto usurato. Conosceva la differenza tra la procedura d'emergenza scritta per gli ispettori e quella che, nel cuore della notte, salvava davvero la produzione.",
  "Quando arrivò il momento della pensione, l'azienda gli propose di dedicare gli ultimi sei mesi alla stesura di un manuale di passaggio. L'uomo accettò subito: la mattina seguente era già alla scrivania, con le dita pronte sulla tastiera e un rigore che non lasciava spazio a esitazioni.",
  "Riempì le pagine con una precisione chirurgica. Scrisse procedure per ogni ingranaggio, allegando foto, schemi e i numeri privati dei tecnici di assistenza, annotando persino gli orari migliori per chiamarli perché certi esperti, di mattina, erano più collaborativi. Per ogni guasto, descrisse la soluzione «vera», quella distillata in decenni di tentativi e silenzi davanti alle macchine che avevano smesso di girare.",
  "Il risultato finale fu un'opera in tre volumi blu scuro. L'uomo passò intere giornate a testare i rimandi dell'indice analitico, valutando con precisione i secondi necessari per passare dalla voce «Valvola» alla sottosezione «Blocco termico»: doveva essere un congegno perfetto.",
  "L'ultimo giorno di lavoro, consegnò l'opera al suo successore, un ingegnere di trentacinque anni. Il ragazzo lo ringraziò, sfogliò le pagine con un cenno del capo e le posò sulla scrivania ancora sgombra. L'uomo chiuse la porta del suo ufficio e consegnò le chiavi alla vigilanza. Camminò verso il parcheggio con la schiena dritta, senza mai voltarsi a guardare le finestre del reparto tecnico.",
  "Negli anni che seguirono, durante gli inverni più rigidi, l'uomo osservava i fumi della fabbrica in lontananza. Quando il termometro scendeva sotto lo zero, controllava l'orologio e immaginava il cambio turno delle sei, visualizzando mentalmente la pagina 42 del secondo volume, quella sulla lubrificazione delle giunzioni esterne.",
  "Sei anni dopo, fu invitato alla festa per i settant'anni dell'azienda. Durante la visita guidata ai nuovi uffici, ristrutturati dopo un trasferimento di sede, si ritrovò davanti a un magazzino dismesso, ora deposito di scatoloni e vecchi monitor accatastati in attesa di smaltimento.",
  "Tra i rimasugli ammonticchiati, notò un'etichetta sbiadita: «Manuali tecnici: da verificare». Si avvicinò e sollevò il lembo di un contenitore di cartone. In cima c'erano i suoi tre volumi blu. La copertina del primo portava ancora il logo aziendale ormai fuori corso. Li aprì: le pagine erano intonse, l'indice analitico ancora rigido e la carta produceva quel piccolo schiocco tipico dei libri mai consultati.",
  "Una guardia giurata lo interruppe: «Tutto bene? Quella roba è per il macero, la ditta arriva la prossima settimana per liberare lo spazio».",
  "L'uomo richiuse il volume. Lo rimise nel contenitore, esattamente dove l'aveva trovato. «Tutto bene», disse. «Stavo solo guardando». Si strofinò due dita contro il pollice per togliersi la polvere. Tornò agli ascensori dove il gruppo lo aspettava. Qualcuno gli chiese se si fosse perso. «No», rispose. «Ricordavo solo una cosa». Non specificò cosa. Seguì gli altri verso il piano superiore, dove il rinfresco era già pronto e il rumore dei brindisi copriva ogni altro suono.",
];

const PagineIntonse = () => {
  return (
    <PageShell
      title="Pagine intonse"
      subtitle="Quello che sai vale quanto qualcuno è disposto ad usarlo"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={pagineIntonseImg}
          alt="Pagine intonse"
          width={2752}
          height={1536}
          loading="lazy"
          className="w-full h-auto object-cover"
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

export default PagineIntonse;
