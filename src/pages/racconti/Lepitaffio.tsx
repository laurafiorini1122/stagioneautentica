import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/lepitaffio.jpg";

const paragrafi = [
  "Per decenni, un uomo aveva lavorato sulla sintesi. Il suo compito era distillare centinaia di pagine di dati in poche righe di Executive Summary. Una volta in pensione, applicò lo stesso rigore alla propria vita. Cercava la formula ultima, la riga di codice definitiva: l'epitaffio perfetto.",
  "Iniziò a frequentare il cimitero monumentale come se fosse una fiera di settore. Analizzava le lapidi con occhio critico. «Padre esemplare», «Onesto lavoratore», «Sempre nel cuore dei suoi cari». Per lui, quelle erano etichette difettose, prive di precisione tecnica. Erano slogan scaduti, buoni per chiunque e quindi per nessuno.",
  "Tornato alla scrivania, iniziò la stesura. Il primo bozzetto fu professionale. Lo stracciò: troppo legato a una funzione cessata. Provò la versione filosofica: «Cercò l'ordine nel caos». Troppo astratta. Quella quantitativa: «Ha vissuto 27.375 giorni, producendo valore e rispettando le norme». Troppo fredda, persino per lui.",
  "Morì nel cuore della notte, con la penna ancora in mano, mentre cercava di decidere se «Integerrimo» fosse superiore a «Incorruttibile».",
  "Gli eredi non consultarono i suoi appunti. Al momento di ordinare la lapide, l'impiegato dell'agenzia funebre chiese: «Cosa scriviamo sotto il nome?». La vedova, stanca e distratta, sospirò: «Metta quello che mette per tutti. Non complichiamoci la vita».",
  "Sulla tomba dell'uomo che aveva cercato per anni la parola unica e assoluta, fu inciso il modello standard, pacchetto base: «Le persone care ricordano». L'uomo che aveva vissuto per la precisione finì sotto una riga di testo intercambiabile, un errore di stampa collettivo in un archivio di pietre tutte uguali.",
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