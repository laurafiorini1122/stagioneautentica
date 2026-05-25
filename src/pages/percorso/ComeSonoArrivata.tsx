import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const ComeSonoArrivata = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell
      title="Come sono arrivata fin qui"
      subtitle="Non avevo una mappa, me la sono costruita"
    >
      <article className="space-y-6">
        <p className={pCls}>Per quarant'anni il treno è stato in corsa. Non un treno qualsiasi — quello del lavoro, che assorbe energia, tempo, attenzione, e lascia poco o niente per tutto il resto. Le soste le avevo saltate tutte, convinta che concedermi del tempo significasse sottrarlo a qualcosa di più importante. Poi, un giorno, il treno si è fermato davvero — e mi sono ritrovata davanti a un paesaggio che non riconoscevo, senza cartelli e senza indicazioni.</p>
        <p className={pCls}>Da quel momento è iniziato il percorso che racconto qui. Non è un percorso finito — e probabilmente non lo sarà mai. Non è nemmeno uguale per tutti: le variabili sono troppe. Quello che ha funzionato per me potrebbe non funzionare per un altro, e viceversa.</p>
        <p className={pCls}>Questa sezione non ha racconti né finali da riscrivere. Ha tracce da seguire — o da ignorare, o da modificare secondo le proprie esigenze. Strumenti concreti che ho usato io, e che propongo non come ricetta ma come punto di partenza. Il curriculum vitae, la linea del tempo, l'albero genealogico, i viaggi, le parole che fanno stare bene: ciascuno è un modo diverso di guardarsi, di recuperare quello che il treno aveva lasciato indietro, di capire da dove si parte per scegliere dove andare.</p>
        <p className={pCls}>Vale la pena farlo. E farlo insieme è meglio che farlo da soli.</p>
        <p className={pCls}>Se hai dei suggerimenti scrivi a <a href="mailto:redazione@stagioneautentica.it" className="underline underline-offset-4 hover:text-foreground/60 transition-colors">redazione@stagioneautentica.it</a></p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/il-percorso" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Un percorso
        </Link>
      </div>
    </PageShell>
  );
};

export default ComeSonoArrivata;