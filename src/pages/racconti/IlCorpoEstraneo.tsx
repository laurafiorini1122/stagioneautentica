import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-corpo-estraneo.jpg";

const paragrafi = [
  "Per decenni il corpo era stato un mezzo. Un involucro obbediente che lo trasportava al lavoro, che restava seduto per ore, che mangiava e dormiva secondo i ritmi della produzione. Era un servitore muto, un'estensione biologica della sua funzione.",
  "Con la pensione, il silenzio esterno attivò i rumori interni. L'uomo iniziò a sentire il peso della propria carne. Senza lo scopo a distrarlo, ogni battito del cuore divenne un ticchettio irregolare, il segnale di un congegno che perdeva colpi. Non era più un uomo che abitava un corpo; era un osservatore prigioniero di un macchinario usurato.",
  "La garanzia era scaduta. L'uomo si sentiva un modello obsoleto per cui non esistevano più componenti originali. Ogni piccolo dolore non era un segnale di allarme, ma una conferma di smantellamento.",
  "L'ipocondria divenne la sua nuova mansione a tempo pieno. Iniziò a monitorarsi con ferocia. Misurava la pressione, contava i respiri, analizzava ogni macchia sulla pelle come se fosse ruggine su una carrozzeria abbandonata. Ma più cercava di capire il guasto, più il guasto si estendeva. La medicina non era una cura, era solo una perizia tecnica che confermava l'irreversibilità del danno.",
  "Un mattino si accorse di non potersi più muovere. Non era paralisi, era inerzia. La volontà, l'ultima molla che teneva insieme i pezzi, si era spezzata. Restò a guardare il soffitto, ascoltando il proprio respiro farsi sempre più sottile.",
  "L'uomo non aspettava il medico, né la guarigione. Aspettava solo che l'attrito finale fermasse definitivamente il movimento dei polmoni. Era diventato un oggetto da smaltire, un rimasuglio di carne e ossa che la polvere stava lentamente ricoprendo, trasformandolo in un grumo di materia inerte, definitivamente fuori servizio.",
];

const IlCorpoEstraneo = () => (
  <PageShell
    title="Il corpo estraneo"
    subtitle="Quando il silenzio amplifica ogni segnale di decadimento"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano disteso a letto osserva il proprio corpo come un macchinario estraneo" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default IlCorpoEstraneo;