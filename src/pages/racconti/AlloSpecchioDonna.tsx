import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/allo-specchio-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const paragrafi = [
  "Una donna si era sempre presa cura del suo aspetto. Non per vanità — o almeno, non solo. Era una forma di rispetto verso sé stessa e verso chi la incontrava. La crema la mattina, il filo di matita, i capelli in ordine: gesti automatici, piacevoli, suoi.",
  "Con la pensione, qualcosa in quei gesti era cambiato senza che lei riuscisse a individuare esattamente il momento in cui era accaduto.",
  "Aveva iniziato a stare di fronte allo specchio più a lungo. Non per ammirarsi — quello era sempre stato rapido, quasi disattento — ma per studiare. Per valutare. Per chiedersi cosa vedessero gli altri quando la guardavano. E soprattutto: cosa non avrebbero voluto vedere.",
  "Il problema non era invecchiare. Il problema era invecchiare fuori dal sistema. Finché aveva lavorato, le rughe erano esperienza, i capelli grigi erano autorevolezza, la stanchezza negli occhi era dedizione. Il volto della professionista non invecchia: racconta. Ma fuori dal ruolo, quel volto raccontava solo una cosa: il tempo che era passato. E il tempo che era passato, nella narrazione collettiva, era una sconfitta silenziosa.",
  "Cominciò a documentarsi. Non le riviste patinate — quelle le aveva sempre trovate ridicole — ma articoli, studi, podcast. Scoprì un vocabolario nuovo: «invecchiamento attivo», «skincare anti-aging», «look ageless». Un intero sistema di parole costruito per promettere una cosa sola: che si poteva non sembrare quello che si era.",
  "Comprò prodotti diversi da quelli soliti. Non li scelse per piacere — quella texture, quel profumo, quella sensazione — ma per le promesse scritte sul retro in caratteri piccoli. Percentuali, settimane, risultati clinicamente testati. Li applicava con la concentrazione di chi esegue un compito, non di chi si concede un piacere.",
  "Poi venne il momento dei capelli. I suoi, con le radici grigie che riemergevano ogni quattro settimane, le erano sempre sembrati onesti. Li aveva portati così per anni, con una certa soddisfazione. Ora li guardava nello specchio come un problema da risolvere. Prese un appuntamento dalla parrucchiera. Disse che voleva «ringiovanire un po'». La parrucchiera annuì senza commentare, con la professionalità di chi ha sentito quella frase mille volte.",
  "Allo specchio, il risultato era convincente. Forse.",
  "Ma lo specchio non partecipava alle riunioni dell'associazione culturale, non sedeva ai tavoli dove si decideva chi invitare a parlare, non era presente nei microsecondi in cui gli altri classificavano, archiviavano, decidevano se valeva la pena ascoltare. Quel microsecondo era rapido, automatico, crudele come tutti i giudizi inconsci. E la donna aveva capito — o credeva di aver capito — che quel giudizio si basava anche su quello che mostrava, non solo su quello che diceva.",
  "Iniziò a osservare le donne più giovani. Come si muovevano, come parlavano, quali riferimenti usavano. Prese nota. Aggiornò il guardaroba con pezzi più contemporanei, scelti non perché le piacessero — i suoi gusti erano sempre stati chiari — ma perché sembravano quelli giusti. Quelli che non avrebbero fatto scattare il microsecondo sbagliato.",
  "Una mattina, sua figlia la chiamò video. La donna era davanti allo specchio, con il pennello del fondotinta in mano.",
  "«Mamma, esci?»",
  "«No», disse la donna. «Perché?»",
  "Ci fu una pausa. Sua figlia la guardò con quell'espressione che i figli hanno quando capiscono qualcosa che i genitori non hanno ancora detto.",
  "«Per niente», disse la figlia. «Stai bene.»",
  "Stai bene. Non: sei bellissima. Non: che trucco perfetto. Stai bene — quella frase neutra, gentile, leggermente preoccupata che si dice a chi non sta del tutto bene.",
  "La donna rimase con il pennello in mano dopo che la chiamata si era chiusa. Guardò il bordo del lavandino: i nuovi prodotti, allineati con una precisione che non era la sua — lei aveva sempre lasciato le cose in ordine ma non così, non con quella geometria rigida che sembrava il tentativo di controllare qualcosa di incontrollabile.",
  "Si guardò allo specchio. Poi guardò la donna che aveva sempre conosciuto, che si era sempre piaciuta abbastanza da non passarci troppo tempo a ragionarci.",
  "Non sapeva ancora dire dove fosse finita quella donna. Ma lo specchio — quello grande, quello che non mentiva sulla luce — sembrava saperlo.",
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