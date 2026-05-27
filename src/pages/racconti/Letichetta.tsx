import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import letichettaImg from "@/assets/letichetta.jpg";

const paragrafi = [
  "Dopo quarant'anni trascorsi a costruire la sua vita gesto dopo gesto, un uomo si ritrovò in un territorio sconosciuto: la pensione.",
  "Amici e colleghi, con pacche sulle spalle e sorrisi larghi, gli dicevano: «Beato te che non devi fare più niente», «Ora siamo noi a lavorare per pagarti la pensione».",
  "L'uomo annuiva con una smorfia. Lui, cresciuto nell'etica del produrre, sapeva che il «non fare» coincideva con il «non essere». Se non faceva, non produceva — che cosa era? «Inutile», sentenziò la voce nella sua testa.",
  "I primi giorni si trascinavano, lunghi e vuoti, come un'interminabile domenica senza la promessa del lunedì. Decenni di sveglie con uno scopo, di un ruolo definito. Ora, in questo spazio privo di orari e direttive, sentiva l'urgenza di trovarsi un'etichetta: qualcosa che lo tenesse insieme, che gli restituisse un posto nel mondo.",
  "«Sono in pensione», si disse, provando a dare un senso a quelle parole. Ma suonava strano, alieno. Lui si sentiva ancora pieno di energie, di idee, di vita. «Pensione» era un termine carico di fine, di giochi conclusi — come se il sipario fosse calato e non ci fosse più nulla da aspettarsi.",
  "«I'm retired», per usare l'espressione inglese. Ma non si sentiva pronto a ritirarsi, né c'era un luogo dove nascondersi dall'assenza di scopo.",
  "Provò con altre espressioni.",
  "«In quiescenza». Era il termine peggiore. Gli evocava l'immagine di una radice che marcisce sotto terra.",
  "Poi «Collocamento a riposo». Lo faceva sentire come un vecchio attrezzo, ancora funzionante ma un po' obsoleto, messo in un angolo polveroso.",
  "E poi «Uscire dal mondo del lavoro». Questa lo assaliva con la domanda più difficile: per entrare in quale dimensione?",
  "L'uomo si rigirava nel letto. L'orologio segnava le 6:30. Nessuna sveglia. Nessun appuntamento. Nessun treno. Era il suo terzo giorno di pensione e il silenzio della casa, di solito un sollievo, cominciava a pesargli.",
  "«Sono nella Terza età?» Anche questa lo confondeva. Nessuno gli aveva mai annunciato di essere uscito dalla «seconda età». Sembrava più un'etichetta apposta dagli altri, un modo per archiviarlo.",
  "«Ti puoi dedicare ai tuoi passatempi». Anche questa parola — passatempo — era carica di inutilità. Passare il tempo... per arrivare dove? La risposta era sempre la stessa, ma faceva fatica a pronunciarla. Morte. Fine.",
  "Si alzò, fece colazione. Il caffè gli sembrava insapore. Il giornale era una sequenza di notizie che non lo riguardavano più — la cronaca di un mondo per persone che avevano ancora il diritto di correre e di sbagliare. Lui era fuori dal tempo.",
  "Tornò nello studio. Se le etichette ufficiali avevano fallito, ne avrebbe create di proprie. Iniziò a scrivere parole su piccoli pezzi di carta e a incollarli sulla pelle, sui polsi, sulle gambe. «Lettore assiduo», «Appassionato di giardinaggio», «Viaggiatore solitario». Nessuna aderiva. Ogni definizione scivolava via e lui restava lì, con le parole appiccicate alla pelle come etichette su un oggetto che nessuno voleva comprare. Maschere trasparenti, che il mondo non riconosceva e che lui stesso non riusciva a indossare.",
  "Era mezzogiorno. Fuori, il mondo correva verso la pausa pranzo. Lui fissava il foglio bianco. Continuò a scrivere. Le ore passavano. La ricerca si fece spasmodica, i tratti della penna sempre più frenetici e illeggibili. Riempiva i margini, scriveva sopra le parole già scritte, sovrapponendo significati che si annullavano a vicenda.",
  "Non c'era più l'uomo. C'era solo un corpo chino su un foglio, intrappolato nel tentativo di nominare il proprio niente. La casa restava muta, le pareti si stringevano, e lui continuava a scrivere, cercando in un vocabolario ormai morto la parola capace di riportarlo in vita.",
  "Ma la pagina restava bianca sotto l'inchiostro nero. Solo il rumore della penna sul foglio, un battito meccanico in una stanza senza uscita.",
];

const Letichetta = () => {
  return (
    <PageShell
      title="L'etichetta"
      subtitle="Quando smettere di fare significa smettere di essere"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img
          src={letichettaImg}
          alt="Uomo anziano seduto a una scrivania, intento a scrivere su fogli sparsi"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-auto object-cover"
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

export default Letichetta;