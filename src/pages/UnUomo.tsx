import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import unUomoImg from "@/assets/un-uomo.jpg";

const racconti = [
  {
    titolo: "L'etichetta",
    estratto: "Quando smettere di fare significa smettere di essere.",
    href: "/un-uomo/letichetta",
  },
  {
    titolo: "L'attesa",
    estratto: "Quando il tempo libero diventa la prigione più silenziosa.",
    href: "/un-uomo/lattesa",
  },
  {
    titolo: "Il voyeur",
    estratto: "Guardare dall'esterno il mondo a cui non si appartiene più.",
    href: "/un-uomo/il-voyeur",
  },
  {
    titolo: "La routine",
    estratto: "Quando la libertà viene riempita con nuove catene invisibili.",
    href: "/un-uomo/la-routine",
  },
  {
    titolo: "L'eco del capo",
    estratto: "Quando il potere evapora con il badge e le promesse rimangono parole.",
    href: "/un-uomo/leco-del-capo",
  },
  {
    titolo: "Il labirinto burocratico",
    estratto: "Quando la fedeltà al lavoro viene punita dal sistema che si è servito.",
    href: "/un-uomo/il-labirinto-burocratico",
  },
  {
    titolo: "Il consiglio",
    estratto: "Quando l'approvazione degli altri diventa l'unico hobby davvero praticato.",
    href: "/un-uomo/il-consiglio",
  },
  {
    titolo: "Il linguaggio",
    estratto: "Quando le parole del potere perdono senso fuori dal loro contesto.",
    href: "/un-uomo/il-linguaggio",
  },
  {
    titolo: "L'invasione",
    estratto: "Quando la casa diventa un territorio ostile abitato da un estraneo.",
    href: "/un-uomo/linvasione",
  },
  {
    titolo: "Il corpo estraneo",
    estratto: "Quando il silenzio amplifica ogni segnale di decadimento.",
    href: "/un-uomo/il-corpo-estraneo",
  },
  {
    titolo: "Le lettere",
    estratto: "Quando l'ultima parola viene affidata a un notaio e alla morte.",
    href: "/un-uomo/le-lettere",
  },
  {
    titolo: "La formula matematica",
    estratto: "Quando si tenta di calcolare l'incalcolabile per non subirlo.",
    href: "/un-uomo/la-formula-matematica",
  },
  {
    titolo: "L'inventario",
    estratto: "Quando si cataloga la vita sperando che la carta la trattenga.",
    href: "/un-uomo/linventario",
  },
  {
    titolo: "Le ultime disposizioni",
    estratto: "Quando si tenta di amministrare l'incontrollabile fino all'ultimo foglio.",
    href: "/un-uomo/le-ultime-disposizioni",
  },
  {
    titolo: "La nota a piè di pagina",
    estratto: "Quando l'irrilevanza storica diventa più terrificante della morte.",
    href: "/un-uomo/la-nota-a-piedi-pagina",
  },
  {
    titolo: "Il codice sorgente",
    estratto: "Quando si sacrifica il presente per archiviare un passato che nessuno leggerà.",
    href: "/un-uomo/il-codice-sorgente",
  },
  {
    titolo: "L'epitaffio",
    estratto: "Quando la ricerca della parola perfetta si conclude con quella di tutti.",
    href: "/un-uomo/lepitaffio",
  },
  {
    titolo: "La manutenzione dell'assenza",
    estratto: "Quando il dolore diventa l'unica prova di esistere ancora.",
    href: "/un-uomo/la-manutenzione-dellassenza",
  },
  {
    titolo: "Glossario del fine rapporto",
    estratto: "Quando il sarcasmo diventa l'ultima difesa contro l'inevitabile.",
    href: "/un-uomo/glossario-del-fine-rapporto",
  },
  {
    titolo: "Allo specchio",
    estratto: "Quando il volto diventa un curriculum da aggiornare.",
    href: "/un-uomo/allo-specchio",
  },
  {
    titolo: "Il risparmio",
    estratto: "Quando la frugalità diventa la prigione più cara di tutte.",
    href: "/un-uomo/il-risparmio",
  },
  {
    titolo: "La condivisione",
    estratto: "Quando quarant'anni di competenza valgono meno di trent'anni di attesa.",
    href: "/un-uomo/la-condivisione",
  },
  {
    titolo: "Ruoli invertiti",
    estratto: "Quando non voler essere un peso significa diventare invisibile.",
    href: "/un-uomo/ruoli-invertiti",
  },
];

const UnUomo = () => {
  return (
    <PageShell title="Un uomo" subtitle="L'abisso raccontato con ironia" bgClassName="bg-page-uomo">
      {/* 1. Introduzione + epigrafe */}
      <section>
        <div className="mb-12 overflow-hidden rounded-sm">
          <img
            src={unUomoImg}
            alt="Mani d'uomo con un libro aperto e una tazza di caffè"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-center">
          <Link
            to="/un-uomo/introduzione"
            className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight hover:text-foreground/60 transition-colors underline-offset-4 hover:underline"
          >
            Perché ho scritto questi racconti
          </Link>
        </p>
      </section>

      {/* 2. 14 racconti */}
      <section className="mt-24">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground/70 tracking-tight mb-6">
          Racconti
        </h2>
        <div>
          {racconti.map((r, idx) => (
            <article
              key={r.titolo}
              className={`py-8 ${idx !== 0 ? "border-t border-foreground/15" : ""}`}
            >
              <h3 className="font-serif text-2xl text-foreground tracking-tight mb-3">
                {r.href ? (
                  <Link
                    to={r.href}
                    className="hover:text-foreground/60 transition-colors underline-offset-4 hover:underline"
                  >
                    {r.titolo}
                  </Link>
                ) : (
                  r.titolo
                )}
              </h3>
              <p className="font-serif text-base leading-[1.8] text-foreground/75">
                {r.estratto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Download PDF */}
      <section className="mt-24 mb-8 text-center">
        <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm border border-foreground/40 text-foreground/40 cursor-default">
          Scarica i racconti in PDF
        </span>
      </section>
    </PageShell>
  );
};

export default UnUomo;