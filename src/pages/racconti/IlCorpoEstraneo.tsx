import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-corpo-estraneo.jpg";

const paragrafi = [
  "Per quarant'anni aveva usato le mani senza pensarci. La catena di montaggio non richiedeva presenza mentale, solo presenza fisica: un peso che si spostava, si piegava, premeva il tasto al momento giusto. Il corpo faceva, e lui — se c'era un lui — aspettava da qualche parte dietro agli occhi.",
  "Poi era arrivata la pensione. Niente di drammatico: una busta paga in meno, una mattina senza sveglia. Il primo giorno rimase seduto in cucina fino alle undici, e non sapeva cosa farne — delle mani, soprattutto. Le guardava come si guarda un attrezzo che non serve più.",
  "Cominciò a svegliarsi di notte per il cuore. Non dolore, ma coscienza: il ticchettio sordo sotto lo sterno che non aveva mai sentito prima. Forse c'era sempre stato e il rumore della fabbrica lo copriva. Adesso il silenzio era completo, e ogni battito sembrava chiedere qualcosa.",
  "Il medico disse che stava bene. Disse \"per la sua età\" e lui non riuscì a sentire il resto della frase. Comprò uno sfigmomanometro. Poi un secondo, convinto che il primo misurasse male. Passava le mattine al tavolo con il braccio fasciato, aspettando conferme che non arrivavano mai — o che arrivavano e non bastavano.",
  "Sua figlia chiamava ogni domenica. \"Come stai?\" \"Bene,\" diceva lui. Non sapeva come spiegare che non era una malattia, era qualcos'altro: come accorgersi di qualcosa che ci si porta dietro da sempre e a cui non si era mai dato un nome.",
  "Un mattino non si alzò. Non era stanchezza — era più semplice di così. Non c'era nessun posto dove andare, e il corpo lo sapeva prima di lui.",
  "Rimase a letto fino a mezzogiorno. Ascoltava il proprio respiro e cercava di ricordare quando aveva smesso di sentirlo come qualcosa di suo.",
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