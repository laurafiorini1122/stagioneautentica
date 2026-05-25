import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import ilPercorsoImg from "@/assets/il-percorso.jpg";

const tracce: Array<{ titolo: string; href?: string }> = [
  { titolo: "Il curriculum vitae", href: "/il-percorso/il-curriculum-vitae" },
  { titolo: "La linea del tempo", href: "/il-percorso/la-linea-del-tempo" },
  { titolo: "L'albero genealogico", href: "/il-percorso/lalbero-genealogico" },
  { titolo: "Incontri", href: "/il-percorso/incontri" },
  { titolo: "Viaggi", href: "/il-percorso/viaggi" },
  { titolo: "Il curriculum dell'autostima", href: "/il-percorso/il-curriculum-dellautostima" },
  { titolo: "Le parole che fanno stare bene", href: "/il-percorso/le-parole-che-fanno-stare-bene" },
  { titolo: "La fine", href: "/il-percorso/la-fine" },
  { titolo: "La scatola del tempo", href: "/il-percorso/la-scatola-del-tempo" },
  { titolo: "Le letture", href: "/il-percorso/le-letture" },
];

const IlPercorso = () => {
  return (
    <PageShell title="Un percorso" subtitle="Gli strumenti per guardarsi dentro">
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={ilPercorsoImg}
          alt="Sentiero che si perde in lontananza, metafora di un percorso personale"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
      <p className="text-center">
        <Link
          to="/il-percorso/come-sono-arrivata-fin-qui"
          className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight hover:text-foreground/60 transition-colors underline-offset-4 hover:underline"
        >
          Come sono arrivata fin qui:<br/>non avevo una mappa, me la sono costruita
        </Link>
      </p>

      <section className="mt-24">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground/70 tracking-tight mb-6">
          Tracce
        </h2>
        <div>
          {tracce.map((t, idx) => (
            <article
              key={t.titolo}
              className={`py-8 ${idx !== 0 ? "border-t border-foreground/15" : ""}`}
            >
              <h3 className="font-serif text-2xl text-foreground tracking-tight">
                {t.href ? (
                  <Link
                    to={t.href}
                    className="hover:text-foreground/60 transition-colors underline-offset-4 hover:underline"
                  >
                    {t.titolo}
                  </Link>
                ) : (
                  t.titolo
                )}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default IlPercorso;