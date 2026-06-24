import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/donna-il-gruppo-whatsapp.png";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per trentadue anni una donna aveva gestito una rete di agenti commerciali su sei regioni: le sue giornate erano scandite da telefonate programmate e riunioni improvvise che nessuno osava disertare. Era un'architetta di gruppi: di progetto, di crisi, di lancio prodotto. Per ognuno sceglieva con cura un nome, un'icona e una missione precisa da inserire nella descrizione.",
  "Tre giorni prima dell'ultimo giorno di lavoro ne fondò uno nuovo. Lo chiamò «Ex colleghi, sempre uniti». Come immagine scelse la foto della cena di Natale del 2009, quando erano ancora in ventitré, prima che qualcuno lasciasse l'azienda per andare altrove o per andarsene dal mondo. Invitò trentotto persone, contando anche chi non vedeva da anni.",
  "I primi giorni la chat fu un brulichio incessante di attività: auguri, battute sul nuovo capo, foto sgranate recuperate da vecchi archivi digitali. Qualcuno propose una cena vera, con tanto di data e ristorante. La donna si offrì di prenotare. Per una settimana fu di nuovo quella che organizzava, quella a cui si scriveva per sapere l'orario di una riunione.",
  "La cena si fece, ma una sola volta. In seguito, il silenzio della chat fu interrotto solo dalle notifiche di sistema.",
  "La donna continuò a scrivere. Ogni mattina, alle otto, mandava un articolo del settore, ritagliato dai siti specializzati che ancora consultava per abitudine. Segnalava gli anniversari aziendali: i quindici anni dalla fusione, i quarant'anni dalla fondazione, la data in cui il fatturato aveva superato per la prima volta i due milioni, un traguardo a cui aveva contribuito in modo determinante e che ora sembrava svanito dalla memoria collettiva. Pubblicava vecchie foto di gruppo scansionate una alla volta, con didascalie precise: nomi, reparti, anno.",
  "Le risposte cominciarono a restringersi. Scomparvero i commenti, sostituiti da un pollice alzato o da un cuoricino inviato senza aprire il messaggio, un gesto meccanico come lasciar cadere una moneta in un piattino senza guardare chi la raccoglie. La donna osservava la danza delle icone in alto, distinguendo chi partecipava da chi si limitava a segnalare la propria sopravvivenza digitale.",
  "Poi anche le emoji si diradarono. Restò soltanto Bruno, della contabilità, che metteva un like a ogni messaggio con la regolarità di un timbro. La donna cominciò ad aspettare quel segno come un tempo aspettava l'approvazione di un budget. Controllava l'orario del like, lo confrontava con l'orario dell'invio, calcolava quanti minuti impiegasse Bruno a vedere il messaggio. Una mattina di marzo il like non arrivò. Non arrivò nemmeno il giorno dopo. Nella scheda delle informazioni del gruppo, accanto al nome di Bruno, apparve la scritta «Uscito dal gruppo»: era priva di data, come se quel vuoto fosse sempre esistito.",
  "Non si fermò.",
  "Continuò a scrivere ogni mattina alle otto, con la stessa puntualità di un cartellino. Gli articoli, gli anniversari, le foto. Il numero dei partecipanti, in alto sotto il nome del gruppo, scendeva di tanto in tanto senza preavviso: trentasette, poi trentaquattro, poi ventotto. La donna non controllava più quel numero. Controllava soltanto la doppia spunta, grigia o blu, l'unica lingua rimasta tra lei e gli altri.",
  "Un pomeriggio d'autunno aprì per caso l'elenco completo dei membri, cercando una vecchia foto da ripubblicare. Sotto il titolo «Ex colleghi, sempre uniti», l'elenco riportava un'unica voce: la sua.",
];

const IlGruppoWhatsappDonna = () => (
  <PageShell
    title="Il gruppo WhatsApp"
    subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Esisto se qualcuno mi risponde</em></strong></span></>}
    bgClassName="bg-page-donna"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Il gruppo WhatsApp" width={2752} height={1536} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Il gruppo WhatsApp" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default IlGruppoWhatsappDonna;
