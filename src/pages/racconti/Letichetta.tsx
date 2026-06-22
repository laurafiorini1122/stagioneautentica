import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import letichettaImg from "@/assets/letichetta.jpg";

const paragrafi = [
  "Dopo quarant'anni trascorsi a costruire la sua vita, gesto dopo gesto, un uomo si ritrovò in un territorio sconosciuto: la pensione.",
  "Amici e colleghi, con pacche sulle spalle e sorrisi larghi, gli dicevano: «Beato te che non devi fare più niente», «Ora siamo noi a lavorare per pagarti la pensione».",
  "L'uomo annuiva con una smorfia, mentre le mani cercavano nervosamente le tasche o giocherellavano con i bottoni della giacca, in cerca di un appiglio. Se non faceva, non produceva: la parola inutile gli rimbombava nelle orecchie ogni volta che incrociava il proprio sguardo nello specchio del corridoio.",
  "I primi giorni si trascinavano, lunghi e vuoti, come un'interminabile domenica senza la promessa del lunedì. Decenni di sveglie con uno scopo, di un ruolo definito. In quel silenzio senza orari, iniziò a ritagliare piccoli rettangoli di carta, disponendoli in fila sul tavolo della cucina.",
  "«Sono in pensione», disse a voce bassa, provando la consistenza di quelle parole che suonavano aliene. «Pensione»: un termine carico di fine, di giochi conclusi, come se il sipario fosse calato e le luci in sala si stessero spegnendo.",
  "«I'm retired», mormorò, ma restava lì, seduto a fissare il vuoto tra i mobili che sembravano aver cambiato posizione.",
  "Provò con altre espressioni.",
  "«In quiescenza»: gli evocava l'immagine di una radice che marcisce sotto terra.",
  "«Collocamento a riposo»: lo faceva sentire come un vecchio attrezzo, ancora funzionante ma un po' obsoleto, messo in un angolo polveroso.",
  "«Uscire dal mondo del lavoro»: questa lo spingeva a guardare fuori dalla finestra, verso un orizzonte che non riusciva a mettere a fuoco.",
  "L'uomo si rigirava nel letto. L'orologio segnava le 6:30: nessuna sveglia, nessun appuntamento, nessun treno. Era il suo terzo giorno di pensione e il ronzio del frigorifero riempiva la stanza come un boato.",
  "«Sono nella Terza età?»: si toccò il mento, seguendo con i polpastrelli i solchi che il tempo aveva scavato senza chiedere permesso.",
  "«Ti puoi dedicare ai tuoi passatempi»: anche questa parola, passatempo, profumava di polvere, un modo per passare il tempo per arrivare all'unica destinazione rimasta: la fine.",
  "Si alzò, fece colazione. Il caffè gli sembrava acqua sporca. Il giornale era una sequenza di notizie che parlavano a qualcun altro: persone che avevano ancora il diritto di correre e di sbagliare.",
  "Tornò nello studio. Iniziò a incollare i pezzi di carta sulla pelle, sui polsi, sulle gambe: «Lettore assiduo», «Appassionato di giardinaggio», «Viaggiatore solitario». Nessuna aderiva. Ogni definizione scivolava via, lasciando solo una traccia di colla fredda. Erano etichette su un rimasuglio di magazzino che nessuno voleva comprare, maschere trasparenti che cadevano a terra al minimo movimento.",
  "Era arrivato mezzogiorno. Fuori, il mondo correva verso la pausa pranzo. Lui fissava il foglio bianco: la penna iniziò a correre, incidendo la carta con tratti sempre più profondi. Scriveva sopra le parole già scritte, sovrapponendo inchiostro a inchiostro finché i significati non diventarono macchie nere, grumi di segni illeggibili.",
  "Non c'era più l'uomo: c'era solo un corpo chino sul foglio, mentre la punta della penna affondava nella carta fino a strapparla. La casa restava muta, le pareti sembravano chiudersi su di lui, e il rumore della carta che si lacerava era l'unico battito meccanico in una stanza senza uscita.",
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
