import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/le-ultime-disposizioni.jpg";

const paragrafi = [
  "Per quarant'anni aveva gestito flussi, scadenze e protocolli. La pensione gli aveva tolto la funzione e lasciato in mano una variabile che non sapeva trattare: il tempo tra la fine biologica e la chiusura della pratica. L'unico modo che conosceva per affrontare un problema aperto era trasformarlo in un progetto.",
  "Iniziò con la donazione degli organi. Compilò i moduli, studiò i codici di compatibilità, mise giù una scaletta. Poi si bloccò sulle tempistiche mediche: troppe incognite esterne avrebbero alterato il cronoprogramma della cerimonia. Strappò il modulo.",
  "Passò alla scelta tra cremazione e tumulazione. Ogni sera, al vecchio comò di mogano, redigeva quello che intitolava «Disposizioni Anticipate di Trattamento del Corpo»: il cimitero, il quadrante, la fila, il carattere tipografico dell'epitaffio. Ogni mattina l'ossessione del dettaglio rivelava un difetto logico. Si alzava, strappava il foglio, ricominciava.",
  "Una notte trovò l'incastro: cremazione, ceneri affidate alla natura, nessuna cerimonia. Lasciò il foglio sul comò e andò a dormire.",
  "Dietro il divano c'era una vecchia presa elettrica che non aveva mai controllato.",
  "Si svegliò nel fumo. Non andò verso la porta. Andò verso il corridoio, verso il comò, verso il foglio. Crollò a tre metri dalla camera da letto.",
  "Le fiamme raggiunsero il comò. La lettera annerì e si consumò.",
  "I soccorritori non trovarono documenti d'identità utilizzabili. Il corpo fu cremato secondo il protocollo per i casi di forza maggiore. Le ceneri finirono in un'urna comune, grigia, su uno scaffale di un deposito comunale.",
  "Aveva ottenuto la cremazione, almeno quella.",
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