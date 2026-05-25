import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/glossario-fine-rapporto.jpg";

const definizioni: Array<[string, string]> = [
  ["De cuius", "L'apice del minimalismo burocratico. Ti tolgono il nome e ti trasformano in una questione patrimoniale prima ancora che il corpo sia freddo. Elegante, ma predatorio."],
  ["Defunto", "Dal latino defungi, aver adempiuto al proprio compito. Come se la morte fosse l'ultima timbratura del cartellino. Stato civile: esonerato."],
  ["Trapassato", "Ti trasforma in grammatica. Sei un'azione compiuta in un tempo anteriore a un'altra azione passata. Utile per chi ama sentirsi un residuo sintattico."],
  ["Passato a miglior vita", "Il capolavoro del marketing consolatorio. Implica un trasloco in un attico di lusso senza aver mai visto la brochure. Ottimista senza prove."],
  ["Estinto", "Usato solitamente per i debiti o per i dinosauri. Quando il debito è estinto, la banca sorride. Quando l'uomo è estinto, l'INPS festeggia. La definizione più onesta: sei un'obbligazione annullata."],
  ["Scomparso", "Come se si trattasse di un trucco di magia riuscito male. È la parola preferita di chi non ha il coraggio di usare le altre, un'omissione di soccorso verbale."],
  ["Morto", "L'unica parola onesta, quindi la più detestata. Non piace a nessuno perché non ha bisogno di avvocati per essere interpretato: lo stato dei fatti senza sconti di pena."],
  ["Perito", "Se muori nel tuo letto sei un defunto, se muori in un incidente sei un perito. È la morte vista da un perito d'ufficio: un sinistro totale senza possibilità di risarcimento."],
  ["Mancato", "Come un rigore o un appuntamento. Trasforma la fine in un errore di calendario."],
  ["Spirato", "Trasforma un collasso organico in un refolo di vento poetico. Molto suggestivo, a patto di ignorare il rumore del rantolo."],
  ["Spento", "Ti equipara a una lampadina fulminata. Suggerisce che basti premere un interruttore per farti ripartire. Peccato che abbiano tagliato i cavi della centrale."],
  ["Fu", "La sintesi estrema. Due lettere per cancellare decenni di carriera. È la massima spending review applicata all'identità."],
  ["Volato in cielo", "La variante aviatoria. Suggerisce che la gravità sia un'opinione. Fantascienza per chi non sa accettare il peso della terra e il costo del marmo."],
];

const GlossarioFineRapporto = () => (
  <PageShell title="Glossario del fine rapporto" subtitle="Quando il sarcasmo diventa l'ultima difesa contro l'inevitabile" bgClassName="bg-page-uomo">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano riverso sulla scrivania con calamaio rovesciato" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic">Per anni, un uomo aveva redatto verbali e circolari, pesando ogni termine per evitare contenziosi. In pensione, rivolse la sua perizia linguistica all'unico evento che non ammetteva repliche. Iniziò a compilare un glossario critico delle definizioni riservate a chi smette di respirare, annotandole su un registro a righi con un sarcasmo che era la sua ultima linea di difesa.</p>
      <dl className="space-y-5 pt-4">
        {definizioni.map(([term, def]) => (
          <div key={term}>
            <dt className="font-serif text-lg italic font-bold text-foreground">{term}:</dt>
            <dd className="font-serif text-lg leading-[1.8] text-foreground/85 italic pl-4">«{def}»</dd>
          </div>
        ))}
      </dl>
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic pt-4">Un pomeriggio, mentre cercava un commento adeguato per «Anima eletta» — «Un'auto-promozione postuma non verificata dagli uffici competenti» — sentì un dolore acuto al braccio sinistro.</p>
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic">Crollò sulla scrivania, rovesciando il calamaio sul suo registro. L'inchiostro nero si allargò sulle definizioni di <strong>Morto</strong> e <strong>Fu</strong>, cancellando i suoi commenti sarcastici in una macchia densa e informe. Lo trovarono il mattino dopo. Il medico legale compilò il certificato senza consultare il glossario sul tavolo. Scrisse semplicemente: «Decesso accertato».</p>
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic">La burocrazia aveva vinto ancora una volta. Era diventato una riga di testo in un registro di stato civile, una pratica chiusa con la stessa indifferenza con cui si archivia una bolletta pagata.</p>
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default GlossarioFineRapporto;