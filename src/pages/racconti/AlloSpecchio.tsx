import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/allo-specchio.jpg";

const paragrafi = [
  "Un uomo si alzava ogni mattina venti minuti prima del necessario. Non per meditare, non per fare stretching, non per godersi il caffè in pace. Si alzava prima per avere il tempo di prepararsi alla propria faccia.",
  "Lo specchio del bagno era il primo appuntamento della giornata, e come tutti gli appuntamenti importanti richiedeva una preparazione. Iniziava dalla crema, quella costosa, in un vasetto opaco color crema, comprata su consiglio di un articolo che citava studi clinici con percentuali precise: riduce le rughe del 34% in quattro settimane. L'uomo aveva contato le settimane. Aveva contato le rughe. Il 34% gli sembrava un numero ragionevole, scientifico, quasi un contratto.",
  "La pensione lo aveva esposto. Finché aveva lavorato, il suo volto era stato un accessorio del ruolo: le rughe erano esperienza, i capelli bianchi erano autorevolezza, le borse sotto gli occhi erano dedizione. Il volto del professionista non invecchia: si consolida.",
  "Fuori dal sistema, il volto era solo un volto. E il suo raccontava cose che non voleva raccontare.",
  "Aveva cominciato con la crema. Poi erano arrivati il siero, la maschera settimanale, il contorno occhi, il tonico. Sul bordo del lavandino si era formata una piccola farmacia del tempo perduto. Sua figlia, in visita un sabato, aveva aperto l'armadietto del bagno e aveva fatto un passo indietro: «Papà, ma questi sono tutti miei?»",
  "Non erano suoi. Li aveva comprati lui, uno alla volta, seguendo algoritmi pubblicitari che lo conoscevano meglio di quanto lui conoscesse se stesso.",
  "La questione non era estetica, si diceva. Era strategica. Voleva tornare a fare consulenze, partecipare a convegni, essere chiamato per i suoi vent'anni di esperienza. Ma il settore, lo aveva capito presto, non comprava esperienza: comprava energia, velocità, la parvenza della giovinezza. Ai convegni le strette di mano più calorose le ricevevano i quarantenni con la barba curata. Lui veniva salutato con quel rispetto lievemente funebre riservato a chi ha già dato.",
  "Iniziò a tingersi i capelli. Un biondo castano, quasi naturale, scelto con una parrucchiera che aveva annuito senza commentare. Comprò occhiali nuovi, montatura sottile, niente più tartarugato da primario. Comprò anche una giacca diversa, non la solenne grigia antracite, ma qualcosa di più morbido, come diceva il commesso venticinquenne che lo aveva assistito con la pazienza di chi aiuta un bambino a scegliere uno zaino.",
  "Allo specchio, il risultato era plausibile. Forse.",
  "Lo specchio non partecipava alle riunioni. Cominciò a studiare i più giovani, come si muovevano, come tenevano il telefono, quali parole usavano. Ne adottò qualcuna. Le provava la sera, ad alta voce. Uscivano un po' storte, come i capelli.",
  "Un pomeriggio, in un bar vicino a uno studio di architettura, si sedette allo stesso tavolo di tre ragazzi, trentacinque anni, forse meno. Parlarono di un progetto. L'uomo intervenne due volte con osservazioni che riteneva pertinenti. I ragazzi annuirono entrambe le volte con quella cordialità efficiente che si usa con chi è fuori dalla conversazione vera.",
  "Tornò a casa e si sedette davanti allo specchio del bagno, quello grande, quello che non mentiva sulla luce.",
  "Si guardò a lungo.",
  "La crema aveva ridotto le rughe del 34%, forse. I capelli erano castani, la giacca era contemporanea. Lo specchio però restituiva qualcosa che nessun prodotto poteva correggere: l'espressione di un uomo che si era dimenticato di chi era per diventare una copia peggiorata di chi non era mai stato.",
  "Aprì l'armadietto. Guardò i vasetti allineati, le fiale, i flaconi. Li rimise a posto uno alla volta.",
  "La mattina dopo si alzò alla solita ora. Si lavò la faccia con l'acqua fredda. Si guardò allo specchio il tempo strettamente necessario.",
  "Poi rimase lì, immobile.",
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