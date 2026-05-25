import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-codice-sorgente-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per una donna, la pensione non fu un traguardo, ma un cambio di gestione. Smessa di amministrare i beni dell'azienda, si nominò curatrice fallimentare della propria memoria. Il passato non era più un insieme di ricordi, ma un enorme database non indicizzato che esigeva un ordine definitivo.",
  "Trascorreva dodici ore al giorno davanti allo schermo. Non scriveva memorie; redigeva un'autobiografia tecnica, un registro analitico in cui ogni evento era scomposto in data, ora, luogo e causale. Scansionava vecchie ricevute fiscali, allegava grafici sull'andamento del suo peso corporeo negli anni Ottanta, trascriveva verbali di assemblee condominiali di trent'anni prima.",
];

const IlCodiceSorgenteDonna = () => (
  <PageShell title="Il codice sorgente" subtitle={<><span className="normal-case">La convinzione da superare: </span><br/><span className="normal-case"><strong><em>Devo archiviare tutto il passato prima di poter stare in pace</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna anziana davanti al computer scansiona vecchie ricevute" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="Il codice sorgente" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default IlCodiceSorgenteDonna;