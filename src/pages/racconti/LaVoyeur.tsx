import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-voyeur.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Il primo giorno di «collocamento a riposo», come recitava asetticamente la lettera che le avevano consegnato, una donna ebbe la sensazione di trovarsi su un molo. Davanti a lei, la nave carica dei suoi ex colleghi salpava, allontanandosi lentamente, sempre più piccola all'orizzonte. Li aveva salutati con un sorriso forzato, con una tristezza che faceva fatica a nascondere. Il legame fatto di scadenze e riunioni era stato reciso. Lei restava a terra, a fissare la scia che si dissolveva.",
  "A casa, il silenzio la aggrediva. Le ricordava quando da bambina, avendo la febbre, era lasciata a casa da sola, nel suo letto, mentre il mondo fuori continuava a girare indisturbato. Fuori la vita, dentro il silenzio. Una membrana invisibile tra lei e tutto il resto.",
  "E così, ogni giorno, si svegliava di buon'ora. Si vestiva con la stessa cura di sempre: abito stirato, scarpe lucide. Ma non c'era alcun ufficio ad aspettarla. Andava a posizionarsi sul marciapiede di fronte all'azienda. Voleva intercettare i colleghi, dire la sua, sentirsi ancora un ingranaggio.",
  "All'inizio, qualcuno si fermava. Sorrisi di circostanza, lamentele sul nuovo responsabile, dubbi sulle procedure. La donna offriva soluzioni con la sicurezza di chi abita ancora il passato. Alcuni sfruttavano la sua memoria lucida per risolvere problemi complessi, prendendosi poi il merito in ufficio. Lei accettava il furto pur di sentirsi ancora necessaria.",
  "Prima delle festività, osò entrare. Voleva respirare di nuovo l'odore di carta e inchiostro, il ronzio dei server, il ticchettio frenetico delle dita sui tasti. Ma la sua scrivania era occupata. Una faccia giovane la guardò con un sorriso di circostanza, uno sguardo che la attraversava come se fosse aria. Capì di essere un'intrusa in un luogo che aveva già fatto a meno di lei.",
  "Il tempo passò. Non ebbe più il coraggio di varcare la soglia. Si limitava a stare fuori dall'edificio. I saluti dei colleghi divennero rari, poi imbarazzati, infine inesistenti. I software cambiavano, le gerarchie ruotavano, nuovi volti ignoravano persino il suo nome. Finché aveva alimentato l'ingranaggio con ogni sua fibra, la donna era stata qualcuna. Una volta estratta dal ciclo, l'azienda l'aveva rigettata come un corpo estraneo, cancellando quarant'anni di dedizione assoluta con indifferenza burocratica.",
];

const LaVoyeur = () => (
  <PageShell title="La voyeur" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Fuori da quell'ufficio non esisto più</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna in tailleur di spalle davanti a un edificio per uffici" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="La voyeur" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LaVoyeur;