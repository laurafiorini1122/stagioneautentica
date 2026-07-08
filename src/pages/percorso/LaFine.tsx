import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LaFine = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="La fine">
      <article className="space-y-6">
        <p className={pCls}>
          Pensare alla morte — chiamiamola come è — non è piacevole. Eppure, come ci insegnano molti autori che trovate nella sezione{" "}
          <Link to="/tracce/le-letture" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Letture
          </Link>
          , è proprio questa consapevolezza a dare senso alla vita.
        </p>
        <p className={pCls}>
          Non siamo immortali, e per fortuna: sarebbe una noia insopportabile.
        </p>
        <p className={pCls}>
          Sapere che il tempo non è illimitato rende ancora più necessario non sprecarlo su un divano, con la testa prigioniera del passato. Diventa un motivo in più per stare qui, presenti, il più intensamente possibile.
        </p>
        <p className={pCls}>
          Anche per chi è più giovane di noi, pensare ogni tanto alla morte aiuta a ridimensionare molto di quello che sembra urgente e a orientare la vita in modo diverso. Non è pessimismo: è chiarezza.
        </p>
        <p className={pCls}>
          Un atto di amore verso sé stessi e verso gli altri, a mio avviso, è decidere cosa vogliamo sia fatto del nostro corpo dopo la morte. Io ho scelto la cremazione e mi sono iscritta al Registro Italiano Cremazioni.
        </p>
        <p className={pCls}>
          Un altro atto di libertà, sempre secondo me, è compilare il testamento biologico: mettere per iscritto la nostra voce per il giorno in cui non potremmo più farla sentire. Non ci si pensa, per scaramanzia o per paura. Ma se accade qualcosa di irreversibile e non abbiamo lasciato nulla di scritto, quella voce scompare con noi.
        </p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default LaFine;
