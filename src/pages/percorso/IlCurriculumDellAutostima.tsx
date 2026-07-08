import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const IlCurriculumDellAutostima = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const qCls = "font-serif italic text-lg leading-[1.8] text-foreground/85 border-l-2 border-foreground/30 pl-6 my-8";
  return (
    <PageShell title="Il curriculum dell'autostima">
      <article className="space-y-6">
        <p className={pCls}>Quante volte ci è capitato che qualcuno ci chiedesse: quali sono i tre aggettivi che ti descrivono meglio? Non sempre è facile rispondere perché spesso restiamo bloccati dentro le lenti degli altri.</p>
        <p className={pCls}>Ancora più difficile è quando la domanda cambia: elenca tre cose belle di te. Il più delle volte cala il silenzio. Non sappiamo cosa rispondere, per pudore, per timore del giudizio, per paura di sembrare immodesti. A noi delle vecchie generazioni è stato insegnato che non ci si doveva mettere in mostra, che bisognava essere umili, confondendo, spesso, l'umiltà con il non riconoscere i propri pregi. Chi si loda si imbroda, si diceva. Ma riconoscere quello che vale in noi non è lodarsi: è necessario. Altrimenti si resta sempre un gradino sotto, sempre un passo dietro.</p>
        <p className={pCls}>C'erano cose che pensavo di non poter fare, solo perché qualcuno mi aveva convinta che sarebbe andata così. Accettare i propri limiti è saggio. Ma prima bisogna verificare se sono davvero limiti, o soltanto convinzioni a cui abbiamo lasciato mettere radici.</p>
        <p className={pCls}>Da qui nasce il curriculum dell'autostima. Il nome è un gioco di parole voluto: come il curriculum vitae, raccoglie fatti verificabili, non aspirazioni, non buoni propositi, ma li legge con uno sguardo rivolto verso l'interno invece che verso l'esterno. Non serve a nessun selezionatore. Serve a noi.</p>
        <p className={pCls}>Per costruirlo ho ripreso in mano tutto il percorso fatto fin qui: il curriculum vitae, la linea del tempo, l'albero genealogico, gli incontri. Materiale già raccolto per altri scopi, che ho riletto cercando qualcos'altro: non più cosa ho fatto, ma cosa quel fare dice di me.</p>
        <p className={pCls}>È un lavoro che si scontra con un pensiero semplice da dire e difficile da sentire davvero vero: siamo già dei capolavori, qualsiasi percorso abbiamo fatto. Osho lo diceva così:</p>
        <p className={qCls}>"Abbandona l'idea di diventare qualcuno: sei già un capolavoro, devi solo realizzarlo."</p>
        <p className={pCls}>Trovare il tempo per capirlo, non solo per leggerlo, è forse il punto più difficile di questo percorso.</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default IlCurriculumDellAutostima;
