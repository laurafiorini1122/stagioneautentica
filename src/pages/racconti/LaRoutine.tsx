import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-routine.jpg";

const paragrafi = [
  "Un uomo guardava i vecchi come errori del sistema. Quando ancora correva nel grande ingranaggio, quei volti che indugiavano tra gli scaffali in orari «sbagliati» gli sembravano un'invasione molesta nel territorio dei vivi — un avvertimento che teneva a distanza.",
  "Poi arrivò la pensione, e l'uomo si trovò dall'altra parte del sipario. Un confine invisibile oltre il quale non c'era più nessun badge da timbrare, nessuna scadenza da rispettare.",
  "I primi giorni senza orari furono disorientanti come un ufficio senza pareti. Il tempo, che aveva sempre obbedito, improvvisamente non rispondeva più. Troppo grande, troppo silenzioso, senza direzione.",
  "Fu allora che l'uomo scoprì i volantini. Quelli del supermercato, con le offerte settimanali scandite giorno per giorno. Pesce fresco il martedì. Frutta e verdura il mercoledì. Carni selezionate il giovedì. Li leggeva con la stessa concentrazione con cui un tempo analizzava i report trimestrali. E mentre li leggeva, qualcosa si rimetteva in moto: la settimana tornava ad avere una struttura, i giorni tornavano ad avere un nome diverso l'uno dall'altro.",
  "Costruì la sua nuova agenda con la precisione di chi ha passato quarant'anni a rispettare scadenze. Il martedì era riservato al supermercato — il pesce, naturalmente, ma anche il controllo delle offerte per la settimana successiva. Il mercoledì all'estratto conto: stampato, verificato voce per voce, archiviato. Il giovedì alla farmacia, per la consulenza mensile con il farmacista che ormai lo conosceva per nome e per patologie.",
  "Sempre rigorosamente di mattina e mai nei fine settimana.",
  "Il tempo fu tagliato in fette uguali. Ogni ora aveva il suo compito, ogni spostamento il suo timbro invisibile. L'uomo era diventato il guardiano di un'agenda vuota. Se la lettura di un libro accendeva un barlume di interesse, l'orologio lo richiamava all'ordine. Scattava il dovere. La regola autoimposta strangolava ogni piacere prima che prendesse forma.",
  "Al terrore di buttare via le ore si aggiungeva la frase con cui era cresciuto, scolpita nella mente: «prima il dovere, poi il piacere». Neanche la pensione era riuscita a liberarlo da quel giogo.",
  "Un pomeriggio, nella sala d'attesa del medico — uno dei pochi appuntamenti che non aveva bisogno di giustificare — sfogliò distrattamente una rivista. Era il tipo di pubblicazione che non avrebbe mai comprato: carta patinata, fotografie di tramonti, frasi stampate in corsivo su sfondi color pastello. Stava per rimetterla a posto quando una riga lo fermò: «Se oggi fosse l'ultimo giorno della tua vita, saresti contento di quanto hai fatto ieri?»",
  "In un altro momento della sua vita l'avrebbe liquidata come retorica da calendario. Invece quelle parole lo raggiunsero sul serio.",
  "Si accorse di aver buttato via un'intera vita. Non aveva sprecato il tempo, come aveva sempre temuto, ma la possibilità di vivere davvero. I fili invisibili che aveva tessuto con le sue stesse mani lo avevano intrappolato così bene che non c'era più nemmeno il rimpianto, solo la routine, che continuava, indifferente, a scandire giorni tutti uguali verso una fine che non aveva mai imparato a guardare in faccia.",
];

const LaRoutine = () => (
  <PageShell
    title="La routine"
    subtitle="Quando la libertà viene riempita con nuove catene invisibili"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano in un supermercato vuoto" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default LaRoutine;