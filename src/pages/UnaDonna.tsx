import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import unaDonnaImg from "@/assets/una-donna.jpg";
import letichettaImg from "@/assets/letichetta-donna.jpg";
import lattesaImg from "@/assets/lattesa-donna.jpg";
import laVoyeurImg from "@/assets/la-voyeur.jpg";
import laRoutineImg from "@/assets/la-routine-donna.jpg";
import lecoDelCapoImg from "@/assets/leco-del-capo-donna.jpg";
import labirintoBurocraticoImg from "@/assets/labirinto-burocratico-donna.jpg";
import ilConsiglioImg from "@/assets/il-consiglio-donna.jpg";
import ilLinguaggioImg from "@/assets/il-linguaggio-donna.jpg";
import linvasioneImg from "@/assets/linvasione-donna.jpg";
import ilCorpoEstraneoImg from "@/assets/il-corpo-estraneo-donna.jpg";
import leLettereImg from "@/assets/le-lettere-donna.jpg";
import laFormulaMatematicaImg from "@/assets/la-formula-matematica-donna.jpg";
import linventarioImg from "@/assets/linventario-donna.jpg";
import leUltimeDisposizioniImg from "@/assets/le-ultime-disposizioni-donna.jpg";
import laNotaAPiediPaginaImg from "@/assets/la-nota-a-piedi-pagina-donna.jpg";
import ilCodiceSorgenteImg from "@/assets/il-codice-sorgente-donna.jpg";
import lepitaffioImg from "@/assets/lepitaffio-donna.jpg";
import laManutenzioneDellassenzaImg from "@/assets/la-manutenzione-dellassenza-donna.jpg";
import glossarioFineRapportoImg from "@/assets/glossario-fine-rapporto-donna.jpg";
import alloSpecchioImg from "@/assets/allo-specchio-donna.jpg";
import ilRisparmioImg from "@/assets/il-risparmio-donna.jpg";
import laCondivisioneImg from "@/assets/la-condivisione-donna.jpg";
import ruoliInvertitiImg from "@/assets/ruoli-invertiti-donna.jpg";

const racconti = [
  {
    titolo: "L'etichetta",
    href: "/una-donna/letichetta",
    img: letichettaImg,
  },
  {
    titolo: "L'attesa",
    href: "/una-donna/lattesa",
    img: lattesaImg,
  },
  {
    titolo: "La voyeur",
    href: "/una-donna/la-voyeur",
    img: laVoyeurImg,
  },
  {
    titolo: "La routine",
    href: "/una-donna/la-routine",
    img: laRoutineImg,
  },
  {
    titolo: "L'eco del capo",
    href: "/una-donna/leco-del-capo",
    img: lecoDelCapoImg,
  },
  {
    titolo: "Il labirinto burocratico",
    href: "/una-donna/labirinto-burocratico",
    img: labirintoBurocraticoImg,
  },
  {
    titolo: "Il consiglio",
    href: "/una-donna/il-consiglio",
    img: ilConsiglioImg,
  },
  {
    titolo: "Il linguaggio",
    href: "/una-donna/il-linguaggio",
    img: ilLinguaggioImg,
  },
  {
    titolo: "L'invasione",
    href: "/una-donna/linvasione",
    img: linvasioneImg,
  },
  {
    titolo: "Il corpo estraneo",
    href: "/una-donna/il-corpo-estraneo",
    img: ilCorpoEstraneoImg,
  },
  {
    titolo: "Le lettere",
    href: "/una-donna/le-lettere",
    img: leLettereImg,
  },
  {
    titolo: "La formula matematica",
    href: "/una-donna/la-formula-matematica",
    img: laFormulaMatematicaImg,
  },
  {
    titolo: "L'inventario",
    href: "/una-donna/linventario",
    img: linventarioImg,
  },
  {
    titolo: "Le ultime disposizioni",
    href: "/una-donna/le-ultime-disposizioni",
    img: leUltimeDisposizioniImg,
  },
  {
    titolo: "La nota a piè di pagina",
    href: "/una-donna/la-nota-a-piedi-pagina",
    img: laNotaAPiediPaginaImg,
  },
  {
    titolo: "Il codice sorgente",
    href: "/una-donna/il-codice-sorgente",
    img: ilCodiceSorgenteImg,
  },
  {
    titolo: "L'epitaffio",
    href: "/una-donna/lepitaffio",
    img: lepitaffioImg,
  },
  {
    titolo: "La manutenzione dell'assenza",
    href: "/una-donna/la-manutenzione-dellassenza",
    img: laManutenzioneDellassenzaImg,
  },
  {
    titolo: "Glossario del fine rapporto",
    href: "/una-donna/glossario-del-fine-rapporto",
    img: glossarioFineRapportoImg,
  },
  {
    titolo: "Allo specchio",
    href: "/una-donna/allo-specchio",
    img: alloSpecchioImg,
  },
  {
    titolo: "Il risparmio",
    href: "/una-donna/il-risparmio",
    img: ilRisparmioImg,
  },
  {
    titolo: "La condivisione",
    href: "/una-donna/la-condivisione",
    img: laCondivisioneImg,
  },
  {
    titolo: "Ruoli invertiti",
    href: "/una-donna/ruoli-invertiti",
    img: ruoliInvertitiImg,
  },
];

const UnaDonna = () => {
  return (
    <PageShell title="Una donna" bgClassName="bg-page-donna" wide>
      {/* Griglia racconti */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <article className="group">
            <Link to="/una-donna/riscriviamo-insieme" className="block">
              <div className="relative overflow-hidden rounded-sm bg-card-donna ring-2 ring-foreground/60 ring-offset-4 ring-offset-page-donna">
                <img
                  src={unaDonnaImg}
                  alt="Riscriviamo insieme. Perché farlo?"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  className="absolute font-sans"
                  style={{
                    top: "8px",
                    left: "8px",
                    backgroundColor: "rgba(83,74,183,0.9)",
                    color: "#CECBF6",
                    fontSize: "11px",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Introduzione
                </span>
              </div>
              <h3 className="mt-3 font-serif text-lg md:text-xl font-bold text-foreground tracking-tight underline-offset-4 group-hover:underline group-hover:text-foreground/70 transition-colors">
                Riscriviamo insieme. Perché farlo?
              </h3>
            </Link>
          </article>
          {racconti.map((r) => (
            <article key={r.titolo} className="group">
              <Link to={r.href} className="block">
                <div className="overflow-hidden rounded-sm bg-card-donna">
                  <img
                    src={r.img}
                    alt={r.titolo}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3 font-serif text-lg md:text-xl text-foreground tracking-tight underline-offset-4 group-hover:underline group-hover:text-foreground/70 transition-colors">
                  {r.titolo}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Download PDF */}
      <section className="mt-24 mb-8 text-center">
        <a
          href="/Stagione_autentica_Una_Donna.pdf"
          download
          className="inline-block font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm border border-foreground/60 text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Scarica i racconti in PDF
        </a>
      </section>
    </PageShell>
  );
};

export default UnaDonna;
