import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const SocrateAgataEIlFuturo = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";

  return (
    <PageShell title="Socrate, Agata e il futuro">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Beppe Severgnini</p>
          <p className="text-base text-foreground/70 mt-1">Rizzoli, 2025</p>
        </div>

        <h2 className={hCls}>Accettare l'età</h2>
        <p className={pCls}>
          Non esiste una tecnica per invecchiare bene, ma un atteggiamento. Severgnini lo racchiude in una frase che ricorre spesso: "Bisogna indossare con eleganza la propria età. Qualunque età." Il punto non è rassegnarsi né combattere il tempo con ostinazione, ma trovare un modo onesto di starci dentro.
        </p>

        <h2 className={hCls}>Il tempo che resta</h2>
        <p className={pCls}>
          Riprendendo la tradizione induista delle quattro fasi della vita, l'autore osserva che la prima serve per imparare, la seconda per realizzarsi, la terza per insegnare e la quarta per prepararsi al congedo, lasciando andare pian piano l'attaccamento alle cose materiali. Molti, invece, restano bloccati nella seconda fase anche quando il tempo di rallentare e restituire è già arrivato: continuano a inseguire cariche e conferme invece di ascoltare. Fare spazio a chi viene dopo, invece di pretendere di decidere ogni cosa fino alla fine, è parte della saggezza di questa fase.
        </p>

        <h2 className={hCls}>Il valore di sé</h2>
        <p className={pCls}>
          Cosa diranno di noi dipende da come viviamo la parte finale della vita, quando i piccoli egoismi si perdonano con più fatica. A restare, sono la generosità, la lealtà, la fantasia, l'ironia, la capacità di farsi le domande giuste: non le cariche ricoperte o i traguardi professionali.
        </p>

        <h2 className={hCls}>Gentilezza e ironia</h2>
        <p className={pCls}>
          La gentilezza viene presentata come una risorsa concreta, da allenare insieme alla pazienza. L'ironia ha lo stesso ruolo: è l'antiruggine dell'anima, uno strumento per non prendersi troppo sul serio e restare leggeri anche quando gli anni si fanno sentire.
        </p>

        <h2 className={hCls}>Restare curiosi</h2>
        <p className={pCls}>
          La qualità della vita nella terza età dipende meno dal potere accumulato e più dalla curiosità coltivata: le persone che si frequentano, i luoghi che si scelgono, le idee a cui si resta esposti. Guardare avanti con un po' di attesa e di sorpresa, invece di vivere ripiegati sulla nostalgia, è un modo concreto per restare vivi nel presente.
        </p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce/le-letture" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna alle letture
        </Link>
      </div>
    </PageShell>
  );
};

export default SocrateAgataEIlFuturo;
