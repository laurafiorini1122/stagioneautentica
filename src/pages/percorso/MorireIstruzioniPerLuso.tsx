import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const MorireIstruzioniPerLuso = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";
  const qCls = "font-serif italic text-lg leading-[1.8] text-foreground/85 border-l-2 border-foreground/30 pl-6 my-8";

  return (
    <PageShell title="Morire. Istruzioni per l'uso" subtitle="Una traccia per guardarsi dentro">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Simon Boas</p>
          <p className="text-base text-foreground/70 mt-1">Garzanti</p>
        </div>

        <p className={pCls}>
          A Simon Boas viene diagnosticato un carcinoma alla gola a quarantasei anni. Quello che scrive non è teoria: è il resoconto di qualcuno che ha dovuto fare i conti con la propria fine in tempi stretti e ha scelto di farlo con gli occhi aperti. Il filo che attraversa questi passaggi è uno solo: pensare alla morte, tenerla presente, non scansarla, aiuta a vivere meglio adesso.
        </p>

        <h2 className={hCls}>Morte</h2>
        <p className={pCls}>
          La morte è utile. Non nel senso drammatico, ma nel senso pratico: aiuta a capire cosa importa davvero. Chi la tiene presente smette di rimandare, di perdersi in ansie minori, di sprecare energie su ciò che è in fondo irrilevante.
        </p>
        <p className={pCls}>
          Concederle un po' di spazio, anche solo pensandoci invece di scansarla, cambia la prospettiva su tutto il resto. Christopher Hitchens, mentre stava morendo, rispose alla domanda "perché proprio a me?" con l'unica risposta sensata: perché no? La morte non è un'eccezione. È la regola.
        </p>
        <p className={qCls}>
          «Memento mori. Tenere sempre presente che si morirà, forse anche domani. Questo non svuota la vita di significato, anzi, glielo conferisce.»
        </p>

        <h2 className={hCls}>Accettazione</h2>
        <p className={pCls}>
          Accettare la propria fine non è rassegnazione. Boas la chiama liberazione. Chi arriva a una visione davvero positiva della vita riesce, paradossalmente, ad accettare anche la non-esistenza: le due cose si tengono insieme.
        </p>
        <p className={pCls}>
          L'incertezza su cosa venga dopo può restare aperta, senza diventare angoscia. Boas dice di non sapere se esista un creatore o un aldilà, ma di riuscire a guardare alla propria esistenza e alla propria non-esistenza con chiarezza e senso di prospettiva. Voltaire, sul letto di morte, rifiutò di rinunciare al diavolo perché non era il momento di farsi dei nemici. Una battuta. Ma anche un modo di morire senza paura.
        </p>

        <h2 className={hCls}>Priorità</h2>
        <p className={pCls}>
          Quando si capisce cosa è davvero importante, il resto si ridimensiona da solo. Boas è esplicito: amore, gentilezza, significato da una parte; denaro, status, approvazione altrui dall'altra. La malattia gli ha reso più facile tenere questa distinzione a fuoco. Ma scrive che la stessa chiarezza potrebbe essere disponibile anche a chi non è malato, se solo si decidesse di cercarla.
        </p>
        <p className={pCls}>
          I cervelli sovraccarichi sono bravissimi a oscurare queste cose. Ci vuole un po' di lavoro per tenerle presenti.
        </p>

        <h2 className={hCls}>La vita come dono improbabile</h2>
        <p className={pCls}>
          Alcune persone che Boas ha incontrato nel suo lavoro in campo sanitario, anche in età avanzata e in buona salute, faticavano a vedere la vita come qualcosa di straordinario. Bastava ricordarglielo perché smettessero di preoccuparsi di tante cose che, in fondo, non pesano.
        </p>
        <p className={pCls}>
          Concentrarsi su quanto sia improbabile e sorprendente il fatto di esistere è una pratica, non una consolazione generica. E funziona.
        </p>

        <h2 className={hCls}>Vivere fino in fondo</h2>
        <p className={pCls}>
          La morte mette le cose in prospettiva, ma il suo lavoro non è renderci malinconici. È spingerci a vivere adesso, a non rimandare, a non sprecare il tempo che c'è. Più si capisce che la morte fa parte della vita, più si riesce a godere di quella che si ha.
        </p>
        <p className={qCls}>
          «La morte è una parte naturale della vita, e più lo capiamo, e più possiamo goderci la vita.»
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

export default MorireIstruzioniPerLuso;
