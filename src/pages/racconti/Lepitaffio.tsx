import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/lepitaffio.jpg";

const paragrafi = [
  "Per decenni, un uomo aveva lavorato sulla sintesi. Il suo compito era distillare centinaia di pagine di dati in poche righe di nota di sintesi. Una volta in pensione, applicò lo stesso rigore alla propria vita. Cercava la formula ultima: l'epitaffio perfetto.",
  "Iniziò a frequentare il cimitero monumentale come se fosse una fiera di settore. Analizzava le lapidi con occhio critico. «Padre esemplare», «Onesto lavoratore», «Sempre nel cuore dei suoi cari». Slogan buoni per chiunque, e quindi per nessuno.",
  "Tornato alla scrivania, iniziò la stesura. Il primo bozzetto fu professionale. Lo stracciò: troppo legato a una funzione cessata. Provò la versione filosofica: «Cercò l'ordine nel caos». Troppo astratta. Quella quantitativa: «Ha vissuto 27.375 giorni, producendo valore e rispettando le norme». Troppo fredda, persino per lui.",
  "Morì nel cuore della notte, con la penna in mano, mentre cercava di decidere se «Integerrimo» fosse superiore a «Incorruttibile».",
  "Gli eredi non consultarono i suoi appunti. Al momento di ordinare la lapide, l'impiegato chiese: «Cosa scriviamo?». La vedova sospirò: «Metta quello che mette per tutti».",
  "Sulla tomba fu inciso il modello standard: «Le persone care ricordano».",
  "I suoi quaderni rimasero in uno scatolone per tre anni, poi finirono nel cassonetto durante un trasloco. Nessuno aprì mai l'ultimo, quello con la copertina verde. Nell'ultima pagina, sotto venti versioni cancellate, c'era una frase senza correzioni.",
  "Era quella giusta.",
];

const Lepitaffio = () => (
  <PageShell title="L'epitaffio" subtitle="Quando la ricerca della parola perfetta si conclude con quella di tutti" bgClassName="bg-page-uomo">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano scrive bozze di epitaffio" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default Lepitaffio;