import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/ruoli-invertiti.jpg";

const paragrafi = [
  "Un uomo ricordava ogni dettaglio. La telefonata dell'ospedale, il modo in cui aveva imparato a parlare con i medici senza mostrare di avere paura, le notti passate sulle sedie di plastica dei corridoi. Ricordava il momento in cui suo padre aveva smesso di riconoscerlo — non di colpo, ma per gradi, come una radio che perde gradualmente il segnale e trasmette sempre più fruscio e sempre meno voce. Ricordava come aveva imparato a rispondere comunque, anche quando le domande non avevano senso, perché la connessione era più importante della coerenza.",
  "Aveva fatto quello che si fa. Lo aveva fatto per anni, senza considerarlo un sacrificio, perché non era il tipo da contabilizzare le cose in quei termini. Era suo padre. Era sua madre, dopo. Era quello che si fa.",
  "Ora aveva sessantasei anni.",
  "Non era vecchio. Camminava bene, dormiva discretamente, leggeva senza occhiali da vicino — o quasi. Ma c'era un calcolo che aveva iniziato a fare, involontariamente, come quando un'applicazione si avvia da sola in background senza che tu l'abbia aperta. Sottraeva. La sua età dall'età che aveva suo padre quando aveva iniziato a perdere il segnale. Il risultato era un numero piccolo, e diventava più piccolo ogni anno.",
  "I figli erano lontani — non emotivamente, ma geograficamente, con quella distanza moderna che si colma con le videochiamate e si misura in ore di aereo. Avevano le loro vite, i loro figli, le loro scadenze. Erano bravi figli. Telefonavano con regolarità. Si preoccupavano in modo visibile quando lui tossiva durante una chiamata.",
  "Era questo che lo angosciava di più: la preoccupazione visibile.",
  "Aveva iniziato a gestire le informazioni su di sé con la stessa cura con cui si gestisce una comunicazione aziendale delicata. Niente di allarmante, niente di inutilmente preoccupante. Se stava poco bene, aspettava di stare meglio prima di rispondere ai messaggi. Se aveva un appuntamento medico, non lo menzionava a meno che non fosse strettamente necessario. Non per nascondere, si diceva. Per non gravare.",
  "Ma la parola gravare era entrata nel suo vocabolario interiore con la silenziosa tenacia delle parole che non si è invitato a entrare.",
  "Una sera, suo figlio chiamò da Berlino. Parlarono per venti minuti — del lavoro del figlio, dei nipoti, di un viaggio che avrebbero potuto fare insieme in estate. Alla fine della chiamata, il figlio disse: «Come stai, papà? Davvero.»",
  "Il davvero era nuovo. O forse non era nuovo — forse era sempre stato lì, e lui aveva imparato a non sentirlo.",
  "«Bene», disse l'uomo. «Sto bene.»",
  "Dopo aver riagganciato, rimase seduto con il telefono in mano. Fuori era già buio. La casa era quella silenziosa delle case di chi ci vive solo, un silenzio che non è vuoto ma che ha una consistenza propria, quasi materica.",
  "Pensò a suo padre nella stanza dell'ospedale. Pensò a come suo padre avesse sempre detto di non voler essere un peso — quella frase esatta, quelle parole, con quella stessa inflessione quasi formale. E pensò a come lui, allora, avesse trovato quella preoccupazione commovente e inutile. Sei mio padre, avrebbe voluto dirgli. Non sei un peso. Non puoi essere un peso.",
  "Adesso capiva suo padre meglio di quanto avesse mai creduto possibile. E questo non lo consolava.",
  "Il problema non era la paura di morire — quella era gestibile, aveva i suoi contorni, i suoi tempi probabili. Il problema era l'intervallo. Quel tratto di strada tra l'essere autonomo e il non esserlo più, durante il quale si sarebbe trasformato progressivamente nell'oggetto della preoccupazione altrui. Durante il quale il figlio avrebbe imparato a fare con lui quello che lui aveva fatto con suo padre: le telefonate prima dell'orario solito, i controlli sottili mascherati da conversazioni normali, la gestione delicata delle cattive notizie.",
  "Non voleva questo. Non voleva essere il progetto di qualcun altro.",
  "Ma non volere non era sufficiente. Il corpo aveva i suoi piani, e i piani del corpo non prevedevano consultazioni preventive.",
  "Aprì il telefono. Guardò la foto del profilo di suo figlio — lui e i bambini in un parco, ridono tutti e tre, la luce era di fine pomeriggio. Una foto normale, felice, di una vita che aveva il suo centro altrove.",
  "Come faceva, pensò, a non voler essere un peso senza diventare invisibile?",
  "Non trovò la risposta quella sera. Non la trovò le sere successive. Continuò a rispondere bene alle domande sul come stava, continuò a non menzionare gli appuntamenti medici, continuò a gestire le informazioni con quella cura diventata ormai automatica.",
  "E nel frattempo il calcolo continuava, in background, sottraendo un anno alla volta, avvicinando il risultato a zero con la puntualità indifferente di tutto ciò che non chiede il permesso.",
];

const RuoliInvertiti = () => (
  <PageShell title="Ruoli invertiti" subtitle="Quando non voler essere un peso significa diventare invisibile" bgClassName="bg-page-uomo">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano osserva la foto del figlio sullo smartphone" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default RuoliInvertiti;