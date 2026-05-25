import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-formula-matematica-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per decenni, una donna aveva tradotto il caos in grafici. La sua mente era un processore di statistiche, previsioni e bilanci. Poi, la pensione rimosse l'oggetto del suo calcolo.",
  "La sua passione per i numeri la spingeva verso l'ultima, ineluttabile equazione: la data della sua morte. Non poteva accettare l'imprevedibilità di quell'evento finale. Doveva decifrarla, ridurla a una formula, a un dato certo.",
  "Ogni mattina si recava al cimitero locale. Non cercava conforto, ma dati grezzi. Con taccuino e matita, annotava date di nascita e di morte dalle lapidi con scrupolo meticoloso.",
  "Trascorreva i pomeriggi china sulla scrivania, trasformando la casa in un laboratorio di cabalismo numerico. Cercava la costante, il legame segreto tra il giorno del primo respiro e quello dell'ultimo. Ogni volta che credeva di aver trovato la soluzione, preparava con cura il suo ultimo giorno. Aspettava. Ma a mezzanotte il calendario girava. La donna era ancora viva. Un errore nei dati, pensava. Una variabile non considerata. Riprendeva il ciclo.",
];

const LaFormulaMatematicaDonna = () => (
  <PageShell title="La formula matematica" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Se riesco a controllare tutto, anche la fine non mi coglierà impreparata</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna al cimitero che annota le date di nascita e morte sulle tombe" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="La formula matematica" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LaFormulaMatematicaDonna;
