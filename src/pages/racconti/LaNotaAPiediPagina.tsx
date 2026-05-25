import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-nota-a-piedi-pagina.jpg";

const paragrafi = [
  "Per tutta la vita, un uomo aveva abitato la penombra del ceto medio. Non era stato ricco, non era stato potente; era stato un ingranaggio efficiente, un codice fiscale che pagava le tasse e rispettava i semafori. Ma con la pensione, il silenzio della casa divenne uno specchio deformante. L'assenza di impegni fece emergere un'angoscia nuova: l'evidenza della propria irrilevanza storica.",
  "Iniziò a frequentare i musei e le chiese per inventariare la durata dei nomi. Fissava le lapidi nelle navate, le firme in calce alle tele, i busti di marmo nei giardini pubblici. Quegli uomini avevano sconfitto il tempo con la pietra o il colore. Lui, invece, non aveva lasciato nulla che non fosse deperibile.",
  "L'uomo iniziò a cercare un modo per forzare la serratura della memoria collettiva. Analizzò freddamente la realtà: l'unica via d'accesso rapida all'eternità pubblica, per un uomo qualunque, era l'infamia. Per un istante, accarezzò l'idea di un gesto violento, non per odio, ma per protocollo: un investimento deliberato sulla propria visibilità postuma. Ma la logica burocratica che lo aveva plasmato riprese il sopravvento. Anche il delitto era soggetto a un rapido smaltimento. Una notizia di cronaca durava una settimana. L'infamia era volatile quanto la gloria.",
  "Decise allora di puntare sulla carta. Iniziò a scrivere le sue memorie. Ma mentre scriveva l'ultima riga, la domanda lo colpì con la forza di un timbro di rifiuto: a chi lasciare quel faldone? Le sue memorie erano un archivio morto prima ancora di essere depositato. Erano parole scritte sull'acqua da un uomo che non aveva mai imparato a nuotare.",
  "Rimase immobile, mentre la polvere si depositava sui fogli bianchi della sua autobiografia. Il mondo era un'amministrazione perfetta che non prevedeva note a piè di pagina per chi non aveva mai cambiato il testo originale. L'ultima traccia del suo passaggio sarebbe stata la cancellazione del suo nome da un elenco elettorale, un atto burocratico rapido, indolore e definitivo.",
];

const LaNotaAPiediPagina = () => (
  <PageShell
    title="La nota a piè di pagina"
    subtitle="Quando l'irrilevanza storica diventa più terrificante della morte"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano in un museo che guarda busti di marmo sentendosi insignificante" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
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

export default LaNotaAPiediPagina;