import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const ComeSonoArrivata = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  return (
    <PageShell title="Il nuovo tempo">
      <article className="space-y-6">
        <p className={pCls}>C'è un tempo che comincia adesso e non assomiglia a nessuno di quelli vissuti finora. Non è il tempo del lavoro, scandito da orari e scadenze di altri. Non è nemmeno il tempo libero di una domenica, quello che finisce in poche ore. È un tempo nuovo, più lungo, tutto da inventare.</p>
        <p className={pCls}>Chi si ferma, in questo nuovo Tempo, rischia di lasciarsi scivolare addosso le giornate senza accorgersene. Bisogna muoversi, anche a costo di sbagliare.</p>
        <p className={pCls}>C'è un rimpianto che ricorre più di altri in chi guarda indietro alla propria vita. Non riguarda quello che si è fatto, ma quello che non si è stati: non se stessi fino in fondo, ma quello che gli altri si aspettavano, quello che il lavoro chiedeva. Sentimenti mai detti, relazioni importanti lasciate in secondo piano.</p>
        <p className={pCls}>Se non si fa pace con questo, restano le abitudini di sempre, i piccoli egoismi, la pigrizia che si giustifica da sola. In questo nuovo Tempo, qualcosa di quello che il lavoro ci ha tolto possiamo ancora riprendercelo.</p>
        <p className={pCls}>Da giovani non sappiamo cosa ci aspetta. Il futuro è fatto in parte di caso, ma la parte più grande dipende da come guardiamo alla vita: è quell'atteggiamento, più di ogni altra cosa, a indirizzare il destino.</p>
        <p className={pCls}>La pensione permette di fare quello che si è sempre rimandato. Non parlo di diventare campioni di pattinaggio, anche se da ragazzi lo si sognava. Parlo di cose piccole, che diventano grandi quando finalmente si trova il tempo per farle. Il tempo, adesso, è nostro.</p>
        <p className={pCls}>Ma non serve aspettare la pensione per prendersi quel tempo: a volte basta deciderlo.</p>
        <p className={pCls}>Ho iniziato il percorso che racconto qui. Non è un percorso finito, e probabilmente non lo sarà mai. Non è nemmeno uguale per tutti: le variabili sono troppe. Quello che ha funzionato per me potrebbe non funzionare per un altro, e viceversa.</p>
        <p className={pCls}>Questa sezione si chiama Tracce perché una traccia non si legge in fretta: va fermata, guardata, a volte riletta. Può essere qualcosa che hai lasciato tu o qualcosa che altri hanno lasciato su di te. In ogni caso, per capirla occorre fermarsi.</p>
        <p className={pCls}>Trovi qui vari spunti da seguire, da ignorare o da modificare secondo le tue esigenze. Non c'è un ordine da rispettare: si può partire da quello che più incuriosisce, lasciarne uno a metà e tornarci mesi dopo. Non serve finire uno strumento prima di passare al successivo. Bastano pochi minuti, una pagina alla volta.</p>
        <p className={pCls}>Strumenti concreti che ho usato io e che propongo non come ricetta ma come punto di partenza. Il curriculum vitae, la linea del tempo, l'albero genealogico, i luoghi, le parole che fanno stare bene: ciascuno è un modo diverso di guardarsi e di capire da dove si parte.</p>
        <p className={pCls}>Compilarli richiede fatica, soprattutto all'inizio. Ma una volta cominciato, viene voglia di andare avanti.</p>
        <p className={pCls}>È un percorso molto intimo. Possiamo suggerirci nuovi strumenti o migliorare quelli che propongo, alcuni li possiamo condividere.</p>
        <p className={pCls}>Se hai dei suggerimenti scrivi a <a href="mailto:redazione@stagioneautentica.it" className="underline underline-offset-4 hover:text-foreground/60 transition-colors">redazione@stagioneautentica.it</a></p>
      </article>

      <div className="mt-16 mb-8">
        <Link to="/tracce" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
          ← Torna a Tracce
        </Link>
      </div>
    </PageShell>
  );
};

export default ComeSonoArrivata;