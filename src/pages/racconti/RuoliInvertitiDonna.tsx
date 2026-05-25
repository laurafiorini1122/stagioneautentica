import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/ruoli-invertiti-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna ricordava ogni dettaglio. La prima telefonata dall'ospedale, il modo in cui aveva imparato a parlare con i medici senza mostrare di avere paura, le notti passate sulle sedie di plastica dei corridoi. Ricordava il momento in cui suo padre aveva smesso di riconoscerla — non di colpo, ma per gradi, come una radio che perde il segnale e trasmette sempre più fruscio e sempre meno voce.",
  "Poi era rimasta sua madre. E lì la storia era diversa, più lunga, più intrecciata — perché sua madre era ancora lì, ancora presente, ancora capace di fare le parole crociate la mattina e di arrabbiarsi per le cose sbagliate. Ma qualcosa, negli ultimi anni, aveva cominciato a cambiare con la lentezza delle cose che si preferisce non guardare direttamente.",
  "La donna aveva fatto quello che si fa. Lo aveva fatto senza considerarlo un sacrificio — era sua madre, era quello che si fa — ma anche con quella competenza silenziosa che le donne sviluppano in questo campo e che nessuno chiama con il suo nome. Sapeva come parlare con i medici, sapeva quali domande fare, sapeva interpretare le risposte che non venivano date. Sapeva, soprattutto, come tenere insieme tutto senza che sua madre si accorgesse del peso.",
  "Ora aveva sessantaquattro anni.",
  "Non era vecchia. Camminava bene, dormiva abbastanza, aveva energie per quello che voleva fare. Ma c'era un calcolo che aveva iniziato a fare, involontariamente, come un'applicazione che si avvia da sola in background. Guardava sua madre e sottraeva. Gli anni che le restavano, secondo le statistiche silenziose che aveva imparato a leggere nel tempo. Il risultato era un numero che preferiva non guardare troppo a lungo.",
  "I suoi figli vivevano lontano — non emotivamente, ma geograficamente. Telefonavano. Si preoccupavano quando sentivano qualcosa di strano nella sua voce. Le chiedevano come stava con quella premura leggermente vigile che lei riconosceva, perché era la stessa che usava lei con sua madre.",
  "Era questo che la turbava di più: essere già, per i suoi figli, quello che sua madre era per lei. Essere già il pensiero che fa alzare la testa durante il lavoro, il controllo discreto, la preoccupazione che non si dice ad alta voce per non spaventare.",
  "Aveva iniziato a gestire le informazioni su di sé con una cura che non riconosceva come tale. Se aveva un accertamento medico, aspettava i risultati prima di menzionarlo. Se stava poco bene, aspettava di stare meglio. Non per nascondere — si diceva — ma per non allarmare inutilmente. Per non essere un peso prima del tempo.",
  "La stessa cosa faceva con sua madre. Quando i medici le dicevano cose che non erano rassicuranti, le filtrava. Le traduceva in versioni meno pesanti, più gestibili. Proteggeva sua madre dalle parole difficili, e proteggeva i suoi figli dalle sue preoccupazioni. Stava nel mezzo, a fare da schermo in entrambe le direzioni.",
  "Una sera, sua figlia la chiamò da Milano. Parlarono a lungo, di tutto e di niente — del lavoro, di un film, di un progetto che la figlia stava seguendo. Alla fine, quasi per caso, la figlia disse: «Come sta la nonna? Davvero.»",
  "Il davvero era nuovo. O forse non era nuovo — forse era sempre stato lì, e lei aveva imparato a non sentirlo.",
  "«Bene», disse la donna. «Sta bene.»",
  "Dopo aver riagganciato, rimase seduta con il telefono in mano. Fuori era già buio. Pensò a sua madre, che in quel momento era nel suo appartamento a tre chilometri, probabilmente già a letto. Pensò a quanto poco avevano parlato, negli ultimi mesi, di come stava davvero — non degli esami, non dei farmaci, non della logistica delle visite mediche, ma di come stava, di cosa pensava, di cosa aveva paura, di cosa avrebbe voluto dire.",
  "C'era qualcosa che la donna non riusciva a formulare con precisione, ma che sentiva con quella chiarezza sorda delle cose che si sanno ma non si vogliono sapere: stava proteggendo sua madre dalla realtà per proteggersi dalla conversazione che quella realtà avrebbe reso necessaria. La conversazione in cui si dicono le cose che si rimanda a dire. Quella in cui ci si saluta, davvero, mentre c'è ancora tempo.",
  "Aveva accompagnato suo padre verso la fine senza che nessuno dei due avesse mai nominato la fine. Aveva pensato, allora, che fosse stato un atto di pietà. Ora non ne era più così sicura.",
  "Riprese il telefono. Tenne il pollice sospeso sul nome di sua madre per qualche secondo.",
  "Poi lo rimise sul tavolo.",
  "Domani, si disse. Domani c'era tempo.",
];

const RuoliInvertitiDonna = () => (
  <PageShell title="Ruoli invertiti" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Non dire come sto davvero è un atto di cura, non una distanza</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna avanti con gli anni che si occupa della madre anziana" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="Ruoli invertiti" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default RuoliInvertitiDonna;