import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/il-consiglio.jpg";

const paragrafi = [
  "Un uomo aveva sempre avuto una naturale inclinazione per le buone idee altrui. Non per mancanza di fantasia, si diceva, ma per efficienza: perché inventare quando il mondo era già pieno di soluzioni collaudate?",
  "Così, quando arrivò la pensione, applicò lo stesso metodo.",
  "Il primo a essere consultato fu Renato, ex collega, in pensione da tre anni, abbronzato e soddisfatto. «La fotografia», disse Renato, con la sicurezza di chi ha trovato la risposta. «Ti cambia la vita. Vedi il mondo in modo completamente diverso.» L'uomo annuì con la serietà di chi sta prendendo una decisione importante. Il giorno dopo era in un negozio di ottica a farsi spiegare la differenza tra una reflex e una mirrorless. Uscì con un catalogo, tre riviste specializzate e la sensazione piacevole di avere una direzione.",
  "Il catalogo rimase sul comodino per due settimane. L'uomo lo sfogliava la sera, prima di dormire, come un breviario. Poi telefonò a Giorgio.",
  "Giorgio praticava il tai chi tutte le mattine in un parco. «È meditazione in movimento», spiegò, con una calma che pareva esibita. «Dopo tre mesi non ricordi più cos'era lo stress.» L'uomo si iscrisse al corso introduttivo. Comprò le scarpe adatte, cercò su internet il significato di \"chi\" e annotò la data della prima lezione sull'agenda con una grafia particolarmente curata, come se l'atto di scrivere fosse già metà del lavoro.",
  "Andò alla prima lezione. Poi alla seconda. Alla terza telefonò a Massimo per raccontargli del tai chi, ma Massimo lo interruppe quasi subito: «Già, ma hai sentito parlare del padel?». In dieci minuti l'uomo aveva scoperto che il padel era «lo sport del momento», che «lo facevano tutti», che «non serviva essere atletici» e che «il bello era la socialità». L'uomo annotò il numero dell'istruttore.",
  "Non tornò più al corso di tai chi. Disse a Giorgio che aveva avuto dei problemi alla schiena, il che era plausibile anche se non vero.",
  "Il suo interesse, del resto, non era mai rivolto all'attività in sé, ma alla narrazione dell'attività stessa. Seguiva le mode con la disciplina di un soldato, ma si fermava sempre sulla soglia dell'impegno vero — quel momento in cui un'attività smette di essere una storia da raccontare e comincia a richiedere fatica, solitudine, errori non esibibili. Lì si bloccava. Lì trovava sempre un numero da chiamare.",
  "Le settimane successive furono dense di consultazioni. Chiamava vecchi amici, vicini di casa, il cognato, il farmacista con cui aveva scambiato qualche parola in più del solito. Ciascuno offriva la propria soluzione con la generosità di chi vuole aiutare e la sicurezza di chi crede davvero in quello che fa. L'uomo ascoltava tutto, prendeva appunti, ringraziava calorosamente. Poi riportava le notizie ad altri, come un ambasciatore culturale della pensione altrui.",
  "«Sai che Renato fa fotografia? Ha vinto anche un concorso online.» «Giorgio fa tai chi da due anni — dice che non ha più mal di schiena.» «Massimo gioca a padel tre volte a settimana. Ha perso cinque chili.»",
  "Nelle serate con gli amici, l'uomo brillava. Conosceva tutto di ogni attività senza averne praticata seriamente nessuna. Era diventato una specie di critico gastronomico che non mangia.",
  "Ma il momento che attendeva davvero, quello che giustificava tutto il resto, era un altro. Era quando, incontrando un ex collega al bar o al supermercato, poteva dire con nonchalance: «Sono molto preso dal mio corso di fotografia rurale». E mentre lo diceva, cercava negli occhi dell'altro la conferma — quella scintilla di rispetto che certificasse che il suo tempo, pur non essendo più fatturato, avesse ancora una dignità produttiva. Voleva che il mondo gli riconoscesse una parità: tra il vecchio ruolo e il nuovo status di pensionato attivo, tra il bilancio trimestrale e il corso in presenza il martedì mattina. Ogni hobby era un tentativo di fabbricarsi un nuovo biglietto da visita, un'etichetta che gli permettesse di presentarsi — a sé stesso prima ancora che agli altri — senza dover affrontare il vuoto pneumatico che stava sotto.",
  "Un pomeriggio, Claudio gli chiese: «Ma tu, alla fine, cos'hai deciso di fare?»",
  "L'uomo aprì la bocca, la chiuse, sorrise. «Sto ancora valutando. Voglio fare le cose per bene.»",
  "Era una risposta perfetta. Prudente, ragionevole, insindacabile. Ma Claudio aveva nello sguardo una sfumatura rapida, quasi impercettibile — quella di chi ha capito qualcosa che preferisce non dire. L'uomo ci pensò su per qualche ora, poi telefonò a Renato, e l'inquietudine si dissolse nel chiacchiericcio rassicurante della conversazione.",
  "Nel frattempo, sul tavolo della sala si accumulavano oggetti in attesa di diventare passioni: il catalogo della reflex, le scarpe da tai chi ancora nella scatola originale, un libro sul disegno a matita consigliato da una cugina, un abbonamento a una piattaforma di corsi online mai aperta dopo il primo accesso, un kit di acquarelli comprato in offerta perché «non si sa mai». Non erano oggetti abbandonati. Erano prove. Testimonianze materiali di un uomo dinamico, curioso, tutt'altro che rassegnato. Nessuno avrebbe potuto accusarlo di non provarci.",
  "In questo inseguimento continuo dell'approvazione altrui, l'uomo evitava l'unica cosa necessaria: guardarsi. Non si curava di capire cosa volesse lui; si curava di apparire conforme a un'idea di vecchiaia dinamica ed elegante. La questione non era cosa fare. Era essere visto mentre lo si faceva.",
  "Gli amici, col tempo, smisero di chiedergli a che punto fosse. Non per indifferenza, ma per una forma silenziosa di pietà.",
  "L'uomo non se ne accorse. Stava già componendo il numero di Silvano, che aveva sentito praticare l'apicoltura. Gli sembrava un'idea interessante. Originale.",
  "E soprattutto — pensò, mentre aspettava che il telefono squillasse — era qualcosa di cui valeva davvero la pena parlare.",
];

const IlConsiglio = () => (
  <PageShell
    title="Il consiglio"
    subtitle="Quando l'approvazione degli altri diventa l'unico hobby davvero praticato"
    bgClassName="bg-page-uomo"
  >
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano tra cataloghi di hobby mai iniziati" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default IlConsiglio;