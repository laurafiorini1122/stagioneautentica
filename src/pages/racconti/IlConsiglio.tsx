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