import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-consiglio-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna aveva sempre avuto una naturale inclinazione per le buone idee altrui. Non per mancanza di fantasia, si diceva, ma per efficienza: perché inventare quando il mondo era già pieno di soluzioni collaudate?",
  "Così, quando arrivò la pensione, applicò lo stesso metodo.",
  "La prima a essere consultata fu Renata, ex collega, in pensione da tre anni, abbronzata e soddisfatta. «La fotografia», disse Renata, con la sicurezza di chi ha trovato la risposta. «Ti cambia la vita. Vedi il mondo in modo completamente diverso.» La donna annuì con la serietà di chi sta prendendo una decisione importante. Il giorno dopo era in un negozio di ottica a farsi spiegare la differenza tra una reflex e una mirrorless. Uscì con un catalogo, tre riviste specializzate e la sensazione piacevole di avere una direzione.",
  "Il catalogo rimase sul comodino per due settimane. La donna lo sfogliava la sera, prima di dormire, come un breviario. Poi telefonò a Giorgia.",
  "Giorgia praticava il tai chi tutte le mattine in un parco. «È meditazione in movimento», spiegò, con una calma che pareva esibita. «Dopo tre mesi non ricordi più cos'era lo stress.» La donna si iscrisse al corso introduttivo. Comprò le scarpe adatte, cercò su internet il significato di «chi» e annotò la data della prima lezione sull'agenda con una grafia particolarmente curata, come se l'atto di scrivere fosse già metà del lavoro.",
  "Andò alla prima lezione. Poi alla seconda. Alla terza telefonò a Marta per raccontarle del tai chi, ma Marta la interruppe quasi subito: «Già, ma hai sentito parlare del padel?». In dieci minuti la donna aveva scoperto che il padel era «lo sport del momento», che «lo facevano tutti», che «non serviva essere atletiche» e che «il bello era la socialità». La donna annotò il numero dell'istruttore.",
  "Non tornò più al corso di tai chi. Disse a Giorgia che aveva avuto dei problemi alla schiena, il che era plausibile anche se non vero.",
  "Il suo interesse, del resto, non era mai rivolto all'attività in sé, ma alla narrazione dell'attività stessa. Seguiva le mode con la disciplina di un soldato, ma si fermava sempre sulla soglia dell'impegno vero — quel momento in cui un'attività smette di essere una storia da raccontare e comincia a richiedere fatica, solitudine, errori non esibibili. Lì si bloccava. Lì trovava sempre un numero da chiamare.",
  "Le settimane successive furono dense di consultazioni. Chiamava vecchie amiche, vicine di casa, la cognata, la farmacista con cui aveva scambiato qualche parola in più del solito. Ciascuna offriva la propria soluzione con la generosità di chi vuole aiutare e la sicurezza di chi crede davvero in quello che fa. La donna ascoltava tutto, prendeva appunti, ringraziava calorosamente. Poi riportava le notizie ad altre, come un'ambasciatrice culturale della pensione altrui.",
  "«Sai che Renata fa fotografia? Ha vinto anche un concorso online.»",
  "«Giorgia fa tai chi da due anni — dice che non ha più mal di schiena.»",
  "«Marta gioca a padel tre volte a settimana. Ha perso cinque chili.»",
  "Nelle serate con le amiche, la donna brillava. Conosceva tutto di ogni attività senza averne praticata seriamente nessuna. Era diventata una specie di critica gastronomica che non mangia: valutava, comparava, consigliava a sua volta, con l'autorevolezza di chi ha fatto ricerca approfondita.",
  "Ma il momento che attendeva davvero, quello che giustificava tutto il resto, era un altro. Era quando, incontrando un'ex collega al bar o al supermercato, poteva dire con nonchalance: «Sono molto presa dal mio corso di fotografia rurale». E mentre lo diceva, cercava negli occhi dell'altra la conferma — quella scintilla di rispetto che certificasse che il suo tempo, pur non essendo più fatturato, avesse ancora una dignità produttiva. Voleva che il mondo le attribuisse un'equipollenza: tra il vecchio ruolo e il nuovo status di pensionata attiva, tra il bilancio trimestrale e il corso in presenza il martedì mattina. Ogni hobby era un tentativo di fabbricarsi un nuovo biglietto da visita, un'etichetta che le permettesse di presentarsi — a sé stessa prima ancora che agli altri — senza dover affrontare il vuoto pneumatico che stava sotto.",
  "Un pomeriggio, Claudia le chiese: «Ma tu, alla fine, cos'hai deciso di fare?»",
];

const IlConsiglioDonna = () => (
  <PageShell title="Il consiglio" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Devo guadagnarmi l'approvazione degli altri anche adesso, anche qui</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna che fotografa con una macchina fotografica" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <ProponiFinale raccontoTitolo="Il consiglio" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default IlConsiglioDonna;