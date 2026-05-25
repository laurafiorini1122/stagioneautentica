import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/allo-specchio.jpg";

const paragrafi = [
  "Un uomo si alzava ogni mattina venti minuti prima del necessario. Non per meditare, non per fare stretching, non per godersi il caffè in pace. Si alzava prima per avere il tempo di prepararsi alla propria faccia.",
  "Lo specchio del bagno era il primo appuntamento della giornata, e come tutti gli appuntamenti importanti richiedeva una preparazione adeguata. Iniziava dalla crema — quella costosa, in un vasetto color crema opaco, comprata su consiglio di un articolo online che citava studi clinici con percentuali precise: riduce le rughe del 34% in quattro settimane. L'uomo aveva contato le settimane. Aveva contato le rughe. Il 34% gli sembrava un numero ragionevole, scientifico, quasi un contratto.",
  "La pensione lo aveva esposto. Finché aveva lavorato, il suo volto era stato un accessorio del ruolo — le rughe erano esperienza, i capelli bianchi erano autorevolezza, le borse sotto gli occhi erano dedizione. Il volto del professionista non invecchia: si consolida.",
  "Ma fuori dal sistema, il volto era solo un volto. E il suo raccontava troppe cose che non voleva raccontare.",
  "Aveva cominciato con la crema. Poi erano arrivati il siero, la maschera settimanale, il contorno occhi, il tonico. Sul bordo del lavandino si era formata una piccola farmacia del tempo perduto. Sua figlia, in visita un sabato, aveva aperto l'armadietto del bagno e aveva fatto un passo indietro: «Papà, ma questi sono tutti miei?»",
  "Non erano suoi. Li aveva comprati lui, uno alla volta, seguendo algoritmi pubblicitari che lo conoscevano meglio di quanto lui conoscesse sé stesso.",
  "La questione non era estetica, si diceva. Era strategica. Voleva tornare a fare consulenze, a partecipare a convegni, a essere chiamato per i suoi vent'anni di esperienza nel settore. Ma il settore, lo aveva capito presto, non comprava esperienza: comprava energia, comprava velocità, comprava la finzione convincente della giovinezza. Ai convegni, le strette di mano più calorose le ricevevano i quarantenni con la barba curata. Lui veniva salutato con quel rispetto lievemente funebre riservato a chi ha già dato.",
  "Iniziò a tingersi i capelli. Un biondo castano, quasi naturale, scelto insieme a una parrucchiera che aveva annuito con professionalità assoluta senza commentare. Poi comprò occhiali nuovi, montatura sottile, niente più tartarugato da primario. Si comprò anche una giacca diversa — non la solenne grigia antracite, ma qualcosa di più morbido, di più contemporaneo, come diceva il commesso venticinquenne che lo aveva assistito con la stessa pazienza con cui si aiuta un bambino a scegliere uno zaino.",
  "Allo specchio, il risultato era plausibile. Forse.",
  "Il problema era che lo specchio non partecipava alle riunioni. Lo specchio non vedeva come lo guardavano gli altri quando entrava in una stanza. Quel microsecondo di valutazione — rapido, automatico, crudele come tutti i giudizi inconsci — che classificava, archiviava, etichettava.",
  "Cominciò a studiare i più giovani. Come si muovevano, come tenevano il telefono, quali parole usavano. Inserì nel proprio vocabolario termini che aveva sentito nelle riunioni: deliverable, ecosistema, storytelling. Li provava la sera, ad alta voce, per verificare che uscissero con naturalezza. Uscivano come i capelli castani: plausibili, ma non convincenti.",
  "Un pomeriggio, in un bar vicino a uno studio di architettura dove aveva partecipato a un incontro informale, si sedette allo stesso tavolo di tre ragazzi — trentacinque anni, forse meno. Parlarono di un progetto. L'uomo intervenne due volte con osservazioni che riteneva pertinenti. I ragazzi annuirono entrambe le volte con quella cordialità efficiente che si usa con chi è fuori dalla conversazione vera, quella che continua con gli occhi, con i mezzi sorrisi, con il linguaggio parallelo dei coetanei.",
  "Tornò a casa e si sedette davanti allo specchio del bagno, quello grande, quello che non mentiva sulla luce.",
  "Si guardò a lungo.",
  "La crema aveva ridotto le rughe del 34%, forse. I capelli erano castani, la giacca era contemporanea, il vocabolario era aggiornato. Eppure lo specchio restituiva qualcosa che nessun prodotto poteva correggere: l'espressione di un uomo che si era dimenticato di chi era per diventare una copia peggiorata di chi non era mai stato.",
  "Aprì l'armadietto. Guardò i vasetti allineati, le fiale, i flaconi. Li rimise a posto uno alla volta, con cura, come si sistemano gli oggetti di qualcun altro.",
  "La mattina dopo si alzò alla solita ora, non venti minuti prima. Si lavò la faccia con l'acqua fredda. Si guardò allo specchio il tempo strettamente necessario.",
  "Poi rimase lì, immobile, perché non sapeva cosa venisse dopo. Il ruolo richiedeva un costume. Il costume era sbagliato. Ma senza costume non c'era ruolo. E senza ruolo non c'era niente da cui togliersi il costume.",
  "Lo specchio aspettava. L'uomo aspettava. Nessuno dei due aveva qualcosa da aggiungere.",
];

const AlloSpecchio = () => (
  <PageShell title="Allo specchio" subtitle="Quando il volto diventa un curriculum da aggiornare" bgClassName="bg-page-uomo">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano si guarda allo specchio del bagno" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      {paragrafi.map((p, i) => (<p key={i} className="font-serif text-lg leading-[1.8] text-foreground/85">{p}</p>))}
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default AlloSpecchio;