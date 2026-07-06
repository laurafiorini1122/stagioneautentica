import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LiberatiDellaBravaBambina = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";
  const qCls = "font-serif italic text-lg leading-[1.8] text-foreground/85 border-l-2 border-foreground/30 pl-6 my-8";

  return (
    <PageShell title="Liberati della brava bambina" subtitle="Otto storie per fiorire">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Maura Gancitano, Andrea Colamedici</p>
          <p className="text-base text-foreground/70 mt-1">HarperCollins Italia, 2019</p>
        </div>

        <p className={pCls}>
          Otto storie di donne che rompono un copione già scritto raccontano, a modo loro, una cosa semplice: nessuna età è la fine della strada. Si può sempre tornare a scegliere, riconoscere ciò che si è diventati e restare fedeli a quello che si desidera davvero.
        </p>

        <h2 className={hCls}>Il tempo che resta</h2>
        <p className={pCls}>
          Capita di sentire che la vita sia già andata, che non arriverà più nulla di forte o di nuovo. Spesso quella sensazione non racconta la vita reale: racconta solo la paura di ricominciare. Si può restare per anni in una calma apparente, convinti che ormai sia tutto deciso, e poi qualcosa arriva a smuovere anche quello. A volte basta raccontare un dolore ad alta voce per capire che era una fase, non l'intera esistenza: è quello che succede alla protagonista de La tenda rossa, quando trova le parole per dirlo.
        </p>
        <p className={qCls}>
          «Non c'è un'età della vita in cui tutto sia finito.»
        </p>

        <h2 className={hCls}>Conoscere sé stessi</h2>
        <p className={pCls}>
          Vale la pena fermarsi ogni tanto e chiedersi a cosa ci si è abituati senza accorgersene. Le abitudini diventano invisibili proprio quando smettiamo di guardarle, ed è lì che serve tornare a farlo. Nessuno dovrebbe vivere chiuso in un ruolo o in una divisa che sente estranea: quella costrizione, col tempo, logora qualcosa di più profondo dell'umore. Seguire i propri desideri non è un lusso, è un bisogno reale. Far cadere le maschere ha un prezzo, ogni scelta autentica lo comporta, ma è l'unico modo per iniziare davvero a esistere.
        </p>

        <h2 className={hCls}>Il valore del cammino</h2>
        <p className={pCls}>
          Ci sono strade che valgono anche senza portare da nessuna parte: il punto non è dove conducono, ma la gioia di percorrerle. Lasciare andare l'ansia del risultato è già, di per sé, un modo per vivere meglio.
        </p>
        <p className={qCls}>
          «Strade che hanno cuore.»
        </p>

        <h2 className={hCls}>Vivere con pienezza</h2>
        <p className={pCls}>
          Evitare di fare del male non basta. Serve anche impegnarsi per offrire un'alternativa concreta, un modo diverso di stare al mondo che qualcun altro possa scegliere.
        </p>

        <h2 className={hCls}>Ricominciare</h2>
        <p className={pCls}>
          Rimettere in circolo idee che sembravano scontate è già un modo di rimettersi in cammino. A volte, per ritrovare le possibilità del futuro, occorre tornare all'inizio della propria storia e raccontarla in un altro modo, portando alla luce ciò che dolore, vergogna, paura e inconsapevolezza avevano tenuto nascosto.
        </p>

        <h2 className={hCls}>Il potere delle storie</h2>
        <p className={pCls}>
          Raccontare storie permette di entrare, con l'immaginazione, nelle vite di persone lontane e di provare le loro emozioni. È un modo per allargare lo sguardo sulla propria vita, non solo su quella degli altri.
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

export default LiberatiDellaBravaBambina;
