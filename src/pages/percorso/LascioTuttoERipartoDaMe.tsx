import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const LascioTuttoERipartoDaMe = () => {
  const pCls = "font-serif text-lg leading-[1.8] text-foreground/85";
  const hCls = "font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4";

  return (
    <PageShell title="Lascio tutto e riparto da me">
      <article className="space-y-6">
        <div className="mb-10 font-serif text-foreground/85">
          <p className="text-2xl md:text-3xl">Manfredi Roesler Franz</p>
          <p className="text-base text-foreground/70 mt-1">De Agostini, 2025</p>
        </div>

        <h2 className={hCls}>Il coraggio di ricominciare</h2>
        <p className={pCls}>
          Il libro nasce da un momento preciso: la scoperta improvvisa che una vita perfetta sulla carta, fatta di traguardi raggiunti uno dopo l'altro, non basta a rendere felici. Da lì la scelta di lasciare tutto e ripartire, letteralmente, da sé stesso.
        </p>
        <p className={pCls}>
          Ricomincia proprio mentre tutto sembrava già deciso: una carriera avviata, una casa in città, un futuro tracciato. La spinta arriva quando capisce che seguire un percorso solo perché è quello che ci si aspetta da lui non basta più.
        </p>

        <h2 className={hCls}>Sé stessi oltre il ruolo</h2>
        <p className={pCls}>
          Torna a essere l'uomo che era davvero, senza il peso del giudizio degli altri e delle aspettative accumulate negli anni di studio e lavoro.
        </p>
        <p className={pCls}>
          Fa una distinzione utile tra condivisione e solitudine. Non sono in conflitto. La prima ha valore quando è scelta, la seconda smette di fare paura quando è vissuta con consapevolezza, senza il bisogno di riempirla a ogni costo.
        </p>

        <h2 className={hCls}>Il presente</h2>
        <p className={pCls}>
          Il piacere di essere presenti anche nelle piccole cose, senza bisogno di eventi straordinari per sentirsi vivi, è quello che stava cercando senza saperlo.
        </p>
        <p className={pCls}>
          Davanti a un futuro incerto resta solo il presente da vivere bene, senza rimandare la pienezza a un momento più adatto.
        </p>

        <h2 className={hCls}>La solitudine delle scelte importanti</h2>
        <p className={pCls}>
          Essere coerenti con ciò in cui si crede, responsabili del proprio destino, nelle decisioni importanti si è sempre soli.
        </p>
        <p className={pCls}>
          "Nelle nostre decisioni, qualunque siano, in fondo siamo soli": una frase che non pesa, libera. Toglie l'illusione che qualcun altro possa scegliere al posto nostro.
        </p>

        <h2 className={hCls}>Liberarsi dal bisogno di una meta</h2>
        <p className={pCls}>
          All'inizio del viaggio sente il bisogno di darsi un obiettivo, di pianificare, di avere un punto d'arrivo. Dopo quasi un anno comincia a lasciare andare anche questo schema, che riconosce come eredità degli anni passati a inseguire sempre il traguardo successivo.
        </p>
        <p className={pCls}>
          È il passaggio che riguarda chiunque abbia vissuto a lungo per obiettivi: il momento in cui il futuro smette di essere l'unico metro per dare senso a una giornata.
        </p>

        <h2 className={hCls}>Il valore del quotidiano</h2>
        <p className={pCls}>
          Ogni giornata ha un suo valore a prescindere, anche quella trascorsa solo a guardare il mare.
        </p>
        <p className={pCls}>
          "È un vivere lasciandosi ispirare dal bello": accettare ciò che accade invece di programmarlo tutto, lasciando che sia la giornata stessa a suggerire cosa farne.
        </p>
        <p className={pCls}>
          Anche se il protagonista è giovane e la scelta è radicale, il nucleo resta lo stesso a ogni età: non restare ingabbiati in un ruolo che non rappresenta più chi si è, e trovare il coraggio di ricominciare quando la vita chiede altro.
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

export default LascioTuttoERipartoDaMe;
