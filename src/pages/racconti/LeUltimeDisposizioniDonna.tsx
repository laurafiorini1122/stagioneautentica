import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/le-ultime-disposizioni-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per anni, una donna aveva gestito flussi, scadenze e protocolli. La pensione le aveva tolto la funzione, lasciandola davanti a un'intollerabile variabile: il tempo tra la fine biologica e la chiusura della pratica. Decise di trasformare il proprio post-mortem in un progetto amministrativo impeccabile.",
  "Iniziò con la donazione degli organi. Un atto burocratico puro. Compilò i moduli, studiò i codici di compatibilità. Poi subentrò il dubbio sulle tempistiche mediche che avrebbero alterato il cronoprogramma della cerimonia. Troppe incognite esterne. Strappò il modulo.",
  "Passò alla scelta tra cremazione e tumulazione. Ogni sera, seduta al vecchio comò di mogano, redigeva il protocollo definitivo: «Disposizioni Anticipate di Trattamento del Corpo». Indicava il cimitero, il quadrante, la fila, persino il carattere tipografico per l'epitaffio. Ma ogni mattina l'ossessione del dettaglio perfetto rivelava un difetto logico. Si alzava, strappava il foglio della sera prima e ricominciava.",
];

const LeUltimeDisposizioniDonna = () => (
  <PageShell title="Le ultime disposizioni" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Posso amministrare anche ciò che non si può controllare</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna anziana scrive disposizioni post-mortem alla scrivania" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Le ultime disposizioni" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LeUltimeDisposizioniDonna;
