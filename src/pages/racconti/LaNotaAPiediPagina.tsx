import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-nota-a-piedi-pagina.jpg";

const paragrafi = [
  "Per tutta la vita, un uomo aveva abitato la penombra del ceto medio. Non era stato ricco, non era stato potente; era stato un ingranaggio efficiente, un codice fiscale che pagava le tasse e rispettava i semafori. Con la pensione, però, il silenzio della casa divenne uno specchio deformante. L'assenza di impegni fece emergere una certezza che aveva sempre tenuto a distanza: non aveva lasciato tracce.",
  "Iniziò a frequentare musei e chiese per inventariare la durata dei nomi. Fissava le lapidi nelle navate, le firme in calce alle tele, i busti di marmo nei giardini pubblici. Quegli uomini avevano forzato la mano al tempo con la pietra o il colore. Lui non aveva lasciato nulla che non fosse deperibile.",
  "Cercò allora un modo per forzare la serratura della memoria collettiva. La questione era semplice, ragionò: l'unica via d'accesso rapida all'eternità pubblica, per un uomo qualunque, era l'infamia. Per un istante accarezzò l'idea di un gesto violento, non per odio ma come protocollo, un calcolo sulla propria visibilità postuma. Ma la logica burocratica che lo aveva plasmato riprese il sopravvento. Anche il delitto era soggetto a rapido smaltimento. Una notizia di cronaca durava una settimana. L'infamia era volatile quanto la gloria.",
  "Decise di puntare sulla carta. Scrisse le sue memorie con la stessa cura con cui aveva compilato dichiarazioni dei redditi per quarant'anni. Ma mentre batteva l'ultima riga, la domanda lo colpì come un timbro di rifiuto: a chi lasciare quel faldone? Le sue memorie erano un archivio morto prima ancora di essere depositato. Parole scritte sull'acqua da un uomo che non aveva mai imparato a nuotare.",
  "Rimase immobile per un tempo che non seppe misurare. Poi prese il telefono per cercare un notaio a cui affidare il manoscritto. Prima di farlo, quasi per dovere di verifica, digitò il proprio nome nel motore di ricerca, senza aspettarsi molto: un vecchio articolo aziendale, forse, un elenco di dipendenti in qualche archivio dimenticato.",
  "Trovò una sola voce.",
  "Era un necrologio su un sito di annunci funebri locali. Il suo nome, la sua data di nascita, il suo mestiere. La data della morte: undici settimane prima.",
  "Fissò lo schermo. Il testo era scarno — poche righe, le necessarie. In fondo alla pagina c'era uno spazio per i commenti. Nessuno ne aveva lasciato uno.",
  "Pensò subito a un omonimo, a un errore di sistema, a qualcosa di spiegabile. Poi guardò fuori dalla finestra: era buio da ore e non se n'era accorto. Cercò di ricordare quando aveva mangiato l'ultima volta e non ci riuscì. Cercò di ricordare l'ultima voce umana che aveva sentito e non ci riuscì nemmeno.",
  "Si alzò e guardò nella strada. Un passante attraversò il cerchio di luce di un lampione, alzò gli occhi un istante verso le finestre illuminate del suo appartamento e non pensò nulla.",
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