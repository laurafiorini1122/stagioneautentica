import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-routine-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna guardava i vecchi come errori del sistema. Quando ancora correva nel grande ingranaggio, quei volti che indugiavano tra gli scaffali in orari «sbagliati» le sembravano un'invasione molesta nel territorio dei vivi, un avvertimento che teneva a distanza.",
  "Poi arrivò la pensione, e la donna si trovò dall'altra parte del sipario. Un confine invisibile oltre il quale non c'era più nessun badge da timbrare, nessuna scadenza da rispettare.",
  "I primi giorni senza orari furono disorientanti come un ufficio senza pareti. Il tempo, che aveva sempre obbedito, improvvisamente non rispondeva più. Troppo grande, troppo silenzioso, senza direzione.",
  "La casa, però, rispondeva. Aveva sempre risposto.",
  "Per quarant'anni la gestione domestica era stata il secondo turno — quello che cominciava quando il lavoro finiva, silenzioso e invisibile come tutti i lavori che nessuno conta. Ora che il primo turno era scomparso, il secondo si espanse fino a occupare tutto lo spazio disponibile. La donna vi si gettò con la stessa concentrazione con cui un tempo gestiva scadenze e riunioni. Costruì un calendario di obblighi domestici scandito con precisione quasi scientifica. Il lunedì era dedicato al bucato — diviso per colori, temperature, tempi di asciugatura. Il martedì alla spesa: lista preparata il giorno prima, supermercato alle nove in punto per evitare la ressa, offerte controllate e confrontate con quelle della settimana precedente. Il mercoledì all'estratto conto: stampato, verificato voce per voce, archiviato in una cartellina trasparente etichettata con il mese e l'anno. Il giovedì alla farmacia, per la consulenza mensile con la farmacista che ormai la conosceva per nome e per esami del sangue.",
  "Sempre rigorosamente di mattina e mai nei fine settimana.",
  "Il tempo fu tagliato in fette uguali. Ogni ora aveva il suo compito, ogni spostamento il suo timbro invisibile. La donna divenne la schiava di un'agenda vuota. Se la lettura di un libro accendeva un barlume di interesse, l'orologio la richiamava all'ordine. Scattava il dovere. La regola autoimposta strangolava ogni piacere prima che prendesse forma.",
  "Al terrore di buttare via le ore si aggiungeva la frase con cui era cresciuta, scolpita nella mente: «prima il dovere, poi il piacere». Neanche la pensione era riuscita a liberarla da quel giogo. Anzi — senza il lavoro a fare da argine, il dovere aveva finalmente trovato tutto lo spazio che aveva sempre reclamato.",
];

const LaRoutineDonna = () => (
  <PageShell title="La routine" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Senza un orario che mi aspetta, non so chi sono</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna che legge il volantino delle offerte al supermercato" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="La routine" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LaRoutineDonna;