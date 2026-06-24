import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/donna-la-riunione.png";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per trentadue anni una donna aveva avuto la stessa agenda di carta, rilegata in pelle nera, regalo di fine anno dell'azienda. Ogni dicembre ne riceveva una nuova, identica, e ogni gennaio ricopiava a mano gli appuntamenti fissi: lunedì, ore 9, riunione di staff. Primo del mese, ore 10, consuntivo. Il quindici, revisione budget. Erano scadenze che conosceva a memoria, scolpite in un calendario interiore che funzionava indipendentemente dal calendario reale.",
  "Quando andò in pensione, l'azienda non le regalò più l'agenda. La donna, a dicembre, ne comprò una in edicola, simile a quella che aveva sempre usato: stessa dimensione, stessa copertina scura. La pagò sette euro e novanta, e le sembrò strano che un oggetto così importante costasse così poco.",
  "A gennaio, seduta al tavolo della cucina, la aprì alla prima settimana dell'anno. Prese la penna. E, quasi senza pensarci, scrisse: «Lunedì, ore 9, riunione di staff».",
  "Si fermò, sorpresa dalla propria mano. Poi continuò. Scrisse tutti gli appuntamenti che conosceva a memoria, mese per mese, fino a dicembre. Le riunioni di staff ogni lunedì. I consuntivi il primo. Le revisioni budget il quindici. Aggiunse anche le riunioni trimestrali con la direzione commerciale, e le ferie aziendali di agosto, anche se ad agosto, ormai, non cambiava nulla.",
  "Il lunedì successivo si svegliò alla solita ora. Si fece la doccia, si vestì come se dovesse uscire, anche se non usciva. Si preparò il caffè, lo bevve in piedi in cucina, come aveva sempre fatto nei minuti prima di partire per l'ufficio.",
  "Alle nove meno cinque si sedette al tavolo della cucina. Aprì l'agenda alla pagina giusta. Guardò l'orologio.",
];

const LaRiunioneDonna = () => (
  <PageShell
    title="La riunione"
    subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Senza un ordine del giorno, la giornata non comincia</em></strong></span></>}
    bgClassName="bg-page-donna"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="La riunione" width={2752} height={1536} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="La riunione" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LaRiunioneDonna;
