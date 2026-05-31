import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-codice-sorgente-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per quella donna, la pensione non fu un traguardo ma un cambio di gestione. Smesso di coordinare i reparti dell'azienda, si nominò curatrice fallimentare della propria memoria. Il passato non era più un insieme di ricordi: era un enorme database non indicizzato che esigeva un ordine definitivo.",
  "Trascorreva dodici ore al giorno davanti allo schermo. Scansionava vecchie buste paga, allegava grafici sull'andamento del suo peso corporeo negli anni Ottanta, trascriveva i verbali delle riunioni di condominio di trent'anni prima — quelle in cui aveva parlato lei, per prima e più a lungo. Ogni evento aveva data, ora, luogo, causale.",
  "L'implementazione finale fu il progetto della lapide. Sulla sua tomba non ci sarebbe stato un volto, ma un QR code inciso nel marmo, un portale che avrebbe rimandato l'utente al server contenente l'intera, monumentale biografia. «Sarò l'unica persona a restare accessibile», pensava.",
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