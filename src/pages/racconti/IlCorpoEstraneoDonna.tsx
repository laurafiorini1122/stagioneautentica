import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-corpo-estraneo-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per quarant'anni aveva usato le mani senza pensarci. La catena di montaggio non richiedeva presenza mentale, solo presenza fisica: un peso che si spostava, si piegava, premeva il tasto al momento giusto. Il corpo faceva, e lei — se c'era una lei — aspettava da qualche parte dietro agli occhi.",
  "Poi era arrivata la pensione. Niente di drammatico: una busta paga in meno, una mattina senza sveglia. Il primo giorno rimase seduta in cucina fino alle undici, e non sapeva cosa farne — delle mani, soprattutto. Le guardava come si guarda un attrezzo che non serve più.",
  "Cominciò a svegliarsi di notte per il cuore. Non dolore, ma coscienza: il ticchettio sordo sotto lo sterno che non aveva mai sentito prima. Forse c'era sempre stato e il rumore della fabbrica lo copriva. Adesso il silenzio era completo, e ogni battito sembrava chiedere qualcosa.",
  "La dottoressa disse che stava bene. Disse \"per la sua età\" e lei non riuscì a sentire il resto della frase. Comprò uno sfigmomanometro. Poi un secondo, convinta che il primo misurasse male. Passava le mattine al tavolo con il braccio fasciato, aspettando conferme che non arrivavano mai — o che arrivavano e non bastavano.",
  "Suo figlio chiamava ogni domenica. \"Come stai?\" \"Bene,\" diceva lei. Non sapeva come spiegare che non era una malattia, era qualcos'altro: come accorgersi di qualcosa che ci si porta dietro da sempre e a cui non si era mai dato un nome.",
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
