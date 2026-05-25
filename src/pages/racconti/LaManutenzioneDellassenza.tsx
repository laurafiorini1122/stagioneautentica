import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-manutenzione-dellassenza.jpg";

const paragrafi = [
  "Per quarant'anni, un uomo era stato una parte di un tutto. La pensione aveva rimosso il primo strato, ma era stata la morte a smantellare l'impalcatura. Prima la moglie, poi il fratello, infine i pochi amici storici, portati via da una sequenza di patologie statisticamente prevedibili.",
  "Rimasto solo, l'uomo scoprì di non possedere un'identità autonoma. Era un ufficio vuoto dopo un trasloco: restavano i segni dei mobili sul pavimento, ma i mobili non c'erano più. Scelse di diventare il custode a tempo pieno del proprio dolore.",
  "Trasformò la casa in un sacrario della gestione. La sua non era una disperazione scomposta, ma una liturgia metodica. Ogni mattina, alle 7:00, celebrava l'assenza. Preparava il caffè per due, posando la tazza della moglie sul tavolo di marmo, esattamente dove la porcellana aveva lasciato un alone invisibile in trent'anni di colazioni.",
  "Trascorreva le ore centrali a manutenere i ricordi degli altri. Rileggeva le vecchie lettere del fratello, catalogandole per data e rilevanza tematica. Chiamava i numeri di telefono degli amici scomparsi solo per ascoltare il silenzio o il messaggio metallico di un'utenza cessata.",
  "Vedeva altri uomini tentare di ricostruirsi, di imparare nuovi giochi, di stringere alleanze di circostanza. Li guardava con un misto di superiorità e ribrezzo. Per lui, «rifarsi una vita» era un tradimento della logica. Come poteva un allegato continuare a esistere se il documento principale era stato distrutto?",
  "Morì su una poltrona che non era la sua, ma quella dell'amico più caro, intento a immaginare una conversazione che non poteva più avvenire. Lo trovarono giorni dopo, circondato da oggetti che non usava più, ma che continuava a disporre secondo gli ordini di un passato immutabile. L'uomo che non era stato capace di essere «uno» era svanito insieme ai «molti» che lo avevano definito. Restò solo una casa silenziosa, un archivio di vite altrui di cui lui era stato l'ultimo, inutile bibliotecario.",
];

const LaManutenzioneDellassenza = () => (
  <PageShell title="La manutenzione dell'assenza" subtitle="Quando il dolore diventa l'unica prova di esistere ancora" bgClassName="bg-page-uomo">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano solo a tavola con due tazze" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default LaManutenzioneDellassenza;