import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/glossario-fine-rapporto.jpg";

const definizioni: Array<[string, string]> = [
  ["De cuius", "Ti tolgono il nome e ti trasformano in una questione patrimoniale prima ancora che il corpo sia freddo. Elegante, ma predatorio."],
  ["Defunto", "Dal latino defungi, aver adempiuto al proprio compito. Come se la morte fosse l'ultima timbratura del cartellino. Stato civile: esonerato."],
  ["Trapassato", "Ti trasforma in grammatica. Sei un'azione compiuta in un tempo anteriore a un'altra azione passata. Utile per chi ama sentirsi un residuo sintattico."],
  ["Passato a miglior vita", "Implica un trasloco in un attico di lusso senza aver mai visto la brochure. Ottimista senza prove."],
  ["Estinto", "Usato per i debiti o per i dinosauri. Quando il debito è estinto, la banca sorride. Quando l'uomo è estinto, l'INPS festeggia. Sei un'obbligazione annullata."],
  ["Scomparso", "La parola preferita di chi non ha il coraggio di usare le altre. Un'omissione di soccorso verbale."],
  ["Morto", "L'unica parola onesta, quindi la più detestata. Non ha bisogno di avvocati: lo stato dei fatti senza sconti di pena."],
  ["Perito", "Se muori nel letto sei un defunto, se muori in un incidente sei un perito. Un sinistro totale senza possibilità di risarcimento."],
  ["Mancato", "Come un rigore o un appuntamento. Trasforma la fine in un errore di calendario."],
  ["Spirato", "Trasforma un collasso organico in un refolo di vento. Per i funerali con sottofondo di arpa."],
  ["Spento", "Ti equipara a una lampadina fulminata. Suggerisce che basti premere un interruttore per farti ripartire."],
  ["Fu", "Due lettere per cancellare decenni. Il bilancio finale ridotto a un prefisso."],
  ["Volato in cielo", "Per chi non sa accettare il peso della terra e il costo del marmo."],
];

const GlossarioFineRapporto = () => (
  <PageShell title="Glossario del fine rapporto" subtitle="Quando il sarcasmo diventa l'ultima difesa contro l'inevitabile" bgClassName="bg-page-uomo">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Uomo anziano riverso sulla scrivania con calamaio rovesciato" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic">Per anni, un uomo aveva redatto verbali e circolari, pesando ogni termine per evitare contenziosi. In pensione, rivolse la sua perizia linguistica all'unico evento che non ammetteva repliche. Iniziò a compilare un glossario critico delle definizioni riservate a chi smette di respirare, annotandole su un registro a righe con un sarcasmo che era la sua ultima linea di difesa.</p>
      <dl className="space-y-5 pt-4">
        {definizioni.map(([term, def]) => (
          <div key={term}>
            <dt className="font-serif text-lg italic font-bold text-foreground">{term}:</dt>
            <dd className="font-serif text-lg leading-[1.8] text-foreground/85 italic pl-4">«{def}»</dd>
          </div>
        ))}
      </dl>
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic pt-4">Un pomeriggio, mentre cercava un commento adeguato per <em>Anima eletta</em> — «Un'auto-promozione postuma non verificata dagli uffici competenti» — sentì un dolore al braccio sinistro.</p>
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic">Crollò sulla scrivania. Il calamaio si rovesciò sul registro. Lo trovarono il mattino dopo.</p>
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic">Il medico legale compilò il certificato senza consultare il glossario sul tavolo. Scrisse: «Decesso accertato».</p>
    </article>
    <div className="mt-16 mb-8">
      <Link to="/un-uomo" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Un uomo</Link>
    </div>
  </PageShell>
);

export default GlossarioFineRapporto;