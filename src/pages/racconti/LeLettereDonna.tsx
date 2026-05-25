import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/le-lettere-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Dopo una vita trascorsa a ingoiare parole non dette, a macerare silenzi imposti e a recitare copioni altrui, una donna si ritrovò in pensione con un fardello inaspettato: il peso di tutte le risposte mancate. Anni di riunioni in cui non era riuscita a sostenere la sua idea, di conversazioni tra amiche in cui la battuta giusta le era venuta in mente solo ore dopo, di piccoli e grandi soprusi subiti in silenzio.",
  "E così, con un tempo infinito a disposizione e un'ossessione crescente, decise di dedicare la sua intera esistenza a un compito: riscrivere la storia, almeno sulla carta.",
  "Scriveva lettere, lunghissime e dettagliate, a colleghi ormai lontani, ad amiche di cui aveva perso le tracce, a conoscenti con i quali aveva questioni rimaste in sospeso. Cercava con maniacale precisione la frase perfetta, la battuta folgorante che, durante un contrasto, non aveva avuto la prontezza di esprimere.",
];

const LeLettereDonna = () => (
  <PageShell title="Le lettere" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Ho ancora dei conti aperti con il passato che devo chiudere</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna anziana scrive lettere sigillate circondata da buste" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Le lettere" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LeLettereDonna;
