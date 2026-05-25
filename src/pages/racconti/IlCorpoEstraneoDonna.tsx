import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-corpo-estraneo-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per decenni il corpo era stato un mezzo. Un involucro obbediente che la trasportava al lavoro, che restava seduto per ore, che mangiava e dormiva secondo i ritmi della produzione. Era un servitore muto, un'estensione biologica della sua funzione.",
  "Con la pensione, il silenzio esterno attivò i rumori interni. La donna iniziò a sentire il peso della propria carne. Senza lo scopo a distrarla, ogni battito del cuore divenne un ticchettio irregolare, il segnale di un congegno che perdeva colpi. Non era più una donna che abitava un corpo; era un'osservatrice prigioniera di un macchinario usurato.",
  "La garanzia era scaduta. La donna si sentiva un modello obsoleto per cui non esistevano più componenti originali. Ogni piccolo dolore non era un segnale di allarme, ma una conferma di smantellamento.",
  "L'ipocondria divenne la sua nuova mansione a tempo pieno. Iniziò a monitorarsi con ferocia. Misurava la pressione, contava i respiri, analizzava ogni macchia sulla pelle come se fosse ruggine su una carrozzeria abbandonata. Ma più cercava di capire il guasto, più il guasto si estendeva. La medicina non era una cura, era solo una perizia tecnica che confermava l'irreversibilità del danno.",
];

const IlCorpoEstraneoDonna = () => (
  <PageShell title="Il corpo estraneo" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Il mio corpo senza uno scopo è solo qualcosa che si deteriora</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna in pensione ipocondriaca che monitora continuamente la sua salute" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Il corpo estraneo" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default IlCorpoEstraneoDonna;
