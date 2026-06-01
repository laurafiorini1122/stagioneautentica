import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/allo-specchio-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna si era sempre presa cura del suo aspetto. Non per vanità o, almeno, non solo. Era una forma di rispetto verso sé stessa e verso chi la incontrava. La crema la mattina, il filo di matita, i capelli in ordine: gesti automatici, piacevoli, suoi.",
  "Con la pensione, qualcosa in quei gesti era cambiato. Non riusciva a individuare il momento esatto in cui era accaduto.",
  "Aveva cominciato a stare davanti allo specchio più a lungo. Non per ammirarsi — quello era sempre stato rapido, quasi disattento — ma per studiare. Per chiedersi cosa vedessero gli altri quando la guardavano. E soprattutto: cosa non avrebbero voluto vedere.",
  "Il problema non era invecchiare. Era invecchiare fuori dal sistema. Finché aveva lavorato, le rughe erano esperienza, i capelli grigi erano autorevolezza, la stanchezza negli occhi era dedizione. Il volto della professionista non invecchia: racconta. Fuori dal ruolo, quel volto raccontava una cosa sola: il tempo che era passato. E il tempo che era passato, nella narrazione collettiva, era una sconfitta silenziosa.",
  "Cominciò a documentarsi. Non le riviste patinate, quelle le aveva sempre trovate ridicole, ma articoli, studi, podcast. Scoprì un vocabolario nuovo: «invecchiamento attivo», «look ageless», «anti-aging». Un intero sistema di parole costruito per promettere una cosa sola: che si poteva non sembrare quello che si era.",
  "Comprò prodotti diversi da quelli soliti. Non li scelse per il profumo o per la texture — quei piaceri li aveva sempre avuti chiari — ma per le promesse scritte sul retro in caratteri piccoli. Percentuali, settimane, risultati clinicamente testati. Li applicava con la concentrazione di chi esegue un compito, non di chi si concede un piacere.",
  "Poi venne il momento dei capelli. Li aveva portati con le radici grigie per anni, con una certa soddisfazione. Ora li guardava nello specchio come un problema da risolvere. Prese un appuntamento dalla parrucchiera. Disse che voleva ringiovanire un po'. La parrucchiera annuì senza commentare, con la professionalità di chi ha sentito quella frase mille volte.",
  "Allo specchio il risultato era convincente. Forse.",
  "Ma lo specchio non partecipava alle riunioni dell'associazione culturale, non sedeva ai tavoli dove si decideva chi invitare a parlare. Lì c'era quel mezzo secondo in cui gli altri classificavano, archiviavano, decidevano se valeva la pena ascoltare. La donna aveva capito, o credeva di aver capito, che quel giudizio si basava anche su quello che mostrava, non solo su quello che diceva.",
  "Iniziò a osservare le donne più giovani. Come si muovevano, come parlavano, quali riferimenti usavano nelle conversazioni. Aggiornò il guardaroba con pezzi più contemporanei non perché le piacessero, i suoi gusti erano sempre stati chiari, ma perché sembravano quelli che non avrebbero fatto scattare la valutazione sbagliata. Li indossava come si indossa un'uniforme.",
  "Una mattina sua figlia la chiamò in video. La donna era davanti allo specchio con il pennello del fondotinta in mano.",
  "«Mamma, esci?»",
  "«No», disse la donna. «Perché?»",
  "Ci fu una pausa. Sua figlia la guardò con quell'espressione che i figli hanno quando capiscono qualcosa che i genitori non hanno ancora detto ad alta voce.",
  "«Niente», disse la figlia. «Stai bene.»",
  "Stai bene. Non: sei bellissima. Non: che trucco perfetto. Stai bene: quella frase neutra, gentile, leggermente preoccupata che si dice a chi non sta del tutto bene.",
  "La donna rimase con il pennello in mano dopo che la chiamata si era chiusa. Guardò il bordo del lavandino: i nuovi prodotti allineati con una precisione che non era la sua. Lei aveva sempre lasciato le cose in ordine, ma non così, non con quella geometria rigida che sembrava il tentativo di tenere fermo qualcosa che si muoveva.",
  "Si guardò allo specchio. Cercò la donna che aveva sempre conosciuto, quella che si era sempre piaciuta abbastanza da non passarci troppo tempo a ragionarci.",
  "Non sapeva ancora dire dove fosse finita.",
];

const AlloSpecchioDonna = () => (
  <PageShell title="Allo specchio" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>Devo sembrare ancora giovane per avere ancora un posto nel mondo</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna che si guarda allo specchio del bagno" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <ProponiFinale raccontoTitolo="Allo specchio" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default AlloSpecchioDonna;