import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const Incontri = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Incontri" subtitle="Una traccia per guardarsi dentro">
      <article className="space-y-6">
        <p className={pCls}>Riguardando la linea del tempo, ho pensato alle persone che non appartengono alla mia famiglia e che il caso ha messo sul mio cammino: colleghi, amici, insegnanti, vicini di casa, persone incontrate una volta sola e mai dimenticate.</p>
        <p className={pCls}>Ho voluto capire chi sono stati i buoni e i cattivi maestri perché si impara da entrambi, anche se in modo diverso. Ho pensato ai compagni di viaggio, a chi mi ha accompagnata per un tratto lungo o breve. E anche a chi ha portato un conflitto importante: non per riaprire vecchie ferite, ma perché anche uno scontro può insegnare qualcosa su di noi, su quello che difendiamo, su dove sono i nostri limiti.</p>
        <p className={pCls}>Per alcune di queste persone ho ricordato un episodio preciso, una scena, qualcosa che mi ha fatto capire meglio chi erano e, di riflesso, chi ero io in quel momento.</p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default Incontri;
