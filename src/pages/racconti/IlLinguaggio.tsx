import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-linguaggio.jpg";

const paragrafi = [
  "Per decenni, un uomo aveva abitato un mondo di termini esatti. Le sue parole erano strumenti di precisione, codici che aprivano porte, protocolli che governavano flussi di dati e persone. Ogni sua frase era un'operazione eseguita con successo.",
  "Poi, il silenzio della pensione recise i contatti. L'uomo si ritrovò in una cucina silenziosa, circondato da oggetti che non avevano bisogno di definizioni tecniche. Provò a usare il suo linguaggio con la moglie. Una mattina le spiegò perché aveva riorganizzato i barattoli nello scaffale in alto: parlò di ottimizzazione degli spazi, di gestione delle risorse, di accessibilità per frequenza d'uso. Lei lo guardò un momento, poi tornò alla sua tazza. Non era ostilità — era qualcosa di peggio. Era incomprensione totale, come se avesse parlato in una lingua che lei non aveva mai incontrato. Applicare quel lessico alla scelta di un detersivo o alla durata di una passeggiata era come cercare di riparare un orologio da polso con una mazza ferrata.",
  "Il processo fu più rapido di quanto si aspettasse. Prima svanirono le sigle, poi i protocolli, poi le gerarchie di concetti che aveva usato per trent'anni come si usa una mappa. Rimase solo il guscio delle frasi, vuoto.",
  "Un giorno cercò di spiegare il suo malessere. Aprì la bocca, ma quello che uscì non aveva destinatario. Il mondo fuori era diventato un frastuono di voci che parlavano una lingua troppo veloce, troppo viva — lui era un ricevitore sintonizzato su una frequenza spenta.",
  "Si sedette al tavolo e smise di provare. La bocca chiusa, la lingua pesante. Non era solo il silenzio della casa ad avvolgerlo — era il silenzio del pensiero. Non c'era più nulla da dire, perché non c'era più nessuno che parlasse la sua lingua. Era un libro scritto in un alfabeto che nessuno, nemmeno lui, sapeva più leggere.",
];

const IlLinguaggio = () => (
  <PageShell
    title="Il linguaggio"
    subtitle="Quando le parole del potere perdono senso fuori dal loro contesto"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano in una cucina silenziosa, parole che si dissolvono" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default IlLinguaggio;