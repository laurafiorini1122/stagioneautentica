import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-manutenzione-dellassenza-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per quarant'anni, una donna era stata una parte di un tutto. La pensione aveva rimosso il primo strato, ma era stata la morte a smantellare l'impalcatura. Prima il marito, poi la sorella, infine le poche amiche storiche, portate via da una sequenza di patologie statisticamente prevedibili.",
  "Rimasta sola, la donna scoprì di non possedere un'identità autonoma. Era un ufficio vuoto dopo un trasloco: restavano i segni dei mobili sul pavimento, ma i mobili non c'erano più. Scelse di diventare la custode a tempo pieno del proprio dolore.",
  "Trasformò la casa in un sacrario della gestione. La sua non era una disperazione scomposta, ma una liturgia metodica. Ogni mattina, alle 7:00, celebrava l'assenza. Preparava il caffè per due, posando la tazza del marito sul tavolo di marmo, esattamente dove la porcellana aveva lasciato un alone invisibile in trent'anni di colazioni.",
  "Trascorreva le ore centrali a manutenere i ricordi degli altri. Rileggeva le vecchie lettere della sorella, catalogandole per data e rilevanza tematica. Chiamava i numeri di telefono delle amiche scomparse solo per ascoltare il silenzio o il messaggio metallico di un'utenza cessata.",
  "Vedeva altre donne tentare di ricostruirsi, di imparare nuovi giochi, di stringere alleanze di circostanza. Le guardava con un misto di superiorità e ribrezzo. Per lei, «rifarsi una vita» era un tradimento della logica. Come poteva un allegato continuare a esistere se il documento principale era stato distrutto?",
];

const LaManutenzioneDellassenzaDonna = () => (
  <PageShell title="La manutenzione dell'assenza" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Senza le persone che mi definivano, non so più chi sono</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna che prepara il caffè per due, con la tazza del marito posata sul tavolo di marmo" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="La manutenzione dell'assenza" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LaManutenzioneDellassenzaDonna;