import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/le-ultime-disposizioni-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per quarant'anni aveva gestito flussi, scadenze e protocolli. La pensione le aveva tolto la funzione e lasciato in mano una variabile che non sapeva come trattare: il tempo tra la fine biologica e la chiusura della pratica. L'unico modo che conosceva per affrontare un problema aperto era trasformarlo in un progetto.",
  "Iniziò con la donazione degli organi. Compilò i moduli, studiò i codici di compatibilità, mise giù una scaletta. Poi si bloccò sulle tempistiche mediche: troppe incognite esterne avrebbero alterato il cronoprogramma della cerimonia. Strappò il modulo.",
  "Passò alla scelta tra cremazione e tumulazione. Ogni sera, al vecchio comò di mogano, redigeva quello che intitolava «Disposizioni Anticipate di Trattamento del Corpo»: il cimitero, il quadrante, la fila, il carattere tipografico dell'epitaffio. Ogni mattina l'ossessione del dettaglio rivelava un difetto logico. Si alzava, strappava il foglio, ricominciava.",
  "Una notte trovò l'incastro: cremazione, ceneri affidate alla natura, nessuna cerimonia. Lasciò il foglio sul comò e andò a dormire.",
  "Dietro il divano c'era una vecchia presa elettrica che non aveva mai controllato.",
  "Si svegliò nel fumo.",
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
