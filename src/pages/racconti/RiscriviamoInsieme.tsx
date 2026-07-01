import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/riscriviamo.jpg";

const RiscriviamoInsieme = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell
      title="Riscriviamo insieme. Perché farlo?"
      subtitle="Introduzione"
      bgClassName="bg-page-donna"
    >
      <div className="mb-12 overflow-hidden rounded-sm">
        <img src={img} alt="Quaderno aperto con penna accanto a una tazza, luce naturale" width={1600} height={900} loading="lazy" className="w-full h-auto object-cover" />
      </div>

      <article className="space-y-6">
        <p className={pCls}>Eccoci qui.</p>
        <p className={pCls}>Ti sei riconosciuta o riconosciuto in qualcuna di queste situazioni?</p>
        <p className={pCls}>Devo confessare che in questi anni, molte delle ossessioni che abitano i protagonisti di questi racconti hanno attraversato anche la mia mente. Alcune sono passate come ombre veloci, altre sono rimaste lì, ben radicate, per molto tempo.</p>
        <p className={pCls}>Scrivere mi ha aiutata a fare chiarezza, a superare certi nodi e, finalmente, ad apprezzare questa fase per quello che è davvero: nuova, libera, tutta da costruire. E ho capito che non è solo la pensione a offrire questa possibilità: ogni volta che un capitolo si chiude, si apre lo spazio per ricominciare a scegliere chi essere.</p>
        <p className={pCls}>Spero che questi racconti possano essere utili anche a qualcun altro. Ma soprattutto, mi piacerebbe non fermarmi qui: vorrei scrivere il seguito insieme a chi ha voglia di farlo. Le versioni positive delle storie che hai appena letto, oppure nuovi racconti che portino all'esasperazione altri aspetti che consideriamo negativi solo perché non li abbiamo mai guardati davvero.</p>
        <p className={pCls}>Ognuno porta con sé un vissuto diverso, familiare, emotivo, personale, e proprio per questo le svolte possono essere tante e tutte legittime. È questo il bello di scrivere insieme.</p>
        <p className={pCls}>La nuova protagonista è una donna. Non per convenzione, ma perché le donne sanno trasformarsi senza perdere il filo di sé, e lo fanno da sempre, spesso in silenzio. I finali saranno sempre positivi e realistici: non favole, ma modi concreti di guardare la pensione, o qualsiasi altra svolta della vita, con occhi diversi.</p>
        <p className={`${pCls} italic`}>
          Riscriviamo insieme, questa volta per abitare la stagione più autentica.
        </p>
        <p className={`${pCls} italic`}>
          E se dopo aver letto e scritto ti è venuta voglia di raccontare anche il tuo percorso, la terza parte è proprio quello spazio. Come sei arrivata fin qui, cosa hai trovato lungo la strada: qui puoi scriverlo.
        </p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Una donna
        </Link>
      </div>
    </PageShell>
  );
};

export default RiscriviamoInsieme;
