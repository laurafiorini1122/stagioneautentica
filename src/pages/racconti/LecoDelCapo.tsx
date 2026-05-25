import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/leco-del-capo.jpg";

const paragrafi = [
  "Per anni, un uomo era stato il vertice. Un capo area la cui autorità si misurava nel grado di deferenza degli altri. C'era chi lo cercava per interesse, chi per timore, chi per calcolo. L'uomo abitava una bolla di consenso, convinto di essere insostituibile.",
  "Il giorno della pensione arrivò come arrivano tutte le cose inevitabili: annunciato, atteso, e ugualmente sorprendente.",
  "L'ultimo turno fu celebrato con un rituale di menzogne cerimoniali. I colleghi lo circondarono con ringraziamenti e promesse. «Nessuno potrà sostituirla», dicevano. «La chiameremo spesso, abbiamo bisogno del suo parere».",
  "L'uomo accolse quelle parole come una garanzia di continuità. Il ritiro non sarebbe stato un distacco, ma una consulenza a distanza. La sua influenza non poteva evaporare con un brindisi.",
  "I primi giorni trascorsero in un'attesa vigile. La sua mente restava chiusa in ufficio, intenta a immaginare la riorganizzazione dei reparti e gli errori dei successori. Fissava il cellulare, il compagno che per decenni lo aveva assediato in ogni momento della giornata. Ora era un blocco di plastica muta.",
  "L'uomo giustificò il silenzio. Pensò ai tempi tecnici del passaggio di consegne, al carico di lavoro dei rimasti. Ma il telefono restava muto. La comprensione si trasformò in un'ansia acida, poi in una rabbia sorda. Le promesse erano polvere. Chi gli era stato vicino non cercava pareri; era già intento a occupare il vuoto rimasto e ad accaparrarsi il favore del nuovo capo area. La lealtà non era stata che una funzione della sua posizione, svanita nell'istante in cui il potere aveva cambiato proprietario.",
  "Ogni giorno, quell'assenza — nessun segnale, nessuna chiamata, nessun messaggio — scavava più in profondità. L'uomo iniziò a vivere nella penombra, con il cellulare stretto in mano, fissando lo schermo nero. Aspettava una vibrazione che non arrivava, una luce che non si accendeva.",
  "Era diventato un'eco che non trovava più nulla a cui rimbalzare. I ruoli si erano invertiti in silenzio: lui, che aveva sempre parlato, ora aspettava che qualcuno parlasse.",
];

const LecoDelCapo = () => (
  <PageShell
    title="L'eco del capo"
    subtitle="Quando il potere evapora con il badge e le promesse rimangono parole"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano fissa lo schermo nero del cellulare" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default LecoDelCapo;