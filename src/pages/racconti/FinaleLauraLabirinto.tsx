import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

const paragrafi = [
  "Gli avvocati erano già stati contattati. I documenti, ordinati con la precisione di chi ha trascorso una vita a istruire pratiche, erano pronti sul tavolo. Tre anni di lavoro non riconosciuto, di crisi risolte nell'ombra — tutto catalogato, datato, inoppugnabile. La causa era solida. Forse persino vincibile.",
  "La donna ci dormì sopra una notte. Poi un'altra.",
  "La terza mattina si svegliò presto, prima dell'alba, con quella chiarezza che arriva solo quando il corpo ha smesso di combattere nel sonno. Rimase a letto qualche minuto, ad ascoltare il silenzio della casa. Non era il silenzio opprimente dei primi giorni di pensione. Era qualcosa di diverso — uno spazio, una possibilità.",
  "Si alzò, preparò il caffè. Guardò dalla finestra il giardino ancora buio, i profili delle piante appena visibili contro il cielo che cominciava a schiarire.",
  "Pensò agli anni trascorsi nell'amministrazione. Alle persone fragili che aveva aiutato, ai percorsi costruiti con pazienza, alle volte in cui aveva tenuto duro contro le procedure quando le procedure avevano torto. Nessuno di quegli atti era stato cancellato dalla revoca. Erano accaduti. Erano reali. Continuavano a esistere nelle vite di chi ne aveva beneficiato, indipendentemente da qualsiasi riconoscimento ufficiale.",
  "Pensò poi a cosa significava davvero vincere quella causa. Anni di udienze, di carte bollate, di energia versata in un sistema che aveva già dimostrato di non meritarla. Riportare al centro della sua vita proprio quelle logiche di carriera, di potere, di gerarchie che l'avevano tradita. Dare all'istituzione il privilegio di occupare ancora il suo tempo, i suoi pensieri, i suoi pomeriggi.",
  "No.",
  "Non era resa. Era una scelta — la prima scelta davvero libera da quando poteva ricordare.",
  "Prese i documenti dal tavolo. Li rimise nella cartellina con la stessa cura con cui li aveva preparati, e li ripose in fondo a un cassetto. Non li avrebbe distrutti: la verità meritava di esistere da qualche parte, anche se solo per lei. Ma non li avrebbe usati come armi.",
  "Quella mattina telefonò a una vecchia amica, una che non sentiva da troppo tempo e alla quale aveva sempre rimandato di richiamare perché c'era sempre qualcosa di più urgente. Parlarono a lungo, di cose semplici, di progetti piccoli, di un viaggio che avevano discusso per anni senza mai fissare una data.",
  "«Quando vuoi», disse l'amica.",
  "«Presto», rispose la donna. E per la prima volta quella parola non era un rinvio. Era una promessa.",
  "Nei mesi che seguirono, costruì una vita su misura — non su misura del ruolo perduto, ma su misura di sé. Imparò a stare nel tempo senza riempirlo. A distinguere la noia fertile — quella che precede un pensiero nuovo — dalla vuotezza che aveva temuto nei primi giorni. Scoprì che aveva opinioni su molte cose alle quali non aveva mai avuto spazio di pensare davvero.",
  "L'amministrazione andò avanti, come sempre va avanti chi non si accorge di quello che perde. Le procedure standardizzate produssero i loro risultati mediocri. La rete di supporto ai fragili fu lentamente, goffamente, ricostruita da chi era venuto dopo — con errori che lei avrebbe evitato e soluzioni che lei non avrebbe trovato.",
  "La donna non seguì quelle vicende. Non perché non le importasse, ma perché aveva smesso di misurare il suo valore su quel metro. Il labirinto era ancora lì, con i suoi muri ciechi e i suoi funzionari indifferenti. Ma lei ne era uscita — non dalla porta principale, non con una sentenza, non con l'ultima parola.",
  "Era uscita da un varco che aveva aperto da sola, in una direzione che nessun organigramma aveva mai previsto. La sua carriera era finita con un'ingiustizia, ma la sua vita libera era appena iniziata, pulita e finalmente sincera.",
];

const FinaleLauraLabirinto = () => (
  <PageShell title="Finale proposto da Laura" subtitle="Racconto al femminile" bgClassName="bg-page-donna">
    <h2 className="font-serif italic text-2xl md:text-3xl text-foreground tracking-tight mb-10">
      Quando la dignità vale più dell'ultima battaglia
    </h2>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (
        <p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>
      ))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/una-donna/labirinto-burocratico" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
        ← Torna a Il labirinto burocratico
      </Link>
    </div>
  </PageShell>
);

export default FinaleLauraLabirinto;