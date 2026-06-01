import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import img from "@/assets/glossario-fine-rapporto-donna.jpg";
import ProponiFinale from "@/components/ProponiFinale";

const definizioni: Array<[string, string]> = [
  ["De cuius", "Ti tolgono il nome e ti trasformano in una questione patrimoniale prima ancora che il corpo sia freddo. Elegante, ma predatorio."],
  ["Defunta", "Dal latino defungi, aver adempiuto al proprio compito. Come se la morte fosse l'ultima timbratura del cartellino. Stato civile: esonerata."],
  ["Trapassata", "Ti trasforma in grammatica. Sei un'azione compiuta in un tempo anteriore a un'altra azione passata. Utile per chi ama sentirsi un residuo sintattico."],
  ["Passata a miglior vita", "Implica un trasloco in un attico di lusso senza aver mai visto la brochure. Ottimista senza prove."],
  ["Estinta", "Usata per i debiti o per i dinosauri. Quando il debito è estinto, la banca sorride. Quando la donna è estinta, l'INPS festeggia. Sei un'obbligazione annullata."],
  ["Scomparsa", "La parola preferita di chi non ha il coraggio di usare le altre. Un'omissione di soccorso verbale."],
  ["Morta", "L'unica parola onesta, quindi la più detestata. Non ha bisogno di avvocati: lo stato dei fatti senza sconti di pena."],
  ["Perita", "Se muori nel letto sei una defunta, se muori in un incidente sei una perita. Un sinistro totale senza possibilità di risarcimento."],
  ["Mancata", "Come un rigore o un appuntamento. Trasforma la fine in un errore di calendario."],
  ["Spirata", "Trasforma un collasso organico in un refolo di vento. Per i funerali con sottofondo di arpa."],
  ["Spenta", "Ti equipara a una lampadina fulminata. Suggerisce che basti premere un interruttore per farti ripartire."],
  ["Fu", "Due lettere per cancellare decenni. Il bilancio finale ridotto a un prefisso."],
  ["Volata in cielo", "Per chi non sa accettare il peso della terra e il costo del marmo."],
];

const GlossarioFineRapportoDonna = () => (
  <PageShell title="Glossario del fine rapporto" subtitle={<><span className="normal-case">La convinzione da superare </span><br/><span className="normal-case"><strong><em>L'ironia è l'unica difesa che mi resta contro quello che non posso cambiare</em></strong></span></>} bgClassName="bg-page-donna">
    <div className="mb-12 overflow-hidden rounded-sm">
      <img src={img} alt="Donna anziana scrive un glossario su un registro a righi" width={1600} height={896} loading="lazy" className="w-full h-auto object-cover" />
    </div>
    <article className="space-y-6">
      <p className="font-serif text-lg leading-[1.8] text-foreground/85">Per anni, una donna aveva redatto verbali e circolari, pesando ogni termine per evitare contenziosi. In pensione, rivolse la sua perizia linguistica all'unico evento che non ammetteva repliche. Iniziò a compilare un glossario critico delle definizioni riservate a chi smette di respirare, annotandole su un registro a righe con un sarcasmo che era la sua ultima linea di difesa.</p>
      <dl className="space-y-5 pt-4">
        {definizioni.map(([term, def]) => (
          <div key={term}>
            <dt className="font-serif text-lg font-bold text-foreground">{term}:</dt>
            <dd className="font-serif text-lg leading-[1.8] text-foreground/85 pl-4">«{def}»</dd>
          </div>
        ))}
      </dl>
    </article>
    <ProponiFinale raccontoTitolo="Glossario del fine rapporto" />
    <div className="mt-16 mb-8">
      <Link to="/una-donna" className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">← Torna a Una donna</Link>
    </div>
  </PageShell>
);

export default GlossarioFineRapportoDonna;