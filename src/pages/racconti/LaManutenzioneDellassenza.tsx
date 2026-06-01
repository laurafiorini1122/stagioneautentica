import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-manutenzione-dellassenza.jpg";

const paragrafi = [
  "Per quarant'anni era stato marito, fratello, collega, amico. La pensione aveva tolto il primo strato. La morte aveva fatto il resto: prima la moglie, poi il fratello, poi i pochi amici, portati via uno a uno da malattie che a una certa età non sorprendono più nessuno.",
  "Solo, si accorse che non sapeva come essere soltanto se stesso. Era un ufficio dopo un trasloco: i segni dei mobili sul pavimento, ma i mobili non c'erano più.",
  "Scelse di fare del proprio dolore un lavoro a tempo pieno.",
  "Non era disperazione. Era metodo. Ogni mattina, alle 7:00, preparava il caffè per due. Posava la tazza della moglie sul tavolo di marmo, sull'alone che trent'anni di porcellana avevano lasciato senza che nessuno se ne accorgesse.",
  "Nelle ore centrali rileggeva le lettere del fratello, catalogandole per data. Chiamava i numeri degli amici morti per ascoltare il silenzio, o la voce metallica di un'utenza cessata. Non cercava niente. Confermava.",
  "Vedeva altri uomini tentare di ricostruirsi. Imparare a giocare a carte, stringere amicizie di necessità. Li guardava con disprezzo. Anche con paura, forse, ma il disprezzo era più facile. Come poteva un allegato continuare a esistere se il documento principale era stato distrutto?",
  "Morì su una poltrona che non era la sua, ma quella dell'amico più caro, intento a immaginare una conversazione che non poteva più avvenire. Lo trovarono giorni dopo. Attorno a lui, oggetti disposti secondo un ordine che solo lui conosceva. Era stato l'ultimo bibliotecario di vite altrui. Nessuno sapeva dove fosse catalogata la sua.",
];

const LaManutenzioneDellassenza = () => (
  <PageShell title="La manutenzione dell'assenza" subtitle="Quando il dolore diventa l'unica prova di esistere ancora" bgClassName="bg-page-uomo">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano solo a tavola con due tazze" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default LaManutenzioneDellassenza;