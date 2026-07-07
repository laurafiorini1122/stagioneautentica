import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const ViaggiPostumi = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";
  const qCls = "font-serif italic text-lg leading-[1.8] text-foreground/85 border-l-2 border-foreground/30 pl-6 my-8";

  return (
    <PageShell title="Viaggi postumi" subtitle="Avventure post-mortem dei personaggi illustri">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Omar López Mato</p>
          <p className="text-base text-foreground/70 mt-1">Odoya, 2012</p>
        </div>

        <p className={pCls}>
          La chiusura di una tomba non sempre sancisce la fine di una vicenda umana. Molte volte l'ultima dimora si trasforma nel luogo da cui iniziano straordinarie avventure e appassionanti peripezie che riflettono gli aspetti tragicomici e imprevedibili della vita. Spesso queste avventure post-mortem sono la prosecuzione di strategie di potere, amori, odi, invidie e intrighi condotti in vita, che trovano nella dimensione della morte un nuovo impulso e una imprevedibile evoluzione.
        </p>

        <h2 className={hCls}>Il progetto</h2>
        <p className={pCls}>
          Il libro racconta le più straordinarie e affascinanti di queste vicende: dalla vendita illegale delle mummie egizie come panacea per tutti i mali all'uso dei cuori dei principi per creare pigmenti, dall'esposizione delle spoglie di personaggi famosi nei musei ai tentativi di rubare cadaveri illustri per rivenderli a studiosi e collezionisti. Il potere, la guerra, le rivoluzioni, la storia umana nei suoi più profondi significati, ma anche la magia, il carisma di santi e beati e la straordinaria influenza della religione: le vicende di queste salme sono il riflesso di secoli e secoli di storia.
        </p>

        <h2 className={hCls}>I protagonisti</h2>
        <p className={pCls}>
          Attraversano le pagine i nomi di Voltaire, Keats, Byron, Colombo, Giulio Cesare, Marx, Lenin, Carlo Magno, Alessandro Magno, Mussolini, Hitler, Einstein e tanti altri. Tra gli episodi più citati dalle recensioni, il lungo viaggio del cranio di Cartesio, rubato ed esibito per oltre 250 anni prima di approdare al Musée de l'Homme; le tecniche di conservazione dei corpi, dalla plastinazione alla crioconservazione all'imbalsamazione, applicate da Lenin a Bentham; il capitolo dedicato alle sepolture premature e ai sistemi ideati per accertare con certezza l'avvenuta morte prima della sepoltura.
        </p>
        <p className={pCls}>
          Il libro smentisce anche alcune leggende metropolitane diffuse, come quella secondo cui Walt Disney avrebbe fatto ibernare il proprio corpo: in realtà fu cremato e le sue ceneri sepolte in California.
        </p>

        <h2 className={hCls}>Il registro</h2>
        <p className={pCls}>
          Un viaggio negli aspetti più contorti e straordinari dell'animo umano, nelle sue ossessioni e paure più profonde, quelle legate all'ignoto e all'inevitabile incontro con la morte, condotto con un registro che alterna erudizione e curiosità aneddotica.
        </p>

        <p className={qCls}>«Nella vita l'unica cosa certa è la morte, cioè l'unica cosa di cui non si può sapere nulla con certezza.» (Sören Kierkegaard)</p>
        <p className={qCls}>«Quando si muore si ha ben altro da fare che di pensare alla morte.» (Italo Svevo)</p>
        <p className={qCls}>«Non è facile vivere dopo morti.» (Stanislaw Lec)</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce/le-letture" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna alle letture
        </Link>
      </div>
    </PageShell>
  );
};

export default ViaggiPostumi;
