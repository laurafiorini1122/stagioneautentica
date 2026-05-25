import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-formula-matematica.jpg";

const paragrafi = [
  "Per decenni, un uomo aveva tradotto il caos in grafici. La sua mente era un processore di statistiche, previsioni e bilanci. Poi, la pensione rimosse l'oggetto del suo calcolo.",
  "La sua passione per i numeri lo spingeva verso l'ultima, ineluttabile equazione: la data della sua morte. Non poteva accettare l'imprevedibilità di quell'evento finale. Doveva decifrarla, ridurla a una formula, a un dato certo.",
  "Ogni mattina si recava al cimitero locale. Non cercava conforto, ma dati grezzi. Con taccuino e matita, annotava date di nascita e di morte dalle lapidi con scrupolo meticoloso.",
  "Trascorreva i pomeriggi chino sulla scrivania, trasformando la casa in un laboratorio di cabalismo numerico. Cercava la costante, il legame segreto tra il giorno del primo respiro e quello dell'ultimo. Ogni volta che credeva di aver trovato la soluzione, preparava con cura il suo ultimo giorno. Aspettava. Ma a mezzanotte il calendario girava. L'uomo era ancora vivo. Un errore nei dati, pensava. Una variabile non considerata. Riprendeva il ciclo.",
  "La ricerca divenne la sua unica forma di esistenza. Non gli importava più della morte, ma del calcolo. Era diventato una variabile insignificante di un'equazione irrisolvibile.",
  "Un giorno qualunque, una data che non figurava in nessun grafico, la morte arrivò. Non ci furono presagi numerici. Lo colse mentre rileggeva una sequenza di cifre incomprensibili su un taccuino macchiato. L'incognita finale era rimasta tale, e il suo corpo non era che un altro dato errato, pronto per essere cancellato.",
];

const LaFormulaMatematica = () => (
  <PageShell
    title="La formula matematica"
    subtitle="Quando si tenta di calcolare l'incalcolabile per non subirlo"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano al cimitero annota date su un taccuino" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default LaFormulaMatematica;