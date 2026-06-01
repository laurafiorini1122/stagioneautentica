import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-manutenzione-dellassenza-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per quarant'anni era stata moglie, sorella, collega, amica. La pensione aveva tolto il primo strato. La morte aveva fatto il resto: prima il marito, poi la sorella, poi quasi tutte le amiche, portate via da malattie che a una certa età non sorprendono più nessuno, anche se ogni volta ci si aspettava di essere sorprese.",
  "Sola, si accorse che non sapeva come essere soltanto sé stessa. Era un ufficio dopo un trasloco: i segni dei mobili sul pavimento, ma i mobili non c'erano più.",
  "Scelse di fare del proprio dolore un lavoro a tempo pieno.",
  "Non era disperazione. Era metodo. Ogni mattina, alle 7:00, preparava il caffè per due. Posava la tazza del marito sul tavolo di marmo, sull'alone che trent'anni di porcellana avevano lasciato senza che nessuno se ne accorgesse. La tazza era ancora lì. Era sempre stata lì.",
  "Nelle ore centrali rileggeva le lettere della sorella, catalogandole per data. Chiamava i numeri delle amiche morte per ascoltare il silenzio, o la voce metallica di un'utenza cessata. Non cercava niente. Confermava.",
];

const LaManutenzioneDellassenzaDonna = () => (
  <PageShell title="La manutenzione dell'assenza" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Senza le persone che mi definivano, non so più chi sono</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna che prepara il caffè per due, con la tazza del marito posata sul tavolo di marmo" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="La manutenzione dell'assenza" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LaManutenzioneDellassenzaDonna;