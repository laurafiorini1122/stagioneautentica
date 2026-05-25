import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/lattesa-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna aveva lavorato una vita: l'alba, il caffè trangugiato in fretta, il treno, l'ufficio, poi di nuovo il treno, la casa, la cena, il letto. Un ciclo ininterrotto per quarantacinque anni, spezzato solo da quindici giorni estivi, ogni volta nello stesso anonimo luogo di villeggiatura. Aveva scalato, ottenuto, confermato. Ogni riconoscimento era stato la prova che il ciclo valeva la pena — e che lei aveva fatto la scelta giusta, quella di non fermarsi mai.",
  "Poi, un giorno, l'ultimo timbro del cartellino: la pensione.",
  "All'inizio ci fu il silenzio. La donna lo scambiò per pace. Il lusso di un sonno prolungato, la lettura del giornale senza l'ansia dell'orologio, il caffè sorseggiato in una quiete insolita. Ma dopo qualche settimana, quella sensazione svanì. I vicini si riversavano fuori dalle loro case, la città correva con la sua solita frenesia, e lei restava ferma. Il silenzio, da privilegio, era diventato un peso.",
  "Per quarantacinque anni il giudizio degli altri aveva funzionato da bussola — il riconoscimento, il prestigio, la carriera come specchio in cui vedersi. Uno specchio che per lei aveva significato qualcosa di più: la prova quotidiana che aveva scelto bene, che non era solo quello che gli altri si aspettavano che fosse. Senza quello specchio, non sapeva più cosa guardare. Niente e nessuno l'aveva preparata alla vita oltre la professione, e lei non aveva avuto il tempo, né la voglia, di prepararsi da sola. Si trovava a fare i conti con una sé stessa che, in fondo, le era sempre stata una sconosciuta.",
];

const LattesaDonna = () => (
  <PageShell title="L'attesa" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Senza un ruolo riconoscibile, non ho più niente da offrire</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna sola in una cucina silenziosa al mattino" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="L'attesa" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LattesaDonna;