import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import botanicaMeravigliaImg from "@/assets/Copertina La Botanica della meraviglia.jpg";
import perdonareSeStessiImg from "@/assets/perdonare-sestessi-eglialtri.jpg";
import morireIstruzioniImg from "@/assets/morire-istruzioni-per-luso.jpg";
import laNotteNonFaPauraImg from "@/assets/Copertina La notte non fa paura.jpg";
import ingannevolePauraImg from "@/assets/Copertina-Milanese.jpg";
import socrateAgataEIlFuturoImg from "@/assets/Severgnini.jpg";
import lascioTuttoERipartoDaMeImg from "@/assets/Manfredi.jpg";
import viaggiPostumiImg from "@/assets/Viaggi_postumi.jpg";
import leIntermittenzeDellaMorteImg from "@/assets/saramago.jpg";
import avventurePostumeImg from "@/assets/avventure.jpg";
import liberatiDellaBravaBambinaImg from "@/assets/bambina.jpg";

const categorie = [
  {
    titolo: "Fine vita",
    intro: "Chi ha guardato la fine da vicino e ha capito cosa contava davvero",
    libri: [
      {
        titolo: "Morire. Istruzioni per l'uso",
        href: "/tracce/le-letture/morire-istruzioni-per-luso",
        img: morireIstruzioniImg,
      },
      {
        titolo: "La notte non fa paura",
        href: "/tracce/le-letture/la-notte-non-fa-paura",
        img: laNotteNonFaPauraImg,
      },
      {
        titolo: "Le intermittenze della morte",
        href: "/tracce/le-letture/le-intermittenze-della-morte",
        img: leIntermittenzeDellaMorteImg,
      },
    ],
  },
  {
    titolo: "Trasformarsi",
    intro: "Il punto in cui restare se stessi significa accettare di cambiare",
    libri: [
      {
        titolo: "Socrate, Agata e il futuro",
        href: "/tracce/le-letture/socrate-agata-e-il-futuro",
        img: socrateAgataEIlFuturoImg,
      },
      {
        titolo: "Lascio tutto e riparto da me",
        href: "/tracce/le-letture/lascio-tutto-e-riparto-da-me",
        img: lascioTuttoERipartoDaMeImg,
      },
    ],
  },
  {
    titolo: "Guardarsi dentro",
    intro: "Fare i conti con quello che siamo, senza sconti",
    libri: [
      {
        titolo: "L'ingannevole paura di non essere all'altezza",
        href: "/tracce/le-letture/lingannevole-paura-di-non-essere-allaltezza",
        img: ingannevolePauraImg,
      },
      {
        titolo: "Perdonare se stessi e gli altri",
        href: "/tracce/le-letture/perdonare-se-stessi-e-gli-altri",
        img: perdonareSeStessiImg,
      },
      {
        titolo: "Liberati della brava bambina",
        href: "/tracce/le-letture/liberati-della-brava-bambina",
        img: liberatiDellaBravaBambinaImg,
      },
    ],
  },
  {
    titolo: "Dopo di noi",
    intro: "Quello che resta di noi, oltre il nostro controllo",
    libri: [
      {
        titolo: "Viaggi postumi",
        href: "/tracce/le-letture/viaggi-postumi",
        img: viaggiPostumiImg,
      },
      {
        titolo: "Avventure postume di personaggi illustri",
        href: "/tracce/le-letture/avventure-postume-di-personaggi-illustri",
        img: avventurePostumeImg,
      },
    ],
  },
  {
    titolo: "Presenza e stupore",
    intro: "Uno sguardo che si allena a vedere, non solo a guardare",
    libri: [
      {
        titolo: "La botanica della meraviglia",
        href: "/tracce/le-letture/botanica-della-meraviglia",
        img: botanicaMeravigliaImg,
      },
    ],
  },
];

const LeLetture = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Le letture" wide>
      <article className="space-y-6 max-w-5xl mx-auto">
        <p className={pCls}>
          Certi libri aprono uno spiraglio su come le cose potrebbero essere viste diversamente. E ogni tanto si trovano autori che hanno già pensato ad alta voce quello che noi sentiamo ma non sappiamo ancora dire: è una di quelle soddisfazioni silenziose che la lettura sa dare.
        </p>
        <p className={pCls}>
          In questa sezione ho raccolto letture che mi hanno accompagnata in momenti in cui le domande erano più delle risposte: cosa significa stare bene davvero, come si guarda alla propria vita senza rimpianti o senza sconti, cosa si fa del tempo che resta. Di ognuno ho tenuto quello che mi sembrava più utile in questa sezione: un filo, alcune idee, qualche passaggio che continua a lavorare sottotraccia.
        </p>
      </article>

      <section className="mt-16 max-w-5xl mx-auto space-y-14">
        {categorie.map((cat) => (
          <div key={cat.titolo}>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
              {cat.titolo}
            </h2>
            <p className="font-serif italic text-sm text-muted-foreground mt-2 mb-6">
              {cat.intro}
            </p>
            <div className="flex flex-wrap gap-6">
              {cat.libri.map((l) => (
                <Link key={l.titolo} to={l.href} className="group block w-[155px]">
                  <div className="overflow-hidden rounded-sm bg-card-percorso shadow-md">
                    <img
                      src={l.img}
                      alt={l.titolo}
                      loading="lazy"
                      className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
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
