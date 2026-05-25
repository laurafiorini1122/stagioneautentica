import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import unaDonnaImg from "@/assets/una-donna.jpg";

const racconti: Array<{ titolo: string; inizio: string; href?: string }> = [
  {
    titolo: "L'etichetta",
    inizio:
      "La convinzione da superare: Senza un'etichetta che gli altri riconoscano, non so più chi sono",
    href: "/una-donna/letichetta",
  },
  {
    titolo: "L'attesa",
    inizio:
      "La convinzione da superare: Senza un ruolo riconoscibile, non ho più niente da offrire",
    href: "/una-donna/lattesa",
  },
  {
    titolo: "La voyeur",
    inizio:
      "La convinzione da superare: Fuori da quell'ufficio non esisto più",
    href: "/una-donna/la-voyeur",
  },
  {
    titolo: "La routine",
    inizio:
      "La convinzione da superare: Senza un orario che mi aspetta, non so chi sono",
    href: "/una-donna/la-routine",
  },
  {
    titolo: "L'eco del capo",
    inizio:
      "La convinzione da superare: Se non mi cercano più, non valevo niente",
    href: "/una-donna/leco-del-capo",
  },
  {
    titolo: "Il labirinto burocratico",
    inizio:
      "La convinzione da superare: Chi ha subito un'ingiustizia deve combatterla fino in fondo, altrimenti ha perso",
    href: "/una-donna/labirinto-burocratico",
  },
  {
    titolo: "Il consiglio",
    inizio:
      "La convinzione da superare: Devo guadagnarmi l'approvazione degli altri anche adesso, anche qui",
    href: "/una-donna/il-consiglio",
  },
  {
    titolo: "Il linguaggio",
    inizio:
      "La convinzione da superare: Fuori dal mio contesto professionale non ho più niente da dire",
    href: "/una-donna/il-linguaggio",
  },
  {
    titolo: "L'invasione",
    inizio:
      "La convinzione da superare: In pensione sono diventata un ingombro anche a casa mia",
    href: "/una-donna/linvasione",
  },
  {
    titolo: "Il corpo estraneo",
    inizio:
      "La convinzione da superare: Il mio corpo senza uno scopo è solo qualcosa che si deteriora",
    href: "/una-donna/il-corpo-estraneo",
  },
  {
    titolo: "Le lettere",
    inizio:
      "La convinzione da superare: Ho ancora dei conti aperti con il passato che devo chiudere",
    href: "/una-donna/le-lettere",
  },
  {
    titolo: "La formula matematica",
    inizio:
      "La convinzione da superare: Se riesco a controllare tutto, anche la fine non mi coglierà impreparata",
    href: "/una-donna/la-formula-matematica",
  },
  {
    titolo: "L'inventario",
    inizio:
      "La convinzione da superare: Se catalogo tutto quello che ho vissuto, resterà qualcosa di me",
    href: "/una-donna/linventario",
  },
  {
    titolo: "Le ultime disposizioni",
    inizio:
      "La convinzione da superare: Posso amministrare anche ciò che non si può controllare",
    href: "/una-donna/le-ultime-disposizioni",
  },
  {
    titolo: "La nota a piè di pagina",
    inizio:
      "La convinzione da superare: Se non lascio un segno visibile, è come se non fossi mai esistita",
    href: "/una-donna/la-nota-a-piedi-pagina",
  },
  {
    titolo: "Il codice sorgente",
    inizio:
      "La convinzione da superare: Devo archiviare tutto il passato prima di poter stare in pace",
    href: "/una-donna/il-codice-sorgente",
  },
  {
    titolo: "L'epitaffio",
    inizio:
      "La convinzione da superare: Devo trovare la parola definitiva che mi definisca, anche dopo",
    href: "/una-donna/lepitaffio",
  },
  {
    titolo: "La manutenzione dell'assenza",
    inizio:
      "La convinzione da superare: Senza le persone che mi definivano, non so più chi sono",
    href: "/una-donna/la-manutenzione-dellassenza",
  },
  {
    titolo: "Glossario del fine rapporto",
    inizio:
      "La convinzione da superare: L'ironia è l'unica difesa che mi resta contro quello che non posso cambiare",
    href: "/una-donna/glossario-del-fine-rapporto",
  },
  {
    titolo: "Allo specchio",
    inizio:
      "La convinzione da superare: Devo sembrare ancora giovane per avere ancora un posto nel mondo",
    href: "/una-donna/allo-specchio",
  },
  {
    titolo: "Il risparmio",
    inizio:
      "La convinzione da superare: Finché i soldi crescono, il tempo ha ancora una direzione",
    href: "/una-donna/il-risparmio",
  },
  {
    titolo: "La condivisione",
    inizio:
      "La convinzione da superare: Gli altri vedono la mia esperienza come una minaccia, non come una risorsa",
    href: "/una-donna/la-condivisione",
  },
  {
    titolo: "Ruoli invertiti",
    inizio:
      "La convinzione da superare: Non dire come sto davvero è un atto di cura, non una distanza",
    href: "/una-donna/ruoli-invertiti",
  },
];

const UnaDonna = () => {

  return (
    <PageShell title="Una donna" subtitle="Il finale riscritto con libertà" bgClassName="bg-page-donna">
      {/* 1. Invito alla scrittura collettiva */}
      <section>
        <div className="mb-12 overflow-hidden rounded-sm">
          <img
            src={unaDonnaImg}
            alt="Quaderno aperto con scrittura a mano e penna stilografica accanto a una finestra"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-center">
          <Link
            to="/una-donna/riscriviamo-insieme"
            className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight hover:text-foreground/60 transition-colors underline-offset-4 hover:underline"
          >
            Riscriviamo insieme. Perché farlo?
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
                {r.inizio}
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

export default UnaDonna;