import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-nota-a-piedi-pagina-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per tutta la vita, una donna aveva abitato la penombra del ceto medio. Non era stata ricca, non era stata potente; era stata un ingranaggio efficiente, un codice fiscale che pagava le tasse e rispettava i semafori. Con la pensione, però, il silenzio della casa divenne uno specchio deformante. L'assenza di impegni fece emergere una certezza che aveva sempre tenuto a distanza: non aveva lasciato tracce.",
  "Iniziò a frequentare musei e chiese per inventariare la durata dei nomi. Fissava le lapidi nelle navate, le firme in calce alle tele, i busti di marmo nei giardini pubblici. Quegli uomini avevano forzato la mano al tempo con la pietra o il colore. Lei non aveva lasciato nulla che non fosse deperibile.",
  "Cercò allora un modo per forzare la serratura della memoria collettiva. La questione era semplice, ragionò: l'unica via d'accesso rapida all'eternità pubblica, per una donna qualunque, era l'infamia. Per un istante accarezzò l'idea di un gesto violento, non per odio ma come protocollo, un calcolo sulla propria sopravvivenza postuma. Ma la logica burocratica che l'aveva plasmata riprese il sopravvento. Anche il delitto era soggetto a rapido smaltimento. Una notizia di cronaca durava una settimana. L'infamia era volatile quanto la gloria.",
  "Decise di puntare sulla carta. Scrisse le sue memorie con la stessa cura con cui aveva compilato dichiarazioni dei redditi per quarant'anni. Ma mentre batteva l'ultima riga, la domanda la colpì come un timbro di rifiuto: a chi lasciare quel faldone? Le sue memorie erano un archivio morto prima ancora di essere depositato. Parole scritte sull'acqua da chi non aveva mai imparato a nuotare.",
];

const LaNotaAPiediPaginaDonna = () => (
  <PageShell title="La nota a piè di pagina" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Se non lascio un segno visibile, è come se non fossi mai esistita</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna in un museo o chiesa che inventaria nomi su lapidi e busti di marmo" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="La nota a piè di pagina" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LaNotaAPiediPaginaDonna;