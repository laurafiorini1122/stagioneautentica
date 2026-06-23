import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import botanicaMeravigliaImg from "@/assets/Copertina La Botanica della meraviglia.jpg";

const letture = [
  {
    titolo: "La botanica della meraviglia",
    href: "/tracce/le-letture/botanica-della-meraviglia",
    img: botanicaMeravigliaImg,
  },
];

const LeLetture = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Le letture" subtitle="Una traccia per guardarsi dentro">
      <article className="space-y-6">
        <p className={pCls}>
          Certi libri aprono uno spiraglio su come le cose potrebbero essere viste diversamente. E ogni tanto si trovano autori che hanno già pensato ad alta voce quello che noi sentiamo ma non sappiamo ancora dire: è una di quelle soddisfazioni silenziose che la lettura sa dare.
        </p>
        <p className={pCls}>
          In questa sezione ho raccolto letture che mi hanno accompagnata in momenti in cui le domande erano più delle risposte: cosa significa stare bene davvero, come si guarda alla propria vita senza rimpianti o senza sconti, cosa si fa del tempo che resta. Di ognuno ho tenuto quello che mi sembrava più utile in questa sezione: un filo, alcune idee, qualche passaggio che continua a lavorare sottotraccia.
        </p>
      </article>

      <section className="mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {letture.map((l) => (
            <article key={l.titolo} className="group max-w-[220px]">
              <Link to={l.href} className="block">
                <div className="overflow-hidden rounded-sm bg-card-percorso shadow-md">
                  <img
                    src={l.img}
                    alt={l.titolo}
                    loading="lazy"
                    className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3 font-serif text-base md:text-lg text-foreground tracking-tight underline-offset-4 group-hover:underline group-hover:text-foreground/70 transition-colors">
                  {l.titolo}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default LeLetture;
