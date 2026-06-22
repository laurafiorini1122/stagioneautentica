import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import laRiunioneImg from "@/assets/unuomo-la-riunione.png";

const paragrafi = [
  "Per trentadue anni un uomo aveva avuto la stessa agenda di carta, rilegata in pelle nera, regalo di fine anno dell'azienda. Ogni dicembre ne riceveva una nuova, identica, e ogni gennaio ricopiava a mano gli appuntamenti fissi: lunedì, ore 9, riunione di staff. Primo del mese, ore 10, consuntivo. Il quindici, revisione budget. Erano scadenze che conosceva a memoria, scolpite in un calendario interiore che funzionava indipendentemente dal calendario reale.",
  "Quando andò in pensione, l'azienda non gli regalò più l'agenda. L'uomo, a dicembre, ne comprò una in edicola, simile a quella che aveva sempre usato: stessa dimensione, stessa copertina scura. La pagò sette euro e novanta, e gli sembrò strano che un oggetto così importante costasse così poco.",
  "A gennaio, seduto al tavolo della cucina, la aprì alla prima settimana dell'anno. Prese la penna. E, quasi senza pensarci, scrisse: «Lunedì, ore 9, riunione di staff».",
  "Si fermò, sorpreso dalla propria mano. Poi continuò. Scrisse tutti gli appuntamenti che conosceva a memoria, mese per mese, fino a dicembre. Le riunioni di staff ogni lunedì. I consuntivi il primo. Le revisioni budget il quindici. Aggiunse anche le riunioni trimestrali con la direzione commerciale, e le ferie aziendali di agosto, anche se ad agosto, ormai, non cambiava nulla.",
  "Il lunedì successivo si svegliò alla solita ora. Si fece la doccia, si vestì come se dovesse uscire, anche se non usciva. Si preparò il caffè, lo bevve in piedi in cucina, come aveva sempre fatto nei minuti prima di partire per l'ufficio.",
  "Alle nove meno cinque si sedette al tavolo della cucina. Aprì l'agenda alla pagina giusta. Guardò l'orologio.",
  "Alle nove esatte, restò seduto, le mani appoggiate sul tavolo, lo sguardo fisso davanti a sé. Non c'era nessuno, non c'era uno schermo, non c'era una voce. Ma l'uomo si comportò come se ci fosse: annuiva, a tratti, come a un punto fatto da un collega. Una volta si schiarì la voce, come per intervenire, poi non disse nulla.",
  "La riunione, secondo la sua esperienza, durava circa un'ora e un quarto. Alle dieci e quindici, l'uomo si alzò, richiuse l'agenda, e si versò un secondo caffè. Si sentiva, per qualche minuto, come si era sempre sentito dopo una riunione di staff: leggermente stanco, leggermente soddisfatto, con la giornata che finalmente poteva cominciare.",
  "Sua figlia, che abitava vicino e passava spesso a trovarlo, arrivò un lunedì mattina, poco dopo le nove. Trovò la porta chiusa a chiave, cosa inusuale. Suonò. Suo padre aprì dopo qualche minuto, vestito, pettinato, con l'aria di chi è stato interrotto.",
  "«Tutto bene, papà?»",
  "«Sì, sì», disse lui. «Ero... impegnato.»",
  "La figlia guardò oltre la sua spalla, verso la cucina vuota, il tavolo con l'agenda aperta. Sulla pagina riconobbe la sua scrittura ordinata, la stessa di sempre: lunedì, ore 9, riunione di staff. Non chiese altro.",
  "Il lunedì seguente tornò alla stessa ora e trovò di nuovo la porta chiusa. Aspettò qualche minuto sul pianerottolo, poi suonò: suo padre aprì già con la giacca tolta, il caffè in mano, più disteso del solito. Capì di essere arrivata o troppo presto o troppo tardi per disturbarlo, e non seppe dire quale delle due cose la sollevasse di più.",
  "Le settimane successive imparò per tentativi. Alle nove e mezza la riunione era ancora in corso. Alle dieci, pure. Alle dieci e un quarto si sentiva già il rumore della tazza nel lavandino. Smise di cronometrare con precisione e si tenne, per sicurezza, un margine: ogni lunedì, prima di suonare, aspettava fino alle dieci e venti.",
];

const LaRiunione = () => {
  return (
    <PageShell
      title="La riunione"
      subtitle="Senza un ordine del giorno, la giornata non comincia"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={laRiunioneImg}
          alt="La riunione"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full aspect-[16/9] object-cover"
        />
      </div>

      <article className="space-y-6">
        {paragrafi.map((p, i) => (
          <p
            key={i}
            className="font-serif text-lg leading-[1.8] text-foreground/85"
          >
            {p}
          </p>
        ))}
      </article>

      <div className="mt-16 mb-8">
        <Link
          to="/un-uomo"
          className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Torna a Un uomo
        </Link>
      </div>
    </PageShell>
  );
};

export default LaRiunione;
