import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import letichettaImg from "@/assets/letichetta.jpg";
import lattesaImg from "@/assets/lattesa.jpg";
import ilVoyeurImg from "@/assets/il-voyeur.jpg";
import laRoutineImg from "@/assets/la-routine.jpg";
import lecoDelCapoImg from "@/assets/leco-del-capo.jpg";
import labirintoBurocraticoImg from "@/assets/labirinto-burocratico.jpg";
import ilConsiglioImg from "@/assets/il-consiglio.jpg";
import ilLinguaggioImg from "@/assets/il-linguaggio.jpg";
import linvasioneImg from "@/assets/linvasione.jpg";
import ilCorpoEstraneoImg from "@/assets/il-corpo-estraneo.jpg";
import leLettereImg from "@/assets/le-lettere.jpg";
import laFormulaMatematicaImg from "@/assets/la-formula-matematica.jpg";
import linventarioImg from "@/assets/linventario.jpg";
import leUltimeDisposizioniImg from "@/assets/le-ultime-disposizioni.jpg";
import laNotaAPiediPaginaImg from "@/assets/la-nota-a-piedi-pagina.jpg";
import ilCodiceSorgenteImg from "@/assets/il-codice-sorgente.jpg";
import lepitaffioImg from "@/assets/lepitaffio.jpg";
import laManutenzioneDellassenzaImg from "@/assets/la-manutenzione-dellassenza.jpg";
import glossarioFineRapportoImg from "@/assets/glossario-fine-rapporto.jpg";
import alloSpecchioImg from "@/assets/allo-specchio.jpg";
import ilRisparmioImg from "@/assets/il-risparmio.jpg";
import laCondivisioneImg from "@/assets/la-condivisione.jpg";
import ruoliInvertitiImg from "@/assets/ruoli-invertiti.jpg";
import introduzioneImg from "@/assets/introduzione.jpg";

const racconti = [
  {
    titolo: "L'etichetta",
    href: "/un-uomo/letichetta",
    img: letichettaImg,
  },
  {
    titolo: "L'attesa",
    href: "/un-uomo/lattesa",
    img: lattesaImg,
  },
  {
    titolo: "Il voyeur",
    href: "/un-uomo/il-voyeur",
    img: ilVoyeurImg,
  },
  {
    titolo: "La routine",
    href: "/un-uomo/la-routine",
    img: laRoutineImg,
  },
  {
    titolo: "L'eco del capo",
    href: "/un-uomo/leco-del-capo",
    img: lecoDelCapoImg,
  },
  {
    titolo: "Il labirinto burocratico",
    href: "/un-uomo/il-labirinto-burocratico",
    img: labirintoBurocraticoImg,
  },
  {
    titolo: "Il consiglio",
    href: "/un-uomo/il-consiglio",
    img: ilConsiglioImg,
  },
  {
    titolo: "Il linguaggio",
    href: "/un-uomo/il-linguaggio",
    img: ilLinguaggioImg,
  },
  {
    titolo: "L'invasione",
    href: "/un-uomo/linvasione",
    img: linvasioneImg,
  },
  {
    titolo: "Il corpo estraneo",
    href: "/un-uomo/il-corpo-estraneo",
    img: ilCorpoEstraneoImg,
  },
  {
    titolo: "Le lettere",
    href: "/un-uomo/le-lettere",
    img: leLettereImg,
  },
  {
    titolo: "La formula matematica",
    href: "/un-uomo/la-formula-matematica",
    img: laFormulaMatematicaImg,
  },
  {
    titolo: "L'inventario",
    href: "/un-uomo/linventario",
    img: linventarioImg,
  },
  {
    titolo: "Le ultime disposizioni",
    href: "/un-uomo/le-ultime-disposizioni",
    img: leUltimeDisposizioniImg,
  },
  {
    titolo: "La nota a piè di pagina",
    href: "/un-uomo/la-nota-a-piedi-pagina",
    img: laNotaAPiediPaginaImg,
  },
  {
    titolo: "Il codice sorgente",
    href: "/un-uomo/il-codice-sorgente",
    img: ilCodiceSorgenteImg,
  },
  {
    titolo: "L'epitaffio",
    href: "/un-uomo/lepitaffio",
    img: lepitaffioImg,
  },
  {
    titolo: "La manutenzione dell'assenza",
    href: "/un-uomo/la-manutenzione-dellassenza",
    img: laManutenzioneDellassenzaImg,
  },
  {
    titolo: "Glossario del fine rapporto",
    href: "/un-uomo/glossario-del-fine-rapporto",
    img: glossarioFineRapportoImg,
  },
  {
    titolo: "Allo specchio",
    href: "/un-uomo/allo-specchio",
    img: alloSpecchioImg,
  },
  {
    titolo: "Il risparmio",
    href: "/un-uomo/il-risparmio",
    img: ilRisparmioImg,
  },
  {
    titolo: "La condivisione",
    href: "/un-uomo/la-condivisione",
    img: laCondivisioneImg,
  },
  {
    titolo: "Ruoli invertiti",
    href: "/un-uomo/ruoli-invertiti",
    img: ruoliInvertitiImg,
  },
];

const UnUomo = () => {
  return (
    <PageShell title="Un uomo" bgClassName="bg-page-uomo" wide>
      {/* Griglia racconti */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <article className="group">
            <Link to="/un-uomo/introduzione" className="block">
              <div className="overflow-hidden rounded-sm bg-card-uomo ring-2 ring-foreground/60 ring-offset-4 ring-offset-page-uomo">
                <img
                  src={introduzioneImg}
                  alt="Perché ho scritto questi racconti"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-3 font-serif text-lg md:text-xl font-bold text-foreground tracking-tight underline-offset-4 group-hover:underline group-hover:text-foreground/70 transition-colors">
                Perché ho scritto questi racconti
              </h3>
            </Link>
          </article>
          {racconti.map((r) => (
            <article key={r.titolo} className="group">
              <Link to={r.href} className="block">
                <div className="overflow-hidden rounded-sm bg-card-uomo">
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