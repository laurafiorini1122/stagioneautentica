import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/lepitaffio-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Per decenni, una donna aveva lavorato sulla sintesi. Il suo compito era distillare centinaia di pagine di dati in poche righe di Executive Summary. Una volta in pensione, applicò lo stesso rigore alla propria vita. Cercava la formula ultima, la riga di codice definitiva: l'epitaffio perfetto.",
  "Iniziò a frequentare il cimitero monumentale come se fosse una fiera di settore. Analizzava le lapidi con occhio critico. «Madre esemplare», «Onesta lavoratrice», «Sempre nel cuore dei suoi cari». Per lei, quelle erano etichette difettose, prive di precisione tecnica. Erano slogan scaduti, buoni per chiunque e quindi per nessuno.",
  "Tornata alla scrivania, iniziò la stesura. Il primo bozzetto fu professionale. Lo stracciò: troppo legato a una funzione cessata. Provò la versione filosofica: «Cercò l'ordine nel caos». Troppo astratta. Quella quantitativa: «Ha vissuto 27.375 giorni, producendo valore e rispettando le norme». Troppo fredda, persino per lei.",
];

const LepitaffioDonna = () => (
  <PageShell title="L'epitaffio" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Devo trovare la parola definitiva che mi definisca, anche dopo</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna anziana scrive bozze di epitaffi alla scrivania" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="L'epitaffio" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LepitaffioDonna;