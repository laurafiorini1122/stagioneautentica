import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-condivisione-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna aveva letto l'annuncio su un bollettino di quartiere, uno di quei fogli stampati male che qualcuno distribuisce ancora nelle cassette della posta con una fiducia commovente nell'analogico. Associazione culturale aperta a nuovi soci. Riunioni il martedì sera.",
  "Non era il tipo da associazioni. Aveva sempre lavorato, avuto colleghi, riunioni vere con ordini del giorno e verbali. Non aveva mai sentito il bisogno di sedersi intorno a un tavolo per scelta.",
  "Ma ora il martedì sera era uguale al lunedì sera, che era uguale al mercoledì sera. E il bollettino era finito in mano nel momento giusto, o in quello sbagliato, dipendeva da come si valutava il risultato.",
  "La prima riunione era in una sala parrocchiale con le sedie di plastica e un proiettore che aveva bisogno di cinque minuti per scaldarsi. C'erano undici persone. La donna arrivò puntuale, non per abitudine — aveva smesso di essere puntuale per abitudine — ma perché era partita troppo presto per paura di arrivare tardi.",
  "Il presidente, un uomo di nome Ferruccio, la accolse con una stretta di mano e un sorriso che conteneva già una valutazione. «Bene, bene. Ci racconti di sé.»",
  "La donna si presentò. Disse quello che aveva fatto, i settori in cui aveva lavorato, le competenze che pensava potessero essere utili.",
  "Ferruccio annuì molto. «Benissimo. Vedremo come inserirla.»",
  "Le settimane successive, la donna partecipò con regolarità. Ascoltava, prendeva appunti, faceva domande. Quando vedeva qualcosa che poteva migliorare, un processo, una comunicazione, la gestione di un piccolo progetto, lo diceva, cercando di non pestare piedi che non conosceva ancora.",
  "Fu quello il problema.",
  "Non lo capì subito. Capì prima i piccoli segnali: il modo in cui Ferruccio cambiava argomento appena lei iniziava a parlare, la conversazione parallela che si apriva tra i soci storici quando lei faceva una proposta, le riunioni organizzate in orari comunicati tardi, quasi per dimenticanza.",
  "Poi capì meglio, una sera, quando rimase in sala più del solito ad aiutare a rimettere le sedie a posto. Sentì Ferruccio dire a Gino, il vice, in un tono che non era abbassato abbastanza: «Quella vuole prendere in mano tutto.»",
  "La donna rimise l'ultima sedia. Prese il cappotto. Salutò con una voce normale.",
  "Tornando a casa, cercò di ricostruire cosa aveva fatto per dare quella impressione. Ripercorse le sue proposte una per una. Nessuna riguardava ruoli, nessuna riguardava cariche, nessuna metteva in discussione chi guidava cosa. Erano proposte di metodo, di organizzazione, di efficacia.",
  "Ma Ferruccio aveva impiegato trent'anni a diventare presidente di un'associazione di quartiere con undici soci e un proiettore lento. Gino aveva aspettato quindici anni per diventare vice. Gli altri avevano i loro incarichi, conquistati con la pazienza di chi sa che in certi sistemi contare significa aspettare.",
  "La donna era arrivata con quarant'anni di competenze e zero anni di attesa. In quel sistema, era una minaccia ontologica.",
  "Continuò ad andare alle riunioni per altre tre settimane, trascinata da qualcosa che non avrebbe saputo nominare. Poi smise, senza comunicarlo, senza scrivere a Ferruccio, senza spiegazioni.",
  "Nessuno la chiamò per sapere se stesse bene.",
];

const LaCondivisioneDonna = () => (
  <PageShell title="La condivisione" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Gli altri vedono la mia esperienza come una minaccia, non come una risorsa</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna in un'associazione durante una seduta di gruppo" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="La condivisione" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default LaCondivisioneDonna;