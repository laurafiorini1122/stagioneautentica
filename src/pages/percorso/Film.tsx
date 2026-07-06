import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import aboutSchmidtImg from "@/assets/About-Schmidt-2002.jpg";
import theDukeImg from "@/assets/the-duke.jpg";
import nonCosiVicinoImg from "@/assets/non-vicino.jpg";

const film = [
  {
    titoloIt: "A proposito di Schmidt",
    titoloOriginale: "About Schmidt",
    anno: "2002",
    img: aboutSchmidtImg,
    testo:
      "Warren Schmidt va in pensione lo stesso giorno in cui scopre di non sapere più chi è, senza la scrivania e il titolo che lo hanno definito per una vita intera. Scrive lettere a un bambino che non conoscerà mai, in Tanzania, e in quelle lettere dice la verità che non direbbe a nessun altro: sulla moglie, sulla figlia, sul vuoto che si allarga quando il lavoro finisce e nessuno chiede più il tuo parere. Il film non offre consolazioni facili. Offre un uomo che, alla fine, piange per un disegno fatto a matita da un bambino, e in quel pianto c'è tutto quello che aveva provato a non sentire.",
  },
  {
    titoloIt: "Il ritratto del duca",
    titoloOriginale: "The Duke",
    anno: "2020",
    img: theDukeImg,
    testo:
      "Kempton Bunton ha sessant'anni, un lavoro che perde spesso e una battaglia che porta avanti da solo: il canone TV gratuito per gli anziani e i mutilati di guerra. Quando ruba un ritratto del Duca di Wellington dalla National Gallery, non lo fa per soldi. Lo fa perché a un'età in cui la società smette di ascoltarti, lui trova un modo, goffo e testardo, per farsi sentire lo stesso. È una storia su chi rifiuta di diventare invisibile, e sceglie di restare scomodo piuttosto che sparire in silenzio.",
  },
  {
    titoloIt: "Non così vicino",
    titoloOriginale: "A Man Called Otto",
    anno: "2022",
    img: nonCosiVicinoImg,
    testo:
      "Otto ha perso la moglie e con lei ha perso anche il motivo per alzarsi la mattina. Ogni suo tentativo di farla finita viene interrotto da qualcuno: un vicino che parcheggia male, un gatto che non se ne va, una famiglia che si trasferisce nella casa accanto senza chiedere permesso. Non è redenzione, è logoramento: la vita che si fa strada a forza di piccole interruzioni, finché Otto si accorge di essere di nuovo utile a qualcuno, e questo, senza che lui lo cerchi, gli restituisce un motivo.",
  },
];

const Film = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";

  return (
    <PageShell title="Film" wide>
      <section className="max-w-5xl mx-auto space-y-20">
        {film.map((f) => (
          <div key={f.titoloIt} className="flex flex-col sm:flex-row gap-8">
            <div className="shrink-0 w-[220px] mx-auto sm:mx-0">
              <img
                src={f.img}
                alt={f.titoloIt}
                loading="lazy"
                className="w-full h-auto rounded-sm ring-1 ring-foreground/15 shadow-md"
              />
            </div>
            <div className="flex-1">
              <p className="font-serif text-2xl md:text-3xl text-foreground/85">
                {f.titoloIt}
              </p>
              <p className="font-serif text-base text-foreground/70 mt-1">
                {f.titoloOriginale}, {f.anno}
              </p>
              <p className={`${pCls} mt-6`}>{f.testo}</p>
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

export default Film;
