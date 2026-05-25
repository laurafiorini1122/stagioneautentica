import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/la-condivisione-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna aveva trovato l'annuncio online — non su un bollettino di quartiere, perché lei i bollettini di quartiere non li leggeva da vent'anni, ma su un gruppo Facebook locale che aveva iniziato a seguire quasi per caso, nei primi mesi di pensione, cercando qualcosa che non sapeva ancora nominare.",
  "Associazione culturale. Aperta a nuove socie. Riunioni il giovedì pomeriggio.",
  "Non era il tipo da associazioni, si disse. Aveva sempre avuto colleghe, aveva sempre avuto riunioni vere, con ordini del giorno e obiettivi misurabili. Ma il giovedì pomeriggio era uguale al mercoledì pomeriggio, che era uguale al martedì pomeriggio. E l'annuncio era lì.",
  "La prima riunione si teneva in una biblioteca di quartiere, nella sala conferenze al piano interrato. C'erano tredici donne. La donna arrivò puntuale, con un taccuino e una penna — non perché avesse intenzione di prendere appunti, ma perché avere qualcosa in mano la faceva sentire meno esposta.",
  "La presidente, una donna di nome Gabriella, la accolse con un sorriso caldo e una stretta di mano che conteneva già una valutazione. «Benissimo. Ci racconti di sé.»",
  "La donna si presentò. Disse quello che aveva fatto, le competenze che pensava potessero essere utili, il tipo di contributo che immaginava di poter dare.",
  "Gabriella annuì con entusiasmo. «Perfetto. Vedremo come inserirla.»",
  "Nelle settimane successive, la donna partecipò con regolarità. Ascoltava, prendeva appunti stavolta per davvero, faceva domande. Quando vedeva qualcosa che poteva migliorare — un processo, una comunicazione, la gestione di un piccolo progetto — lo diceva, con la delicatezza di chi sa che i contesti nuovi hanno le loro grammatiche.",
  "Fu quello il problema.",
  "Non lo capì subito. Capì prima i segnali: il modo in cui Gabriella cambiava argomento appena lei iniziava a parlare, la conversazione parallela che si apriva tra le socie storiche quando lei faceva una proposta, le email di convocazione che arrivavano tardi, quasi per dimenticanza.",
  "Poi capì meglio, un giovedì, quando rimase a sistemare le sedie dopo la riunione insieme a Franca, la vice. Sentì Gabriella dire a voce non abbastanza bassa: «Quella vuole prendere in mano tutto. Si vede che veniva dai piani alti.»",
  "La donna rimise l'ultima sedia. Prese il cappotto. Salutò con una voce normale.",
  "Tornando a casa, cercò di ricostruire cosa avesse fatto per dare quell'impressione. Ripercorse le sue proposte una per una. Nessuna riguardava ruoli, nessuna riguardava cariche. Erano proposte di metodo, di organizzazione, di efficacia.",
  "Ma Gabriella aveva impiegato dodici anni a diventare presidente di un'associazione con tredici socie e una sala conferenze in prestito. Franca aveva aspettato otto anni per diventare vice. Le altre avevano i loro incarichi — responsabile della newsletter, responsabile dei rapporti con la biblioteca, responsabile dell'archivio fotografico — conquistati con la pazienza e la fedeltà di chi sa che in certi sistemi il tempo è l'unica valuta accettata.",
  "La donna era arrivata con quarant'anni di competenze e zero anni di attesa. In quel sistema, era una minaccia ontologica. Non perché volesse comandare, ma perché il suo stesso modo di stare in una riunione — l'attenzione, le domande, le proposte — ricordava a chi c'era da sempre che esisteva un modo diverso di fare le cose. E ricordarglielo non era gentile, anche se involontario.",
  "Continuò ad andare per altre tre settimane, con un'ostinazione che non sapeva definire bene. Poi smise, senza comunicarlo, senza spiegazioni.",
  "Nessuna la chiamò per sapere se stesse bene.",
  "Rimase con il taccuino sul tavolo — poche pagine usate, il resto bianco. Guardò il giovedì sul calendario.",
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