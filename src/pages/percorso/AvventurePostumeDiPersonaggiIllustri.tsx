import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const AvventurePostumeDiPersonaggiIllustri = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";

  return (
    <PageShell title="Avventure postume di personaggi illustri" subtitle="Storie di chi, morto, non ha smesso di far parlare di sé">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Roberto Alajmo, Marco Carapezza</p>
          <p className="text-base text-foreground/70 mt-1">Sellerio Editore Palermo, 2025</p>
        </div>

        <h2 className={hCls}>Il progetto</h2>
        <p className={pCls}>
          Un saggio narrativo che ricostruisce le vicende accadute, dopo la morte, ai corpi di dieci personaggi celebri della storia, dell'arte, della letteratura, della scienza e della religione. Non un catalogo di curiosità macabre, ma la ricostruzione di come i resti di figure diventate mito, simbolo o ideologia continuino a essere contesi, spostati, nascosti o venerati molto tempo dopo la morte di chi li abitava.
        </p>

        <h2 className={hCls}>Dieci vite dopo la morte</h2>
        <p className={pCls}>
          Dieci i casi raccontati: Evita Perón, il cui corpo imbalsamato viene conteso per decenni tra culto popolare e regimi politici; Francisco Goya, con il giallo del teschio scomparso durante l'esumazione del 1888; Luigi Pirandello, celebrato con tre funerali e mezzo; René Descartes, sepolto due volte con due teste diverse; e ancora Lenin, Molière, Sant'Agata, Jeremy Bentham, il cui scheletro fu conservato per volontà testamentaria.
        </p>
        <p className={pCls}>
          A questi si aggiungono altri episodi minori richiamati nell'introduzione, come le ciocche di capelli di Beethoven o i resti di Napoleone finiti nel collezionismo.
        </p>

        <h2 className={hCls}>Il registro</h2>
        <p className={pCls}>
          Il registro è ironico e colto, a tratti dissacratorio: la scrittura, sobria e controllata, evita tanto l'enfasi quanto il compiacimento macabro fine a se stesso.
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

export default AvventurePostumeDiPersonaggiIllustri;
