import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/leco-del-capo-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per anni, una donna era stata il vertice. Una responsabile di area la cui autorità si misurava nel grado di deferenza degli altri. C'era chi offriva stima in dosi calcolate, chi si avvicinava per convenienza e chi si teneva a distanza per timore di restare escluso. La donna abitava una bolla di consenso, convinta di essere insostituibile.",
  "Poi arrivò il giorno della pensione.",
  "L'ultimo turno fu celebrato con un rituale di menzogne cerimoniali. I colleghi la circondarono con ringraziamenti e promesse. «Nessuno potrà sostituirla», dicevano. «La chiameremo spesso, abbiamo bisogno del suo parere».",
  "La donna accolse quelle parole come una garanzia di continuità. Il ritiro non sarebbe stato un distacco, ma una consulenza a distanza. La sua influenza non poteva evaporare con un brindisi.",
  "I primi giorni trascorsero in un'attesa vigile. La sua mente restava chiusa in ufficio, intenta a immaginare la riorganizzazione dei reparti e gli errori dei successori. Fissava il cellulare, il compagno che per decenni l'aveva assediata in ogni momento della giornata. Ora era un blocco di plastica muta.",
  "La donna giustificò il silenzio. Pensò ai tempi tecnici del passaggio di consegne, al carico di lavoro dei rimasti. Ma il telefono restava muto. La comprensione si trasformò in un'ansia acida, poi in una rabbia sorda. Le promesse erano polvere. Chi le era stato vicino non cercava pareri; era già intento a occupare il vuoto rimasto e ad accaparrarsi il favore del nuovo responsabile. La lealtà non era stata che una funzione della sua posizione, svanita nell'istante in cui il potere aveva cambiato proprietario.",
  "Ogni giorno, quell'assenza — nessun segnale, nessuna chiamata, nessun messaggio — scavava più in profondità.",
];

const LecoDelCapoDonna = () => (
  <PageShell title="L'eco del capo" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Se non mi cercano più, non valevo niente</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna che guarda ostinatamente il cellulare" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="L'eco del capo" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LecoDelCapoDonna;