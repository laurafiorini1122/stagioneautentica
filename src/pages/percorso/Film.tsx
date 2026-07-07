import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import aboutSchmidtImg from "@/assets/About-Schmidt-2002.jpg";
import hotelImg from "@/assets/hotel.jpg";
import stagistaImg from "@/assets/stagista.jpg";
import hommeImg from "@/assets/homme.jpg";
import theDukeImg from "@/assets/the-duke.jpg";
import nonCosiVicinoImg from "@/assets/non-vicino.jpg";

const film = [
  {
    titoloIt: "A proposito di Schmidt",
    titoloOriginale: "About Schmidt",
    anno: "2002",
    img: aboutSchmidtImg,
    testo: [
      "Warren Schmidt va in pensione lo stesso giorno in cui scopre di non sapere più chi è, senza la scrivania e il titolo che lo hanno definito per una vita intera. Scrive lettere a un bambino che non conoscerà mai, in Tanzania, e in quelle lettere dice la verità che non direbbe a nessun altro: sulla moglie, sulla figlia, sul vuoto che si allarga quando il lavoro finisce e nessuno chiede più il tuo parere. Il film non offre consolazioni facili. Offre un uomo che, alla fine, piange per un disegno fatto a matita da un bambino, e in quel pianto c'è tutto quello che aveva provato a non sentire.",
    ],
  },
  {
    titoloIt: "Marigold Hotel",
    titoloOriginale: "The Best Exotic Marigold Hotel",
    anno: "2011",
    img: hotelImg,
    testo: [
      "Un gruppo di pensionati inglesi, ciascuno con la propria storia di perdita o di stanchezza, decide di trasferirsi in India in un hotel per anziani che promette lusso e tranquillità. Trovano invece un edificio fatiscente, gestito da un giovane proprietario pieno di entusiasmo e di debiti. Da lì comincia un adattamento che non è mai facile né lineare. C'è chi si chiude, chi si lascia sorprendere, chi trova un amore inaspettato, chi finalmente trova il coraggio di essere se stesso dopo una vita passata a nascondersi. Nessuno dei personaggi risolve tutto. Alcuni tornano a casa, altri restano, altri ancora scoprono che casa può essere un luogo mai visto prima. È un film sul fatto che l'età non chiude le possibilità, le cambia soltanto. E che a volte serve un contesto del tutto estraneo per vedere finalmente con chiarezza chi si è diventati.",
    ],
  },
  {
    titoloIt: "Lo stagista inaspettato",
    titoloOriginale: "The Intern",
    anno: "2015",
    img: stagistaImg,
    testo: [
      "Ben ha settant'anni e una vita intera alle spalle: un matrimonio, una carriera, un'azienda costruita con le proprie mani e poi venduta. La pensione doveva essere il capitolo della quiete. Invece è il tempo vuoto in cui si accorge di quanto gli manchi non tanto il lavoro, ma il sentirsi utile a qualcuno. Si candida come stagista senior in una startup di moda online, tra colleghi che potrebbero essere suoi nipoti. Non porta soluzioni miracolose, porta presenza. Ascolta, osserva, aspetta il momento giusto per essere d'aiuto. E scopre che l'esperienza non è un titolo da esibire ma un modo di stare nelle cose con più calma di chi le sta ancora imparando. Il film racconta senza retorica che ricominciare non significa ripartire da zero. Significa portare quello che si è con sé in un contesto nuovo, e lasciare che sia ancora utile.",
    ],
  },
  {
    titoloIt: "Parlami di te",
    titoloOriginale: "Un homme pressé",
    anno: "2018",
    img: hommeImg,
    testo: [
      "Alain ha una vita costruita sulla velocità: negoziati, decisioni rapide, un tempo sempre scarso e sempre riempito. Poi un ictus lo colpisce mentre è al culmine della sua carriera, e le parole, gli strumenti che ha sempre usato con precisione assoluta, gli diventano estranee. La riabilitazione lo costringe a un ritmo che non ha mai conosciuto. Deve reimparare a nominare le cose, a costruire una frase, a chiedere aiuto. In questo processo lento, quasi infantile, comincia anche a riconoscere ciò che nella fretta aveva smesso di vedere: gli affetti, il corpo, il tempo che passa senza essere inseguito. Non è un film sulla malattia. È un film su cosa resta di una persona quando le viene tolto lo strumento con cui ha sempre definito se stessa, e su cosa, lentamente, si può ricostruire al suo posto.",
    ],
  },
  {
    titoloIt: "Il ritratto del duca",
    titoloOriginale: "The Duke",
    anno: "2020",
    img: theDukeImg,
    testo: [
      "Kempton Bunton ha sessant'anni, un lavoro che perde spesso e una battaglia che porta avanti da solo: il canone TV gratuito per gli anziani e i mutilati di guerra. Quando ruba un ritratto del Duca di Wellington dalla National Gallery, non lo fa per soldi. Lo fa perché a un'età in cui la società smette di ascoltarti, lui trova un modo, goffo e testardo, per farsi sentire lo stesso. È una storia su chi rifiuta di diventare invisibile, e sceglie di restare scomodo piuttosto che sparire in silenzio.",
    ],
  },
  {
    titoloIt: "Non così vicino",
    titoloOriginale: "A Man Called Otto",
    anno: "2022",
    img: nonCosiVicinoImg,
    testo: [
      "Otto ha perso la moglie e con lei ha perso anche il motivo per alzarsi la mattina. Ogni suo tentativo di farla finita viene interrotto da qualcuno: un vicino che parcheggia male, un gatto che non se ne va, una famiglia che si trasferisce nella casa accanto senza chiedere permesso. Non è redenzione, è logoramento: la vita che si fa strada a forza di piccole interruzioni, finché Otto si accorge di essere di nuovo utile a qualcuno, e questo, senza che lui lo cerchi, gli restituisce un motivo.",
    ],
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
              <div className="mt-6 space-y-4">
                {f.testo.map((paragrafo, i) => (
                  <p key={i} className={pCls}>
                    {paragrafo}
                  </p>
                ))}
              </div>
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
