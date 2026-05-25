import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import ilVoyeurImg from "@/assets/il-voyeur.jpg";

const paragrafi = [
  "Il primo giorno di «collocamento a riposo», come recitava asetticamente la lettera che gli avevano consegnato, un uomo ebbe la sensazione di trovarsi su un molo. Davanti a lui, la nave carica dei suoi ex colleghi salpava, allontanandosi lentamente, sempre più piccola all'orizzonte. Li aveva salutati con un sorriso forzato, con una tristezza che faceva fatica a nascondere. Il legame fatto di scadenze e riunioni era stato reciso. Lui restava a terra, a fissare la scia che si dissolveva.",
  "A casa, il silenzio lo aggrediva. Gli ricordava quando da bambino, avendo la febbre, era lasciato a casa da solo, nel suo letto, mentre il mondo fuori continuava a girare indisturbato. Fuori la vita, dentro il silenzio. Una membrana invisibile tra lui e tutto il resto.",
  "E così, ogni giorno, si svegliava di buon'ora. Si vestiva con la stessa cura di sempre: camicia stirata, scarpe lucide, cravatta. Ma non c'era alcun ufficio ad aspettarlo. Andava a posizionarsi sul marciapiede di fronte all'azienda. Voleva intercettare i colleghi, dire la sua, sentirsi ancora un ingranaggio.",
  "All'inizio, qualcuno si fermava. Sorrisi forzati, lamentele sul capo, dubbi sulle procedure. L'uomo offriva soluzioni con la sicurezza di chi abita ancora il passato. Alcuni sfruttavano la sua memoria lucida per risolvere problemi complessi, prendendosi poi il merito in ufficio. Lui accettava il furto pur di sentirsi ancora necessario.",
  "Prima delle festività, osò entrare. Voleva respirare di nuovo l'odore di carta e inchiostro, il ronzio dei server, il ticchettio frenetico delle dita sui tasti. Ma la sua scrivania era occupata. Una faccia giovane lo guardò con un sorriso di circostanza, uno sguardo che lo attraversava come se fosse aria. Capì di essere un intruso in un luogo che aveva già fatto a meno di lui.",
  "Il tempo passò. Non ebbe più il coraggio di varcare la soglia. Si limitava a stare fuori dall'edificio. I saluti dei colleghi divennero rari, poi imbarazzati, infine inesistenti. I software cambiavano, le gerarchie ruotavano, nuovi volti ignoravano persino il suo nome. Finché aveva alimentato l'ingranaggio con ogni sua fibra, l'uomo era stato qualcuno. Una volta estratto dal ciclo, l'azienda lo aveva rigettato come un corpo estraneo, cancellando quarant'anni di dedizione assoluta con indifferenza burocratica.",
  "Ogni giorno tornava davanti al palazzo, qualunque fosse il tempo. Restava lì, immobile. Il corpo si irrigidiva, lo sguardo diventava vitreo, fisso sulle finestre illuminate del terzo piano. Non c'era più la speranza di un saluto. Non c'era neanche più il rimpianto. Restava solo l'atto meccanico di esserci — un pezzo di marciapiede con una sola funzione: guardare. Un voyeur della propria non-vita, condannato a fissare il luogo dove un tempo aveva avuto il diritto di respirare.",
];

const IlVoyeur = () => {
  return (
    <PageShell
      title="Il voyeur"
      subtitle="Guardare dall'esterno il mondo a cui non si appartiene più"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={ilVoyeurImg}
          alt="Uomo in giacca e cravatta di spalle davanti a un edificio per uffici"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>

      <article className="space-y-6">
        {paragrafi.map((p, i) => (
          <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">
            {p}
          </p>
        ))}
      </article>

      <div className="mt-16 mb-8">
        <Link
          to="/un-uomo"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna a Un uomo
        </Link>
      </div>
    </PageShell>
  );
};

export default IlVoyeur;