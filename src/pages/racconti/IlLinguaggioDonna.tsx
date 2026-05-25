import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-linguaggio-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per decenni, una donna aveva abitato un mondo di termini esatti. Le sue parole erano strumenti di precisione, codici che aprivano porte, protocolli che governavano flussi di dati e persone. Ogni sua frase era un'operazione eseguita con successo.",
  "Poi, il silenzio della pensione recise i contatti. La donna si ritrovò in una cucina silenziosa, circondata da oggetti che non avevano bisogno di definizioni tecniche. Provò a usare il suo linguaggio con il marito. Una mattina gli spiegò perché aveva riorganizzato i barattoli nello scaffale in alto: parlò di ottimizzazione degli spazi, di gestione delle risorse, di accessibilità per frequenza d'uso. Lui la guardò un momento, poi tornò alla sua tazza. Non era ostilità. Era qualcosa di peggio: non capiva. Come se lei avesse parlato in una lingua che lui non aveva mai incontrato. Applicare quel lessico alla scelta di un detersivo o alla durata di una passeggiata era come cercare di riparare un orologio da polso con una mazza ferrata.",
  "Il processo fu più rapido di quanto si aspettasse.",
];

const IlLinguaggioDonna = () => (
  <PageShell title="Il linguaggio" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Fuori dal mio contesto professionale non ho più niente da dire</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna vista di spalle che parla con vicini perplessi" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Il linguaggio" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default IlLinguaggioDonna;