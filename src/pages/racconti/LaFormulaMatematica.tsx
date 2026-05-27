import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-formula-matematica.jpg";

const paragrafi = [
  "Per trent'anni aveva lavorato in un ufficio senza finestre, traducendo bilanci in cifre che altri usavano per decidere. Era bravo. Forse era anche felice.",
  "Poi arrivò la pensione. E con essa il problema: nessun dato da elaborare.",
  "Si fissò sulla data della sua morte. Non per paura. Doveva esserci una costante tra il giorno del primo respiro e quello dell'ultimo. Doveva decifrarla, ridurla a una formula, a un dato certo.",
  "Cominciò ad andare al cimitero ogni mattina, taccuino alla mano. Annotava date di nascita e di morte con la stessa cura con cui aveva sempre tenuto i libri contabili.",
  "Trascorreva i pomeriggi chino sulla scrivania, trasformando la casa in un laboratorio di cabalismo numerico.",
  "Quando credeva di aver trovato la soluzione, preparava con cura il suo ultimo giorno. Aspettava. Ma a mezzanotte il calendario girava. L'uomo era ancora vivo. Un errore nei dati, pensava. Una variabile trascurata. Ricominciava.",
  "Dopo un po' smise di prepararsi per la morte e la ricerca divenne la sua unica forma di esistenza.",
  "Morì un martedì qualunque, mentre rileggeva una sequenza di cifre su un taccuino macchiato di caffè. Nessun presagio. Fuori, qualcuno camminava tra le lapidi con un taccuino in mano.",
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