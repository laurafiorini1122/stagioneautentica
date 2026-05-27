import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-formula-matematica-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per trent'anni aveva lavorato in un ufficio senza finestre, traducendo bilanci in cifre che altri usavano per decidere. Era brava. Forse era anche felice.",
  "Poi arrivò la pensione. E con essa il problema: nessun dato da elaborare.",
  "Si fissò sulla data della sua morte. Non per paura. Doveva esserci una costante tra il giorno del primo respiro e quello dell'ultimo. Doveva decifrarla, ridurla a una formula, a un dato certo.",
  "Cominciò ad andare al cimitero ogni mattina, taccuino alla mano. Annotava date di nascita e di morte con la stessa cura con cui aveva sempre tenuto i libri contabili.",
  "Trascorreva i pomeriggi china sulla scrivania, trasformando la casa in un laboratorio di cabalismo numerico.",
  "Quando credeva di aver trovato la soluzione, preparava con cura quel giorno. Aspettava. Ma a mezzanotte il calendario girava. La donna era ancora viva. Un errore nei dati, pensava. Una variabile trascurata. Ricominciava.",
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
