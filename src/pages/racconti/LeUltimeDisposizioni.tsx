import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/le-ultime-disposizioni.jpg";

const paragrafi = [
  "Per anni, un uomo aveva gestito flussi, scadenze e protocolli. La pensione gli aveva tolto la funzione, lasciandolo davanti a un'intollerabile variabile: il tempo tra la fine biologica e la chiusura della pratica. Decise di trasformare il proprio post-mortem in un progetto amministrativo impeccabile.",
  "Iniziò con la donazione degli organi. Un atto burocratico puro. Compilò i moduli, studiò i codici di compatibilità. Poi subentrò il dubbio sulle tempistiche mediche che avrebbero alterato il cronoprogramma della cerimonia. Troppe incognite esterne. Strappò il modulo.",
  "Passò alla scelta tra cremazione e tumulazione. Ogni sera, seduto al vecchio comò di mogano, redigeva il protocollo definitivo: «Disposizioni Anticipate di Trattamento del Corpo». Indicava il cimitero, il quadrante, la fila, persino il carattere tipografico per l'epitaffio. Ma ogni mattina l'ossessione del dettaglio perfetto rivelava un difetto logico. Si alzava, strappava il foglio della sera prima e ricominciava.",
  "Poi giunse la notte dell'illuminazione. Trovò l'incastro perfetto. Tre punti chiari, irrevocabili. Cremazione, affidamento delle ceneri alla natura, nessuna cerimonia. Per la prima volta dopo anni, provò la calma di un faldone archiviato correttamente. Lasciò il foglio sul comò e andò a dormire.",
  "Il caos, che non conosce protocolli, entrò da una vecchia presa elettrica dietro il divano. Un cortocircuito silenzioso.",
  "L'uomo si svegliò nel fumo. Il panico non fu per la vita che se ne andava, ma per l'ordine che si dissolveva. Tentò di raggiungere il corridoio, verso il comò, verso il suo manuale di istruzioni. Voleva salvare il piano, non il corpo. Crollò a pochi metri dalla camera da letto.",
  "Le fiamme raggiunsero il comò di mogano. La lettera definitiva si arricciò, annerì e divenne cenere. L'uomo morì senza identità residua. Fu cremato secondo il protocollo d'ufficio per i casi di forza maggiore, e le sue ceneri finirono in un'urna comune, anonima e grigia. Il caos aveva vinto, e l'ultima pratica era stata chiusa con un timbro d'ufficio, senza che nessuna delle sue volontà fosse mai stata letta.",
];

const LeUltimeDisposizioni = () => (
  <PageShell
    title="Le ultime disposizioni"
    subtitle="Quando si tenta di amministrare l'incontrollabile fino all'ultimo foglio"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Fiamme che divorano un documento su un comò di mogano" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default LeUltimeDisposizioni;