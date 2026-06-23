import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LeLetture = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Le letture" subtitle="Una traccia per guardarsi dentro">
      <article className="space-y-6">
        <p className={pCls}>
          Certi libri aprono uno spiraglio su come le cose potrebbero essere viste diversamente. E ogni tanto si trovano autori che hanno già pensato ad alta voce quello che noi sentiamo ma non sappiamo ancora dire: è una di quelle soddisfazioni silenziose che la lettura sa dare.
        </p>
        <p className={pCls}>
          In questa sezione ho raccolto letture che mi hanno accompagnata in momenti in cui le domande erano più delle risposte: cosa significa stare bene davvero, come si guarda alla propria vita senza rimpianti o senza sconti, cosa si fa del tempo che resta. Di ognuno ho tenuto quello che mi sembrava più utile in questa sezione: un filo, alcune idee, qualche passaggio che continua a lavorare sottotraccia.
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

export default LeLetture;
