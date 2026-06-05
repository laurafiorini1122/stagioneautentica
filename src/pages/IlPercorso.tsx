import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import introduzioneImg from "@/assets/percorso/introduzione.jpg";
import cvImg from "@/assets/percorso/cv.jpg";
import lineaDelTempoImg from "@/assets/percorso/linea-del-tempo.jpg";
import alberoGenealogicoImg from "@/assets/percorso/albero-genealogico.jpg";
import incontriImg from "@/assets/percorso/incontri.jpg";
import viaggiImg from "@/assets/percorso/viaggi.jpg";
import curriculumAutostimaImg from "@/assets/percorso/curriculum-autostima.jpg";
import paroleBeneImg from "@/assets/percorso/parole-bene.jpg";
import fineImg from "@/assets/percorso/fine.jpg";
import scatolaTempoImg from "@/assets/percorso/scatola-tempo.jpg";
import lettureImg from "@/assets/percorso/letture.jpg";

const tracce = [
  {
    titolo: "Il curriculum vitae",
    href: "/il-percorso/il-curriculum-vitae",
    img: cvImg,
  },
  {
    titolo: "La linea del tempo",
    href: "/il-percorso/la-linea-del-tempo",
    img: lineaDelTempoImg,
  },
  {
    titolo: "L'albero genealogico",
    href: "/il-percorso/lalbero-genealogico",
    img: alberoGenealogicoImg,
  },
  {
    titolo: "Incontri",
    href: "/il-percorso/incontri",
    img: incontriImg,
  },
  {
    titolo: "Viaggi",
    href: "/il-percorso/viaggi",
    img: viaggiImg,
  },
  {
    titolo: "Il curriculum dell'autostima",
    href: "/il-percorso/il-curriculum-dellautostima",
    img: curriculumAutostimaImg,
  },
  {
    titolo: "Le parole che fanno stare bene",
    href: "/il-percorso/le-parole-che-fanno-stare-bene",
    img: paroleBeneImg,
  },
  {
    titolo: "La fine",
    href: "/il-percorso/la-fine",
    img: fineImg,
  },
  {
    titolo: "La scatola del tempo",
    href: "/il-percorso/la-scatola-del-tempo",
    img: scatolaTempoImg,
  },
  {
    titolo: "Le letture",
    href: "/il-percorso/le-letture",
    img: lettureImg,
  },
];

const IlPercorso = () => {
  return (
    <PageShell title="Un percorso" wide>
      {/* Griglia tracce */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <article className="group">
            <Link to="/il-percorso/come-sono-arrivata-fin-qui" className="block">
              <div className="relative overflow-hidden rounded-sm bg-card-percorso ring-2 ring-foreground/60 ring-offset-4 ring-offset-background">
                <img
                  src={introduzioneImg}
                  alt="Come sono arrivata fin qui: non avevo una mappa, me la sono costruita"
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
                Come sono arrivata fin qui:<br />non avevo una mappa, me la sono costruita
              </h3>
            </Link>
          </article>
          {tracce.map((t) => (
            <article key={t.titolo} className="group">
              <Link to={t.href} className="block">
                <div className="overflow-hidden rounded-sm bg-card-percorso">
                  <img
                    src={t.img}
                    alt={t.titolo}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3 font-serif text-lg md:text-xl text-foreground tracking-tight underline-offset-4 group-hover:underline group-hover:text-foreground/70 transition-colors">
                  {t.titolo}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default IlPercorso;
