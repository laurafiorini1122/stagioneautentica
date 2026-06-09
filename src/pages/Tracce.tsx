import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import introduzioneImg from "@/assets/percorso/Introduzione3.png";
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
    titolo: "Curriculum Vitae",
    href: "/tracce/il-curriculum-vitae",
    img: cvImg,
  },
  {
    titolo: "Linea del Tempo",
    href: "/tracce/la-linea-del-tempo",
    img: lineaDelTempoImg,
  },
  {
    titolo: "Albero genealogico",
    href: "/tracce/lalbero-genealogico",
    img: alberoGenealogicoImg,
  },
  {
    titolo: "Incontri",
    href: "/tracce/incontri",
    img: incontriImg,
  },
  {
    titolo: "Luoghi",
    href: "/tracce/viaggi",
    img: viaggiImg,
  },
  {
    titolo: "Curriculum dell'autostima",
    href: "/tracce/il-curriculum-dellautostima",
    img: curriculumAutostimaImg,
  },
  {
    titolo: "Parole che fanno stare bene",
    href: "/tracce/le-parole-che-fanno-stare-bene",
    img: paroleBeneImg,
  },
  {
    titolo: "Fine",
    href: "/tracce/la-fine",
    img: fineImg,
  },
  {
    titolo: "Scatola del Tempo",
    href: "/tracce/la-scatola-del-tempo",
    img: scatolaTempoImg,
  },
  {
    titolo: "Letture",
    href: "/tracce/le-letture",
    img: lettureImg,
  },
];

const Tracce = () => {
  return (
    <PageShell title="Tracce" wide>
      {/* Griglia tracce */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <article className="group">
            <Link to="/tracce/come-sono-arrivata-fin-qui" className="block">
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
                Come sono arrivata fin qui
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

export default Tracce;
