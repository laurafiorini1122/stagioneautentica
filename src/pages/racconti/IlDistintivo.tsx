import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import ilDistintivoImg from "@/assets/unuomo-il-distintivo.png";

const paragrafi = [
  "Per ventotto anni un uomo aveva portato lo stesso badge, sostituito solo due volte: la prima quando era scaduto, la seconda quando era cambiato il logo dell'azienda. Foto tessera, nome, cognome, qualifica: «Responsabile Acquisti». Lo agganciava alla tasca della camicia ogni mattina, con lo stesso gesto automatico con cui altri si infilano l'orologio.",
  "Il giorno della pensione, la collega delle risorse umane gli chiese di restituirlo. Era una procedura, disse, niente di personale. L'uomo lo staccò dalla tasca e lo posò sul tavolo, sentendo qualcosa che non sapeva nominare: non tristezza, non rabbia. Più simile alla sensazione di restituire un documento d'identità sapendo che nessuno gliene avrebbe più rilasciato uno nuovo.",
  "A casa, nei primi giorni, si accorse di portare istintivamente la mano alla tasca della camicia. Niente. Un gesto a vuoto, come quando si cerca il telefono in una tasca sbagliata.",
  "Un pomeriggio, per caso, passò davanti a una copisteria che faceva anche tessere plastificate, pass per parcheggi, cartellini per fiere. In vetrina, un cartello: «Badge personalizzati, pronti in giornata». Si ritrovò dentro prima ancora di decidere di entrarci.",
  "Aveva ancora, sul telefono, la foto del vecchio badge, scattata anni prima per sostituirlo in caso di smarrimento. La mostrò al ragazzo dietro al banco. «Mi serve uguale a questo», disse. «Per un ricordo.»",
  "Il ragazzo non fece domande. Ricreò il layout, il logo, i colori. Per il nome lasciò lo stesso. Per la qualifica, l'uomo esitò un istante, poi disse: «Lasci pure così». Ritirò il badge il giorno dopo, in una busta trasparente, identico all'originale tranne che per il retro: la plastica, lì, era leggermente più sottile.",
  "Lo portò a casa. Lo posò nello stesso punto dove per ventotto anni, ogni sera tornando dal lavoro, aveva posato l'originale: sul mobile dell'ingresso, accanto alle chiavi della macchina.",
  "La prima volta che lo indossò fu per andare a fare la spesa. Non lo decise consapevolmente: lo prese da lì e lo agganciò alla camicia come aveva sempre fatto, per abitudine, e si accorse di averlo fatto solo mentre era già in fila alla cassa. Pensò di toglierlo. Non lo fece.",
  "Alla cassa, la commessa lo guardò un istante più del solito. L'uomo si sentì, per la prima volta dopo mesi, qualcuno che veniva guardato per quello che era scritto su di lui, e non per quello che non era più. Tornò a casa con la sensazione vaga ma precisa di aver vinto qualcosa.",
  "Cominciò a portarlo ovunque. Dal medico, in farmacia, alle Poste. Smise di rimetterlo sul mobile dell'ingresso: lo lasciava agganciato alla tasca del giubbotto appeso lì vicino, pronto per il giorno dopo. Nessuno lo fermò mai, nessuno gli chiese spiegazioni: il badge non apriva porte, non sbloccava tornelli, non serviva a niente. Ma lui lo sentiva addosso come un tempo sentiva la cravatta, un segnale che mandava prima ancora di parlare. Non più un pensionato qualunque in coda. Un uomo con un nome, un ruolo, una funzione scritta in caratteri leggibili.",
  "Sua moglie, all'inizio, non se ne accorse. Poi, una mattina, mentre lui si infilava il giubbotto per andare a comprare il pane, lo vide agganciare il rettangolo di plastica alla tasca con lo stesso gesto di sempre.",
  "«Perché lo metti?» chiese. Non con ostilità. Con una curiosità genuina, quasi tenera.",
  "L'uomo si guardò la tasca, come se il badge fosse comparso lì da solo. «Abitudine», disse.",
  "La moglie non insistette. Ma quella sera, mentre lui era in bagno, staccò il badge dalla tasca del giubbotto e lo guardò più a lungo. Notò che la plastica sul retro era più sottile di come la ricordava: non era il vecchio badge, era una copia.",
  "Capì. Non disse nulla. Lo riagganciò alla tasca, esattamente come l'aveva trovato.",
  "Il giorno dopo, l'uomo uscì per il pane. Il badge era al suo posto, sulla tasca del giubbotto, dove l'aveva lasciato la sera prima.",
];

const IlDistintivo = () => {
  return (
    <PageShell
      title="Il distintivo"
      subtitle="Un nome scritto su un cartellino è ancora un'identità"
      bgClassName="bg-page-uomo"
    >
      <div className="mb-12 mx-auto max-w-[60%] overflow-hidden rounded-sm">
        <img
          src={ilDistintivoImg}
          alt="Il distintivo"
          width={2048}
          height={2048}
          loading="lazy"
          className="w-full h-auto"
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

export default IlDistintivo;
